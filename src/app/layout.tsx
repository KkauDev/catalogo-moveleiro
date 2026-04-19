import "@/styles/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body
        className="flex flex-col min-h-screen bg-[#080B14] text-white"
        style={{ margin: 0, padding: 0 }}
      >
        <main className="grow pt-24 relative z-0">{children}</main>

        {/* Garante que o Footer fique em uma camada acima do main */}
        <div className="relative z-10 w-full mt-16">
          <Footer />
        </div>

        {/* A Navbar renderizada no fim do DOM garante que seja pintada por cima de todo o resto */}
        <Navbar />
      </body>
    </html>
  );
}
