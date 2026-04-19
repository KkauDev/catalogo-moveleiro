export type ColorVariant = {
  name: string;
  image: string;
};

export type GlassVariant = {
  name: string;
  image: string;
};

export type Product = {
  id: number;
  name: string;
  cadeiras: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: "mesa" | "cadeira" | "conjunto";
  chairs: number;
  tableSize: "pequena" | "media" | "grande";
  colors?: ColorVariant[];
  glass?: GlassVariant[];
  // Novas propriedades baseadas na imagem:
  height: string;
  width: string;
  depth: string;
  weight: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Mesa Sofia 180x100cm",
    cadeiras: "+ 4 cadeiras agatha",
    slug: "mesa-4-cadeiras-preta",
    price: 899,
    description: `Tampo chanfrado e cantos arredondados, que unem sofisticação e leveza.\n\nVidro temperado, sobreposto à madeira e inteiramente colado, proporcionando segurança e resistência.\n\nBase em MDF no formato X com sapatas reguláveis, que oferece excelente sustentação e contribui para firmeza e durabilidade do conjunto, permitindo encaixe total das cadeiras.\n\nA Cadeira Mark é produzida em 100% eucalipto tratado, garantindo alta resistência e durabilidade.\n\nAcabamento com detalhes em bordado, que trazem um toque de elegância ao ambiente.\n\nO assento é confeccionado com espuma D28 macia e revestido em tecido Luxor (toque de pêssego), conhecido pela textura suave e agradável.\n\nAcabamento:`,
    images: [
      "/img/imgMesa/mesa1.jpeg",
      "/img/imgMesa/mesa2.jpeg",
      "/img/imgMesa/mesa3.jpeg",
    ],
    colors: [
      { name: "Branco", image: "/img/imgMesa/mesa1.jpeg" },
      { name: "Naturale/Off White", image: "/img/imgMesa/mesa2.jpeg" },
      { name: "Preto", image: "/img/imgMesa/mesa3.jpeg" },
    ],
    category: "conjunto",
    chairs: 4,
    tableSize: "pequena",
    height: "77 cm",
    width: "57 cm",
    depth: "57 cm",
    weight: "4,2 kg",
  },
  {
    id: 2,
    name: "Mesa 6 cadeiras branca",
    cadeiras: "4 cadeiras agatha",
    slug: "mesa-6-cadeiras-branca",
    price: 1299,
    description: "Mesa moderna com 6 cadeiras, perfeita para famílias.",
    images: ["/img/imgMesa/mesa4.jpeg", "/img/imgMesa/mesa2.jpeg"],
    colors: [
      { name: "Branco", image: "/img/imgMesa/mesa1.jpeg" },
      { name: "Naturale/Off White", image: "/img/imgMesa/mesa2.jpeg" },
      { name: "Preto", image: "/img/imgMesa/mesa3.jpeg" },
    ],
    glass: [
      { name: "Off White", image: "/img/imgMesa/mesa1.jpeg" },
      { name: "Black", image: "/img/imgMesa/mesa2.jpeg" },
    ],
    category: "conjunto",
    chairs: 6,
    tableSize: "media",
    height: "78 cm",
    width: "160 cm",
    depth: "90 cm",
    weight: "45 kg",
  },
];
