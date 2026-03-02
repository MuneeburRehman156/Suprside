import { flexCards } from '../data/siteData';
import './FlexSectionPage.css';

function FlexSectionPage() {
  return (
    <section className="flex-page reveal-up" id="flex">
      <div className="flex-content">
 <span className="flex-page__eyebrow">Made to flex</span>
      <h3>
        Supertalented. Superfast. Super responsive. Work with a global team that&apos;s purposefully
        <em> made to keep up with you.</em>
      </h3>
      </div>
     

      <div className="flex-page__grid">
        {flexCards.map((card) => (
          <article className={`flex-page__card ${card.tone}`} key={card.title}>
            <img alt={card.title} src={card.image} />
            <div className="flex-page__base">
              {/* <h4>{card.title}</h4> */}
            </div>
            <div className="flex-page__hover">
              <h4>{card.title}</h4>
              <p>{card.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FlexSectionPage;
