
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <header className="store-header">
        <h1>Shipyard Store</h1>
        <p>Discover products you'll love.</p>
      </header>

      <section className="product-section">
        <h2>Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
