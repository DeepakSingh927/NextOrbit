import { useState } from 'react';

const images = [
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=900&fit=crop', label: 'Crowd Energy', tall: true },
  { src: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&h=400&fit=crop', label: 'Stage Lighting' },
  { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop', label: 'Artist Performance' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=900&fit=crop', label: 'Luxury Decor', tall: true },
  { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop', label: 'Atmosphere' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop', label: 'Corporate Gala' },
  { src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop', label: 'Backstage' },
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop', label: 'Activation' },
];

function GalleryItem({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', borderRadius: 14, cursor: 'pointer',
      height: item.tall ? 420 : 200,
      gridRow: item.tall ? 'span 2' : 'span 1',
      border: `1px solid ${hovered ? 'rgba(0,180,255,0.15)' : 'rgba(255,255,255,0.04)'}`,
      transition: 'border-color 0.3s',
    }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={item.src} alt={item.label}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transition: 'transform 0.7s', transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }} loading="lazy" />
      <div style={{
        position: 'absolute', inset: 0, transition: 'background 0.5s',
        background: hovered ? 'rgba(5,5,5,0.55)' : 'rgba(5,5,5,0.15)',
      }} />
      <div style={{
        position: 'absolute', bottom: 16, left: 16, zIndex: 10,
        opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.3s',
      }}>
        <div style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{item.label}</div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden" style={{ background: '#0B0F19' }}>
      <div style={{ padding: '120px 6%', maxWidth: 1400, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-tag" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
            <span className="dot" /> Gallery
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: 20,
          }}>
            Immersive <span className="text-gradient-orbital">Moments</span>
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 480, margin: '0 auto' }}>
            A visual journey through our most captivating experiences.
          </p>
        </div>

        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gridAutoRows: '200px',
          gap: 16,
        }}>
          {images.map((img, i) => <GalleryItem key={i} item={img} />)}
        </div>
      </div>
    </section>
  );
}
