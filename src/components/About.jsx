import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import OurClients from './OurClients';
import { experiencesWithImages } from '../content/experienceImages';

function WorkCard({ work, featured = false, style = {} }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const openGallery = () => {
    window.scrollTo(0, 0);
    navigate(`/gallery/${work.slug}`);
  };

  return (
    <div
      className="relative cursor-pointer overflow-hidden w-full h-full bg-neutral-100"
      style={{ borderRadius: featured ? 20 : 14, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={openGallery}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && openGallery()}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
      >
        {work.coverImage ? (
          <img
            src={work.coverImage}
            alt={work.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm">
            No image
          </div>
        )}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,.72) 0%, transparent 42%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,.82) 0%, rgba(0,0,0,.15) 45%, transparent 70%)',
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="absolute top-5 left-5 z-10">
        <span
          className="uppercase tracking-[0.2em] px-3 py-1.5 rounded-full"
          style={{
            fontSize: 9,
            fontFamily: "'DM Mono',monospace",
            background: 'rgba(255,255,255,.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,.2)',
            color: 'rgba(255,255,255,.92)',
          }}
        >
          {work.category}
        </span>
      </div>
      <div
        className="absolute top-5 right-5 z-10 text-white opacity-25"
        style={{ fontSize: 11, fontFamily: "'DM Mono',monospace" }}
      >
        0{work.id}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: work.accent }}
            />
            <h3
              className="text-white font-semibold leading-tight"
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: featured
                  ? 'clamp(17px,2.2vw,24px)'
                  : 'clamp(13px,1.6vw,18px)',
              }}
            >
              {work.title}
            </h3>
          </div>
          <p
            className="text-neutral-300 tracking-wider uppercase ml-3.5"
            style={{ fontSize: 9, fontFamily: "'DM Mono',monospace" }}
          >
            {work.tags.join(' / ')}
          </p>
        </div>
        <div
          className="flex-shrink-0 ml-3 rounded-full border flex items-center justify-center transition-all duration-300"
          style={{
            width: 36,
            height: 36,
            background: hovered ? 'rgba(255,255,255,.15)' : 'transparent',
            borderColor: hovered ? 'rgba(255,255,255,.5)' : 'rgba(255,255,255,.2)',
            transform: hovered ? 'scale(1.12)' : 'scale(1)',
          }}
        >
          <span
            className="text-white"
            style={{
              fontSize: 12,
              display: 'block',
              transform: hovered ? 'translate(1px,-1px)' : 'none',
              transition: 'transform .3s',
            }}
          >
            ↗
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StudioWorkSection() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const [w0, w1, w2, w3, w4] = experiencesWithImages;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Mono:wght@300;400;500&display=swap');

        .sw-fade { opacity:0; transform:translateY(28px); transition:opacity .85s ease-out,transform .85s ease-out; }
        .sw-fade.on { opacity:1; transform:translateY(0); }
        .d0{transition-delay:0ms} .d1{transition-delay:120ms} .d2{transition-delay:220ms}
        .d3{transition-delay:320ms} .d4{transition-delay:420ms} .d5{transition-delay:520ms}

        .mq-inner{display:flex;gap:2.5rem;animation:mq 28s linear infinite;white-space:nowrap;}
        @keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}

        .sw-top-row   { display:grid; grid-template-columns:1fr 1fr; gap:16px; height:clamp(280px,36vw,500px); }
        .sw-center    { width:100%; height:clamp(320px,46vw,600px); margin-top:16px; }
        .sw-bot-row   { display:grid; grid-template-columns:1fr 1fr; gap:16px; height:clamp(260px,34vw,460px); margin-top:16px; }

        @media(max-width:640px){
          .sw-top-row,.sw-bot-row{grid-template-columns:1fr;height:auto;}
          .sw-top-row>*,.sw-bot-row>*{height:300px;}
          .sw-center{height:340px;}
        }
      `}</style>

      <section
        id="experiences"
        ref={ref}
        className="scroll-mt-24"
        style={{ background: 'var(--bg-primary)', fontFamily: "'DM Mono',monospace" }}
      >
        <SectionContainer>
          <div id="about" className={`mb-14 scroll-mt-24 sw-fade d0 ${visible ? 'on' : ''}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-neutral-300" />
              <span
                className="text-neutral-500 uppercase tracking-[0.4em]"
                style={{ fontSize: 10 }}
              >
                Our Experiences
              </span>
            </div>
          </div>

          <div
            className={`overflow-hidden border-y border-neutral-200 py-3.5 mb-10 sw-fade d1 ${visible ? 'on' : ''}`}
          >
            <div className="mq-inner">
              {[...Array(2)].flatMap((_, gi) =>
                [
                  'Luxury Weddings',
                  'Corporate Galas',
                  'Brand Activations',
                  'Music Festivals',
                  'Stage Production',
                  'VIP Experiences',
                  'Destination Events',
                  'Live Concerts',
                ].map((s, i) => (
                  <span
                    key={`${gi}-${i}`}
                    className="text-neutral-500 uppercase tracking-[0.28em] flex items-center gap-2.5"
                    style={{ fontSize: 9 }}
                  >
                    {s} <span className="text-neutral-300">◆</span>
                  </span>
                ))
              )}
            </div>
          </div>

          <div className={`sw-top-row sw-fade d2 ${visible ? 'on' : ''}`}>
            {w0 && <WorkCard work={w0} />}
            {w1 && <WorkCard work={w1} />}
          </div>

          <div className={`sw-center sw-fade d3 ${visible ? 'on' : ''}`}>
            {w2 && <WorkCard work={w2} featured />}
          </div>

          <div className={`sw-bot-row sw-fade d4 ${visible ? 'on' : ''}`}>
            {w3 && <WorkCard work={w3} />}
            {w4 && <WorkCard work={w4} />}
          </div>

          <OurClients visible={visible} />

          <div
            className={`mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 sw-fade d5 ${visible ? 'on' : ''}`}
          >
            <p className="text-neutral-500 uppercase tracking-[0.3em]" style={{ fontSize: 10 }}>
              © Next Orbit — 2026
            </p>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="group flex items-center gap-3 px-6 py-3 border border-neutral-200 rounded-full hover:border-neutral-400 transition-all duration-300"
            >
              <span
                className="text-neutral-500 group-hover:text-neutral-900 uppercase tracking-[0.25em] transition-colors duration-300"
                style={{ fontSize: 10 }}
              >
                Start a Project
              </span>
              <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors text-xs">
                →
              </span>
            </button>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
