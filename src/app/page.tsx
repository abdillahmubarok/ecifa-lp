import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Focus from '@/components/landing/Focus';
import Strengths from '@/components/landing/Strengths';
import Publications from '@/components/landing/Publications';
import CollaborationCTA from '@/components/landing/CollaborationCTA';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Focus />
        <Strengths />
        <Publications />
        <CollaborationCTA />
      </main>
      <Footer />
    </div>
  );
}
