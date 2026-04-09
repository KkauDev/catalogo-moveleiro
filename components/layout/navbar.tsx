"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Botão "Início"
  function handleHomeClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      router.refresh();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 100) setHidden(true);
    else setHidden(false);

    if (current > 50) setScrolled(true);
    else setScrolled(false);
  });

  const links = [
    { name: "Cadeiras", href: "/Novidades" },
    { name: "Mesas", href: "/Linhas" },
    { name: "Início", href: "/" },
    { name: "Sofás", href: "/contato" },
    { name: "Bistrôs", href: "/contato" },
  ];

  const mobileLinks = [
    { name: "Início", href: "/" },
    { name: "Mesas", href: "/Linhas" },
    { name: "Cadeiras", href: "/Novidades" },
    { name: "Sofás", href: "/contato" },
    { name: "Bistrôs", href: "/contato" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full flex items-center justify-center p-4 z-50 transition-all duration-300
          ${scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"}`}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* DESKTOP */}
        <div className="hidden md:flex gap-10 md:gap-20 flex-wrap justify-center text-white">
          {links.map((link) => {
            const isHome = link.name === "Início";

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={isHome ? handleHomeClick : undefined}
                className="opacity-60 hover:opacity-100 transition"
              >
                <span className="relative inline-block cursor-pointer group">
                  {link.name}
                  {/* HOVER ANIMADO DO DESKTOP */}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#BF925A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* BOTÃO HAMBURGUER / X */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute top-6 right-6 z-50 w-8 h-8 flex flex-col justify-center items-center gap-1"
          aria-label="Abrir menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#BF925A] transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#BF925A] transition duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#BF925A] transform transition duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </motion.nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#0f0f0f] z-50 flex flex-col items-start justify-center px-10 gap-8 text-white shadow-2xl"
          >
            {/* BOTÃO X INTERNO */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
            >
              <span className="absolute w-6 h-0.5 bg-[#BF925A] rotate-45" />
              <span className="absolute w-6 h-0.5 bg-[#BF925A] -rotate-45" />
            </button>

            {/* LINKS MOBILE */}
            {mobileLinks.map((link) => {
              const isHome = link.name === "Início";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (isHome) handleHomeClick(e);
                    setMenuOpen(false);
                  }}
                  className="text-xl opacity-80 hover:opacity-100 transition"
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
