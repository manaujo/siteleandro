import React from "react";
import {
  Snowflake,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-blue-800 text-white py-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-2 rounded-full">
                <Snowflake size={24} className="text-blue-800" />
              </div>
              <span className="text-2xl font-bold">Smart Clean</span>
            </div>
            <p className="text-blue-100 mb-6">
              Soluções completas em climatização, oferecendo conforto e
              qualidade para ambientes residenciais e comerciais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                "Início",
                "Quem Somos",
                "Serviços",
                "Funcionalidades",
                "Agende uma Visita",
                "Contato"
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${
                      [
                        "inicio",
                        "quem-somos",
                        "servicos",
                        "funcionalidades",
                        "agende",
                        "contato"
                      ][index]
                    }`}
                    className="text-blue-100 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(
                          [
                            "inicio",
                            "quem-somos",
                            "servicos",
                            "funcionalidades",
                            "agende",
                            "contato"
                          ][index]
                        )
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <p className="text-blue-100 mb-2">Telefone: (62) 98211-7161</p>
            <p className="text-blue-100 mb-2">
              Email: contatosmartclean@gmail.com
            </p>
            <p className="text-blue-100">Goiânia, GO - Brasil</p>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Smart Clean. Todos os direitos
            reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition-colors group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
