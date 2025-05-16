import React from 'react';
import { Zap, Users, BadgeCheck, Shield } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode,
  title: string,
  description: string
}> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
      <div className="mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-slate-700">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={40} />,
      title: "Atendimento Ágil",
      description: "Respostas rápidas e soluções eficientes para minimizar o tempo de espera e resolver seu problema com rapidez."
    },
    {
      icon: <Users size={40} />,
      title: "Profissionais Qualificados",
      description: "Equipe técnica com certificação e constante atualização para oferecer o melhor serviço do mercado."
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Suporte Técnico Personalizado",
      description: "Atendimento individualizado que entende as necessidades específicas de cada cliente e ambiente."
    },
    {
      icon: <Shield size={40} />,
      title: "Garantia nos Serviços",
      description: "Todos os nossos serviços e peças possuem garantia, proporcionando segurança e tranquilidade aos nossos clientes."
    }
  ];

  return (
    <section 
      id="funcionalidades" 
      className="py-20 px-6 md:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Por Que Nos Escolher</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-700 mt-6 max-w-2xl mx-auto">
            Nossos diferenciais garantem a qualidade e excelência em todos os serviços que prestamos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;