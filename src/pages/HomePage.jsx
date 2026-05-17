import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/hero';
import About from '../components/About';
import Footer from '../components/Footer';
import { scrollToSectionAfterNav } from '../utils/scroll';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const timer = scrollToSectionAfterNav(target);
    window.history.replaceState({}, document.title, window.location.pathname);

    return () => clearTimeout(timer);
  }, [location.pathname, location.state?.scrollTo]);

  return (
    <main>
      <HeroSection />
      <About />
      <Footer />
    </main>
  );
}
