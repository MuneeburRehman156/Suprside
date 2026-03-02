import { useState } from 'react';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { storyVideos, successStats } from '../data/siteData';
import './SuccessSectionPage.css';

function SuccessSectionPage() {
  const [activeStory, setActiveStory] = useState(null);
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0, id: '' });

  return (
    <section className="success-page reveal-up" id="success">
      <span className="success-page__eyebrow">Success in numbers</span>
      <h3>
        The best return on <em>your investment</em>
      </h3>

      <div className="success-page__grid">
        {successStats.map((stat) => (
          <article className="success-page__row" key={stat.value}>
            <div className="success-page__copy">
              <p>{stat.body}</p>
              <button className="success-link" type="button">
                <span>{stat.cta}</span>
              </button>
            </div>
            <div className="success-page__value">{stat.value}</div>
          </article>
        ))}
      </div>

      <div className="success-page__stories">
        {storyVideos.map((story) => {
          const bubbleVisible = cursor.visible && cursor.id === story.id;
          return (
            <article
              className="success-story"
              key={story.id}
              onClick={() => setActiveStory(story)}
              onMouseLeave={() => setCursor((state) => ({ ...state, visible: false, id: '' }))}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                setCursor({
                  visible: true,
                  id: story.id,
                  x: event.clientX - rect.left,
                  y: event.clientY - rect.top,
                });
              }}
            >
              <video autoPlay loop muted playsInline poster={story.poster} src={story.source} />
              <div className="success-story__overlay">
                <span>Customer stories</span>
                <h4>{story.title}</h4>
                <button className="success-link" type="button">
                  <span>Play video</span>
                </button>
              </div>

              <div className={`success-story__cursor ${bubbleVisible ? 'is-visible' : ''}`} style={{ transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)` }}>
                Play +
              </div>
            </article>
          );
        })}
      </div>

      {activeStory ? (
        <div className="success-modal" onClick={() => setActiveStory(null)}>
          <button className="success-modal__close" onClick={() => setActiveStory(null)} type="button">
            <FiX />
          </button>

          <div className="success-modal__dialog" onClick={(event) => event.stopPropagation()}>
            <video autoPlay controls playsInline src={activeStory.source} />
            <div className="success-modal__footer">
              <p>{activeStory.title}</p>
              <button className="success-modal-btn" type="button">
                <span className="success-modal-btn__flow">
                  <span className="success-modal-btn__lane">
                    Customer Stories
                    <FiArrowUpRight />
                  </span>
                  <span className="success-modal-btn__lane">
                    Customer Stories
                    <FiArrowUpRight />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default SuccessSectionPage;
