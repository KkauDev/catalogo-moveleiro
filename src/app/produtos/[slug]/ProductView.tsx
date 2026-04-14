"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/data/products";
import { CaretLeft, CaretRight, WhatsappLogo } from "@phosphor-icons/react";

interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : ["/placeholder.jpg"];

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  const next = () => setSelectedImage((prev) => (prev + 1) % images.length);

  const prev = () =>
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="px-4 md:px-10 lg:px-28 py-10 text-white bg-[#0b0f1a] min-h-screen">
      {/* VOLTAR */}
      <Link
        href="/produtos"
        className="text-gray-400 hover:text-white text-sm mb-6 inline-block"
      >
        ← Voltar para catálogo
      </Link>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* ================= LEFT (IMAGENS) ================= */}
        <div>
          {/* IMAGEM GRANDE */}
          {/* CORREÇÃO: h-500px corrigido para h-[500px] ou h-96, mantive [500px] para ficar grande */}
          <div className="relative w-full h-500px rounded-xl overflow-hidden border border-gray-800">
            <Image
              src={images[selectedImage] || "/placeholder.jpg"}
              alt={product.name}
              fill
              // CORREÇÃO: Adicionado sizes para remover o aviso
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            {/* SETAS */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black p-2 rounded-full z-10"
                >
                  <CaretLeft size={18} />
                </button>

                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black p-2 rounded-full z-10"
                >
                  <CaretRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer border ${
                  selectedImage === i
                    ? "border-[#DB9166]"
                    : "border-gray-700 hover:border-gray-500"
                }`}
              >
                <Image
                  src={img}
                  alt={`Miniatura ${i + 1}`}
                  fill
                  // CORREÇÃO: Adicionado sizes para as miniaturas
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT (INFO) ================= */}
        <div className="flex flex-col gap-6">
          {/* TITULO */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {product.name}
          </h1>

          {/* DESCRIÇÃO */}
          <p className="text-gray-400">{product.description}</p>

          {/* INFO EXTRA */}
          <div className="text-sm text-gray-300 space-y-1">
            <p>Cadeiras: {product.chairs}</p>
            <p>Tamanho: {product.tableSize}</p>
            <p>Categoria: {product.category}</p>
          </div>

          {/* PREÇO */}
          <div>
            <p className="text-sm text-gray-400">
              12x {formatPrice(product.price / 12)}
            </p>

            <p className="text-4xl font-bold text-[#DB9166]">
              {formatPrice(product.price)}
            </p>

            <span className="text-xs text-gray-500 uppercase">à vista</span>
          </div>

          {/* CORES (mock visual) */}
          <div>
            <p className="mb-2 text-gray-300">Cores:</p>

            <div className="flex gap-3 items-center">
              {["#c2a07d", "#4b5563", "#e5e7eb"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border border-gray-600 cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}

              <span className="text-sm text-gray-400 underline cursor-pointer">
                apagar
              </span>
            </div>
          </div>

          {/* BOTÃO WHATSAPP */}
          <a
            href={`https://wa.me/554115578859?text=Olá,%20tenho%20interesse%20no%20produto:%20${product.name}`}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-[#DB9166] py-4 rounded-lg font-semibold hover:bg-[#c67f55] transition text-lg"
          >
            <WhatsappLogo size={22} weight="fill" />
            Enviar para Atendente
          </a>
        </div>
      </div>
    </div>
  );
}
