import { useEffect, useMemo, useRef } from 'react';
import { brandLogos } from '../data/siteData';
import './BrandsSectionPage.css';

function BrandsSectionPage() {
  const logoRows = useMemo(() => [brandLogos.slice(0, 9), brandLogos.slice(8)], []);

  return (
    <section className="brands-page reveal-up" id="brands">
      <h2>Trusted by 500+ of the world&apos;s top brands</h2>
      <div className="brands-page__rows">
        <LogoMarquee items={logoRows[0]} />
        <LogoMarquee items={logoRows[1]} reverse />
      </div>
    </section>
  );
}

function LogoMarquee({ items, reverse = false }) {
  const trackRef = useRef(null);
  const stateRef = useRef({
    offset: 0,
    dragging: false,
    dragStartX: 0,
    dragStartOffset: 0,
    setWidth: 0,
    lastTime: 0,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const updateSetWidth = () => {
      stateRef.current.setWidth = track.scrollWidth / 2;
    };

    updateSetWidth();
    const resizeObserver = new ResizeObserver(updateSetWidth);
    resizeObserver.observe(track);

    let rafId = 0;

    const tick = (time) => {
      const state = stateRef.current;
      if (!state.lastTime) {
        state.lastTime = time;
      }
      const delta = (time - state.lastTime) / 1000;
      state.lastTime = time;

      if (!state.dragging) {
        const direction = reverse ? 1 : -1;
        state.offset += direction * 48 * delta;
      }

      const setWidth = state.setWidth || 1;
      if (state.offset <= -setWidth) {
        state.offset += setWidth;
      }
      if (state.offset >= 0) {
        state.offset -= setWidth;
      }

      track.style.transform = `translate3d(${state.offset}px, 0, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [reverse]);

  const onPointerDown = (event) => {
    const state = stateRef.current;
    state.dragging = true;
    state.dragStartX = event.clientX;
    state.dragStartOffset = state.offset;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    const state = stateRef.current;
    if (!state.dragging) {
      return;
    }
    state.offset = state.dragStartOffset + (event.clientX - state.dragStartX);
  };

  const onPointerUp = (event) => {
    stateRef.current.dragging = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      className="brands-marquee"
      onPointerCancel={onPointerUp}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div className="brands-marquee__track" ref={trackRef}>
        {[...items, ...items].map((logo, index) => (
          <div className="brands-pill" key={`${logo}-${index}`}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandsSectionPage;
