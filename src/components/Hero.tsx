import React from 'react';
import { Wind } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="pt-32 pb-24 px-6 md:px-12 bg-gradient-to-b from-blue-100 to-sky-50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight mb-6">
            Respire Tranquilo. <br />
            <span className="text-blue-600">A Smart Clean cuida do seu conforto.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8">
            Soluções completas em climatização para sua casa ou empresa com qualidade e excelência.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#agende" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('agende')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Wind size={20} />
              <span>Nossos Serviços</span>
            </a>
            <a 
              href="#contato" 
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 shadow-md"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Fale Conosco</span>
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img 
            src="https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Cristais de gelo em fundo azul suave" 
            className="rounded-xl shadow-xl max-h-96 object-cover animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;