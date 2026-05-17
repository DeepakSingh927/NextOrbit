import SectionContainer from './SectionContainer';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Deep-dive into your vision, audience, and goals to understand the essence of your event.', icon: '🔍' },
  { num: '02', title: 'Concept Creation', desc: 'We craft a bold creative concept — a narrative that defines every element of the experience.', icon: '💡' },
  { num: '03', title: 'Experience Design', desc: 'Every touchpoint is designed — from spatial layouts to sensory triggers and emotional arcs.', icon: '✨' },
  { num: '04', title: 'Production', desc: 'Our world-class production team brings the design to life with precision engineering.', icon: '⚙️' },
  { num: '05', title: 'Execution', desc: 'Flawless real-time orchestration ensuring every moment unfolds exactly as envisioned.', icon: '🚀' },
  { num: '06', title: 'Impact', desc: 'We measure the resonance — audience emotion, brand impact, and lasting cultural imprint.', icon: '💫' },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute pointer-events-none" style={{
        top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, opacity: 0.03,
        background: 'radial-gradient(circle, #00B4FF 0%, transparent 60%)',
      }} />

      <SectionContainer width="narrow">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="section-tag" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
            <span className="dot" /> Our Process
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: 20,
          }}>
            How we create <span className="text-gradient-orbital">orbits</span>
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 480, margin: '0 auto' }}>
            A meticulous six-phase journey from concept to cultural impact.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(0,180,255,0.15), rgba(139,92,246,0.15), transparent)',
          }} />

          {steps.map((step, i) => (
            <div key={step.num} className="reveal"
              style={{
                position: 'relative', display: 'flex', alignItems: 'flex-start',
                marginBottom: i === steps.length - 1 ? 0 : 52,
                paddingLeft: 64,
                transitionDelay: `${i * 0.1}s`,
              }}>
              
              {/* Dot on timeline — vertically centered with title */}
              <div style={{
                position: 'absolute', left: 13, top: 6,
                width: 14, height: 14, borderRadius: '50%', zIndex: 10,
                background: i % 2 === 0 ? '#00B4FF' : '#8B5CF6',
                boxShadow: i % 2 === 0
                  ? '0 0 12px rgba(0,180,255,0.4)'
                  : '0 0 12px rgba(139,92,246,0.4)',
              }} />
              <div style={{
                position: 'absolute', left: 6, top: -1,
                width: 28, height: 28, borderRadius: '50%',
                border: `1px solid ${i % 2 === 0 ? 'rgba(0,180,255,0.12)' : 'rgba(139,92,246,0.12)'}`,
              }} />

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: i % 2 === 0 ? 'rgba(0,180,255,0.5)' : 'rgba(139,92,246,0.5)' }}>
                    {step.num}
                  </span>
                  <span style={{ fontSize: 18 }}>{step.icon}</span>
                </div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 600,
                  color: '#fff', marginBottom: 8,
                }}>{step.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.38)', maxWidth: 480 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
