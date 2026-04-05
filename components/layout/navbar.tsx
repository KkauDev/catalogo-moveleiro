"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    // esconder ao descer
    if (current > previous && current > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // detectar scroll
    if (current > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex items-center justify-center p-4 z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex gap-10 md:gap-20 flex-wrap justify-center text-white">
        <Link
          className="opacity-60 hover:opacity-100 transition"
          href="/Novidades"
        >
          <span className="relative inline-block cursor-pointer group">
            Cadeiras
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#DB9166] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link
          className="opacity-60 hover:opacity-100 transition"
          href="/Linhas"
        >
          <span className="relative inline-block cursor-pointer group">
            Mesas
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#DB9166] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link className="opacity-60 hover:opacity-100 transition" href="/Home">
          <span className="relative inline-block cursor-pointer group">
            Início
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#DB9166] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link
          className="opacity-60 hover:opacity-100 transition"
          href="/contato"
        >
          <span className="relative inline-block cursor-pointer group">
            Sofás
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#DB9166] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link
          className="opacity-60 hover:opacity-100 transition"
          href="/contato"
        >
          <span className="relative inline-block cursor-pointer group">
            Bistrôs
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#DB9166] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </div>
    </motion.nav>
  );
}
