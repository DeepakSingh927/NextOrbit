import React from 'react';
import SectionContainer from './SectionContainer';
import ScrollFillText from '../animations/ScrollFillText';

/**
 * Awwwards-style stagger stair-step typography section
 * "Your Event · Our Orbit · Endless Experiences"
 */

const LINES = ['Your Event', 'Our Orbit', 'Endless Experiences'];
const INDENTS = ['ml-0', 'ml-8 sm:ml-16 md:ml-28', 'ml-4 sm:ml-8 md:ml-14'];

export default function ScrollStatementSection() {
  return (
    <section
      id="statement"
      className="relative py-12 sm:py-16 overflow-hidden bg-[#08020f] text-white border-t border-white/10"
    >
      {/* Background ambient glow */}
      <div
        className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.09] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, #00B4FF 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <SectionContainer width="wide" className="relative z-10">
        <div className="px-4 sm:px-6">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00B4FF] animate-pulse" />
            <span className="text-white/70 uppercase tracking-[0.38em] text-[9px] font-mono">
              Our Reach &amp; Trust
            </span>
          </div>

          {/* Stair-step staggered typography */}
          <div className="flex flex-col gap-1 sm:gap-2">
            {LINES.map((line, i) => (
              <div key={line} className={`${INDENTS[i]}`}>
                <ScrollFillText
                  as="div"
                  mutedColor="#2e2e2e"
                  fillColor="#FFFFFF"
                  start={`top ${85 - i * 5}%`}
                  end={`bottom ${50 - i * 5}%`}
                  scrub={0.5}
                  stagger={0.04}
                  className="font-bold tracking-tight leading-[1.1] whitespace-nowrap"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
                    fontStyle: i === 1 ? 'italic' : 'normal',
                  }}
                >
                  {line}
                </ScrollFillText>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
