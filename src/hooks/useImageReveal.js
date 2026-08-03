import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useImageReveal({
  direction = 'bottom',
  duration = 1.2,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const clipFrom = {
      left: 'inset(0 100% 0 0)',
      right: 'inset(0 0 0 100%)',
      bottom: 'inset(100% 0 0 0)',
      top: 'inset(0 0 100% 0)',
    }[direction];

    gsap.set(el, {
      clipPath: clipFrom,
      scale: 1.08,
      filter: 'blur(4px)',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    tl.to(el, {
      clipPath: 'inset(0 0 0 0)',
      scale: 1,
      filter: 'blur(0px)',
      duration,
      ease: 'power3.inOut',
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [direction, duration]);

  return ref;
}
