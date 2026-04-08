"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MagnifyingGlass, WhatsappLogo } from "@phosphor-icons/react";
import { useState } from "react";

/* ================= TYPES ================= */
type Produto = {
  id: number;
  imagens: string[];
};

/* ================= CARD ================= */
function ProductCard({ produto }: { produto: Produto }) {
  const [imgIndex, setImgIndex] = useState<number>(0);

  return (
    <motion.div
      className="bg-[#0b0f1a] rounded-2xl overflow-hidden shadow-md"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* IMAGEM */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={produto.imagens[imgIndex]}
          alt="produto"
          fill
          className="object-cover transition duration-300 hover:scale-[1.02]"
        />

        {/* BOTÃO WHATSAPP */}
        <button
          className="absolute bottom-3 left-3 bg-orange-500 p-2 rounded-lg shadow-md
          hover:scale-105 hover:brightness-110 active:scale-95 transition"
        >
          <WhatsappLogo size={18} weight="fill" />
        </button>
      </div>

      {/* CONTEÚDO */}
      <div className="p-5 text-white">
        <h3 className="text-sm font-semibold mb-3 leading-snug">
          Conjunto Elisa 180x90 <br /> + 6 cadeiras Agatha
        </h3>

        {/* BOLINHAS */}
        <div className="flex gap-3 mb-4">
          {produto.imagens.map((_, i) => (
            <div
              key={i}
              onClick={() => setImgIndex(i)}
              className={`w-4 h-4 rounded-full cursor-pointer transition ${
                imgIndex === i
                  ? "bg-white scale-110"
                  : "bg-gray-400 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* PREÇO */}
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs text-gray-400 block">12x R$ 478,00</span>

            <p className="text-2xl font-bold text-yellow-400 leading-none">
              R$ 4.499,00
            </p>

            <span className="text-[10px] text-gray-400">à vista</span>
          </div>

          {/* BOTÃO */}
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold
            hover:brightness-110 hover:scale-105 active:scale-95 transition"
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= PAGE ================= */
export default function ConjuntosPage() {
  const produtos: Produto[] = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    imagens: [
      "/img/imgMesa/mesa4.jpeg",
      "/img/imgMesa/mesa1.jpeg",
      "/img/imgMesa/mesa2.jpeg",
    ],
  }));

  return (
    <div className="px-4 md:px-10 lg:px-28 py-8 min-h-screen">
      {/* TÍTULO */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white border-b border-gray-500 inline-block pb-2">
          Produtos
        </h1>
      </div>

      {/* FILTROS + PESQUISA */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        {/* CORES */}
        <div className="flex gap-3">
          {["#c4a484", "#6b7280", "#e5e7eb", "#000000"].map((color, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full cursor-pointer border border-gray-500"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* SEARCH */}
        <div
          className="flex items-center border border-gray-500 rounded-lg px-3 py-2 w-full md:w-72
          bg-[#0b0f1a] text-white transition duration-300
          hover:border-yellow-400 hover:shadow-md focus-within:border-yellow-400"
        >
          <MagnifyingGlass size={20} className="text-gray-300" />

          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-transparent outline-none ml-2 w-full text-sm placeholder:text-gray-400 text-white"
          />
        </div>
      </div>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </motion.div>
    </div>
  );
}
