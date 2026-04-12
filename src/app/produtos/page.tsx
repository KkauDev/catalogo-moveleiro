"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product, getProducts } from "./products";

export default function ConjuntosPage() {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProdutos(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = produtos.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="px-4 md:px-10 lg:px-28 pb-16 min-h-screen">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white border-b-2 border-[#DB9166] inline-block pb-3">
          Nosso Catálogo
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl">
          Explore nossa coleção exclusiva de móveis com design premium,
          qualidade excepcional e preços que cabem no seu bolso.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-[#1E1E26] p-4 rounded-xl border border-gray-800">
        <div className="flex gap-3 items-center">
          <span className="text-sm text-gray-400 mr-2 hidden sm:inline">
            Cores:
          </span>
          {["#DB9166", "#6b7280", "#e5e7eb", "#000000"].map((color, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-600 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="flex items-center border border-gray-700 rounded-lg px-4 py-2.5 w-full md:w-80 bg-[#0b0f1a] text-white transition duration-300 hover:border-[#DB9166] focus-within:border-[#DB9166] focus-within:ring-1 focus-within:ring-[#DB9166]">
          <MagnifyingGlass size={20} className="text-[#DB9166]" />
          <input
            type="text"
            placeholder="Buscar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none ml-3 w-full text-sm placeholder:text-gray-500 text-white"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DB9166]"></div>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((produto) => (
              <ProductCard key={produto.id} product={produto} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-lg">
                Nenhum produto encontrado com {searchTerm}.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
