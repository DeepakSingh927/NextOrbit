import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import {
  getExperienceBySlug,
  getFolderImages,
  getFolderEventGroups,
  experiences,
} from '../content/experienceImages';

function LightboxModal({ images, activeIndex, onClose, onPrev, onNext, currentEventTitle }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (activeIndex === null || activeIndex === undefined || !images[activeIndex]) {
    return null;
  }

  const currentImg = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-4 sm:p-6 bg-black/95 backdrop-blur-2xl transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full max-w-7xl flex items-center justify-between z-10 py-2 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-xs font-mono tracking-widest text-[#00B4FF] uppercase">
            {currentEventTitle || 'Gallery Preview'}
          </span>
          <span className="text-xs text-white/50 font-mono">
            Photo {activeIndex + 1} of {images.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium tracking-wider uppercase transition-colors border border-white/15"
          aria-label="Close modal"
        >
          <span>Close</span>
          <span className="text-base leading-none">✕</span>
        </button>
      </div>

      {/* Main Image Area with Controls */}
      <div
        className="relative flex-1 w-full max-w-7xl flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Previous photo"
        >
          <span className="text-2xl font-light transition-transform group-hover:-translate-x-0.5">‹</span>
        </button>

        {/* Center High-Res Image */}
        <div className="relative max-h-[80vh] max-w-[88vw] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] bg-neutral-950">
          <img
            src={currentImg}
            alt={`Gallery photo ${activeIndex + 1}`}
            className="max-h-[80vh] max-w-full w-auto h-auto object-contain rounded-xl transition-all duration-300 animate-zoomIn"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Next photo"
        >
          <span className="text-2xl font-light transition-transform group-hover:translate-x-0.5">›</span>
        </button>
      </div>

      {/* Footer Navigation Info */}
      <div
        className="w-full max-w-7xl text-center py-2 text-xs text-white/40 font-mono tracking-wider"
        onClick={(e) => e.stopPropagation()}
      >
        Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">←</kbd>{' '}
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">→</kbd> arrow keys to navigate ·{' '}
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">Esc</kbd> to exit
      </div>
    </div>
  );
}

function PhotoCard({ src, alt, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl bg-neutral-900 cursor-pointer h-[220px] sm:h-[260px] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-md hover:shadow-2xl"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        loading="lazy"
        decoding="async"
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/80">View Photo</span>
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xs">
          🔍
        </div>
      </div>
    </div>
  );
}

export default function PhotoGallery() {
  const { project } = useParams();
  const navigate = useNavigate();

  const experience = getExperienceBySlug(project);
  const allFolderImages = getFolderImages(experience.folder);
  const eventGroups = getFolderEventGroups(experience.folder);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? 0 : prev > 0 ? prev - 1 : allFolderImages.length - 1
    );
  }, [allFolderImages.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? 0 : prev < allFolderImages.length - 1 ? prev + 1 : 0
    );
  }, [allFolderImages.length]);

  // Find event title for currently opened lightbox image
  const getCurrentEventTitle = () => {
    if (lightboxIndex === null) return '';
    const group = eventGroups.find(
      (g) => lightboxIndex >= g.startIndex && lightboxIndex < g.startIndex + g.images.length
    );
    return group ? `Event ${group.eventNumber}: ${group.title}` : experience.title;
  };

  return (
    <div className="min-h-screen font-sans pt-24 pb-20 bg-[#08020f] text-white">
      <SectionContainer>
        {/* Back Button */}
        <Link
          to="/"
          state={{ scrollTo: 'experiences' }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white mb-8 transition-colors"
        >
          ← Back to Experiences
        </Link>

        {/* Header Title & Description */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#00B4FF] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
            Curated Portfolio · {experience.category}
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {experience.title}
          </h1>
          <p className="text-sm text-white/60 max-w-2xl font-light">
            Explore our curated event galleries grouped by signature projects and high-profile productions. Click any image to view in full screen.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2.5 min-w-max border-b border-white/10 pb-4">
            {experiences.map((exp) => {
              const isActive = exp.slug === experience.slug;
              const expImages = getFolderImages(exp.folder);

              return (
                <button
                  key={exp.slug}
                  type="button"
                  onClick={() => {
                    navigate(`/gallery/${exp.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00B4FF]/20 to-[#8B5CF6]/20 border-[#00B4FF]/50 text-white shadow-[0_0_20px_rgba(0,180,255,0.25)]'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/25'
                  }`}
                >
                  <span>{exp.title}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-[#00B4FF] text-black font-bold' : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {expImages.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Event-Wise Photo Sections (Event Title + 6 Images Grid) */}
        {eventGroups.length === 0 ? (
          <div className="py-20 text-center text-white/40">
            No photos available in this collection yet.
          </div>
        ) : (
          <div className="space-y-16">
            {eventGroups.map((group) => (
              <div key={group.id} className="space-y-6">
                {/* Event Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-[#00B4FF]/10 text-[#00B4FF] text-[10px] font-mono font-bold tracking-wider uppercase border border-[#00B4FF]/20">
                      EVENT {String(group.eventNumber).padStart(2, '0')}
                    </span>
                    <h2
                      className="text-xl sm:text-2xl font-semibold tracking-tight text-white/95"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {group.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-white/40">
                    {group.images.length} {group.images.length === 1 ? 'Photo' : 'Photos'}
                  </span>
                </div>

                {/* 6 Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {group.images.map((src, photoIdx) => {
                    const globalIdx = group.startIndex + photoIdx;
                    return (
                      <PhotoCard
                        key={`${src}-${photoIdx}`}
                        src={src}
                        alt={`${group.title} - Photo ${photoIdx + 1}`}
                        onClick={() => setLightboxIndex(globalIdx)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Category Selector Quick Links */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center sm:text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
            Explore Other Event Categories
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {experiences
              .filter((e) => e.slug !== experience.slug)
              .map((e) => (
                <Link
                  key={e.slug}
                  to={`/gallery/${e.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-xs px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                >
                  {e.title} →
                </Link>
              ))}
          </div>
        </div>
      </SectionContainer>

      {/* Lightbox Modal */}
      <LightboxModal
        images={allFolderImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        currentEventTitle={getCurrentEventTitle()}
      />
    </div>
  );
}
