import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

function revealElementsInView() {
  document.querySelectorAll(SELECTOR).forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
}

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -24px 0px' }
    );

    const mount = setTimeout(() => {
      document.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el));
      revealElementsInView();
    }, 80);

    return () => {
      clearTimeout(mount);
      observer.disconnect();
    };
  }, [pathname]);
}
