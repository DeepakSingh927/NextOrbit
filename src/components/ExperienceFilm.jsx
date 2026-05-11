import { useState } from 'react';

export default function ExperienceFilm() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="experience-film" className="relative overflow-hidden" style={{ background: '#0B0F19' }}>
      <div style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1600&h=900&fit=crop"
            alt="Cinematic event atmosphere"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(11,15,25,0.85) 0%, rgba(5,5,5,0.7) 50%, rgba(11,15,25,0.95) 100%)',
          }} />
        </div>

        {/* Soundwave Animation */}
        <div style={{
          position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'flex-end', gap: 3, height: 32, opacity: 0.25,
        }}>
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} style={{
              width: 2, borderRadius: 999, height: '100%',
              background: 'linear-gradient(to top, #00B4FF, #8B5CF6)',
              animation: `wave-pulse ${0.8 + Math.random() * 1.2}s ease-in-out ${i * 0.05}s infinite`,
            }} />
          ))}
        </div>

        {/* Center Content */}
        <div className="reveal-scale" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '60px 20px' }}>
          {/* Floating words */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
            {['Emotion', 'Energy', 'Atmosphere'].map((word, i) => (
              <span key={word} style={{
                fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase',
                color: i === 1 ? '#00B4FF' : 'rgba(255,255,255,0.3)',
                animation: `floatSlow ${5 + i}s ease-in-out ${i * 0.5}s infinite`,
                display: 'flex', alignItems: 'center', gap: 24,
              }}>
                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>}
                {word}
              </span>
            ))}
          </div>

          {/* Play Button */}
          <button
            style={{
              position: 'relative', width: 120, height: 120, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer', transition: 'all 0.4s ease', margin: '0 auto',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,180,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)';
              e.currentTarget.style.boxShadow = '0 0 60px rgba(0,180,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => setPlaying(!playing)}
          >
            {/* Pulsing rings */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: '1px solid rgba(0,180,255,0.1)',
              animation: 'pulse-glow 3s ease-in-out infinite',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', inset: -16, borderRadius: '50%',
              border: '1px solid rgba(0,180,255,0.05)',
              animation: 'pulse-glow 3s ease-in-out 0.5s infinite',
              pointerEvents: 'none',
            }} />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4, filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </button>

          <p style={{ marginTop: 40, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            Watch Our Experience Film
          </p>
        </div>
      </div>
    </section>
  );
}
