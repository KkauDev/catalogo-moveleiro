"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/data/products";
import {
  CaretLeft,
  CaretRight,
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

  // Configurações iniciais de cores e vidros
  const defaultColor =
    product.colors && product.colors.length > 0 ? product.colors[0] : null;
  const defaultGlass =
    product.glass && product.glass.length > 0 ? product.glass[0] : null;

  const [selectedColor, setSelectedColor] = useState(
    defaultColor ? defaultColor.name : "",
  );
  const [selectedGlass, setSelectedGlass] = useState(
    defaultGlass ? defaultGlass.name : "",
  );

  // ================= ESTADOS DO CARROSSEL =================
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const AUTOPLAY_TIME = 4000; // 4 segundos

  // Funções de Navegação (Setinhas)
  const handleNext = () => {
    // Se estava vendo uma cor específica, volta para a primeira foto da galeria
    const nextIndex =
      activeIndex === -1 ? 0 : (activeIndex + 1) % images.length;
    setActiveIndex(nextIndex);
    setActiveImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      activeIndex === -1
        ? 0
        : (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(prevIndex);
    setActiveImage(images[prevIndex]);
  };

  // Temporizador Fluido (Sem travar o React)
  useEffect(() => {
    if (isPaused || activeIndex === -1) {
      setProgress(0);
      return;
    }

    // Dá um pequeno respiro para o CSS zerar a barra
    const t1 = setTimeout(() => setProgress(100), 50);

    // Passa a foto depois de 4 segundos
    const t2 = setTimeout(() => {
      handleNext();
    }, AUTOPLAY_TIME);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      setProgress(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isPaused]);

  // Função que muda a imagem dependendo da combinação de cores/vidro
  const handleSelection = (
    type: "color" | "glass",
    itemName: string,
    fallbackImage: string,
  ) => {
    const newColor = type === "color" ? itemName : selectedColor;
    const newGlass = type === "glass" ? itemName : selectedGlass;

    if (type === "color") setSelectedColor(newColor);
    if (type === "glass") setSelectedGlass(newGlass);

    if (product.combinations && product.combinations.length > 0) {
      const match = product.combinations.find(
        (c) => c.color === newColor && c.glass === newGlass,
      );

      if (match) {
        setActiveImage(match.image);
        setActiveIndex(-1); // -1 significa que saiu da galeria principal
        setIsPaused(true);
        return;
      }
    }

    setActiveImage(fallbackImage);
    setActiveIndex(-1);
    setIsPaused(true);
  };

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

      {/* LAYOUT PRINCIPAL */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start gap-10 px-4 md:px-0">
        {/* ================= SEÇÃO ESQUERDA (IMAGEM FIXA) ================= */}
        <div className="flex flex-col gap-4 items-center md:sticky md:top-12 z-10">
          {/* FOTO GRANDE E CONTROLES */}
          <div
            className="w-[320px] md:w-[450px] aspect-square overflow-hidden rounded-xl border border-gray-800 bg-gray-900 relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Image
              src={activeImage || "/placeholder.jpg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover transition-opacity duration-300"
              priority
            />

            {/* SETA ESQUERDA */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#DB9166] text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20 cursor-pointer shadow-lg"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
            {/* CONTROLES DE NAVEGAÇÃO */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-3 pointer-events-none z-20">
              {/* SETA ESQUERDA */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handlePrev();
                }}
                className="bg-black/40 hover:bg-[#DB9166] text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md cursor-pointer shadow-lg pointer-events-auto border-none outline-none"
              >
                <CaretLeft size={24} weight="bold" />
              </button>

              {/* SETA DIREITA */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#DB9166] text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20 cursor-pointer shadow-lg"
              >
                <CaretRight size={24} weight="bold" />
              </button>
              {/* SETA DIREITA */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className="bg-black/40 hover:bg-[#DB9166] text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md cursor-pointer shadow-lg pointer-events-auto border-none outline-none"
              >
                <CaretRight size={24} weight="bold" />
              </button>
            </div>

            {/* BARRINHA DE PROGRESSO DO CARROSSEL */}
            {activeIndex !== -1 && (
              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-black/50 z-20">
                <div
                  className="h-full bg-[#DB9166]"
                  style={{
                    width: `${progress}%`,
                    transition:
                      progress > 0 ? `width ${AUTOPLAY_TIME}ms linear` : "none",
                  }}
                />
              </div>
            )}
          </div>

          {/* MINIATURAS DA GALERIA */}
          <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setActiveIndex(i);
                  setActiveImage(img);
                }}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ease-in-out ${
                  activeIndex === i
                    ? "border-[#DB9166] ring-2 ring-[#DB9166]/30 scale-105"
                    : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"
                }`}
              >
                <Image
                  src={img}
                  alt={`Miniatura ${i + 1}`}
                  fill // Preenche o botão mantendo a proporção se usar Next.js
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ================= SEÇÃO DIREITA (INFORMAÇÕES COM ROLAGEM) ================= */}
        <div className="flex flex-col gap-8 flex-1 max-w-2xl items-start">
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

            {/* SELETOR DE CORES (CADEIRA) */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex flex-col gap-3 py-2 items-start w-full">
                <div className="flex gap-2 text-sm justify-start">
                  <span className="text-gray-400">Cor da cadeira:</span>
                  <span className="font-bold text-white">{selectedColor}</span>
                </div>

                <div className="flex flex-wrap gap-3 justify-start mt-1">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() =>
                        handleSelection("color", color.name, color.image)
                      }
                      title={color.name}
                      className={`w-14 h-14 relative rounded-md overflow-hidden border-2 transition-all duration-200 ${
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

            {/* SELETOR DE VIDROS */}
            {product.glass && product.glass.length > 0 && (
              <div className="flex flex-col gap-3 py-2 items-start w-full">
                <div className="flex gap-2 text-sm justify-start">
                  <span className="text-gray-400">Cor do vidro:</span>
                  <span className="font-bold text-white">{selectedGlass}</span>
                </div>

                <div className="flex flex-wrap gap-3 justify-start mt-1">
                  {product.glass.map((g) => (
                    <button
                      key={g.name}
                      type="button"
                      onClick={() => handleSelection("glass", g.name, g.image)}
                      title={g.name}
                      className={`w-14 h-14 relative rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        selectedGlass === g.name
                          ? "border-[#DB9166] scale-110 shadow-lg shadow-[#DB9166]/20"
                          : "border-gray-700 hover:border-[#DB9166]/60 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={g.image}
                        alt={g.name}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ESPECIFICAÇÕES TÉCNICAS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-gray-800/80 w-full">
            <div className="flex items-center gap-3 justify-start">
              <ArrowsDownUp size={22} className="text-[#DB9166]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  Altura
                </span>
                <span className="text-sm font-semibold">{product.height}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-start">
              <ArrowsLeftRight size={22} className="text-[#DB9166]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  Largura
                </span>
                <span className="text-sm font-semibold">{product.width}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-start">
              <Cube size={22} className="text-[#DB9166]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  Profundidade
                </span>
                <span className="text-sm font-semibold">{product.depth}</span>
              </div>
            </div>

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
              href={`https://wa.me/5513991726451?text=${encodeURIComponent(
                `Olá! Vi no site e tenho interesse no produto: ${product.name}${selectedColor ? ` na cor ${selectedColor}` : ""}${selectedGlass ? ` com vidro na cor ${selectedGlass}` : ""}`,
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

          {/* DESCRIÇÃO DO PRODUTO (FIXADA AQUI NO FIM) */}
          <div className="w-full mt-2 pt-6 border-t border-gray-800/80">
            <h2 className="text-2xl font-bold text-white mb-6">
              Descrição do Produto
            </h2>
            <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
