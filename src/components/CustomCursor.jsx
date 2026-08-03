import { useEffect, useRef } from 'react';
import CursorParticles from './animations/CursorParticles';

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    let mouseX = -100, mouseY = -100;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      }
    };

    const addHover = () => dot?.classList.add('dot-hover');
    const removeHover = () => dot?.classList.remove('dot-hover');

    document.addEventListener('mousemove', move, { passive: true });

    const observeElements = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    observeElements();

    const observer = new MutationObserver(observeElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <CursorParticles />
      <div ref={dotRef} className="cursor-dot hidden md:block" />
    </>
  );
}
