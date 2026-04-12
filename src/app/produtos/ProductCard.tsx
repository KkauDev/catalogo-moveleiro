"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { Product } from "./products";

export default function ProductCard({ product }: { product: Product }) {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <motion.div
      className="bg-[#0b0f1a] rounded-2xl overflow-hidden shadow-md border border-gray-800/50 flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* IMAGEM */}
      <div className="relative w-full h-52 overflow-hidden group">
        <Link href={`/produtos/${product.slug}`}>
          <Image
            src={product.images[imgIndex]}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.05]"
          />
        </Link>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/554115578859?text=Olá,%20gostaria%20de%20saber%20mais%20sobre:%20${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 left-2 bg-green-500 p-2 rounded-lg shadow-md hover:scale-105 active:scale-95 transition z-10"
        >
          <WhatsappLogo size={18} weight="fill" className="text-white" />
        </a>
      </div>

      {/* CONTEÚDO */}
      <div className="bg-[#1E1E26] px-4 py-4 text-white flex flex-col flex-1 justify-between">
        <div className="mb-3">
          <Link href={`/produtos/${product.slug}`}>
            <h3 className="text-sm font-semibold leading-snug mb-2">
              {product.name}
            </h3>
          </Link>

          {/* BOLINHAS */}
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                    imgIndex === i
                      ? "bg-[#DB9166] scale-110"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* PREÇO + BOTÃO */}
        <div className="flex justify-between items-end pt-3 border-t border-gray-800/40">
          <div>
            <span className="text-[11px] text-gray-400 block">
              12x {formatPrice(product.price / 12)}
            </span>

            <p className="text-lg font-bold text-[#DB9166] leading-none mt-0.5">
              {formatPrice(product.price)}
            </p>

            <span className="text-[10px] text-gray-500">à vista</span>
          </div>

          <Link href={`/produtos/${product.slug}`}>
            <button className="bg-[#DB9166] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#c67f55] hover:scale-105 active:scale-95 transition duration-300">
              Ver Detalhes
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
