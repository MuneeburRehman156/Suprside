import './FlexSectionPage.css';

function FlexSectionPage() {
  return (
    <section className="flex-page reveal-up" id="flex">
      <div className="flex-page__copy">
        <span className="flex-page__eyebrow">Work with the best</span>
        <h3>
          <em>World-class talent</em> with no borders
        </h3>

        <p className="flex-page__lead">
          Work with top global creative talent - elite designers, project managers, animators, copywriters, AI
          technologists and more, recruited from the best brands and agencies.
        </p>

        <p className="flex-page__sub">
          Plus, a dedicated project manager to ensure your briefs stay on track from start to finish.
        </p>

        <button className="flex-page__btn" type="button">
          <span className="flex-page__btn-flow">
            <span className="flex-page__btn-lane">Book a demo</span>
            <span className="flex-page__btn-lane">Book a demo</span>
          </span>
        </button>
      </div>

      <div className="flex-page__media">
        <img
          alt="Professional using laptop in front of mountain view"
          loading="lazy"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=80"
        />
      </div>
    </section>
  );
}

export default FlexSectionPage;
