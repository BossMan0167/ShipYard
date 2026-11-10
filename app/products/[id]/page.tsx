import { getProduct } from "../../data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "../../data/products";

type Props = {
  params: Promise<{ id: string }>;
};
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main style={{ padding: "40px 8%" }}>
      <Link href="/">← Back to Products</Link>

      <div style={{ marginTop: "30px" }}>
        <div
          style={{
            background: "#dbeafe",
            padding: "100px",
            textAlign: "center",
            borderRadius: "12px",
          }}
        >
          {product.category}
        </div>

        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <h2>₹{product.price.toLocaleString("en-IN")}</h2>

        <p>Category: {product.category}</p>
      </div>
    </main>
  );
}
