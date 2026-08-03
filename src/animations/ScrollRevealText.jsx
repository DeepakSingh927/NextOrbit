import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealText({
  children,
  tag: Tag = 'span',
  fromColor = 'rgba(255,255,255,0.15)',
  toColor = '#ffffff',
  start = 'top 80%',
  end = 'top 20%',
  stagger = 0.03,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      container.querySelectorAll('.srt-char').forEach((ch) => {
        ch.style.color = toColor;
      });
      return;
    }

    const chars = container.querySelectorAll('.srt-char');
    if (chars.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start,
        end,
        scrub: 0.5,
      },
    });

    tl.fromTo(
      chars,
      { color: fromColor },
      {
        color: toColor,
        stagger,
        ease: 'none',
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [fromColor, toColor, start, end, stagger]);

  const text = typeof children === 'string' ? children : String(children ?? '');
  const chars = text.split('').map((char, i) => (
    <span
      key={i}
      className="srt-char"
      style={{
        color: fromColor,
        display: 'inline-block',
        whiteSpace: char === ' ' ? 'pre' : 'normal',
        willChange: 'color',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <Tag
      ref={containerRef}
      className={`scroll-reveal-text ${className}`}
      style={{ display: 'inline', ...style }}
    >
      {chars}
    </Tag>
  );
}
