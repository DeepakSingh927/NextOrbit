import { useState } from 'react';
import SectionContainer from './SectionContainer';

const divisions = [
  {
    id: 'orbit-lab', tag: 'Orbit Lab', title: 'Experimental Creative Concepts',
    desc: 'Where imagination has no ceiling. Our lab is a playground for pushing creative boundaries — testing new formats, technologies, and experiential ideas.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop',
    color: '#00B4FF',
    features: ['Concept Prototyping', 'Creative R&D', 'Format Innovation'],
  },
  {
    id: 'afterdark', tag: 'NextOrbit AfterDark', title: 'Nightlife & Music Events',
    desc: 'The pulse of the night. Our AfterDark division curates electrifying nightlife experiences — from underground sets to rooftop takeovers.',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=500&fit=crop',
    color: '#8B5CF6',
    features: ['Club Nights', 'Festival Afterparties', 'DJ Residencies'],
  },
  {
    id: 'immersive-tech', tag: 'Immersive Tech', title: 'Interactive Installations',
    desc: 'Where art meets technology. We design interactive installations using projection mapping, AR/VR, and generative art — transforming spaces into living canvases.',
    image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=800&h=500&fit=crop',
    color: '#00B4FF',
    features: ['Projection Mapping', 'AR/VR Experiences', 'Generative Art'],
  },
  {
    id: 'destinations', tag: 'Destination Experiences', title: 'Luxury Destination Events',
    desc: 'The world is our stage. We orchestrate unforgettable events in breathtaking locations — from palace courtyards to cliffside venues.',
    image: 'https://images.unsplash.com/photo-1519167758481-dc8986ba6c28?w=800&h=500&fit=crop',
    color: '#8B5CF6',
    features: ['Palace Venues', 'Beach Celebrations', 'Mountain Retreats'],
  },
];

function DivisionCard({ div, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="reveal" style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
      gap: 48, alignItems: 'center', marginBottom: 80,
      transitionDelay: `${index * 0.1}s`,
    }}>
      {/* Image */}
      <div style={{
        position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '16/10',
        order: isEven ? 0 : 1,
        border: `1px solid ${hovered ? div.color + '33' : 'rgba(255,255,255,0.06)'}`,
        transition: 'border-color 0.4s',
      }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <img src={div.image} alt={div.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.7s', transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${div.color}15 0%, rgba(5,5,5,0.5) 100%)` }} />
        <div style={{
          position: 'absolute', top: 20, left: 20,
          padding: '5px 14px', borderRadius: 999, fontSize: 12,
          background: div.color + '20', color: div.color, border: `1px solid ${div.color}30`,
        }}>{div.tag}</div>
      </div>

      {/* Content */}
      <div style={{ order: isEven ? 1 : 0 }}>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 700, color: '#fff', marginBottom: 16,
        }}>{div.title}</h3>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>{div.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
          {div.features.map(f => (
            <span key={f} style={{
              padding: '6px 14px', borderRadius: 999, fontSize: 12,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.5)',
            }}>{f}</span>
          ))}
        </div>
        <button className="btn-glow btn-glow-outline" style={{
          fontSize: 13, borderColor: div.color + '40', color: div.color, cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          Explore {div.tag}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function SpecialSections() {
  return (
    <section id="divisions" className="relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute pointer-events-none" style={{
        top: '25%', right: 0, width: 500, height: 500, opacity: 0.02,
        background: 'radial-gradient(circle, #00B4FF 0%, transparent 60%)',
      }} />

      <SectionContainer>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="section-tag" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
            <span className="dot" /> Divisions
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: 20,
          }}>
            Our creative <span className="text-gradient-orbital">universes</span>
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 520, margin: '0 auto' }}>
            Specialized divisions dedicated to pushing the boundaries of experiential design.
          </p>
        </div>
        {divisions.map((div, i) => <DivisionCard key={div.id} div={div} index={i} />)}
      </SectionContainer>
    </section>
  );
}
