import { useEffect, useRef } from 'react';
import './CreativeWorkSliderSectionPage.css';

const creativeWorkCards = [
  {
    key: 'digital-reports',
    lead: 'Digital',
    tail: 'Reports',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    chips: ['Annual reports', 'Editorial', 'Infographics'],
  },
  {
    key: 'motion-design',
    lead: 'Motion',
    tail: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80',
    chips: ['2D motion', '3D motion', 'Storyboards'],
  },
  {
    key: 'print-design',
    lead: 'Print',
    tail: 'Design',
    image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80',
    chips: ['Brochures', 'Flyers', 'Out-of-home'],
  },
  {
    key: 'immersive-experiences',
    lead: 'Immersive',
    tail: 'Experiences',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?auto=format&fit=crop&w=1200&q=80',
    chips: ['3D', 'AR/VR', 'Interactive'],
  },
  {
    key: 'packaging-merch',
    lead: 'Packaging &',
    tail: 'Merch Design',
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80',
    chips: ['Packaging', 'Merchandising', 'Apparel', 'Event collateral'],
  },
  {
    key: 'ai-consulting',
    lead: 'AI Strategy',
    tail: 'Consulting',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    chips: ['Workflows', 'AI adoption', 'Governance'],
  },
  {
    key: 'email-design',
    lead: 'Email Design &',
    tail: 'Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    chips: ['Lifecycle', 'Localization', 'Template systems'],
    splitTitle: true,
  },
  {
    key: 'web-design',
    lead: 'Web',
    tail: 'Design',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    chips: ['Landing pages', 'Product pages', 'Design systems'],
  },
];

function CreativeWorkSliderSectionPage() {
  const sliderRef = useRef(null);
  const groupRef = useRef(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    const group = groupRef.current;
    if (!slider || !group || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let frameId = 0;
    let resetPoint = group.scrollWidth;
    const baseSpeed = 0.52;
    const hoverSpeed = 0.16;

    const updateResetPoint = () => {
      resetPoint = group.scrollWidth;
    };

    const tick = () => {
      if (resetPoint > 0) {
        const speed = hoveredRef.current ? hoverSpeed : baseSpeed;
        slider.scrollLeft += speed;
        if (slider.scrollLeft >= resetPoint) {
          slider.scrollLeft -= resetPoint;
        }
      }
      frameId = window.requestAnimationFrame(tick);
    };

    window.addEventListener('resize', updateResetPoint);
    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', updateResetPoint);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="creative-slider-page reveal-up" id="creative-work-slider">
      <div className="creative-slider-page__head">
        <span>Easy &amp; hassle-free</span>
        <h3>
          Every type of creative work you&apos;ll
          <br />
          ever need, <em>and more</em>
        </h3>
      </div>

      <div
        aria-label="Creative work slider"
        className="creative-slider"
        onMouseEnter={() => {
          hoveredRef.current = true;
        }}
        onMouseLeave={() => {
          hoveredRef.current = false;
        }}
        ref={sliderRef}
      >
        <div className="creative-slider__track">
          <div className="creative-slider__group" ref={groupRef}>
            {creativeWorkCards.map((card) => (
              <article
                className="creative-slider__card"
                key={card.key}
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 22, 22, 0.1), rgba(5, 16, 16, 0.44)), url(${card.image})` }}
              >
                <h4 className="creative-slider__title">
                  <span className="creative-slider__title-lead">{card.lead}</span>
                  {card.splitTitle ? <br /> : ' '}
                  <span className="creative-slider__title-tail">{card.tail}</span>
                </h4>

                <div className="creative-slider__chips">
                  {card.chips.map((chip) => (
                    <button className="creative-slider__chip" key={chip} type="button">
                      {chip}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div aria-hidden="true" className="creative-slider__group">
            {creativeWorkCards.map((card) => (
              <article
                className="creative-slider__card"
                key={`${card.key}-copy`}
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 22, 22, 0.1), rgba(5, 16, 16, 0.44)), url(${card.image})` }}
              >
                <h4 className="creative-slider__title">
                  <span className="creative-slider__title-lead">{card.lead}</span>
                  {card.splitTitle ? <br /> : ' '}
                  <span className="creative-slider__title-tail">{card.tail}</span>
                </h4>

                <div className="creative-slider__chips">
                  {card.chips.map((chip) => (
                    <span className="creative-slider__chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreativeWorkSliderSectionPage;
