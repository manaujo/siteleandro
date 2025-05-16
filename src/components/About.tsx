import React from "react";
import { Award, Clock, ThumbsUp } from "lucide-react";
import img from "../assets/project2.png";

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Quem Somos
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              A <span className="font-semibold text-blue-700">Smart Clean</span>{" "}
              atua com excelência na instalação, manutenção e consultoria em
              sistemas de climatização, oferecendo soluções personalizadas para
              ambientes residenciais e comerciais.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados,
              comprometidos em entregar um serviço de qualidade superior,
              garantindo o máximo conforto térmico e eficiência energética para
              nossos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Award className="text-blue-600 mb-2" size={28} />
                <span className="text-blue-800 font-medium text-center">
                  Qualidade Garantida
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Clock className="text-blue-600 mb-2" size={28} />
                <span className="text-blue-800 font-medium text-center">
                  Agilidade
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <ThumbsUp className="text-blue-600 mb-2" size={28} />
                <span className="text-blue-800 font-medium text-center">
                  Satisfação
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={img}
              alt="Imagem de destaque"
              loading="lazy"
              className="rounded-xl shadow-xl max-h-96 object-cover animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
