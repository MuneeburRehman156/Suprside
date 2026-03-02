import { useMemo, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/siteData';
import './WorkDetailPage.css';

const MASONRY_PATTERN = [13, 10, 8, 12, 9, 11, 7, 14, 10, 8, 12, 9];

function WorkDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const project = useMemo(
    () => projects.find((item) => item.id === projectId) || projects[0],
    [projectId],
  );

  const masonryImages = useMemo(() => {
    const ownGallery =
      project.gallery.length >= 10
        ? project.gallery
        : [...project.gallery, ...project.gallery];

    return ownGallery.map((image, index) => ({
      id: `${project.id}-${index}`,
      image,
      span: MASONRY_PATTERN[index % MASONRY_PATTERN.length],
    }));
  }, [project]);

  return (
    <div className="detail-page">
      <header className="detail-page__topbar">
        <button onClick={() => navigate('/')} type="button">
          Superside
        </button>
      </header>

      <main className="detail-page__main">
        <section className="detail-page__gallery">
          {masonryImages.map((item, index) => (
            <figure className="detail-page__cell" key={item.id} style={{ gridRow: `span ${item.span}` }}>
              <img alt={`${project.title} visual ${index + 1}`} src={item.image} />
            </figure>
          ))}
        </section>

        <section className="detail-page__footer">
          <div>
            <h1>{project.title}</h1>
            <p>{project.category}</p>
          </div>
          <div>
            <p>{project.description}</p>
          </div>
          <div className="detail-page__tags">
            {project.tags.map((tag) => (
              <button className="detail-tag-btn" key={tag} type="button">
                <span className="detail-tag-btn__flow">
                  <span className="detail-tag-btn__lane">
                    {tag}
                    <FiArrowUpRight />
                  </span>
                  <span className="detail-tag-btn__lane">
                    {tag}
                    <FiArrowUpRight />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section
          className="detail-page__cancel"
          onClick={() => navigate('/')}
          onMouseEnter={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setCursor({
              visible: true,
              x: event.clientX - rect.left,
              y: event.clientY - rect.top,
            });
          }}
          onMouseLeave={() => setCursor((state) => ({ ...state, visible: false }))}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setCursor({
              visible: true,
              x: event.clientX - rect.left,
              y: event.clientY - rect.top,
            });
          }}
        >
          <p>Click anywhere to return home</p>
          <div className={`detail-page__cursor ${cursor.visible ? 'is-visible' : ''}`} style={{ transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)` }}>
            Cancel
          </div>
        </section>
      </main>
    </div>
  );
}

export default WorkDetailPage;
