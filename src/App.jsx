import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useScrollReveal from './hooks/useScrollReveal';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import FounderPage from './pages/FounderPage';
import ContactPage from './pages/ContactPage';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <>
      <PageLoader />
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/gallery/:project?"
          element={
            <main>
              <Gallery />
              <Footer />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
