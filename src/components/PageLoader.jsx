import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          setTimeout(() => setHidden(true), 1200);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        opacity: done ? 0 : 1,
        transform: done ? 'scale(1.05)' : 'scale(1)',
        pointerEvents: done ? 'none' : 'all',
      }}
    >
      {/* Orbital rings */}
      <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 40 }}>
        {/* Outer ring */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '1px solid rgba(0, 180, 255, 0.15)',
            borderRadius: '50%',
            animation: 'spin-slow 6s linear infinite',
          }}
        />
        {/* Middle ring */}
        <div
          style={{
            position: 'absolute',
            inset: 15,
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '50%',
            animation: 'counter-spin 4s linear infinite',
          }}
        />
        {/* Inner dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 8,
            height: 8,
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(135deg, #00B4FF, #8B5CF6)',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(0, 180, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
          }}
        />
        {/* Orbiting dot */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            animation: 'spin-slow 3s linear infinite',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              width: 5,
              height: 5,
              transform: 'translate(-50%, -50%)',
              background: '#00B4FF',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(0, 180, 255, 0.6)',
            }}
          />
        </div>
      </div>

      {/* Brand */}
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: '0.15em',
          marginBottom: 32,
          color: '#fff',
        }}
      >
        NEXT
        <span
          style={{
            background: 'linear-gradient(135deg, #00B4FF, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ORBIT
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 200,
          height: 2,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${Math.min(progress, 100)}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #00B4FF, #8B5CF6)',
            borderRadius: 1,
            transition: 'width 0.2s ease',
            boxShadow: '0 0 10px rgba(0, 180, 255, 0.4)',
          }}
        />
      </div>

      {/* Percentage */}
      <div
        style={{
          marginTop: 16,
          fontSize: 12,
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {Math.min(Math.round(progress), 100)}%
      </div>
    </div>
  );
}
