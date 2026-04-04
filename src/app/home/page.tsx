"use client";

import Image from "next/image";
import logomadan from "../../../public/img/logomadan.png";
import { ChairIcon, StarIcon } from "@phosphor-icons/react";
import { Truck, ShieldCheck } from "lucide-react";

export function Home() {
  return (
    <>
      <main
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center ",
        }}
      >
        <Image
          src={logomadan}
          alt="Logo da Madan"
          className="h-auto"
          width={800}
        />
      </main>

      <section className="bg-linear-to-r from-[#BF925A] to-[#6b3f05] w-full py-6">
        <div className="flex justify-center gap-10">
          <div className="flex items-center gap-4 text-white">
            <ChairIcon size={50} />

            <div>
              <p className="font-semibold">Garantia de fabrica</p>
              <p className="text-sm">Produtos a preço de fabrica</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <StarIcon size={50} />

            <div>
              <p className="font-semibold">Produtos a pronta entrega</p>
              <p className="text-sm">Frete e montagem inclusos no pagamento</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <Truck size={50} />

            <div>
              <p className="font-semibold">Produtos a pronta entrega</p>
              <p className="text-sm">Frete e montagem inclusos no pagamento</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <ShieldCheck size={50} />

            <div>
              <p className="font-semibold">Compra segura</p>
              <p className="text-sm">Pague apenas na entrega!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
