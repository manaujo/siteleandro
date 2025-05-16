import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Smart Clean - Especialistas em Ar Condicionado';
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;