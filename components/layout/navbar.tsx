"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Fade as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const router = useRouter();
  const pathname = usePathname();

  function handleHomeClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      router.refresh();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
    }
  }

  // Lógica de esconder/mostrar no Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;

      // Só esconde a navbar se o menu mobile estiver fechado
      if (!menuOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setHidden(true);
        } else if (
          currentScrollY < lastScrollY.current ||
          currentScrollY < 50
        ) {
          setHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]); // Dependência adicionada para reagir ao estado do menu

  const navLinks = [
    { name: "Cadeiras", href: "/" },
    { name: "Mesas", href: "/" },
    { name: "Início", href: "/" },
    { name: "Sofás", href: "/" },
    { name: "Bistrôs", href: "/" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-[60] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Contêiner interno com altura definida para garantir o movimento correto */}
        <div className="relative w-full h-20 md:h-24 flex items-center justify-center px-6 md:px-8">
          {/* ================== DESKTOP ================== */}
          <nav className="hidden md:flex gap-10 md:gap-16 flex-wrap justify-center text-white pointer-events-auto">
            {navLinks.map((link) => {
              const isHome = link.name === "Início";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={isHome ? handleHomeClick : undefined}
                  className="opacity-70 hover:opacity-100 transition-opacity font-medium tracking-wide"
                >
                  <span className="relative inline-block cursor-pointer group">
                    {link.name}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#BF925A] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* ================== BOTÃO MOBILE ================== */}
          <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 z-[70] pointer-events-auto">
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              color="#BF925A"
              size={26}
              label="Alternar menu"
              distance="md"
              duration={0.3}
            />
          </div>
        </div>

        {/* ================== MENU DROPDOWN (ESTILO NUBANK) ================== */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              // Posicionado logo abaixo da altura do header (top-20)
              className="absolute top-20 right-6 w-64 bg-[#111111] border border-white/10 rounded-xl shadow-2xl z-[60] flex flex-col pointer-events-auto md:hidden overflow-hidden"
            >
              {navLinks.map((link, index) => {
                const isHome = link.name === "Início";
                const isLast = index === navLinks.length - 1;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (isHome) handleHomeClick(e);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-6 py-4 text-[17px] font-medium text-white/90 hover:bg-white/5 active:bg-white/10 transition-colors ${
                      !isLast ? "border-b border-white/5" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
