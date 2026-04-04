import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-center p-4 text-white z-50">
      <div className="flex gap-10 md:gap-20 flex-wrap justify-center">
        <Link
          className="opacity-50 transition-opacity duration-300 hover:opacity-100"
          href="/Novidades"
        >
          <p className="relative inline-block cursor-pointer">
            <span className="after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#DB9166] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Cadeiras
            </span>
          </p>
        </Link>
        <Link
          className="opacity-50 transition-opacity duration-300 hover:opacity-100"
          href="/Linhas"
        >
          <p className="relative inline-block cursor-pointer">
            <span className="after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#DB9166] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Mesas
            </span>
          </p>
        </Link>
        <Link
          className="opacity-50 transition-opacity duration-300 hover:opacity-100"
          href="/Home"
        >
          <p className="relative inline-block cursor-pointer">
            <span className="after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#DB9166] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Inicio
            </span>
          </p>
        </Link>
        <Link
          className="opacity-50 transition-opacity duration-300 hover:opacity-100"
          href="/contato"
        >
          <p className="relative inline-block cursor-pointer">
            <span className="after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#DB9166] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Sofas
            </span>
          </p>
        </Link>
        <Link
          className="opacity-50 transition-opacity duration-300 hover:opacity-100"
          href="/contato"
        >
          <p className="relative inline-block cursor-pointer">
            <span className="after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#DB9166] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Bistros
            </span>
          </p>
        </Link>
      </div>
    </nav>
  );
}
