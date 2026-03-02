import { useRef, useState } from 'react';
import { FiPlay, FiVolume2 } from 'react-icons/fi';
import { creativeSectionVideo } from '../data/siteData';
import './CreativeSectionPage.css';

function CreativeSectionPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    if (!videoRef.current) {
      return;
    }
    videoRef.current.controls = true;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="creative-page reveal-up" id="creative">
      <div className="creative-page__copy">
        <span className="creative-page__eyebrow">A new era of creative work</span>
        <h3>
          The support your creative team
          <br />
          <em>has been asking for</em>
        </h3>
        <p>
          Superside is your dedicated, on-call creative team to expand your production capacity and extend your
          team&rsquo;s creative capabilities.
        </p>
        <p className="creative-page__muted">
          See us as an extension of your team, freeing you to focus on your most impactful and creative work.
        </p>

        <button className="creative-page-btn" type="button">
          <span className="creative-page-btn__flow">
            <span className="creative-page-btn__lane">Book a demo</span>
            <span className="creative-page-btn__lane">Book a demo</span>
          </span>
        </button>
      </div>

      <div className="creative-page__video-shell">
        <video
          loop
          muted={!playing}
          playsInline
          poster={creativeSectionVideo.poster}
          ref={videoRef}
          src={creativeSectionVideo.source}
        />
        {!playing ? (
          <button className="creative-page__play" onClick={playVideo} type="button">
            <FiPlay />
          </button>
        ) : (
          <button className="creative-page__sound" type="button">
            <FiVolume2 />
          </button>
        )}
      </div>
    </section>
  );
}

export default CreativeSectionPage;
