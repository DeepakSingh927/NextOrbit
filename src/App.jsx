import React, { useEffect } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ExperienceFilm from './components/ExperienceFilm';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Gallery from './components/Gallery';
import SpecialSections from './components/SpecialSections';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  // Re-observe on dynamic content changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        .forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <PageLoader />
      <CustomCursor />
      <main>
        <HeroSection />
        <About />
        {/*  <Services />
        <Portfolio />
        <ExperienceFilm />
        <Clients />
        <Testimonials />
        <Process />
        <Gallery />
        <SpecialSections />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;