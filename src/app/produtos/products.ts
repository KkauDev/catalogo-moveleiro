// Tipagem profissional exportada para uso em todo o projeto
export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
};

// Base de dados local com 6 produtos de exemplo
export const products: Product[] = [
  {
    id: 1,
    name: "Conjunto Elisa 180x90 + 6 cadeiras Agatha",
    slug: "conjunto-elisa-180x90-6-cadeiras-agatha",
    price: 4499.0,
    description:
      "Um belíssimo conjunto de mesa de jantar com tampo de vidro temperado e acabamento em madeira maciça. As cadeiras Agatha oferecem conforto excepcional com design ergonômico, encosto curvo e tecido de alta durabilidade. Perfeito para reunir a família com estilo e sofisticação.",
    images: [
      "/img/imgMesa/mesa4.jpeg",
      "/img/imgMesa/mesa1.jpeg",
      "/img/imgMesa/mesa2.jpeg",
    ],
  },
  {
    id: 2,
    name: "Mesa de Jantar Viena 160x90",
    slug: "mesa-de-jantar-viena-160x90",
    price: 2890.0,
    description:
      "A Mesa Viena destaca-se pelo seu design contemporâneo e base em formato cruzado, proporcionando mais espaço para as pernas. Ideal para ambientes modernos e sofisticados. Acabamento primoroso com bordas chanfradas.",
    images: ["/img/imgMesa/mesa1.jpeg", "/img/imgMesa/mesa4.jpeg"],
  },
  {
    id: 3,
    name: "Conjunto Paris com 4 Cadeiras",
    slug: "conjunto-paris-com-4-cadeiras",
    price: 3200.0,
    description:
      "Compacto e charmoso, o Conjunto Paris é perfeito para espaços menores sem abrir mão da elegância e do conforto. Cadeiras revestidas em linho e mesa com tampo em MDF laqueado de alta resistência.",
    images: ["/img/imgMesa/mesa2.jpeg", "/img/imgMesa/mesa1.jpeg"],
  },
  {
    id: 4,
    name: "Mesa Redonda Berlim 120cm",
    slug: "mesa-redonda-berlim-120cm",
    price: 1950.0,
    description:
      "Mesa redonda que promove integração e boas conversas durante as refeições. Apresenta tampo laqueado off-white com vidro sobreposto e robusta base em madeira tauari.",
    images: ["/img/imgMesa/mesa4.jpeg", "/img/imgMesa/mesa2.jpeg"],
  },
  {
    id: 5,
    name: "Cadeira Estofada Milão (Kit 2 un)",
    slug: "cadeira-estofada-milao-kit-2",
    price: 850.0,
    description:
      "Cadeiras estofadas em linho de alta qualidade. Estrutura em madeira maciça e espuma D-28 no assento para máximo conforto prolongado.",
    images: ["/img/imgMesa/mesa1.jpeg"],
  },
];

// Simulação de chamadas HTTP assíncronas
export async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => setTimeout(() => resolve(products), 500));
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(products.find((p) => p.slug === slug));
    }, 500),
  );
}
