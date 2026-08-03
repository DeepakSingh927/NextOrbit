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

const HASHTAGS = [
  '#SocialMedia',
  '#LiveEvents',
  '#Culture',
  '#Campaign',
  '#ContentProduction',
  '#LuxuryWeddings',
  '#BrandActivations',
  '#MusicFestivals',
  '#StageProduction',
  '#VIPExperiences',
  '#DestinationEvents',
  '#ExperientialDesign',
  '#NextOrbit',
];

function LogoChip({ logo }) {
  return (
    <div className="shrink-0 px-4 sm:px-8">
      <div className="flex items-center justify-center h-12 sm:h-16 px-2">
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          decoding="async"
          className="max-h-10 sm:max-h-12 w-auto object-contain brightness-0 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default function OurClients({ visible = true }) {
  return (
    <>
      <style>{`
        .clients-marquee-single {
          display: flex;
          width: max-content;
          align-items: center;
          animation: clients-scroll-forward 45s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        .hashtag-marquee-single {
          display: flex;
          width: max-content;
          align-items: center;
          animation: clients-scroll-reverse 35s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        @keyframes clients-scroll-forward {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes clients-scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      {/* Brand Section matching user screenshot: Card container with 1 brand row + bottom opposite hashtag bar */}
      <section
        id="our-clients"
        className={`w-full py-12 sm:py-20 bg-[#08020f] text-white overflow-hidden transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Card Container matching the screenshot */}
          <div className="rounded-2xl sm:rounded-3xl bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            
            {/* Top Logo Section - Single Row (Continuous, No Hover Stop) */}
            <div className="py-8 sm:py-12 relative overflow-hidden bg-white">
              {/* Soft side gradient masks */}
              <div
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10"
                style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
              />
              <div
                className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10"
                style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
              />

              <div className="clients-marquee-single">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <LogoChip key={`${logo.src}-${i}`} logo={logo} />
                ))}
              </div>
            </div>

            {/* Bottom Hashtag Bar - Moving in Opposite Direction */}
            <div
              className="py-3 sm:py-3.5 relative overflow-hidden border-t border-black/5"
              style={{
                background: 'linear-gradient(90deg, #4ef0c4 0%, #4a90e2 50%, #7b61ff 100%)',
              }}
            >
              <div className="hashtag-marquee-single">
                {[...HASHTAGS, ...HASHTAGS, ...HASHTAGS, ...HASHTAGS].map((tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className="inline-block px-5 sm:px-8 text-black font-semibold text-xs sm:text-sm font-mono whitespace-nowrap tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
