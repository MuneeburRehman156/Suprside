import './OurDifferenceSectionPage.css';

const differenceCards = [
  {
    key: 'scalable',
    label: 'Scalable',
    title: 'Boost your in-house creative',
    description:
      'We handle the heavy lifting so you can focus on strategic, high impact work without adding overhead to the team.',
  },
  {
    key: 'flexible',
    label: 'Flexible',
    title: 'Say yes to more projects',
    description:
      'Whether you need more bandwidth or different skills, Superside has whatever resources you need to get the job done.',
  },
  {
    key: 'responsive',
    label: 'Responsive',
    title: "Don't sacrifice quality for speed",
    description: 'Our global team of creatives delivers agency-level work in a fraction of the time.',
  },
];

function TagBadgeIcon() {
  return (
    <svg aria-hidden="true" className="difference-card__icon-svg" fill="none" viewBox="0 0 24 24">
      <path d="M20.1 10.9 13.1 3.9H5v8.1l7 7a2 2 0 0 0 2.8 0l5.3-5.3a2 2 0 0 0 0-2.8Z" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg aria-hidden="true" className="difference-card__icon-svg" fill="none" viewBox="0 0 24 24">
      <path d="m4.2 6.2 1.9 1.9 2.8-2.8" />
      <path d="m4.2 12 1.9 1.9 2.8-2.8" />
      <path d="m4.2 17.8 1.9 1.9 2.8-2.8" />
      <path d="M12.8 6.7h7" />
      <path d="M12.8 12.5h7" />
      <path d="M12.8 18.3h7" />
    </svg>
  );
}

function StarOutlineIcon() {
  return (
    <svg aria-hidden="true" className="difference-card__icon-svg" fill="none" viewBox="0 0 24 24">
      <path d="m12 3.4 2.8 5.6 6.1.9-4.4 4.3 1 6.1-5.5-2.9-5.5 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.4Z" />
    </svg>
  );
}

const iconMap = {
  scalable: TagBadgeIcon,
  flexible: ChecklistIcon,
  responsive: StarOutlineIcon,
};

function OurDifferenceSectionPage() {
  return (
    <section className="difference-page reveal-up" id="our-difference">
      <div className="difference-page__head">
        <span>Our difference</span>
        <h3>
          Superside is the <em>perfect fit</em> for fast moving brands
        </h3>
      </div>

      <div className="difference-grid">
        {differenceCards.map((card) => {
          const Icon = iconMap[card.key];
          return (
            <article className="difference-card" key={card.key}>
              <span className="difference-card__icon-shell">
                <Icon />
              </span>
              <span className="difference-card__label">{card.label}</span>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OurDifferenceSectionPage;
