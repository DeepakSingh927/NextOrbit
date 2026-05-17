import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Contact />
      <Footer />
    </main>
  );
}
