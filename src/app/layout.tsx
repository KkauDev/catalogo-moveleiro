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
        <Navbar />
        <main className="grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
