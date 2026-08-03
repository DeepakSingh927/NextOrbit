import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextSplitReveal({
  children,
  tag: Tag = 'div',
  splitBy = 'words',
  duration = 0.8,
  stagger = 0.05,
  yOffset = 40,
  rotation = 3,
  blur = true,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      container.querySelectorAll('.tsr-unit').forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = 'none';
        el.style.filter = 'none';
      });
      return;
    }

    const units = container.querySelectorAll('.tsr-unit');
    if (units.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    tl.fromTo(
      units,
      {
        opacity: 0,
        y: yOffset,
        rotateX: rotation,
        filter: blur ? 'blur(6px)' : 'none',
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: blur ? 'blur(0px)' : 'none',
        duration,
        stagger,
        ease: 'power3.out',
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [duration, stagger, yOffset, rotation, blur]);

  const text = typeof children === 'string' ? children : String(children ?? '');

  let elements;
  if (splitBy === 'chars') {
    elements = text.split('').map((char, i) => (
      <span
        key={i}
        className="tsr-unit"
        style={{
          display: 'inline-block',
          whiteSpace: char === ' ' ? 'pre' : 'normal',
          opacity: 0,
          willChange: 'transform, opacity, filter',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  } else {
    elements = text.split(/\s+/).map((word, i, arr) => (
      <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
        <span
          className="tsr-unit"
          style={{
            display: 'inline-block',
            opacity: 0,
            willChange: 'transform, opacity, filter',
          }}
        >
          {word}
        </span>
        {i < arr.length - 1 && <span>&nbsp;</span>}
      </span>
    ));
  }

  return (
    <Tag
      ref={containerRef}
      className={`text-split-reveal ${className}`}
      style={{ perspective: '600px', ...style }}
    >
      {elements}
    </Tag>
  );
}
