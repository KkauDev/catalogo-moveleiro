"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { Product } from "./products";

export default function ProductCard({ product }: { product: Product }) {
  const [imgIndex, setImgIndex] = useState<number>(0);

  // Formatador local de moeda
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <motion.div
      className="bg-[#0b0f1a] rounded-2xl overflow-hidden shadow-lg border border-gray-800/60 hover:border-[#DB9166]/50 transition-colors flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* IMAGEM E LINK */}
      <div className="relative w-full h-64 overflow-hidden group">
        <Link href={`/produtos/${product.slug}`}>
          <Image
            src={product.images[imgIndex]}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.05]"
          />
        </Link>

        {/* BOTÃO WHATSAPP DIRETO */}
        <a
          href={`https://wa.me/554115578859?text=Olá,%20gostaria%20de%20saber%20mais%20sobre:%20${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-3 bg-green-500 p-2.5 rounded-lg shadow-md hover:scale-105 hover:brightness-110 active:scale-95 transition z-10"
        >
          <WhatsappLogo size={20} weight="fill" className="text-white" />
        </a>
      </div>

      {/* CONTEÚDO */}
      <div className="p-5 text-white flex flex-col flex-1 justify-between">
        <div className="mb-4">
          <Link href={`/produtos/${product.slug}`}>
            <h3 className="text-base font-semibold mb-3 leading-snug hover:text-[#DB9166] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* CONTROLES DE IMAGEM (BOLINHAS) */}
          {product.images.length > 1 && (
            <div className="flex gap-2 mb-2">
              {product.images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                    imgIndex === i
                      ? "bg-[#DB9166] scale-110"
                      : "bg-gray-600 hover:bg-gray-400 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* PREÇOS E BOTÃO DETALHES */}
        <div className="flex justify-between items-end mt-auto pt-2 border-t border-gray-800/50">
          <div>
            <span className="text-xs text-gray-400 block">
              12x {formatPrice(product.price / 12)}
            </span>
            <p className="text-xl font-bold text-[#DB9166] leading-none mt-1">
              {formatPrice(product.price)}
            </p>
            <span className="text-[10px] text-gray-500">à vista</span>
          </div>

          <Link href={`/produtos/${product.slug}`}>
            <button className="bg-[#1E1E26] border border-[#DB9166]/50 text-[#DB9166] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#DB9166] hover:text-white hover:scale-105 active:scale-95 transition duration-300">
              Ver Detalhes
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
