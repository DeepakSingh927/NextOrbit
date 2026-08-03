import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import { getExperienceBySlug, getFolderImages, experiences } from '../content/experienceImages';

function PhotoCard({ src, alt }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-neutral-900 cursor-pointer min-w-0 min-h-[220px] sm:min-h-[260px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full max-w-full min-w-0 object-cover transition-transform duration-500 ease-out ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
        loading="lazy"
        decoding="async"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default function PhotoGallery() {
  const { project } = useParams();
  const experience = getExperienceBySlug(project);
  const images = getFolderImages(experience.folder);

  return (
    <div className="min-h-screen font-sans pt-24 pb-16" style={{ background: '#08020f', color: '#ffffff' }}>
      <SectionContainer>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
          .font-display { font-family: 'Playfair Display', serif; }
        `}</style>

        <Link
          to="/"
          state={{ scrollTo: 'experiences' }}
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
          style={{ color: 'rgba(255,255,255,0.45)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
        >
          ← Back to Experiences
        </Link>

        {images.length === 0 ? (
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>No photos in this collection yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[minmax(220px,auto)]">
            {images.map((src, i) => (
              <PhotoCard
                key={src}
                src={src}
                alt={`${experience.title} ${i + 1}`}
              />
            ))}
          </div>
        )}

        {experiences.length > 1 && (
          <div className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              More Experiences
            </p>
            <div className="flex flex-wrap gap-2">
              {experiences
                .filter((e) => e.slug !== experience.slug)
                .map((e) => (
                  <Link
                    key={e.slug}
                    to={`/gallery/${e.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-xs px-4 py-2 rounded-full transition-colors"
                    style={{
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    {e.title}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </SectionContainer>
    </div>
  );
}
