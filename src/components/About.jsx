import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Events Crafted' },
  { value: 30, suffix: '+', label: 'Cities Worldwide' },
  { value: 0, suffix: '', label: 'Audience Reach', display: '1M+' },
  { value: 50, suffix: '+', label: 'Brand Collabs' },
];

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden" style={{ background: '#050505' }}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00B4FF 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }} />

      <div style={{ padding: '120px 6% 100px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          {/* Top Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', marginBottom: '80px' }}>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '60px', alignItems: 'center' }}>
              
              {/* Left - Content */}
              <div>
                <div className="section-tag" style={{ marginBottom: 20 }}>
                  <span className="dot" />
                  About Us
                </div>
                <h2 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em',
                  color: '#fff', marginBottom: 24,
                }}>
                  We don't follow trends.<br />
                  We <span className="text-gradient-orbital">create orbits</span>.
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', maxWidth: 520, marginBottom: 20 }}>
                  NEXTORBIT is a futuristic experiential event company crafting immersive luxury 
                  experiences for brands, creators, and dreamers. We believe every event should be 
                  a portal — transporting people into worlds they never imagined.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.3)', maxWidth: 520, marginBottom: 36 }}>
                  Our obsession with storytelling, atmosphere, emotion, and sensory design pushes us to 
                  reimagine what events can be.
                </p>

                {/* Pillars */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                  {['Storytelling', 'Atmosphere', 'Innovation', 'Sensory Design'].map((item, i) => (
                    <div key={item} className={`reveal delay-${i + 1}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '12px 16px', borderRadius: 12,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                        background: i % 2 === 0 ? '#00B4FF' : '#8B5CF6',
                        boxShadow: i % 2 === 0 ? '0 0 8px rgba(0,180,255,0.4)' : '0 0 8px rgba(139,92,246,0.4)',
                      }} />
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Cinematic Visual */}
              <div className="reveal-right" style={{ position: 'relative' }}>
                <div style={{
                  position: 'relative', borderRadius: 16, overflow: 'hidden',
                  aspectRatio: '4/5', border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1000&fit=crop"
                    alt="Cinematic event experience"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.1) 40%, rgba(5,5,5,0.3) 100%)',
                  }} />
                  <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Since 2016</div>
                    <div style={{ fontSize: 20, fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: '#fff' }}>
                      Crafting <span className="text-gradient-orbital">Immersive</span> Realities
                    </div>
                  </div>
                </div>

                {/* Floating accent card */}
                <div style={{
                  position: 'absolute', bottom: 16, right: -16,
                  background: 'rgba(11,15,25,0.85)', backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 14, padding: '16px 22px', zIndex: 10,
                  animation: 'floatSlow 6s ease-in-out infinite',
                }}>
                  <div style={{ fontSize: 26, fontFamily: "'Outfit', sans-serif", fontWeight: 700 }} className="text-gradient-orbital">8+</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={`reveal delay-${i + 1}`}
                style={{
                  textAlign: 'center', padding: '32px 20px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,180,255,0.15)';
                  e.currentTarget.style.background = 'rgba(0,180,255,0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}>
                <div className="text-gradient-orbital" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: "'Outfit', sans-serif", fontWeight: 700, marginBottom: 8 }}>
                  {stat.display ? stat.display : <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
