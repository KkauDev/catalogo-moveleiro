import "@/styles/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
