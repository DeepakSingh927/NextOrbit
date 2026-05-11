const brands = [
  { name: 'Louis Vuitton', category: 'Fashion' },
  { name: 'Apple', category: 'Tech' },
  { name: 'Rolls Royce', category: 'Luxury' },
  { name: 'Spotify', category: 'Music' },
  { name: 'Gucci', category: 'Fashion' },
  { name: 'Tesla', category: 'Tech' },
  { name: 'Bulgari', category: 'Luxury' },
  { name: 'Warner Music', category: 'Music' },
  { name: 'Dior', category: 'Fashion' },
  { name: 'Google', category: 'Tech' },
  { name: 'Marriott', category: 'Hospitality' },
  { name: 'Adidas', category: 'Lifestyle' },
  { name: 'Prada', category: 'Fashion' },
  { name: 'Samsung', category: 'Tech' },
  { name: 'Taj Hotels', category: 'Hospitality' },
  { name: 'Nike', category: 'Lifestyle' },
];

function BrandLogo({ brand }) {
  return (
    <div style={{
      flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px 40px', margin: '0 12px', borderRadius: 12,
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
      minWidth: 180, transition: 'all 0.4s ease', cursor: 'default',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(0,180,255,0.04)';
        e.currentTarget.style.borderColor = 'rgba(0,180,255,0.15)';
        e.currentTarget.querySelector('.brand-name').style.color = 'rgba(255,255,255,0.8)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
        e.currentTarget.querySelector('.brand-name').style.color = 'rgba(255,255,255,0.2)';
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div className="brand-name" style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 600,
          letterSpacing: '0.05em', color: 'rgba(255,255,255,0.2)', transition: 'color 0.3s',
        }}>{brand.name}</div>
        <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.1)', marginTop: 4 }}>
          {brand.category}
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  const row1 = brands.slice(0, 8);
  const row2 = brands.slice(8, 16);

  return (
    <section id="clients" className="relative overflow-hidden" style={{ background: '#050505', padding: '100px 0' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
      }} />

      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 6%', marginBottom: 56 }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
            <span className="dot" /> Trusted By
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700, lineHeight: 1.15, color: '#fff',
          }}>
            Brands that <span className="text-gradient-orbital">orbit</span> with us
          </h2>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 24 }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 10, background: 'linear-gradient(to right, #050505, transparent)' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 10, background: 'linear-gradient(to left, #050505, transparent)' }} />
        <div className="marquee-track">
          {[...row1, ...row1].map((b, i) => <BrandLogo key={`${b.name}-${i}`} brand={b} />)}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 10, background: 'linear-gradient(to right, #050505, transparent)' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 10, background: 'linear-gradient(to left, #050505, transparent)' }} />
        <div className="marquee-track-reverse">
          {[...row2, ...row2].map((b, i) => <BrandLogo key={`${b.name}-r-${i}`} brand={b} />)}
        </div>
      </div>
    </section>
  );
}
