export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: string[];

  category: "mesa" | "cadeira" | "conjunto";
  chairs: number;
  tableSize: "pequena" | "media" | "grande";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Mesa 4 cadeiras preta",
    slug: "mesa-4-cadeiras-preta",
    price: 899,
    description: "Mesa compacta com 4 cadeiras, ideal para ambientes pequenos.",
    images: [
      "/img/imgMesa/mesa1.jpeg",
      "/img/imgMesa/mesa2.jpeg",
      "/img/imgMesa/mesa3.jpeg",
    ],
    category: "conjunto",
    chairs: 4,
    tableSize: "pequena",
  },
  {
    id: 2,
    name: "Mesa 6 cadeiras branca",
    slug: "mesa-6-cadeiras-branca",
    price: 1299,
    description: "Mesa moderna com 6 cadeiras, perfeita para famílias.",
    images: ["/img/imgMesa/mesa4.jpeg", "/img/imgMesa/mesa2.jpeg"],
    category: "conjunto",
    chairs: 6,
    tableSize: "media",
  },
  {
    id: 3,
    name: "Mesa 8 cadeiras madeira",
    slug: "mesa-8-cadeiras-madeira",
    price: 1899,
    description: "Mesa grande com acabamento em madeira e 8 cadeiras.",
    images: ["/img/imgMesa/mesa7.jpeg"],
    category: "conjunto",
    chairs: 8,
    tableSize: "grande",
  },
  {
    id: 4,
    name: "Cadeira estofada preta",
    slug: "cadeira-estofada-preta",
    price: 199,
    description: "Cadeira confortável com estofado premium.",
    images: ["/img/imgMesa/mesa8.jpg"],
    category: "cadeira",
    chairs: 1,
    tableSize: "pequena",
  },
  {
    id: 5,
    name: "Cadeira madeira rústica",
    slug: "cadeira-madeira-rustica",
    price: 249,
    description: "Cadeira resistente com design rústico.",
    images: ["/img/imgMesa/mesa6.jpg"],
    category: "cadeira",
    chairs: 1,
    tableSize: "media",
  },
  {
    id: 6,
    name: "Mesa redonda pequena",
    slug: "mesa-redonda-pequena",
    price: 499,
    description: "Mesa redonda ideal para espaços reduzidos.",
    images: ["/img/imgMesa/mesa4.jpeg"],
    category: "mesa",
    chairs: 0,
    tableSize: "pequena",
  },
];
