"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

import { MoveRight } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import mesa1 from "../../../public/img/imgMesa/mesa1.jpeg";
import mesa2 from "../../../public/img/imgMesa/mesa2.jpeg";
import mesa3 from "../../../public/img/imgMesa/mesa3.jpeg";
import mesa4 from "../../../public/img/imgMesa/mesa4.jpeg";
import mesa5 from "../../../public/img/imgMesa/mesa5.jpeg";
import mesa6 from "../../../public/img/imgMesa/mesa6.jpg";
import mesa7 from "../../../public/img/imgMesa/mesa7.jpeg";
import mesa8 from "../../../public/img/imgMesa/mesa8.jpg";

const cards = [
  {
    img: mesa1,
    title: "Conjunto Elisa 180x090",
    subtitle: "+ 6 cadeiras Agatha",
    parcela: "12x R$478,00",
    preco: "R$4.499,00",
  },
  {
    img: mesa2,
    title: "Conjunto Elisa 180x090",
    subtitle: "+ 6 cadeiras Agatha",
    parcela: "12x R$478,00",
    preco: "R$4.499,00",
  },
  {
    img: mesa3,
    title: "Conjunto Elisa 180x090",
    subtitle: "+ 6 cadeiras Agatha",
    parcela: "12x R$478,00",
    preco: "R$4.499,00",
  },
  {
    img: mesa4,
    title: "Conjunto Elisa 180x090",
    subtitle: "+ 6 cadeiras Agatha",
    parcela: "12x R$478,00",
    preco: "R$4.499,00",
  },
  {
    img: mesa5,
    title: "Conjunto Elisa 180x090",
    subtitle: "+ 6 cadeiras Agatha",
    parcela: "12x R$478,00",
    preco: "R$4.499,00",
  },
  {
    img: mesa6,
    title: "Conjunto Elisa 180x090",
    subtitle: "+ 6 cadeiras Agatha",
    parcela: "12x R$478,00",
    preco: "R$4.499,00",
  },
  {
    img: mesa7,
    title: "Conjunto Elisa 180x090",
    subtitle: "+ 6 cadeiras Agatha",
    parcela: "12x R$478,00",
    preco: "R$4.499,00",
  },
  {
    img: mesa8,
    title: "Conjunto Elisa 180x090",
    subtitle: "+ 6 cadeiras Agatha",
    parcela: "12x R$478,00",
    preco: "R$4.499,00",
  },
];

export default function Novidades() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-[80%] flex justify-between items-center py-10">
        <h1 className="font-bold text-5xl text-white">Novidades</h1>

        <Link href={"/novidades"}>
          <Button className="flex items-center gap-2 bg-[#1E1E26] hover:bg-[#BF925A]">
            Ver Todos
            <MoveRight />
          </Button>
        </Link>
      </div>

      <Carousel
        className="w-[80%]"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent className="gap-4">
          {cards.map((card, i) => (
            <CarouselItem
              key={i}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="group w-full bg-[#0D0F1A] text-white border-0 rounded-xl overflow-hidden p-0">
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={card.img}
                    alt="Mesa"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute inset-0 hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <Button className="bg-[#BF925A] hover:bg-orange-400 text-white px-6 py-2 rounded-lg">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>

                <div className="px-4 py-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-bold text-lg leading-tight">
                        {card.title}
                      </h2>
                      <p className="text-sm text-gray-400">{card.subtitle}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-yellow-500">{card.parcela}</p>
                      <p className="text-xl font-bold">{card.preco}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="bg-[#BF925A] hover:bg-[#50BF77] p-2 rounded-md hover:scale-110 transition cursor-pointer">
                      <WhatsappLogo size={22} weight="fill" />
                    </div>

                    <Button className="bg-[#BF925A] hover:bg-orange-400 text-white px-5 py-2 rounded-lg lg:hidden">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
