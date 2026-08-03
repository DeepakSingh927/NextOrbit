import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollProgress — thin gradient progress bar at the very top of the viewport.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      bar.style.display = 'none';
      return;
    }

    gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      ScrollTrigger.getAll()
        .filter((st) => st.vars?.trigger === document.documentElement)
        .forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress-bar"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, #00B4FF, #8B5CF6, #6D28D9)',
        transformOrigin: 'left center',
        transform: 'scaleX(0)',
        zIndex: 99998,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  );
}
