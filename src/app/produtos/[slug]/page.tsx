import { products, Product } from "@/src/data/products";
import { notFound } from "next/navigation";
import ProductView from "./ProductView";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product: Product | undefined = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ProductView product={product} />;
}
