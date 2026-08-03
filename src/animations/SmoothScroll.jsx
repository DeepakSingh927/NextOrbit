import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LenisContext } from '../hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroll — site-wide Lenis smooth scroll with GSAP ScrollTrigger integration.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const instance = new Lenis({
      duration: prefersReduced ? 0.01 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !prefersReduced,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = instance;
    setLenis(instance);

    instance.on('scroll', ScrollTrigger.update);

    const tickHandler = (time) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tickHandler);
    gsap.ticker.lagSmoothing(0);

    window.__lenis = instance;

    return () => {
      gsap.ticker.remove(tickHandler);
      instance.destroy();
      window.__lenis = null;
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
