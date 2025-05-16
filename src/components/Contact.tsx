import React from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5562982117161";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-700 mt-6 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades. Entre em contato e
            conheça nossas soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-50 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Telefone</p>
                  <p className="text-lg font-medium text-blue-800">
                    (62) 98211-7161
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-lg font-medium text-blue-800">
                    contatosmartclean@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Endereço</p>
                  <p className="text-lg font-medium text-blue-800">
                    Goiânia, GO - Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-medium text-blue-800 mb-4">
                Horário de Atendimento
              </h4>
              <p className="text-slate-700">Segunda a Sexta: 8h às 18h</p>
              <p className="text-slate-700">Sábado: 8h às 12h</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Fale Conosco Agora
              </h3>
              <p className="text-slate-700 mb-6">
                Clique no botão abaixo para iniciar uma conversa pelo WhatsApp e
                receber um atendimento rápido e personalizado.
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-3 shadow-lg text-lg group w-full max-w-md"
            >
              <MessageCircle className="group-hover:animate-pulse" />
              <span>Fale Conosco Agora</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
