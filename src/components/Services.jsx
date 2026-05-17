import { useState } from 'react';
import SectionContainer from './SectionContainer';

const services = [
  { title: 'Luxury Weddings', desc: 'Opulent celebrations that transcend the ordinary — from intimate ceremonies to grand spectacles.', icon: '💎', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop' },
  { title: 'Corporate Events', desc: 'Strategic brand experiences that inspire, connect, and drive measurable business impact.', icon: '🏛️', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop' },
  { title: 'Brand Activations', desc: 'Immersive touchpoints that forge lasting emotional connections between brands and audiences.', icon: '⚡', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop' },
  { title: 'Music Festivals', desc: 'Epic sonic landscapes where sound, light, and energy collide in euphoric harmony.', icon: '🎵', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop' },
  { title: 'Stage Production', desc: 'World-class production design — from conceptual stages to jaw-dropping technical execution.', icon: '🎭', image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&h=400&fit=crop' },
  { title: 'Artist Management', desc: 'End-to-end talent coordination ensuring flawless performances and unforgettable moments.', icon: '🌟', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop' },
  { title: 'Event Marketing', desc: 'Strategic campaigns that build anticipation, drive engagement, and amplify reach.', icon: '📡', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop' },
  { title: 'Experiential Installations', desc: 'Interactive environments that blur the line between art, technology, and human experience.', icon: '🔮', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop' },
  { title: 'Destination Events', desc: "Luxury destination experiences crafted in the world's most breathtaking locations.", icon: '🌍', image: 'https://images.unsplash.com/photo-1519167758481-dc8986ba6c28?w=600&h=400&fit=crop' },
  { title: 'Fashion Shows', desc: 'Runway productions that merge couture elegance with cutting-edge theatrical design.', icon: '👗', image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop' },
  { title: 'VIP Experiences', desc: 'Exclusive, bespoke gatherings designed for the most discerning clientele.', icon: '🥂', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop' },
  { title: 'Digital Campaigns', desc: 'Virtual and hybrid event solutions powered by innovative digital platforms.', icon: '💻', image: 'https://images.unsplash.com/photo-1550305080-4e029753abcf?w=600&h=400&fit=crop' },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{
        position: 'relative', borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
        background: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(0,180,255,0.2)' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image on hover */}
      <div style={{
        position: 'absolute', inset: 0, transition: 'opacity 0.7s',
        opacity: hovered ? 0.12 : 0,
      }}>
        <img src={service.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
      </div>

      {/* Glow */}
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 160, height: 160, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,255,0.15) 0%, transparent 70%)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 10, padding: '28px 24px 24px' }}>
        {/* Icon */}
        <div style={{
          fontSize: 30, marginBottom: 20,
          transition: 'transform 0.5s',
          transform: hovered ? 'scale(1.15) translateY(-3px)' : 'scale(1)',
        }}>
          {service.icon}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 600,
          marginBottom: 12, color: hovered ? '#fff' : 'rgba(255,255,255,0.85)',
          transition: 'color 0.3s',
        }}>
          {service.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.38)', marginBottom: 20 }}>
          {service.desc}
        </p>

        {/* Arrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, fontSize: 11,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: hovered ? '#00B4FF' : 'rgba(255,255,255,0.2)',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'all 0.3s',
        }}>
          Learn More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Bottom glow line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, #00B4FF, #8B5CF6, transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s',
      }} />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-1/2 left-1/2 pointer-events-none" style={{
        transform: 'translate(-50%, -50%)', width: 800, height: 800, opacity: 0.03,
        background: 'radial-gradient(circle, #8B5CF6 0%, transparent 60%)',
      }} />

      <SectionContainer width="wide">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-tag" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
            <span className="dot" /> What We Do
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: 20,
          }}>
            Services designed for the<br /><span className="text-gradient-orbital">extraordinary</span>
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 520, margin: '0 auto' }}>
            From concept to execution, we offer a full spectrum of experiential services 
            that push the boundaries of what's possible.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
