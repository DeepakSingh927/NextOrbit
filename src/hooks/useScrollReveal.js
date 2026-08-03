import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll(SELECTOR);

      elements.forEach((el) => {
        const isRight = el.classList.contains('reveal-right');
        const isLeft = el.classList.contains('reveal-left');
        const isScale = el.classList.contains('reveal-scale');

        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: isRight || isLeft ? 0 : 35,
            x: isRight ? 35 : isLeft ? -35 : 0,
            scale: isScale ? 0.94 : 1,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);
}
