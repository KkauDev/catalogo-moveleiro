"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* IMAGEM PRINCIPAL */}
      <motion.div
        key={mainImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full aspect-square md:aspect-4/3 rounded-2xl overflow-hidden bg-[#0b0f1a] border border-gray-800 shadow-xl"
      >
        <Image
          src={mainImage}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* MINIATURAS */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImage(img)}
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                mainImage === img
                  ? "border-[#DB9166] scale-105 shadow-md shadow-[#DB9166]/20"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
