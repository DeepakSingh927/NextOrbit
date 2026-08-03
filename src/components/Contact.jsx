import { useState, useRef, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import { contactInfo } from '../content/siteContent';

const eventTypes = ['Corporate Event', 'Brand Activation', 'Music Festival', 'Fashion Show', 'VIP Experience', 'Destination Event', 'Other'];

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
        ctx.fillStyle = `rgba(139,92,246,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.04 * (1 - dist / 100)})`; ctx.stroke();
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
    width: '100%', padding: '14px 18px', fontSize: 14,
    color: '#ffffff',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: 12, outline: 'none',
    transition: 'all 0.3s', fontFamily: "'Inter', sans-serif", boxSizing: 'border-box',
  };
  const inputStyle = (name) => ({
    ...inputBase,
    border: `1px solid ${focused === name ? 'rgba(139,92,246,0.55)' : 'rgba(255,255,255,0.1)'}`,
    boxShadow: focused === name ? '0 0 20px rgba(139,92,246,0.12)' : 'none',
  });

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24" style={{ background: '#08020f' }}>
      <style>{`
        #contact ::placeholder { color: rgba(255,255,255,0.3); }
        #contact select option { background: #1a0a2e; color: #ffffff; }
        .contact-label { font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; display: block; }
      `}</style>

      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3 }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)',
      }} />

      <SectionContainer style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 60, alignItems: 'start' }}>

          {/* Left — contact info */}
          <div className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 99, border: '1px solid rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.08)', marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6', display: 'inline-block' }} />
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Get In Touch</span>
            </div>

            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 700, lineHeight: 1.15, color: '#ffffff', marginBottom: 16,
            }}>
              Launch your next{' '}
              <span style={{ background: 'linear-gradient(135deg,#8B5CF6,#00B4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                orbit
              </span>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 420, marginBottom: 40 }}>
              Ready to create something extraordinary? Tell us about your vision and let's build an experience that transcends the ordinary.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {[
                { label: 'Email', value: contactInfo.email, href: contactInfo.emailHref, icon: '✉️' },
                { label: 'Phone', value: contactInfo.phoneDisplay, href: contactInfo.phoneHref, icon: '📱' },
                { label: 'Location', value: contactInfo.addressLines, href: contactInfo.mapLink, icon: '📍' },
                { label: 'Hours', value: contactInfo.hours, icon: '🕐' },
              ].map(({ label, value, href, icon }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)', flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 3 }}>{label}</div>
                    {Array.isArray(value) ? (
                      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                        {value.map((line, i) => <div key={i}>{line}</div>)}
                      </div>
                    ) : href ? (
                      <a href={href} target="_blank" rel="noreferrer" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                      >{value}</a>
                    ) : (
                      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal-right">
            <div style={{
              borderRadius: 20, padding: '36px 32px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}>
              {/* Map */}
              <div style={{ marginBottom: 28 }}>
                <div className="contact-label">Office Location</div>
                <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <iframe
                    title="Next Orbit Location"
                    src={contactInfo.mapEmbedUrl}
                    loading="lazy"
                    style={{ width: '100%', height: 200, border: 0, display: 'block' }}
                  />
                  <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: 13 }}>
                    {contactInfo.addressLines.map((line, i) => <div key={i}>{line}</div>)}
                    <a href={contactInfo.mapLink} target="_blank" rel="noreferrer"
                      style={{ display: 'inline-block', marginTop: 8, color: '#8B5CF6', textDecoration: 'none', fontSize: 12 }}>
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label className="contact-label">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      style={inputStyle('name')} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="contact-label">Brand</label>
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange}
                      onFocus={() => setFocused('brand')} onBlur={() => setFocused('')}
                      style={inputStyle('brand')} placeholder="Your brand" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label className="contact-label">Budget</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange}
                      onFocus={() => setFocused('budget')} onBlur={() => setFocused('')}
                      style={inputStyle('budget')} placeholder="Estimated budget" />
                  </div>
                  <div>
                    <label className="contact-label">Event Type</label>
                    <select name="eventType" value={formData.eventType} onChange={handleChange}
                      onFocus={() => setFocused('eventType')} onBlur={() => setFocused('')}
                      style={{ ...inputStyle('eventType'), appearance: 'none', cursor: 'pointer' }}>
                      <option value="">Select type</option>
                      {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="contact-label">Message</label>
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
