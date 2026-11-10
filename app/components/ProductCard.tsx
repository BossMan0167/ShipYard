
import Link from "next/link";
import { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="product-card"
    >
      <div className="product-image">
        {product.category}
      </div>

      <div className="product-info">
        <p>{product.category}</p>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <h3>₹{product.price.toLocaleString("en-IN")}</h3>

        <span>View Product →</span>
      </div>
    </Link>
  );
}
