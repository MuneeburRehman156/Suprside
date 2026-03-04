import { useEffect, useRef, useState } from 'react';
import { FiArrowDown, FiArrowUp, FiArrowUpRight } from 'react-icons/fi';
import './ReviewSectionPage.css';

const reviews = [
  {
    id: 'review-oportun',
    company: 'Oportun',
    quote: [
      { text: 'The biggest benefit is time savings. ', strong: true },
      { text: "The sheer volume Superside is able to produce is just amazing. If you think about 1-2 independent contractors vs. a team, it's not a fair comparison." },
    ],
    author: 'Billy Schneider, Director of Digital Marketing at Oportun',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'review-satair',
    company: 'SATAIR',
    quote: [
      { text: 'For us it has been important to find a creative partner like Superside ', strong: false },
      { text: 'a team we can trust to deliver quality work on time', strong: true },
      { text: ', even with short notices.' },
    ],
    author: 'Myriam Malinge, Head of Marketing and Comms at Satair',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    metrics: [
      { value: '100', label: 'Average NPS for design projects' },
      { value: '24h-48h', label: 'Turnaround time' },
    ],
    story: {
      brand: 'SATAIR',
      title: 'How Satair Uses Superside to Maintain Brand Consistency at Scale',
      thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    },
  },
  {
    id: 'review-antler',
    company: 'Antler',
    quote: [
      { text: 'Superside has helped us move from idea to execution with speed and consistency across channels.', strong: false },
    ],
    author: 'Global Marketing Team, Antler',
    avatar: 'https://images.unsplash.com/photo-1546456073-92b9f0a8d4b3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'review-collabera',
    company: 'Collabera',
    quote: [
      { text: 'They consistently deliver premium brand work while staying incredibly easy to work with.', strong: false },
    ],
    author: 'Brand Marketing Lead, Collabera',
    avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=600&q=80',
  },
];

function ReviewSectionPage() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [avatarStep, setAvatarStep] = useState(196);
  const avatarsTrackRef = useRef(null);
  const activeReview = reviews[activeIndex];
  const avatarShift = (1 - activeIndex) * avatarStep;

  useEffect(() => {
    const autoplayId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length);
    }, 4500);

    return () => {
      window.clearInterval(autoplayId);
    };
  }, []);

  useEffect(() => {
    const updateAvatarStep = () => {
      const track = avatarsTrackRef.current;
      if (!track || !track.firstElementChild) {
        return;
      }

      const avatarHeight = track.firstElementChild.getBoundingClientRect().height;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.rowGap || styles.gap || '0');
      setAvatarStep(avatarHeight + gap);
    };

    updateAvatarStep();
    window.addEventListener('resize', updateAvatarStep);

    return () => {
      window.removeEventListener('resize', updateAvatarStep);
    };
  }, []);

  const showPrev = () => {
    setActiveIndex((index) => (index - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % reviews.length);
  };

  return (
    <section className="review-page reveal-up" id="reviews">
      <div className="review-page__shell">
        <div className="review-page__avatars-mask">
          <div className="review-page__avatars-track" ref={avatarsTrackRef} style={{ transform: `translateY(${avatarShift}px)` }}>
            {reviews.map((review, index) => (
              <button
                className={`review-page__avatar ${index === activeIndex ? 'is-active' : ''}`}
                key={review.id}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <img alt={review.company} src={review.avatar} />
              </button>
            ))}
          </div>
        </div>

        <article className="review-page__content">
          <h3>{activeReview.company}</h3>
          <blockquote>
            &ldquo;
            {activeReview.quote.map((part, index) =>
              part.strong ? <strong key={`${activeReview.id}-${index}`}>{part.text}</strong> : <span key={`${activeReview.id}-${index}`}>{part.text}</span>,
            )}
            &rdquo;
          </blockquote>
          <p className="review-page__author">{activeReview.author}</p>

          {activeReview.metrics && activeReview.story ? (
            <div className="review-page__insights">
              <div className="review-page__metrics">
                {activeReview.metrics.map((metric, index) => (
                  <div className={`review-page__metric ${index > 0 ? 'has-divider' : ''}`} key={metric.value}>
                    <span>{metric.value}</span>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>

              <button className="review-story-card" type="button">
                <img alt={activeReview.story.brand} src={activeReview.story.thumb} />
                <div>
                  <small>{activeReview.story.brand}</small>
                  <p>{activeReview.story.title}</p>
                </div>
                <FiArrowUpRight />
              </button>
            </div>
          ) : null}
        </article>

        <div className="review-page__controls">
          <button aria-label="Previous review" onClick={showPrev} type="button">
            <FiArrowUp />
          </button>
          <button aria-label="Next review" onClick={showNext} type="button">
            <FiArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewSectionPage;

