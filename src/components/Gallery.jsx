import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import { getExperienceBySlug, getFolderImages, experiences } from '../content/experienceImages';

function PhotoCard({ src, alt }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-neutral-100 cursor-pointer min-w-0 min-h-[220px] sm:min-h-[260px]"
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
        className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
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
    <div className="min-h-screen bg-white font-sans pt-8 pb-16">
      <SectionContainer>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
          .font-display { font-family: 'Playfair Display', serif; }
        `}</style>

        <Link
          to="/"
          state={{ scrollTo: 'experiences' }}
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 text-sm mb-8 transition-colors"
        >
          ← Back to Experiences
        </Link>

        <header className="mb-12 max-w-3xl">
          <p
            className="text-neutral-400 uppercase tracking-[0.25em] mb-3"
            style={{ fontSize: 10, fontFamily: "'DM Mono',monospace" }}
          >
            {experience.category}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-normal leading-tight text-neutral-900 mb-4">
            {experience.title}
          </h1>
          <p className="text-sm text-neutral-500 tracking-wider uppercase mb-6">
            {experience.tags.join(' / ')}
          </p>
          <div className="flex flex-wrap gap-8">
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                Collection
              </span>
              <span className="text-sm text-neutral-700 font-medium">{experience.folder}</span>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                Photos
              </span>
              <span className="text-sm text-neutral-700 font-medium">{images.length}</span>
            </div>
          </div>
        </header>

        <hr className="border-neutral-200 mb-10" />

        {images.length === 0 ? (
          <p className="text-neutral-500">No photos in this collection yet.</p>
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
          <div className="mt-14 pt-8 border-t border-neutral-200">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-4">
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
                    className="text-xs px-4 py-2 rounded-full border border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
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
