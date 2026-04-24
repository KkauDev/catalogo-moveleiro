export type ColorVariant = {
  name: string;
  image: string;
};

export type GlassVariant = {
  name: string;
  image: string;
};

export type Combination = {
  color: string; // Nome da cor da cadeira
  glass: string; // Nome da cor do vidro
  image: string; // Imagem com as duas cores juntas
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
  combinations?: Combination[];
  // Novas propriedades baseadas na imagem:
  height: string;
  width: string;
  depth: string;
  weight: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Mesa Mark 130X130",
    cadeiras: "+ 6 cadeiras modelo Agatha",
    slug: "mesa-6-cadeiras-branca",
    price: 1299,
    description: "Mesa moderna com 6 cadeiras, perfeita para famílias grandes.",
    images: [
      "/img-agatha/agatha-off-nevoa.jpg",
      "/img-agatha/agatha-off-marrom.jpg",
      "/img-agatha/agatha-off-cinza.jpg",
    ],
    colors: [
      { name: "nevoa", image: "/img-agatha/agatha-off-nevoa.jpg" },
      { name: "cinza", image: "/img-agatha/agatha-off-cinza.jpg" },
      { name: "marrom", image: "/img-agatha/agatha-off-marrom.jpg" },
    ],
    glass: [
      { name: "Off White", image: "/img-agatha/agatha-off-cinza.jpg" },
      { name: "Preto", image: "/img-agatha/agatha-preto-marrom.jpg" },
    ],
    // A MÁGICA ACONTECE AQUI:
    combinations: [
      {
        color: "nevoa",
        glass: "Off White",
        image: "/img-agatha/agatha-off-nevoa.jpg",
      },
      {
        color: "nevoa",
        glass: "Preto",
        image: "/img-agatha/agatha-preto-nevoa.jpg",
      },
      {
        color: "cinza",
        glass: "Off White",
        image: "/img-agatha/agatha-off-cinza.jpg",
      },
      {
        color: "cinza",
        glass: "Preto",
        image: "/img-agatha/agatha-preto-cinza.jpg",
      },
      {
        color: "marrom",
        glass: "Off White",
        image: "/img-agatha/agatha-off-marrom.jpg",
      },

      {
        color: "marrom",
        glass: "Preto",
        image: "/img-agatha/agatha-preto-marrom.jpg",
      },
    ],
    category: "conjunto",
    chairs: 6,
    tableSize: "media",
    height: "78 cm",
    width: "160 cm",
    depth: "90 cm",
    weight: "45 kg",
  },
  {
    id: 2,
    name: "teste 2",
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
    id: 3,
    name: "teste 3",
    cadeiras: "8 cadeiras Marie",
    slug: "mesa-isadora-8-cadeiras-marie",
    price: 6999,
    description:
      "Mesa de alto padrão com design retrô sofisticado e detalhes em madeira Pau Ferro. Cadeiras Marie em madeira maciça com tela sintética.",
    images: ["/img/imgMesa/mesa5.jpeg", "/img/imgMesa/mesa1.jpeg"],
    colors: [{ name: "Creme", image: "/img/imgMesa/mesa5.jpeg" }],
    category: "conjunto",
    chairs: 8,
    tableSize: "grande",
    height: "80 cm",
    width: "220 cm",
    depth: "120 cm",
    weight: "Não informado",
  },
  {
    id: 4,
    name: "teste 4",
    cadeiras: "6 cadeiras Mark",
    slug: "mesa-mark-6-cadeiras-giratorio",
    price: 2049,
    description:
      "Mesa com prato giratório removível, tampo chanfrado e vidro temperado. Cadeiras em eucalipto tratado com tecido Luxor.",
    images: [
      "/img/imgMesa/mesa6.jpg",
      "/img/imgMesa/mesa8.jpg",
      "/img/imgMesa/mesa3.jpeg",
      "/img/imgMesa/mesa4.jpeg",
      "/img/imgMesa/mesa2.jpeg",
    ],
    colors: [
      { name: "Creme", image: "/img/imgMesa/mesa2.jpeg" },
      { name: "Marrom", image: "/img/imgMesa/mesa4.jpeg" },
      { name: "Preto", image: "/img/imgMesa/mesa3.jpeg" },
    ],
    glass: [
      { name: "Preto", image: "/img/imgMesa/mesa3.jpeg" },
      { name: "Off White", image: "/img/imgMesa/mesa1.jpeg" },
    ],
    category: "conjunto",
    chairs: 6,
    tableSize: "media",
    height: "80 cm",
    width: "130 cm",
    depth: "130 cm",
    weight: "Não informado",
  },
];
