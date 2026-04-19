"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/data/products";
import {
  CaretLeft,
  WhatsappLogo,
  ArrowsDownUp,
  ArrowsLeftRight,
  Cube,
  Scales,
} from "@phosphor-icons/react";

interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  const images =
    product.images?.length > 0 ? product.images : ["/placeholder.jpg"];

  // Pegamos a primeira cor como padrão (se existir)
  const defaultColor =
    product.colors && product.colors.length > 0 ? product.colors[0] : null;

  // Estado para a cor selecionada
  const [selectedColor, setSelectedColor] = useState(
    defaultColor ? defaultColor.name : "",
  );

  // Estado que controla qual imagem aparece no quadro grande
  const [activeImage, setActiveImage] = useState(
    defaultColor ? defaultColor.image : images[0],
  );

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  return (
    <div className="w-full py-10 text-white">
      {/* VOLTAR */}
      <div className="px-4 md:px-10 max-w-7xl mx-auto w-full">
        <Link
          href="/produtos"
          className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors w-fit"
        >
          <CaretLeft size={16} />
          Voltar para o catálogo
        </Link>
      </div>

      {/* LAYOUT - CENTRALIZADO */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-10 px-4 md:px-0">
        {/* ================= SEÇÃO DE IMAGENS ================= */}
        <div className="flex flex-col gap-3 items-start">
          {/* IMAGEM PRINCIPAL */}
          <div className="w-[320px] md:w-[450px] aspect-square overflow-hidden rounded-xl border border-gray-800 bg-gray-900 relative">
            <Image
              key={activeImage}
              src={activeImage}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out"
              priority
            />
          </div>

          {/* MINIATURAS DA GALERIA */}
          <div className="flex gap-3 overflow-x-auto pb-2 max-w-[320px] md:max-w-[450px] scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-[60px] shrink-0 aspect-square overflow-hidden rounded-md border transition-all ${
                  activeImage === img
                    ? "border-[#DB9166] scale-[1.02]"
                    : "border-gray-700 opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Miniatura ${i + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ================= SEÇÃO DE INFORMAÇÕES ================= */}
        {/* Adicionado items-start para forçar alinhamento à esquerda */}
        <div className="flex flex-col gap-8 flex-1 max-w-2xl items-start">
          {/* Forçado text-left em todas as resoluções */}
          <div className="space-y-4 text-left w-full">
            <span className="inline-block px-4 py-1.5 bg-[#DB9166]/10 text-[#DB9166] border border-[#DB9166]/20 text-xs font-bold rounded-full uppercase">
              {product.category}
            </span>

            <div className="flex flex-col gap-1">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-none">
                {product.name}
              </h1>

              <p className="text-lg text-gray-400 font-medium">
                {product.cadeiras}
              </p>
            </div>

            {/* ================= SELETOR DE CORES ================= */}

            {product.glass && product.glass.length > 0 && (
              <div className="flex flex-col gap-3 py-2 items-start w-full">
                <div className="flex gap-2 text-sm justify-start">
                  <span className="text-gray-400">Vidro selecionado:</span>
                  <span className="font-bold text-white">{selectedColor}</span>
                </div>{" "}
                <div className="flex flex-wrap gap-3 justify-start mt-1">
                  {product.glass.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color.name);
                        setActiveImage(color.image);
                      }}
                      title={color.name}
                      className={`w-14 h-14 shrink-0 aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        selectedColor === color.name
                          ? "border-[#DB9166] scale-110 shadow-lg shadow-[#DB9166]/20"
                          : "border-gray-700 hover:border-[#DB9166]/60 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={color.image}
                        alt={color.name}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className="flex flex-col gap-3 py-2 items-start w-full">
                <div className="flex gap-2 text-sm justify-start">
                  <span className="text-gray-400">Cor selecionada:</span>
                  <span className="font-bold text-white">{selectedColor}</span>
                </div>

                <div className="flex flex-wrap gap-3 justify-start mt-1">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color.name);
                        setActiveImage(color.image);
                      }}
                      title={color.name}
                      className={`w-14 h-14 shrink-0 aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        selectedColor === color.name
                          ? "border-[#DB9166] scale-110 shadow-lg shadow-[#DB9166]/20"
                          : "border-gray-700 hover:border-[#DB9166]/60 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={color.image}
                        alt={color.name}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p className="text-gray-400 leading-relaxed whitespace-pre-wrap mt-4">
              {product.description}
            </p>
          </div>

          {/* ESPECIFICAÇÕES TÉCNICAS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-gray-800/80 w-full">
            {/* Altura */}
            <div className="flex items-center gap-3 justify-start">
              <ArrowsDownUp size={22} className="text-[#DB9166]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  Altura
                </span>
                <span className="text-sm font-semibold">{product.height}</span>
              </div>
            </div>

            {/* Largura */}
            <div className="flex items-center gap-3 justify-start">
              <ArrowsLeftRight size={22} className="text-[#DB9166]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  Largura
                </span>
                <span className="text-sm font-semibold">{product.width}</span>
              </div>
            </div>

            {/* Profundidade */}
            <div className="flex items-center gap-3 justify-start">
              <Cube size={22} className="text-[#DB9166]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  Profundidade
                </span>
                <span className="text-sm font-semibold">{product.depth}</span>
              </div>
            </div>

            {/* Peso */}
            <div className="flex items-center gap-3 justify-start">
              <Scales size={22} className="text-[#DB9166]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  Peso
                </span>
                <span className="text-sm font-semibold">{product.weight}</span>
              </div>
            </div>
          </div>

          {/* CARD DE PREÇO E CTA */}
          <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800 space-y-6 w-full">
            <div className="text-left">
              <p className="text-sm text-gray-400">
                12x de {formatPrice(product.price / 12)} sem juros
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-3 justify-start mt-2">
                <p className="text-5xl font-extrabold text-[#DB9166]">
                  {formatPrice(product.price)}
                </p>
                <span className="text-sm text-gray-500 uppercase font-medium md:mb-2">
                  à vista
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/554115578859?text=${encodeURIComponent(
                `Olá! Vi no site e tenho interesse no produto: ${product.name}${selectedColor ? ` na cor ${selectedColor}` : ""}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#DB9166] hover:bg-[#c67f55] py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02]"
            >
              <WhatsappLogo size={28} weight="fill" />
              Solicitar Orçamento
            </a>

            <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
              Atendimento especializado via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
