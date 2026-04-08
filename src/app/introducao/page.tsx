"use client";

import Image from "next/image";
import mesa4 from "../../../public/img/imgMesa/mesa4.jpeg";

import { Armchair, Sparkle, CurrencyDollar } from "@phosphor-icons/react";
import { motion, easeOut, Variants } from "framer-motion";

export default function Introducao() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="w-full flex flex-col items-center py-16 px-4 overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src={mesa4}
              alt="Mesa Madan"
              className="w-125 h-350px object-cover transition duration-500 hover:scale-105 hover:brightness-110"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="font-bold text-4xl md:text-5xl text-white mb-6"
          >
            Sobre a <span className="text-[#BF925A]">Madan</span>
          </motion.h2>

          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <motion.p variants={itemVariants}>
              A Madan é especializada em móveis de alta qualidade para sala de
              jantar, com mais de duas décadas de experiência no mercado.
            </motion.p>

            <motion.p variants={itemVariants}>
              Nossos produtos unem design moderno, durabilidade e conforto,
              atendendo famílias que buscam sofisticação e qualidade.
            </motion.p>

            <motion.p variants={itemVariants}>
              Trabalhamos com linhas clássicas e contemporâneas, oferecendo
              preços acessíveis e parcelamento facilitado.
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="w-full max-w-6xl flex flex-wrap justify-center items-stretch gap-6 mt-16 text-center"
      >
        {[
          {
            icon: Armchair,
            title: "Qualidade",
            desc: "Móveis com acabamento premium e materiais resistentes",
          },
          {
            icon: Sparkle,
            title: "Design",
            desc: "Peças modernas que combinam com qualquer ambiente",
          },
          {
            icon: CurrencyDollar,
            title: "Preço",
            desc: "Valores competitivos com parcelamento em até 12x",
          },
        ].map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-[#1E1E26] p-6 rounded-xl border border-[#BF925A]/20 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#BF925A]/10 hover:border-[#BF925A] flex-1 min-w-250px max-w-[320px]"
            >
              <Icon
                size={32}
                weight="duotone"
                className="text-[#BF925A] mb-4 mx-auto"
              />

              <h3 className="text-[#BF925A] font-semibold text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
