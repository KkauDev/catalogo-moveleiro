"use client";

import { Product } from "../../data/products";
import {
  WhatsappLogo,
  ShieldCheck,
  Truck,
  CreditCard,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function ProductInfo({ product }: { product: Product }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };
  const installmentPrice = product.price / 12;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col text-white h-full"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
        {product.name}
      </h1>
      <span className="text-gray-400 text-sm mb-6 border-b border-gray-800 pb-6 block">
        Vendido e entregue por{" "}
        <strong className="text-[#DB9166]">Madan Móveis</strong>
      </span>

      {/* CAIXA DE PREÇO */}
      <div className="bg-[#1E1E26] p-6 rounded-2xl border border-gray-800 mb-8">
        <p className="text-gray-400 text-sm mb-1">Por apenas:</p>
        <div className="flex items-end gap-3 mb-2">
          <span className="text-4xl font-extrabold text-[#DB9166]">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-gray-400 mb-1">à vista</span>
        </div>
        <p className="text-gray-300">
          ou{" "}
          <strong className="text-white">
            12x de {formatPrice(installmentPrice)}
          </strong>{" "}
          sem juros
        </p>

        {/* CTA PRINCIPAL */}
        <a
          href={`https://wa.me/554115578859?text=Olá,%20gostaria%20de%20comprar%20o%20produto:%20${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full bg-[#DB9166] hover:bg-[#c47f57] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#DB9166]/20"
        >
          <WhatsappLogo size={24} weight="fill" /> Comprar pelo WhatsApp
        </a>
      </div>

      {/* DESCRIÇÃO E BENEFÍCIOS */}
      <div className="mb-8 flex-1">
        <h2 className="text-xl font-semibold mb-3">Descrição do Produto</h2>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
          {product.description}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-auto border-t border-gray-800 pt-6">
        {[
          { icon: ShieldCheck, text: "Compra 100% Segura" },
          { icon: Truck, text: "Entrega Especializada" },
          { icon: CreditCard, text: "Parcelamento Facilitado" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center p-3 bg-[#0b0f1a] rounded-xl border border-gray-800"
          >
            <item.icon size={26} className="text-[#DB9166] mb-2" />
            <span className="text-[10px] sm:text-xs text-gray-300 leading-tight">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
