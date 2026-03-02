import { useEffect, useRef, useState } from 'react';
import {
  FiActivity,
  FiAperture,
  FiArrowUpRight,
  FiAtSign,
  FiBookOpen,
  FiBox,
  FiChevronDown,
  FiCircle,
  FiFlag,
  FiGrid,
  FiLayout,
  FiMap,
  FiMessageCircle,
  FiMonitor,
  FiPackage,
  FiPlayCircle,
  FiPlusCircle,
  FiShuffle,
  FiSliders,
  FiSmartphone,
  FiStar,
  FiTarget,
  FiType,
  FiUsers,
  FiZap,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { navItems, resourcesMenu, servicesMenu, whyUsCards } from '../data/siteData';
import './NavBar.css';

function NavBar({ onSectionScroll }) {
  const [activeMenu, setActiveMenu] = useState('');
  const closeTimerRef = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActiveMenu(''), 150);
  };

  const toggleMenu = (key) => {
    clearCloseTimer();
    setActiveMenu((current) => (current === key ? '' : key));
  };

  const openMenu = (key) => {
    clearCloseTimer();
    setActiveMenu(key);
  };

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <header className="nav-header" onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
      <div className="nav-header__shell">
        <a className="nav-header__brand" href="#hero">
          Superside
        </a>

        <nav className="nav-header__menu">
          {navItems.map((item) => (
            <div className="nav-header__item-wrap" key={item.key}>
              {item.hasDropdown ? (
                <button
                  className={`nav-header__item nav-header__item--dropdown ${activeMenu === item.key ? 'is-open' : ''}`}
                  onClick={() => toggleMenu(item.key)}
                  onMouseEnter={() => openMenu(item.key)}
                  type="button"
                >
                  <span>{item.label}</span>
                  <FiChevronDown />
                </button>
              ) : (
                <button
                  className="nav-header__item nav-header__item--plain"
                  onClick={() => onSectionScroll(item.target)}
                  type="button"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="nav-header__actions">
          <NavActionButton label="Book a demo" variant="lime" />
          <NavActionButton label="Sign in" variant="ghost" />
        </div>
      </div>

      <div className={`nav-mega ${activeMenu ? 'is-visible' : ''}`}>
        {activeMenu === 'services' ? <ServicesPanel onNavigate={() => setActiveMenu('')} /> : null}
        {activeMenu === 'why-us' ? <WhyUsPanel onNavigate={() => setActiveMenu('')} /> : null}
        {activeMenu === 'resources' ? <ResourcesPanel onNavigate={() => setActiveMenu('')} /> : null}
      </div>
    </header>
  );
}

function NavActionButton({ label, variant }) {
  return (
    <button className={`nav-action nav-action--${variant}`} type="button">
      <span className="nav-action__flow">
        <span className="nav-action__lane">{label}</span>
        <span className="nav-action__lane">{label}</span>
      </span>
    </button>
  );
}

function ServicesPanel({ onNavigate }) {
  const iconMap = {
    target: FiTarget,
    'plus-circle': FiPlusCircle,
    monitor: FiMonitor,
    aperture: FiAperture,
    users: FiUsers,
    book: FiBookOpen,
    bulb: FiZap,
    map: FiMap,
    package: FiPackage,
    play: FiPlayCircle,
    activity: FiActivity,
    box: FiBox,
    at: FiAtSign,
    smartphone: FiSmartphone,
    grid: FiGrid,
    layout: FiLayout,
    type: FiType,
    sparkle: FiStar,
    message: FiMessageCircle,
    sliders: FiSliders,
    shuffle: FiShuffle,
    flag: FiFlag,
  };

  return (
    <div className="nav-mega__services">
      {servicesMenu.map((column) => (
        <section className="nav-mega__column" key={column.chip}>
          <div className={`nav-mega__chip nav-mega__chip--${column.tone || 'lime'}`}>
            <span>{column.chip}</span>
            <FiArrowUpRight />
          </div>

          {column.groups.map((group, groupIndex) => (
            <div className="nav-mega__group" key={`${column.chip}-${groupIndex}`}>
              {group.chip ? (
                <div className={`nav-mega__chip nav-mega__chip--sub nav-mega__chip--${group.tone || 'sand'}`}>
                  <span>{group.chip}</span>
                  <FiArrowUpRight />
                </div>
              ) : null}

              {group.items.map((item) => {
                const Icon = iconMap[item.icon] || FiCircle;

                return (
                  <button
                    className="nav-mega__line nav-mega__line--button"
                    key={item.title}
                    onClick={onNavigate}
                    type="button"
                  >
                    <div className="nav-mega__line-main">
                      <h4 className="nav-mega__title">
                        {item.title}
                        {item.isNew ? <span className="nav-mega__new">New</span> : null}
                      </h4>
                      <p>{item.desc}</p>
                    </div>
                    <span className="nav-mega__icon">
                      <Icon />
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

function WhyUsPanel({ onNavigate }) {
  return (
    <div className="nav-mega__whyus">
      {whyUsCards.map((card) => (
        <Link className="nav-whyus-card" key={card.title} onClick={onNavigate} to={card.to}>
          <img alt={card.title} src={card.image} />
          <h4>{card.title}</h4>
          <p>{card.desc}</p>
        </Link>
      ))}
    </div>
  );
}

function ResourcesPanel({ onNavigate }) {
  return (
    <div className="nav-mega__resources">
      <section className="nav-resource-links">
        {resourcesMenu.links.map((link) => (
          <Link className="nav-mega__line nav-mega__line--link" key={link.title} onClick={onNavigate} to={link.to}>
            <div>
              <h4>{link.title}</h4>
              <p>{link.desc}</p>
            </div>
            <FiCircle />
          </Link>
        ))}
      </section>

      <section className="nav-resource-media">
        <h3>Blog</h3>
        {resourcesMenu.blogs.map((item) => (
          <Link className="nav-media-story" key={item.title} onClick={onNavigate} to={item.to}>
            <img alt={item.title} src={item.image} />
            <h4>{item.title}</h4>
          </Link>
        ))}
      </section>

      <section className="nav-resource-media">
        <h3>Customer Stories</h3>
        {resourcesMenu.stories.map((item) => (
          <Link className="nav-media-story" key={item.title} onClick={onNavigate} to={item.to}>
            <img alt={item.title} src={item.image} />
            <h4>{item.title}</h4>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default NavBar;
