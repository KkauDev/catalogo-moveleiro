import { Home } from "./home/page";
import Introducao from "./introducao/page";
import Novidades from "./novidades/page";
import Linhas from "./linhas/page";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Introducao />
      <Novidades />
      <Linhas />

      <Footer />
    </>
  );
}
