import React, { useState, useEffect } from 'react';
import { Snowflake } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 
      ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-3 rounded-full">
            <Snowflake size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold text-blue-800">Smart Clean</span>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-blue-800 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) menu.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['inicio', 'quem-somos', 'servicos', 'funcionalidades', 'agende', 'contato'].map((id, index) => (
            <button 
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-blue-800 hover:text-blue-600 transition-colors"
            >
              {['Início', 'Quem Somos', 'Serviços', 'Funcionalidades', 'Agende uma Visita', 'Contato'][index]}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg">
        <div className="flex flex-col p-4 space-y-4">
          {['inicio', 'quem-somos', 'servicos', 'funcionalidades', 'agende', 'contato'].map((id, index) => (
            <button 
              key={id}
              onClick={() => {
                scrollToSection(id);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-blue-800 hover:text-blue-600 transition-colors p-2"
            >
              {['Início', 'Quem Somos', 'Serviços', 'Funcionalidades', 'Agende uma Visita', 'Contato'][index]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;