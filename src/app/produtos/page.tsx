"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { products, Product } from "../../data/products";

export default function ConjuntosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState<{
    category: string;
    chairs: string;
    tableSize: string;
  }>({
    category: "",
    chairs: "",
    tableSize: "",
  });

  // ✅ TIPAGEM CORRETA AQUI
  const filteredProducts: Product[] = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filters.category || p.category === filters.category) &&
      (!filters.chairs || p.chairs === Number(filters.chairs)) &&
      (!filters.tableSize || p.tableSize === filters.tableSize)
    );
  });

  return (
    <div className="px-4 md:px-10 lg:px-28 pb-16 min-h-screen">
      {/* HEADER */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white border-b-2 border-[#DB9166] inline-block pb-3">
          Nosso Catálogo
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl">
          Explore nosso catálogo exclusivo de móveis com design premium,
          qualidade excepcional e preços que cabem no seu bolso.
        </p>
      </div>

      {/* FILTROS */}
      <div className="flex flex-col gap-6 mb-12 bg-[#1E1E26] p-4 rounded-xl border border-gray-800">
        {/* BUSCA */}
        <div className="flex items-center border border-gray-700 rounded-lg px-4 py-2.5 w-full bg-[#0b0f1a] text-white hover:border-[#DB9166] focus-within:border-[#DB9166]">
          <MagnifyingGlass size={20} className="text-[#DB9166]" />
          <input
            type="text"
            placeholder="Buscar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none ml-3 w-full text-sm placeholder:text-gray-500"
          />
        </div>

        {/* SELECTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            className="bg-[#0b0f1a] border border-gray-700 rounded-lg p-3 text-white"
          >
            <option value="">Todos</option>
            <option value="mesa">Mesas</option>
            <option value="cadeira">Cadeiras</option>
            <option value="conjunto">Conjuntos</option>
          </select>

          <select
            value={filters.chairs}
            onChange={(e) => setFilters({ ...filters, chairs: e.target.value })}
            className="bg-[#0b0f1a] border border-gray-700 rounded-lg p-3 text-white"
          >
            <option value="">Qtd. Cadeiras</option>
            <option value="4">4 cadeiras</option>
            <option value="6">6 cadeiras</option>
            <option value="8">8 cadeiras</option>
          </select>

          <select
            value={filters.tableSize}
            onChange={(e) =>
              setFilters({ ...filters, tableSize: e.target.value })
            }
            className="bg-[#0b0f1a] border border-gray-700 rounded-lg p-3 text-white"
          >
            <option value="">Tamanho</option>
            <option value="pequena">Pequena</option>
            <option value="media">Média</option>
            <option value="grande">Grande</option>
          </select>
        </div>
      </div>

      {/* LISTA */}
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
            <p className="text-gray-400 text-lg">Nenhum produto encontrado.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
