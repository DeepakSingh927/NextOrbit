import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import logo from '../assets/Picture1.png';
import { scrollToSection } from '../utils/scroll';
import MagneticButton from './animations/MagneticButton';

const LEFT_LINKS = [
  { label: 'Home', route: '/' },
  { label: 'Gallery', route: '/gallery' },
];

const RIGHT_LINKS = [
  { label: 'Team', route: '/team' },
  { label: 'Contact', route: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (link) => {
    setOpen(false);

    if (link.route) {
      navigate(link.route);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: link.sectionId } });
      return;
    }

    scrollToSection(link.sectionId);
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const linkClass =
    'relative text-white/80 hover:text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 tracking-wider uppercase';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500">
      <nav
        className={`w-full transition-all duration-500 border-b ${
          scrolled
            ? 'bg-black/20 backdrop-blur-sm border-white/20 py-3'
            : 'bg-transparent backdrop-blur-[2px] border-white/10 py-4'
        }`}
      >
        <SectionContainer padding="none" className="flex items-center justify-between gap-4">
          <div className="hidden lg:flex items-center gap-3">
            {LEFT_LINKS.map((link) => (
              <MagneticButton key={link.label} strength={0.2}>
                <button
                  type="button"
                  onClick={() => handleNav(link)}
                  className={linkClass}
                >
                  {link.label}
                </button>
              </MagneticButton>
            ))}
          </div>

          <MagneticButton strength={0.25}>
            <Link to="/" onClick={goHome} className="shrink-0 flex items-center justify-center px-3 py-1 group">
              <img
                src={logo}
                alt="Next Orbit"
                className={`w-auto object-contain transition-all duration-500 ${
                  scrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-10'
                } group-hover:scale-105`}
              />
            </Link>
          </MagneticButton>

          <div className="hidden lg:flex items-center gap-3">
            {RIGHT_LINKS.map((link) => (
              <MagneticButton key={link.label} strength={0.2}>
                <button
                  type="button"
                  onClick={() => handleNav(link)}
                  className={linkClass}
                >
                  {link.label}
                </button>
              </MagneticButton>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/15 backdrop-blur-md gap-1.5 border border-white/20 hover:bg-white/25 transition-colors"
          >
            <span className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </SectionContainer>

        {open && (
          <div className="lg:hidden mt-3 py-4 w-full bg-white/15 backdrop-blur-2xl border-t border-white/20">
            <SectionContainer padding="none" className="flex flex-col gap-2">
              {[...LEFT_LINKS, ...RIGHT_LINKS].map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNav(link)}
                  className="text-white text-sm px-5 py-3 rounded-xl text-left hover:bg-white/20 transition-colors uppercase tracking-widest"
                >
                  {link.label}
                </button>
              ))}
            </SectionContainer>
          </div>
        )}
      </nav>
    </header>
  );
}
