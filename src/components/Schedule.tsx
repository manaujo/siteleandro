import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Schedule: React.FC = () => {
  const handleScheduleClick = () => {
    const phoneNumber = '5562982117161';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma visita técnica com a Smart Clean.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section 
      id="agende" 
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-blue-100 to-sky-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-200 rounded-full opacity-50"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-300 rounded-full opacity-30"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Agende uma Visita</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Precisa de um orçamento personalizado ou quer resolver um problema com seu ar-condicionado? 
                Agende uma visita técnica e nossos especialistas irão até você para uma avaliação completa.
              </p>
              <button 
                onClick={handleScheduleClick}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-3 shadow-lg text-lg group"
              >
                <Calendar className="group-hover:animate-bounce" />
                <span>Agendar Visita Técnica</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/3621435/pexels-photo-3621435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Padrões de gelo cristalino" 
                className="rounded-xl shadow-lg max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;