import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import logo from '../assets/Picture1.png';
import { scrollToSection } from '../utils/scroll';

const silver = {
  gradient: 'linear-gradient(135deg, #E8E8E8 0%, #A8A8A8 50%, #D0D0D0 100%)',
};

const NAV_LINKS = [
  { label: 'Home', route: '/' },
  { label: 'Gallery', route: '/gallery' },
  { label: 'Team', route: '/team' },
  { label: 'Contact', route: '/contact' },
  { label: 'Company Profile', route: '/founder', scrollTo: 'company-profile' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (link) => {
    setOpen(false);

    if (link.route) {
      navigate(link.route, link.scrollTo ? { state: { scrollTo: link.scrollTo } } : undefined);
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

  const goContact = () => {
    setOpen(false);
    navigate('/contact');
  };

  const linkClass =
    'text-white/90 text-sm px-3 py-2 rounded-full transition-colors duration-200 hover:text-[#00B4FF] hover:bg-white/10 whitespace-nowrap block w-full text-left lg:w-auto lg:text-center';

  return (
    <header className="sticky top-0 z-50 w-full pointer-events-none">
      <nav
        className="pointer-events-auto w-full"
        style={{
          padding: '6px 0',
          background: 'linear-gradient(90deg, rgba(31,3,52,0.9), rgba(31,3,52,0.6))',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <SectionContainer padding="none" className="flex items-center justify-between gap-3">
          <Link to="/" onClick={goHome} className="shrink-0 rounded-lg px-2 py-1 flex items-center gap-2">
            <img src={logo} alt="Next Orbit" className="h-8 sm:h-9 w-auto object-contain" style={{ filter: 'invert(1) brightness(2)' }} />
           </Link>

          {/* left spacer kept for layout */}
          <div className="flex-1" />

          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden lg:flex items-center gap-1 px-2 py-1.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNav(link)}
                  className={linkClass}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/6 gap-1.5 border border-white/6"
            >
              <span
                className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </SectionContainer>

        {open && (
          <div className="lg:hidden mt-2 pt-2 pb-2 w-full" style={{ background: 'linear-gradient(180deg, rgba(31,3,52,0.9), rgba(31,3,52,0.86))' }}>
            <SectionContainer padding="none" className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNav(link)}
                  className="text-white/90 text-sm px-4 py-3 rounded-lg text-left hover:bg-white/6 transition-colors"
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