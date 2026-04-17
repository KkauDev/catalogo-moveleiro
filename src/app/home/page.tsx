"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import logomadan from "../../../public/img/logomadan.png";

import { ChairIcon, StarIcon } from "@phosphor-icons/react";
import { Truck, ShieldCheck } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function Home() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      {/* HERO */}
      <main className="flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={logomadan}
            alt="Logo da Madan"
            width={700}
            height={350} // Adicione um valor proporcional (ex: se o logo é 2:1)
            priority
            className="h-auto w-auto drop-shadow-2xl" // Adicione w-auto aqui
            style={{ width: "auto", height: "auto" }} // Isso garante que o Next.js aceite a proporção do CSS
          />
        </motion.div>
      </main>

      {/* BENEFÍCIOS */}
      <section className="bg-linear-to-r from-[#BF925A] to-[#6b3f05] w-full py-8">
        <motion.div
          className="
      grid grid-cols-2 gap-6 px-6
      md:flex md:flex-wrap md:justify-center md:gap-10 md:px-10
      max-w-7xl mx-auto
    "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 md:gap-4 text-white"
          >
            <ChairIcon size={32} className="md:size-40px" />

            <div>
              <p className="font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap tracking-tight">
                Garantia de fábrica
              </p>
              <p className="text-xs md:text-sm opacity-80">
                Produtos direto do fabricante
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 md:gap-4 text-white"
          >
            <StarIcon size={32} className="md:size-40px" />

            <div>
              <p className="font-semibold text-xs sm:text-sm md:text-base">
                Alta qualidade
              </p>
              <p className="text-xs md:text-sm opacity-80">
                Materiais selecionados
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 md:gap-4 text-white"
          >
            <Truck size={32} className="md:size-40px" />

            <div>
              <p className="font-semibold text-xs sm:text-sm md:text-base">
                Entrega rápida
              </p>
              <p className="text-xs md:text-sm opacity-80">
                Frete e montagem inclusos
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 md:gap-4 text-white"
          >
            <ShieldCheck size={32} className="md:size-40px" />

            <div>
              <p className="font-semibold text-xs sm:text-sm md:text-base">
                Compra segura
              </p>
              <p className="text-xs md:text-sm opacity-80">
                Pague somente na entrega
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
