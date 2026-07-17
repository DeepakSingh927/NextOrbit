import { useState } from 'react';

const clientLogos = Object.entries(
  import.meta.glob('../assets/clients/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  })
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  )
  .map(([path, src]) => {
    const file = path.split('/').pop() ?? 'Client';
    const name = file.replace(/\.[^.]+$/, '').replace(/^Picture/i, 'Client ');
    return { src, name };
  });

function splitLogos(list, parts) {
  const chunk = Math.ceil(list.length / parts);
  return Array.from({ length: parts }, (_, i) =>
    list.slice(i * chunk, (i + 1) * chunk)
  ).filter((row) => row.length > 0);
}

const [rowA, rowB, orbitRow] =
  clientLogos.length > 0
    ? splitLogos(clientLogos, 3)
    : [[], [], []];

function LogoChip({ logo, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="clients-chip shrink-0 px-1"
      style={{ animationDelay: `${(index % 8) * 0.35}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`client-logo-card relative flex items-center justify-center rounded-2xl transition-all duration-500 ${
          hovered ? 'is-hovered' : ''
        }`}
        style={{
          background: hovered ? '#f7feff' : '#ffffff',
          border: `1px solid ${hovered ? 'rgba(0, 180, 255, 0.5)' : 'rgba(255, 255, 255, 0.16)'}`,
          boxShadow: hovered
            ? '0 14px 36px rgba(0, 180, 255, 0.18), 0 0 0 1px rgba(0, 180, 255, 0.2)'
            : '0 4px 16px rgba(0, 0, 0, 0.16)',
          minWidth: 88,
          maxWidth: 160,
          height: 64,
          padding: '10px 16px',
          transition: 'all 0.5s ease',
        }}
      >
        <div
          className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-12 rounded-full transition-opacity duration-500"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), transparent)',
            opacity: hovered ? 1 : 0.5,
          }}
        />
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          decoding="async"
          className="client-logo-img"
        />
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, duration = '38s' }) {
  if (!items.length) return null;
  const trackClass = reverse ? 'clients-marquee-reverse' : 'clients-marquee';
  return (
    <div className="clients-marquee-row relative py-2">
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10"
        style={{ background: 'linear-gradient(to right, #1F0334, transparent)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10"
        style={{ background: 'linear-gradient(to left, #1F0334, transparent)' }}
      />
      <div className={trackClass} style={{ animationDuration: duration }}>
        {[...items, ...items].map((logo, i) => (
          <LogoChip key={`${logo.src}-${i}`} logo={logo} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function OurClients({ visible = true }) {
  return (
    <>
      <style>{`
        .clients-marquee {
          display: flex;
          width: max-content;
          gap: 1rem;
          animation: clients-scroll 38s linear infinite;
        }
        .clients-marquee-reverse {
          display: flex;
          width: max-content;
          gap: 1rem;
          animation: clients-scroll-reverse 44s linear infinite;
        }
        .clients-marquee:hover,
        .clients-marquee-reverse:hover {
          animation-play-state: paused;
        }
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes clients-scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .clients-marquee-row {
          overflow-x: clip;
          padding-top: 0.1rem;
          padding-bottom: 0.15rem;
        }
        .clients-marquee,
        .clients-marquee-reverse {
          align-items: center;
          padding-block: 0.15rem;
        }
        .clients-chip {
          animation: clients-float 5s ease-in-out infinite;
          padding: 2px 0;
        }
        @keyframes clients-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .client-logo-card {
          transform: scale(1);
          transform-origin: center center;
          will-change: transform;
        }
        .client-logo-card.is-hovered {
          transform: scale(1.04);
          filter: drop-shadow(0 0 12px rgba(0, 180, 255, 0.2));
        }
        .client-logo-img {
          display: block;
          max-height: 48px;
          max-width: 160px;
          width: auto;
          height: auto;
          object-fit: contain;
          object-position: center;
          transition: transform 0.35s ease;
        }
        .client-logo-card.is-hovered .client-logo-img {
          max-height: 52px;
          filter: drop-shadow(0 0 6px rgba(0, 180, 255, 0.25));
        }
        .clients-orbit-ring {
          animation: clients-orbit-spin 24s linear infinite;
        }
        @keyframes clients-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div
        id="our-clients"
        className={`mt-0 py-4 scroll-mt-24 overflow-visible transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ background: '#1F0334' }}
      >
        <div className="text-center mb-4 px-2">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-white/15 bg-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
            <span className="text-white/80 uppercase tracking-[0.35em]" style={{ fontSize: 9 }}>
              Our Clients
            </span>
          </div>
          <h3
            className="text-white font-semibold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            }}
          >
            Brands in <span className="italic text-white/70">our orbit</span>
          </h3>
          <p className="text-white/70 text-[11px] mt-2 max-w-md mx-auto tracking-wide">
            Trusted by leading brands across fashion, tech, hospitality, and more
          </p>
        </div>

        {clientLogos.length === 0 ? (
          <p className="text-center text-neutral-600 text-sm">Add logos to src/assets/clients/</p>
        ) : (
          <>
            <div className="relative mb-0 py-0">
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
                aria-hidden
              >
                <div className="clients-orbit-ring w-[min(90%,520px)] h-[min(90%,120px)] rounded-[50%] border border-dashed border-neutral-300" />
              </div>
              <MarqueeRow items={orbitRow} duration="28s" />
            </div>

            <MarqueeRow items={rowA} duration="36s" />
            <MarqueeRow items={rowB} reverse duration="42s" />
          </>
        )}
      </div>
    </>
  );
}
