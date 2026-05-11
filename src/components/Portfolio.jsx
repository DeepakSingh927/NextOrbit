import { useRef, useState } from 'react';

const projects = [
  { title: 'Orbit X Festival', location: 'Mumbai, India', year: '2024', type: 'Music Festival', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&h=600&fit=crop', color: '#00B4FF' },
  { title: 'Neon Dreams', location: 'Dubai, UAE', year: '2024', type: 'Brand Activation', image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&h=600&fit=crop', color: '#8B5CF6' },
  { title: 'Eclipse Wedding', location: 'Udaipur, India', year: '2023', type: 'Luxury Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=600&fit=crop', color: '#E8E8E8' },
  { title: 'Midnight Aura', location: 'London, UK', year: '2023', type: 'VIP Experience', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&h=600&fit=crop', color: '#00B4FF' },
  { title: 'Infinity Stage', location: 'Goa, India', year: '2024', type: 'Stage Production', image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=900&h=600&fit=crop', color: '#8B5CF6' },
  { title: 'Cosmic Affair', location: 'Singapore', year: '2024', type: 'Corporate Gala', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop', color: '#E8E8E8' },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        flexShrink: 0, position: 'relative', borderRadius: 16, overflow: 'hidden',
        width: 400, height: 500, userSelect: 'none',
        border: `1px solid ${hovered ? project.color + '33' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={project.image} alt={project.title} draggable={false}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.7s', transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }} loading="lazy" />
      <div style={{
        position: 'absolute', inset: 0, transition: 'all 0.5s',
        background: hovered
          ? 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 40%, rgba(5,5,5,0.2) 100%)'
          : 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 50%, rgba(5,5,5,0.1) 100%)',
      }} />

      {/* Top tags */}
      <div style={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <span style={{
          padding: '5px 14px', borderRadius: 999, fontSize: 12, letterSpacing: '0.05em',
          background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)',
        }}>{project.type}</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{project.year}</span>
      </div>

      {/* Bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28, zIndex: 10 }}>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 8,
          transition: 'transform 0.3s', transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}>{project.title}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          {project.location}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: project.color,
          opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.3s',
        }}>
          View Experience
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s',
      }} />
    </div>
  );
}

export default function Portfolio() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.pageX - scrollRef.current.offsetLeft, scrollLeft: scrollRef.current.scrollLeft };
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - (x - dragStart.current.x) * 1.5;
  };

  return (
    <section id="portfolio" className="relative overflow-hidden" style={{ background: '#050505' }}>
      <div style={{ padding: '120px 0 80px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 6%', marginBottom: 48 }}>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
            <div>
              <div className="section-tag" style={{ marginBottom: 20 }}>
                <span className="dot" /> Portfolio
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, color: '#fff' }}>
                Featured <span className="text-gradient-orbital">Experiences</span>
              </h2>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 420 }}>
              Each project is a universe of its own — explore our most impactful creations.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div ref={scrollRef}
          style={{
            display: 'flex', gap: 24, overflowX: 'auto', paddingBottom: 16,
            paddingLeft: '6%', paddingRight: '6%',
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
          }}
          onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} onMouseMove={handleMouseMove}
        >
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>

        {/* Scroll hint */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 32 }}>
          <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            Drag to explore
          </span>
          <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.1)' }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
