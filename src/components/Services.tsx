import React from 'react';
import { WrenchIcon, PenToolIcon as ToolIcon, ClipboardCheckIcon, PencilRulerIcon, HeadphonesIcon } from 'lucide-react';

const ServiceCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform duration-300 border border-blue-100">
      <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
      <p className="text-slate-700">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <WrenchIcon size={32} />,
      title: "Instalação de Ar-condicionado",
      description: "Instalação profissional de sistemas de ar-condicionado residenciais e comerciais, garantindo eficiência e durabilidade."
    },
    {
      icon: <ToolIcon size={32} />,
      title: "Manutenção Corretiva",
      description: "Diagnóstico preciso e reparo eficiente de problemas em seu sistema de climatização, restaurando seu pleno funcionamento."
    },
    {
      icon: <ClipboardCheckIcon size={32} />,
      title: "Manutenção Preventiva",
      description: "Serviços periódicos de verificação e limpeza que prolongam a vida útil do seu equipamento e previnem falhas."
    },
    {
      icon: <PencilRulerIcon size={32} />,
      title: "Elaboração de Estudos e Projetos",
      description: "Desenvolvimento de projetos personalizados de climatização, considerando as especificidades de cada ambiente."
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: "Consultoria e Assessoria",
      description: "Orientação técnica especializada para a escolha do melhor sistema de ar-condicionado para suas necessidades."
    }
  ];

  return (
    <section 
      id="servicos" 
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-sky-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-700 mt-6 max-w-2xl mx-auto">
            Oferecemos soluções completas em climatização para garantir o máximo conforto e eficiência em qualquer ambiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;