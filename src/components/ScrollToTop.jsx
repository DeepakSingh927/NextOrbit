import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../utils/scroll';

/** Reset scroll position on every route change (React Router does not do this by default). */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop('instant');
  }, [pathname]);

  return null;
}
