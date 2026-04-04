import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

import Image from "next/image";
import logomadan from "../../../public/img/logomadan.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Image
            src={logomadan}
            alt="Logo da Madan"
            width={200}
            className="h-auto"
          />

          <p className="text-gray-400 leading-relaxed text-sm">
            A Madan Móveis proporciona uma experiência premium na compra online,
            com atendimento exclusivo e produtos de alta qualidade.
          </p>

          <div className="flex gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-white/5 hover:bg-[#DB9166]/20 transition duration-300 cursor-pointer hover:scale-110"
              >
                <Icon size={18} className="text-[#DB9166]" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#DB9166] uppercase tracking-wider mb-6">
            Navegação
          </h2>

          <ul className="space-y-3">
            {["Início", "Mesas", "Cadeiras", "Sofás", "Bistrôs"].map((item) => (
              <li
                key={item}
                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer hover:translate-x-1 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-6">
            Contato
          </h2>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-orange-400 mt-1" />
              <p>
                Rua Isaac Ferreira da Cruz, 4115 <br />
                Curitiba - PR
              </p>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition">
              <Mail size={18} className="text-orange-400" />
              <p>madanmoveis@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition">
              <Phone size={18} className="text-[#DB9166]" />
              <p>(41) 1557-8859</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Madan Móveis. Todos os direitos
            reservados.
          </p>

          <p className="text-gray-500">
            Desenvolvido por{" "}
            <span className="text-[#DB9166]">Kauã Emanuel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
