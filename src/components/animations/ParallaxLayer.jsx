import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxLayer({
  children,
  speed = 50,
  direction = 'up',
  className = '',
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 768;
    const distance = isMobile ? speed * 0.3 : speed;
    const yTo = direction === 'up' ? -distance : distance;

    const tween = gsap.fromTo(
      el,
      { y: -yTo },
      {
        y: yTo,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed, direction]);

  return (
    <div
      ref={ref}
      className={`parallax-layer ${className}`}
      style={{ willChange: 'transform', ...style }}
    >
      {children}
    </div>
  );
}
