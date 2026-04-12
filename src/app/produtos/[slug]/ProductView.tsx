"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/data/products";

interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  return (
    <div className="px-4 md:px-10 lg:px-28 py-10 text-white">
      {/* VOLTAR */}
      <Link
        href="/produtos"
        className="text-gray-400 hover:text-white text-sm mb-6 inline-block"
      >
        Voltar para catálogo
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* GALERIA */}
        <div>
          {/* IMAGEM PRINCIPAL */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-4 border border-gray-800">
            <Image
              src={
                product.images[selectedImage] ||
                product.images[0] ||
                "/placeholder.jpg"
              }
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 flex-wrap">
            {product.images.map((img: string, i: number) => (
              <div
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border ${
                  selectedImage === i
                    ? "border-[#DB9166]"
                    : "border-gray-700 hover:border-gray-500"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* DETALHES */}
            <div className="space-y-2 text-sm text-gray-300 mb-6">
              <p>Cadeiras: {product.chairs}</p>
              <p>Tamanho: {product.tableSize}</p>
              <p>Categoria: {product.category}</p>
            </div>

            {/* PREÇO */}
            <div className="mb-6">
              <span className="text-sm text-gray-400 block">
                12x {formatPrice(product.price / 12)}
              </span>

              <p className="text-3xl font-bold text-[#DB9166]">
                {formatPrice(product.price)}
              </p>

              <span className="text-xs text-gray-500">
                à vista no PIX/cartão
              </span>
            </div>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/554115578859?text=Olá,%20tenho%20interesse%20no%20produto:%20${product.name}`}
              target="_blank"
              className="bg-green-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-green-600 transition"
            >
              Falar no WhatsApp
            </a>

            <button className="bg-[#DB9166] py-3 rounded-lg font-semibold hover:bg-[#c67f55] transition">
              Simular Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
