import { useRef, useState } from 'react';
import { FiPlay, FiVolume2 } from 'react-icons/fi';
import './WorkShowcaseSectionPage.css';

function WorkShowcaseSectionPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onPlay = () => {
    if (!videoRef.current) {
      return;
    }
    videoRef.current.controls = true;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="work-showcase-page reveal-up" id="our-work">
      <div className="work-showcase-page__head">
        <span>Our work</span>
        <h3>
          From high tech to high
          <br />
          fashion <em>and beyond</em>
        </h3>
      </div>

      <div className="work-showcase-page__pin">
        <div className="work-showcase-page__media-shell">
          <video
            className="work-showcase-page__video"
            loop
            muted={!playing}
            playsInline
            poster="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=2000&q=80"
            ref={videoRef}
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          />

          {!playing ? (
            <button className="work-showcase-page__play" onClick={onPlay} type="button">
              <FiPlay />
            </button>
          ) : null}

          <button className="work-showcase-page__sound" type="button">
            <FiVolume2 />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkShowcaseSectionPage;
