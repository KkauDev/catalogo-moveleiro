"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/data/products";
import { CaretLeft, WhatsappLogo } from "@phosphor-icons/react";

interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images =
    product.images?.length > 0 ? product.images : ["/placeholder.jpg"];

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
        {/* ================= IMAGENS ================= */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          {/* IMAGEM PRINCIPAL (QUADRADA MENOR) */}
          <div className="w-220px aspect-square overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
            <Image
              src={images[selectedImage]}
              alt={product.name}
              width={600}
              height={220}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* THUMBNAILS (QUADRADAS) */}
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-50px aspect-square overflow-hidden rounded-md border transition ${
                  selectedImage === i
                    ? "border-[#DB9166]"
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

        {/* ================= INFO ================= */}
        <div className="flex flex-col gap-10 flex-1 max-w-2xl">
          <div className="space-y-4 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 bg-[#DB9166]/10 text-[#DB9166] border border-[#DB9166]/20 text-xs font-bold rounded-full uppercase">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold">
              {product.name}
            </h1>

            <p className="text-gray-400">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-800/80 text-center md:text-left">
            <div>
              <span className="text-sm text-gray-500 uppercase">Cadeiras</span>
              <p className="text-lg">{product.chairs}</p>
            </div>

            <div>
              <span className="text-sm text-gray-500 uppercase">
                Tamanho da Mesa
              </span>
              <p className="text-lg">{product.tableSize}</p>
            </div>
          </div>

          <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800 space-y-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                12x de {formatPrice(product.price / 12)} sem juros
              </p>

              <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-3 justify-center md:justify-start mt-2">
                <p className="text-4xl font-extrabold text-[#DB9166]">
                  {formatPrice(product.price)}
                </p>

                <span className="text-sm text-gray-500 uppercase md:mb-1">
                  à vista
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/554115578859?text=${encodeURIComponent(
                `Olá, tenho interesse no produto: ${product.name}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#DB9166] hover:bg-[#c67f55] py-4 rounded-xl font-bold transition-colors"
            >
              <WhatsappLogo size={24} weight="fill" />
              Enviar para um
            </a>

            <p className="text-center text-xs text-gray-500">
              Atendimento online via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
