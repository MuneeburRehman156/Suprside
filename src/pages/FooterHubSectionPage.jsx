import { FiArrowUpRight } from 'react-icons/fi';
import { SiFacebook, SiInstagram, SiLinkedin, SiTiktok, SiYoutube } from 'react-icons/si';
import './FooterHubSectionPage.css';

const serviceGroups = [
  {
    title: 'Creative design services',
    items: [
      'Ad creative',
      'Social media creative',
      'Presentation design',
      'Illustration design',
      'Branding services',
      'eBooks & report design',
      'Concept creation',
      'Print design',
      'Packaging & merchandise design',
    ],
  },
  {
    title: 'Specialized production services',
    items: [
      'Video production',
      'Motion design',
      'Immersive design',
      'Email creation',
      'Web design',
      'Design Systems',
      'Product Design',
      'Copywriting',
    ],
  },
  {
    title: 'AI services',
    items: ['AI-powered creative', 'AI consulting', 'Automation'],
  },
];

const marketingServices = ['Marketing strategy', 'Campaign strategy'];

const navigationGroups = [
  {
    title: 'Main',
    items: [
      'Our work',
      'Our people',
      'About us',
      'Pricing',
      'Trust center',
      'Careers',
      'Superside vs. Alternatives',
      'Forrester TEI Report',
    ],
  },
  {
    title: 'Learn',
    items: [
      'Blog',
      'Events & Summits',
      'Guides',
      'Reports',
      'Customer Stories',
      'Video Library',
      'Playbooks',
      "What's new",
      'Help Center',
    ],
  },
];

const legalLinks = ['Privacy policy', 'Terms of use', 'Status page', 'DMCA'];
const socialItems = [
  { key: 'linkedin', icon: SiLinkedin, label: 'LinkedIn' },
  { key: 'facebook', icon: SiFacebook, label: 'Facebook' },
  { key: 'instagram', icon: SiInstagram, label: 'Instagram' },
  { key: 'youtube', icon: SiYoutube, label: 'YouTube' },
  { key: 'tiktok', icon: SiTiktok, label: 'TikTok' },
];

function SupersideMarkIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M7 6.9A2.9 2.9 0 0 1 9.9 4h8.3v3.1H10a.6.6 0 0 0-.7.7c0 .3.2.6.5.7l5.4 2.8a4.9 4.9 0 0 1 2.8 4.4 4.9 4.9 0 0 1-4.9 4.9H4.8v-3.1h8a1.5 1.5 0 0 0 1.5-1.6c0-.6-.3-1.2-.9-1.5l-4.8-2.5A4.2 4.2 0 0 1 7 6.9Z" />
    </svg>
  );
}

function FooterHubSectionPage() {
  const handlePlaceholderLink = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="footer-hub-page reveal-up" id="footer-hub">
      <div className="footer-hub-page__hero">
        <h3>
          Your <em>creative team&apos;s</em>
          <br />
          creative team&trade;
        </h3>

        <button className="footer-hub-page__btn" type="button">
          <span className="footer-hub-page__btn-flow">
            <span className="footer-hub-page__btn-lane">Book intro call</span>
            <span className="footer-hub-page__btn-lane">Book intro call</span>
          </span>
        </button>
      </div>

      <div className="footer-hub-page__nav-wrap">
        <section className="footer-hub-page__panel">
          <h4>Services</h4>

          <div className="footer-hub-page__services">
            {serviceGroups.map((group) => (
              <article className="footer-hub-page__column" key={group.title}>
                <a className="footer-hub-page__heading-link" href="#0" onClick={handlePlaceholderLink}>
                  <span>{group.title}</span>
                  <FiArrowUpRight />
                </a>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#0" onClick={handlePlaceholderLink}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="footer-hub-page__column footer-hub-page__column--marketing">
              <a className="footer-hub-page__heading-link" href="#0" onClick={handlePlaceholderLink}>
                <span>Marketing services</span>
                <FiArrowUpRight />
              </a>
              <ul>
                {marketingServices.map((item) => (
                  <li key={item}>
                    <a href="#0" onClick={handlePlaceholderLink}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="footer-hub-page__panel">
          <h4>Navigation</h4>

          <div className="footer-hub-page__navigation">
            {navigationGroups.map((group) => (
              <article className="footer-hub-page__column" key={group.title}>
                <h5>{group.title}</h5>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#0" onClick={handlePlaceholderLink}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="footer-hub-page__bottom">
        <div className="footer-hub-page__brand">
          <strong>Superside</strong>
          <p>&copy; 2026 Superside. All rights reserved.</p>
        </div>

        <ul className="footer-hub-page__legal">
          {legalLinks.map((link) => (
            <li key={link}>
              <a href="#0" onClick={handlePlaceholderLink}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer-hub-page__socials">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                aria-label={item.label}
                className="footer-hub-page__social"
                href="#0"
                key={item.key}
                onClick={handlePlaceholderLink}
              >
                <Icon />
              </a>
            );
          })}

          <a
            aria-label="Superside"
            className="footer-hub-page__social footer-hub-page__social--mark"
            href="#0"
            onClick={handlePlaceholderLink}
          >
            <SupersideMarkIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterHubSectionPage;
