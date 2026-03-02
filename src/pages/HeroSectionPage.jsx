import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroColumns, projects } from '../data/siteData';
import './HeroSectionPage.css';

function HeroSectionPage() {
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0 });
  const projectMap = useMemo(() => new Map(projects.map((project) => [project.id, project])), []);
  const heroData = useMemo(
    () =>
      heroColumns.map((column) =>
        column
          .map((projectId) => projectMap.get(projectId))
          .filter(Boolean),
      ),
    [projectMap],
  );

  return (
    <section className="hero-page reveal-up" id="hero">
      <div className="hero-page__copy">
        <h1>
          Your <em>creative team&rsquo;s</em>
          <br />
          creative team&trade;
        </h1>
        <p>
          Scale your in-house creative team with top global talent powered by industry-leading AI workflows,
          delivering anything you can imagine fast and affordably.
        </p>

        <button className="hero-page-btn" type="button">
          <span className="hero-page-btn__flow">
            <span className="hero-page-btn__lane">Book a demo</span>
            <span className="hero-page-btn__lane">Book a demo</span>
          </span>
        </button>
      </div>

      <div
        className="hero-page__grid"
        onMouseEnter={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setCursor({ visible: true, x: event.clientX - rect.left, y: event.clientY - rect.top });
        }}
        onMouseLeave={() => setCursor((state) => ({ ...state, visible: false }))}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setCursor({ visible: true, x: event.clientX - rect.left, y: event.clientY - rect.top });
        }}
      >
        <div className="hero-page__columns">
          {heroData.map((column, index) => (
            <HeroColumn items={column} key={index} reverse={index % 2 === 1} speed={22 + index * 8} />
          ))}
        </div>

        <div className={`hero-cursor ${cursor.visible ? 'is-visible' : ''}`} style={{ transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)` }}>
          Expand +
        </div>
        <div className="hero-page__fade" />
      </div>
    </section>
  );
}

function HeroColumn({ items, speed = 26, reverse = false }) {
  const trackRef = useRef(null);
  const stateRef = useRef({
    offset: 0,
    dragging: false,
    moved: false,
    suppressClick: false,
    dragStartY: 0,
    dragStartOffset: 0,
    setHeight: 0,
    lastTime: 0,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const updateSetHeight = () => {
      stateRef.current.setHeight = track.scrollHeight / 2;
    };

    updateSetHeight();
    const resizeObserver = new ResizeObserver(updateSetHeight);
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
        state.offset += (reverse ? 1 : -1) * speed * delta;
      }

      const setHeight = state.setHeight || 1;
      if (state.offset <= -setHeight) {
        state.offset += setHeight;
      }
      if (state.offset >= 0) {
        state.offset -= setHeight;
      }

      track.style.transform = `translate3d(0, ${state.offset}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [reverse, speed]);

  const onPointerDown = (event) => {
    const state = stateRef.current;
    state.dragging = true;
    state.moved = false;
    state.dragStartY = event.clientY;
    state.dragStartOffset = state.offset;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    const state = stateRef.current;
    if (!state.dragging) {
      return;
    }
    const diff = event.clientY - state.dragStartY;
    if (Math.abs(diff) > 5) {
      state.moved = true;
    }
    state.offset = state.dragStartOffset + diff;
  };

  const onPointerUp = (event) => {
    const state = stateRef.current;
    state.dragging = false;
    state.suppressClick = state.moved;
    setTimeout(() => {
      stateRef.current.suppressClick = false;
    }, 80);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      className="hero-column"
      onPointerCancel={onPointerUp}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div className="hero-column__track" ref={trackRef}>
        {[...items, ...items].map((project, index) => (
          <Link
            className="hero-thumb"
            key={`${project.id}-${index}`}
            onClick={(event) => {
              if (stateRef.current.suppressClick) {
                event.preventDefault();
                event.stopPropagation();
              }
            }}
            to={`/work/${project.id}`}
          >
            <img alt={project.title} src={project.heroThumb} />
            <span>{project.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeroSectionPage;
