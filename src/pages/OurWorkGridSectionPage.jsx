import './OurWorkGridSectionPage.css';

const showcaseCards = [
  {
    key: 'grubhub',
    title: 'Grubhub',
    meta: 'Motion Design, Video Production',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1800&q=80',
    size: 'wide',
  },
  {
    key: 'microsoft',
    title: 'Microsoft',
    meta: 'Immersive Experiences, Motion Design, Video Production',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    size: 'standard',
  },
  {
    key: 'reddit',
    title: 'Reddit',
    meta: 'Motion Design, Social Media Creative, Ad Creative, Video Production',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    size: 'standard',
  },
  {
    key: 'amazon-pharmacy',
    title: 'Amazon Pharmacy',
    meta: 'Ad Creative, Video Production',
    image: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?auto=format&fit=crop&w=1200&q=80',
    size: 'standard',
  },
  {
    key: 'treatwell',
    title: 'Treatwell',
    meta: 'Email Design & Development',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    size: 'standard',
  },
  {
    key: 'wilson',
    title: 'Wilson',
    meta: 'Ad Creative, Social Media Creative, Motion Design, Video Production',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1800&q=80',
    size: 'wide',
  },
  {
    key: 'sublim',
    title: 'Sublim',
    meta: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=1800&q=80',
    size: 'wide',
  },
  {
    key: 'pernod-ricard',
    title: 'Pernod Ricard',
    meta: 'eBook & Digital Reports',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    size: 'standard',
  },
  {
    key: 'collabera',
    title: 'Collabera',
    meta: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1200&q=80',
    size: 'standard',
  },
  {
    key: 'antler',
    title: 'Antler',
    meta: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    size: 'standard',
  },
  {
    key: 'bolt',
    title: 'Bolt',
    meta: 'Motion Design, Ad Creative, Illustration Design, Video Production',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
    size: 'standard',
  },
  {
    key: 'opa',
    title: 'Opa!',
    meta: 'Concept Creation, Brand Identity, Ad Creative, AI-Powered Creative, Video Production',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1800&q=80',
    size: 'wide',
  },
];

function OurWorkGridSectionPage() {
  return (
    <section className="our-work-grid-page reveal-up" id="our-work-gallery">
      <div className="our-work-grid-page__head">
        <div>
          <span>Our work</span>
          <h3>
            See how <em>top brands</em> use Superside
          </h3>
        </div>

        <button className="our-work-grid-page__cta" type="button">
          <span className="our-work-grid-page__cta-flow">
            <span className="our-work-grid-page__cta-lane">Explore all our work</span>
            <span className="our-work-grid-page__cta-lane">Explore all our work</span>
          </span>
        </button>
      </div>

      <div className="our-work-grid">
        {showcaseCards.map((card) => (
          <article className={`our-work-grid__item our-work-grid__item--${card.size}`} key={card.key}>
            <figure className="our-work-grid__media">
              <img alt={card.title} loading="lazy" src={card.image} />
            </figure>
            <h4>{card.title}</h4>
            <p>{card.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OurWorkGridSectionPage;
