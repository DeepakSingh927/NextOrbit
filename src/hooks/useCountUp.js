import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function useCountUp({
  target,
  duration = 2,
  ease = 'power2.out',
} = {}) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const str = String(target);
    const match = str.match(/^([\d,.]+)(.*)/);
    if (!match) {
      setDisplayValue(str);
      return;
    }
    const numericTarget = parseFloat(match[1].replace(/,/g, ''));
    const suffix = match[2] || '';
    const hasDecimal = match[1].includes('.');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          if (prefersReduced) {
            setDisplayValue(str);
            return;
          }

          const obj = { val: 0 };
          gsap.to(obj, {
            val: numericTarget,
            duration,
            ease,
            onUpdate: () => {
              const formatted = hasDecimal
                ? obj.val.toFixed(1)
                : Math.round(obj.val).toLocaleString();
              setDisplayValue(formatted + suffix);
            },
            onComplete: () => {
              setDisplayValue(str);
            },
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, ease]);

  return { ref, displayValue };
}
