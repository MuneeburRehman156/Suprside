import { FiArchive, FiEdit3, FiMessageCircle, FiStar } from 'react-icons/fi';
import './TechEnabledSectionPage.css';

function TechEnabledSectionPage() {
  return (
    <section className="tech-enabled-page reveal-up" id="tech-enabled">
      <div className="tech-enabled-page__head">
        <div className="tech-enabled-page__title-wrap">
          <span>Easy &amp; hassle-free</span>
          <h3>
            Tech enabled and made to <em>work for you</em>
          </h3>
        </div>

        <div className="tech-enabled-page__aside">
          <p>No matter your creative need, submitting and managing a project is effortless.</p>
          <button className="tech-enabled-page__btn" type="button">
            <span className="tech-enabled-page__btn-flow">
              <span className="tech-enabled-page__btn-lane">Learn more</span>
              <span className="tech-enabled-page__btn-lane">Learn more</span>
            </span>
          </button>
        </div>
      </div>

      <div className="tech-enabled-grid">
        <article className="tech-card tech-card--brief">
          <FiEdit3 />
          <h4>
            From brief to review and
            <br />
            sign off.
          </h4>
          <p>
            Welcome to Superspace. Quickly submit a brief, review in platform, keep track of usage and more in one
            easy place.
          </p>

          <div className="tech-card__panel">
            <header>
              <strong>Final designs</strong>
              <span>Download all</span>
            </header>
            <ul>
              <li>
                <span>76578 - Nudge Display Ad 3 - Ultimate Guide...zip</span>
                <em>Final</em>
              </li>
              <li>
                <span>76578 - Nudge Display Ad 3 - Ultimate Guide...pdf</span>
                <em>Final</em>
              </li>
            </ul>
          </div>
        </article>

        <article className="tech-card tech-card--integrate">
          <FiMessageCircle />
          <h4>
            Integrate with your favorite
            <br />
            platforms.
          </h4>
          <p>Already using platforms like Asana/Jira/Slack? They integrate too.</p>

          <div className="tech-card__bubble">
            <span className="tech-card__bubble-brand">S</span>
            <div className="tech-card__bubble-copy">
              <strong>Superside</strong>
              <span>John Smith marked this asset as approved</span>
            </div>
            <span className="tech-card__bubble-app">SL</span>
          </div>
        </article>

        <article className="tech-card tech-card--assets">
          <FiArchive />
          <h4>
            Organize and share all your
            <br />
            brand assets
          </h4>
          <p>Stop searching-store and organize everything on our platform.</p>
        </article>

        <article className="tech-card tech-card--learn">
          <FiStar />
          <h4>
            Learn from our customers&apos;
            <br />
            successful projects
          </h4>
          <p>Reference work from the world&apos;s best brands on our platform.</p>
        </article>
      </div>
    </section>
  );
}

export default TechEnabledSectionPage;
