"use client";

import Image from "next/image";
import mesa4 from "../../../public/img/imgMesa/mesa4.jpeg";

import { Armchair, Sparkle, CurrencyDollar } from "@phosphor-icons/react";

export default function Introducao() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={mesa4}
              alt="Mesa Madan"
              className="w-150 h-100 object-cover transition duration-500 hover:scale-105 hover:brightness-110"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="font-bold text-5xl text-white mb-6">
            Sobre a <span style={{ color: "#BF925A" }}> Madan</span>
          </h2>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              A Madan é uma empresa especializada em móveis de alta qualidade
              para sala de jantar, com mais de duas décadas de experiência no
              mercado.
            </p>

            <p>
              Nossos produtos combinam design moderno com durabilidade e
              conforto, atendendo às necessidades de famílias brasileiras que
              buscam qualidade.
            </p>

            <p>
              Oferecemos uma ampla variedade de conjuntos, desde linhas
              clássicas até contemporâneas, com preços acessíveis e parcelamento
              facilitado.
            </p>
          </div>
        </div>
      </div>

      {/* Cards de vantagens - Lado a lado e centralizados */}
      <div className="w-full max-w-6xl flex flex-row flex-wrap justify-center items-stretch gap-6 mt-16 text-center">
        <div className="bg-[#1E1E26] p-6 rounded-lg border border-[#BF925A]/20 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#BF925A] flex-1 min-w-[250px] max-w-[350px]">
          <Armchair
            size={32}
            weight="duotone"
            className="text-[#BF925A] mb-4 mx-auto"
          />
          <h3 className="text-[#BF925A] font-semibold text-xl mb-2">
            Qualidade
          </h3>
          <p className="text-sm text-gray-300">
            Móveis com acabamento premium e materiais resistentes
          </p>
        </div>

        <div className="bg-[#1E1E26] p-6 rounded-lg border border-[#BF925A]/20 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#BF925A] flex-1 min-w-[250px] max-w-[350px]">
          <Sparkle
            size={32}
            weight="duotone"
            className="text-[#BF925A] mb-4 mx-auto"
          />
          <h3 className="text-[#BF925A] font-semibold text-xl mb-2">Design</h3>
          <p className="text-sm text-gray-300">
            Peças com design moderno que combinam com qualquer ambiente
          </p>
        </div>

        <div className="bg-[#1E1E26] p-6 rounded-lg border border-[#BF925A]/20 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#BF925A] flex-1 min-w-[250px] max-w-[350px]">
          <CurrencyDollar
            size={32}
            weight="duotone"
            className="text-[#BF925A] mb-4 mx-auto"
          />
          <h3 className="text-[#BF925A] font-semibold text-xl mb-2">Preço</h3>
          <p className="text-sm text-gray-300">
            Valores competitivos com parcelamento em até 12x
          </p>
        </div>
      </div>
    </section>
  );
}
