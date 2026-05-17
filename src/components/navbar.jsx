import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import logo from '../assets/Picture1.png';
import { scrollToSection } from '../utils/scroll';

const silver = {
  gradient: 'linear-gradient(135deg, #E8E8E8 0%, #A8A8A8 50%, #D0D0D0 100%)',
};

const NAV_LINKS = [
  { label: 'Experiences', sectionId: 'experiences' },
  { label: 'About', sectionId: 'about' },
  { label: 'Founder', route: '/founder' },
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
    'text-black/70 text-sm px-3 py-2 rounded-full transition-colors duration-200 hover:text-black hover:bg-black/5 whitespace-nowrap block w-full text-left lg:w-auto lg:text-center';

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className="py-3 md:py-4"
        style={{
          borderBottom: '0.5px solid rgba(255,255,255,0.08)',
          background: 'rgba(31, 3, 52, 0.92)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <SectionContainer padding="none" className="flex items-center justify-between gap-3">
          <Link to="/" onClick={goHome} className="shrink-0 rounded-lg bg-white px-3 py-2">
            <img src={logo} alt="Next Orbit" className="h-8 sm:h-9 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-1 rounded-full bg-white px-2 py-1.5">
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

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={goContact}
              className="hidden sm:inline-flex text-black text-sm font-medium px-4 py-2 md:px-5 rounded-full hover:opacity-80 transition-opacity"
              style={{ background: silver.gradient }}
            >
              Let&apos;s Talk
            </button>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white gap-1.5"
            >
              <span
                className={`block h-0.5 w-5 bg-black transition-transform duration-200 ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transition-opacity duration-200 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transition-transform duration-200 ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </SectionContainer>

        {open && (
          <div
            className="lg:hidden border-t border-white/10 mt-3 pt-3 pb-2"
            style={{ background: 'rgba(31, 3, 52, 0.98)' }}
          >
            <SectionContainer padding="none" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNav(link)}
                  className="text-white/80 text-sm px-4 py-3 rounded-lg text-left hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={goContact}
                className="mt-2 text-black text-sm font-medium px-4 py-3 rounded-full text-center"
                style={{ background: silver.gradient }}
              >
                Let&apos;s Talk
              </button>
            </SectionContainer>
          </div>
        )}
      </nav>
    </header>
  );
}