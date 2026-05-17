import { useState, useRef, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import { contactInfo } from '../content/siteContent';

const eventTypes = ['Luxury Wedding', 'Corporate Event', 'Brand Activation', 'Music Festival', 'Fashion Show', 'VIP Experience', 'Destination Event', 'Other'];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', brand: '', budget: '', eventType: '', message: '' });
  const [focused, setFocused] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    document.querySelectorAll('#contact .reveal, #contact .reveal-right').forEach((el) => {
      el.classList.add('visible');
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5, o: Math.random() * 0.2 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,180,255,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,180,255,${0.03 * (1 - dist / 100)})`; ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const inputBase = {
    width: '100%', padding: '14px 18px', fontSize: 14, color: '#fff',
    background: 'rgba(255,255,255,0.03)', borderRadius: 12, outline: 'none',
    transition: 'all 0.3s', fontFamily: "'Inter', sans-serif", boxSizing: 'border-box',
  };
  const inputStyle = (name) => ({
    ...inputBase,
    border: `1px solid ${focused === name ? 'rgba(0,180,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
    boxShadow: focused === name ? '0 0 20px rgba(0,180,255,0.05)' : 'none',
  });

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24" style={{ background: 'var(--bg-primary)' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.1), transparent)',
      }} />

      <SectionContainer style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 60, alignItems: 'start' }}>
          {/* Left */}
          <div className="reveal">
            <div className="section-tag" style={{ marginBottom: 20 }}><span className="dot" /> Get In Touch</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: 24,
            }}>
              Launch your next <span className="text-gradient-orbital">orbit</span>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 450, marginBottom: 40 }}>
              Ready to create something extraordinary? Tell us about your vision and let's build an experience that transcends the ordinary.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { label: 'Email', value: contactInfo.email, href: contactInfo.emailHref, icon: '✉️' },
                { label: 'Phone', value: contactInfo.phoneDisplay, href: contactInfo.phoneHref, icon: '📱' },
                { label: 'Location', value: contactInfo.address, icon: '📍' },
                { label: 'Hours', value: contactInfo.hours, icon: '🕐' },
              ].map(({ label, value, href, icon }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, background: 'rgba(0,180,255,0.06)', border: '1px solid rgba(0,180,255,0.1)', flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{value}</a>
                    ) : (
                      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal-right">
            <div style={{
              borderRadius: 20, padding: '36px 32px',
              background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      style={inputStyle('name')} placeholder="Your name" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>Brand</label>
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange}
                      onFocus={() => setFocused('brand')} onBlur={() => setFocused('')}
                      style={inputStyle('brand')} placeholder="Your brand" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>Budget</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange}
                      onFocus={() => setFocused('budget')} onBlur={() => setFocused('')}
                      style={inputStyle('budget')} placeholder="Estimated budget" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>Event Type</label>
                    <select name="eventType" value={formData.eventType} onChange={handleChange}
                      onFocus={() => setFocused('eventType')} onBlur={() => setFocused('')}
                      style={{ ...inputStyle('eventType'), appearance: 'none', cursor: 'pointer' }}>
                      <option value="" style={{ background: 'var(--bg-primary)' }}>Select type</option>
                      {eventTypes.map(t => <option key={t} value={t} style={{ background: 'var(--bg-primary)' }}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>Message</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                    style={{ ...inputStyle('message'), resize: 'none' }} placeholder="Tell us about your vision..." />
                </div>

                <button type="submit" className="btn-glow btn-glow-primary" style={{
                  width: '100%', justifyContent: 'center', fontSize: 14, cursor: 'pointer', marginTop: 4,
                }}>
                  Launch Your Next Orbit
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
