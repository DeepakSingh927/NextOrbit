import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import MagneticButton from './animations/MagneticButton';
import { experiencesWithImages } from '../content/experienceImages';

/** Single card — image on top, title + tags below, exactly like schachzudritt reference */
function WorkCard({ work, delay = 0, visible = false }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const openGallery = () => {
    window.scrollTo(0, 0);
    navigate(`/gallery/${work.slug}`);
  };

  return (
    <div
      className="sw-fade"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity .85s ease-out, transform .85s ease-out',
      }}
    >
      {/* Image block */}
      <div
        className="relative overflow-hidden cursor-pointer"
        style={{ borderRadius: 12, height: 'clamp(220px,28vw,380px)', background: '#111' }}
        onClick={openGallery}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && openGallery()}
      >
        {/* Image */}
        {work.coverImage ? (
          <img
            src={work.coverImage}
            alt={work.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform .7s ease',
            }}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>
            No image
          </div>
        )}

        {/* Dim overlay on hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
            opacity: hovered ? 1 : 0.4,
          }}
        />

        {/* Top-right arrow on hover */}
        <div
          className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full border border-white/30 transition-all duration-300"
          style={{
            width: 34, height: 34,
            background: hovered ? 'rgba(255,255,255,0.12)' : 'transparent',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(0.8)',
          }}
        >
          <span className="text-white text-xs">↗</span>
        </div>
      </div>

      {/* Text below image */}
      <div className="mt-3 px-0.5">
        <h3
          className="text-white font-semibold leading-snug mb-2"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px, 1.8vw, 20px)' }}
        >
          {work.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-white/50 text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full border border-white/10 hover:border-white/25 hover:text-white/80 transition-colors cursor-default"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StudioWorkSection() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // Only take the 4 available experiences
  const works = experiencesWithImages.slice(0, 4);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@300;400;500&display=swap');
        .mq-inner{display:flex;gap:2.5rem;animation:mq 28s linear infinite;white-space:nowrap;}
        @keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @media(max-width:640px){
          .mq-inner{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0.75rem;animation:none;white-space:normal;}
          .mq-inner span{white-space:normal;}
        }
      `}</style>

      <section
        id="experiences"
        ref={ref}
        className="scroll-mt-24"
        style={{ background: '#08020f', fontFamily: "'DM Mono', monospace" }}
      >
        <SectionContainer>
          {/* Section label */}
          <div
            id="about"
            className="mb-10 scroll-mt-24"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity .7s ease, transform .7s ease',
            }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-white/40 uppercase tracking-[0.4em]" style={{ fontSize: 10 }}>
                Our Experiences
              </span>
            </div>
          </div>

          {/* Scrolling tag strip */}
          <div
            className="overflow-hidden border-y py-3.5 mb-12"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              opacity: visible ? 1 : 0,
              transition: 'opacity .7s ease .1s',
            }}
          >
            <div className="mq-inner">
              {[...Array(2)].flatMap((_, gi) =>
                ['Corporate Events', 'Brand Activations', 'Music Festivals', 'Stage Production', 'VIP Experiences', 'Destination Events', 'Live Concerts', 'Fashion Shows'].map((s, i) => (
                  <span
                    key={`${gi}-${i}`}
                    className="text-white/35 uppercase tracking-[0.28em] flex items-center gap-2.5"
                    style={{ fontSize: 9 }}
                  >
                    {s} <span className="text-white/15">◆</span>
                  </span>
                ))
              )}
            </div>
          </div>

          {/* 2×2 Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10"
          >
            {works.map((work, i) => (
              <WorkCard key={work.slug} work={work} delay={i * 120} visible={visible} />
            ))}
          </div>

          {/* Footer CTA */}
          <div
            className="mt-16 flex items-center justify-between pt-8"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              opacity: visible ? 1 : 0,
              transition: 'opacity .7s ease .55s',
            }}
          >
            <p className="text-white/30 uppercase tracking-[0.3em]" style={{ fontSize: 10 }}>
              © Next Orbit — 2026
            </p>
            <MagneticButton strength={0.3}>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
              >
                <span
                  className="text-white/50 group-hover:text-white uppercase tracking-[0.25em] transition-colors duration-300"
                  style={{ fontSize: 10 }}
                >
                  Start a Project
                </span>
                <span className="text-white/40 group-hover:text-white transition-colors text-xs">→</span>
              </button>
            </MagneticButton>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
