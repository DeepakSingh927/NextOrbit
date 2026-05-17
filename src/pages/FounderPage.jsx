import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Founder from '../components/Founder';
import Footer from '../components/Footer';
import { scrollToSectionAfterNav } from '../utils/scroll';

export default function FounderPage() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const timer = scrollToSectionAfterNav(target);
    return () => clearTimeout(timer);
  }, [location.pathname, location.state?.scrollTo]);

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Founder />
      <Footer />
    </main>
  );
}
