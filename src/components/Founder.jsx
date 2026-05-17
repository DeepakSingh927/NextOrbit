import { useState, useEffect, useRef } from 'react';
import SectionContainer from './SectionContainer';
import founderImg from '../assets/founder.jpg';
import { founderContent as c } from '../content/siteContent';

export default function Founder() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="founder"
      ref={ref}
      className="relative overflow-hidden scroll-mt-24"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <SectionContainer>
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative order-2 lg:order-1">
            <div
              className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden relative"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <img
                src={founderImg}
                alt={c.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(31,3,52,0.85) 0%, transparent 45%)',
                }}
              />
            </div>
            <div
              className="absolute -bottom-4 -right-2 lg:right-8 rounded-xl px-5 py-4"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-white/90 text-sm font-medium">{c.name}</p>
              <p className="text-white/50 text-xs mt-0.5">{c.title}</p>
              <p className="text-white/40 text-xs mt-1">{c.location}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="section-tag mb-6">
              <span className="dot" /> Founder
            </div>
            <h2 className="section-heading mb-6">
              {c.headline.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="accent">{c.headline.split(' ').slice(-1)[0]}</span>
            </h2>
            {c.paragraphs.map((text) => (
              <p
                key={text.slice(0, 40)}
                className="text-white/45 text-sm leading-relaxed mb-5 max-w-lg last:mb-8"
              >
                {text}
              </p>
            ))}

            <div className="flex flex-wrap gap-8 mb-10">
              {c.highlights.map((h) => (
                <div key={h.label}>
                  <p
                    className="text-2xl font-semibold text-gradient-orbital"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {h.value}
                  </p>
                  <p className="text-white/35 text-xs uppercase tracking-widest mt-1">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            <div
              id="company-profile"
              className="rounded-2xl p-6 scroll-mt-24"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                Company Profile
              </p>
              <p className="text-white/55 text-sm leading-relaxed">{c.companyProfile}</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
