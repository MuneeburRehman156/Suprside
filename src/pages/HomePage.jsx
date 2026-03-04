import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import NavBar from '../components/NavBar';
import HeroSectionPage from './HeroSectionPage';
import BrandsSectionPage from './BrandsSectionPage';
import CreativeSectionPage from './CreativeSectionPage';
import FlexSectionPage from './FlexSectionPage';
import SuccessSectionPage from './SuccessSectionPage';
import WorkShowcaseSectionPage from './WorkShowcaseSectionPage';
import CreativeWorkSliderSectionPage from './CreativeWorkSliderSectionPage';
import TechEnabledSectionPage from './TechEnabledSectionPage';
import OurWorkGridSectionPage from './OurWorkGridSectionPage';
import ReviewSectionPage from './ReviewSectionPage';
import ComparisonSectionPage from './ComparisonSectionPage';
import OurDifferenceSectionPage from './OurDifferenceSectionPage';
import FooterHubSectionPage from './FooterHubSectionPage';
import './HomePage.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('body', { overflowX: 'hidden' });

      gsap.from('.hero-page__copy > *', {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
      });

      gsap.from('.hero-page__grid', {
        x: 54,
        opacity: 0,
        duration: 1.05,
        ease: 'power3.out',
      });

      gsap.fromTo(
        '.work-showcase-page__media-shell',
        { width: '20vw', scale: 0.84, borderRadius: 20 },
        {
          width: '90vw',
          scale: 1,
          borderRadius: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: '#our-work',
            start: 'top 78%',
            end: 'bottom 30%',
            scrub: 1.05,
          },
        },
      );
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleSectionScroll = (target) => {
    if (!target) {
      return;
    }

    gsap.to(window, {
      duration: 1,
      ease: 'power3.out',
      scrollTo: {
        y: target,
        offsetY: 84,
      },
    });
  };

  return (
    <div className="home-page-shell" ref={pageRef}>
      <NavBar onSectionScroll={handleSectionScroll} />
      <main className="home-page-main">
        <HeroSectionPage />
        <BrandsSectionPage />
        <CreativeSectionPage />
        <FlexSectionPage />
        <SuccessSectionPage />
        <WorkShowcaseSectionPage />
        <CreativeWorkSliderSectionPage />
        <TechEnabledSectionPage />
        <OurWorkGridSectionPage />
        <ReviewSectionPage />
        <OurDifferenceSectionPage />
        <ComparisonSectionPage />
        <FooterHubSectionPage />
      </main>
    </div>
  );
}

export default HomePage;
