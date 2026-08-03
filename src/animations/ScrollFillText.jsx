import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollFillText — Awwwards-style liquid scroll-fill text component.
 *
 * Text starts in muted dark gray (#4B5563) and progressively fills with pure white (#FFFFFF)
 * word-by-word with a liquid clip-path sweep as the user scrolls.
 *
 * Features:
 * - Direct scroll position binding via `scrub: true`
 * - Bidirectional (fills on scroll down, reverses on scroll up)
 * - Zero layout shift (dual-layer absolute clip-path overlay)
 * - Works on single-line, multi-line, headings, paragraphs, quotes
 * - Fully responsive & accessible (respects prefers-reduced-motion)
 * - Complete GSAP context cleanup on unmount
 */
export default function ScrollFillText({
  children,
  as: Component = 'p',
  mutedColor = '#4B5563',
  fillColor = '#FFFFFF',
  start = 'top 85%',
  end = 'bottom 50%',
  scrub = 0.8,
  stagger = 0.1,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      container.querySelectorAll('.sft-fill').forEach((el) => {
        el.style.clipPath = 'inset(0 0% 0 0)';
      });
      return;
    }

    const fills = container.querySelectorAll('.sft-fill');
    if (fills.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start,
          end,
          scrub,
        },
      });

      tl.fromTo(
        fills,
        {
          clipPath: 'inset(0 100% 0 0)',
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          stagger,
          ease: 'power1.inOut',
        }
      );
    }, container);

    return () => ctx.revert();
  }, [start, end, scrub, stagger]);

  const text = typeof children === 'string' ? children : String(children ?? '');
  const words = text.split(/\s+/);

  return (
    <Component
      ref={containerRef}
      className={`scroll-fill-text ${className}`}
      style={{
        display: 'inline-block',
        position: 'relative',
        ...style,
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="sft-word-wrap"
          style={{
            position: 'relative',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            marginRight: i < words.length - 1 ? '0.28em' : '0',
          }}
        >
          {/* Base Muted Layer */}
          <span
            className="sft-base"
            style={{
              color: mutedColor,
              display: 'inline-block',
              transition: 'color 0.3s ease',
            }}
          >
            {word}
          </span>

          {/* Liquid Fill Layer (Absolute Overlay) */}
          <span
            className="sft-fill"
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              color: fillColor,
              display: 'inline-block',
              clipPath: 'inset(0 100% 0 0)',
              willChange: 'clip-path',
              pointerEvents: 'none',
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
