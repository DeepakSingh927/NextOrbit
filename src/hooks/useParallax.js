import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useParallax({
  speed = 50,
  direction = 'up',
  start = 'top bottom',
  end = 'bottom top',
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

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
          start,
          end,
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed, direction, start, end]);

  return ref;
}
