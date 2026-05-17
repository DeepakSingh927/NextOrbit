import { useState, useEffect, useRef } from 'react';
import SectionContainer from './SectionContainer';

const testimonials = [
  {
    quote: "NEXTORBIT didn't just plan our event — they created a universe. Every detail was cinematic, every moment unforgettable.",
    author: 'Priya Kapoor', role: 'CMO, Luxe Brands India',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    quote: "Working with NEXTORBIT felt like stepping into the future. Their vision for our product launch was beyond anything we imagined.",
    author: 'Arjun Mehta', role: 'Founder, TechVerse',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    quote: "Our wedding was a dream that even we couldn't have dreamed. NEXTORBIT turned every emotion into pure magic.",
    author: 'Aisha & Rahul', role: 'Eclipse Wedding, Udaipur',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face',
  },
  {
    quote: "The energy at our festival was electric. NEXTORBIT engineered every moment to peak at the right time. Perfect synchrony.",
    author: 'DJ Cosmic', role: 'Orbit X Festival Artist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
  };

  useEffect(() => { startAutoplay(); return () => clearInterval(intervalRef.current); }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute pointer-events-none" style={{
        top: '30%', right: 0, width: 500, height: 500, opacity: 0.03,
        background: 'radial-gradient(circle, #8B5CF6 0%, transparent 60%)',
      }} />

      <SectionContainer width="narrow">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-tag" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
            <span className="dot" /> Testimonials
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700, lineHeight: 1.15, color: '#fff',
          }}>
            Words from our <span className="text-gradient-orbital">orbit</span>
          </h2>
        </div>

        {/* Card container */}
        <div className="reveal-scale" style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <div style={{ position: 'relative', minHeight: 320 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', padding: '40px 32px',
                borderRadius: 24,
                background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,255,255,0.06)',
                opacity: active === i ? 1 : 0,
                transform: active === i ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: active === i ? 'auto' : 'none',
              }}>
                <div style={{ fontSize: 48, fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'rgba(0,180,255,0.15)', lineHeight: 1, marginBottom: 20 }}>"</div>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', marginBottom: 32, maxWidth: 560, fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <img src={t.image} alt={t.author}
                    style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(0,180,255,0.2)' }}
                    loading="lazy" />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{t.author}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 40 }}>
            {testimonials.map((_, i) => (
              <button key={i}
                onClick={() => { setActive(i); startAutoplay(); }}
                style={{
                  width: active === i ? 32 : 8, height: 8, borderRadius: 999, border: 'none', cursor: 'pointer',
                  background: active === i ? 'linear-gradient(90deg, #00B4FF, #8B5CF6)' : 'rgba(255,255,255,0.15)',
                  transition: 'all 0.3s',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
