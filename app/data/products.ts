
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "wireless-headphones",
    name: "Wireless Headphones",
    price: 2499,
    description: "Comfortable wireless headphones with clear sound.",
    category: "Electronics",
    image: "/products/headphones.jpg",
  },
  {
    id: "smart-watch",
    name: "Smart Watch",
    price: 3999,
    description: "A smart watch to track your daily activities.",
    category: "Electronics",
    image: "/products/watch.jpg",
  },
  {
    id: "running-shoes",
    name: "Running Shoes",
    price: 1999,
    description: "Lightweight shoes for everyday running.",
    category: "Fashion",
    image: "/products/shoes.jpg",
  },
  {
    id: "backpack",
    name: "Travel Backpack",
    price: 1499,
    description: "A spacious backpack for college and travel.",
    category: "Accessories",
    image: "/products/backpack.jpg",
  },
  {
    id: "keyboard",
    name: "Mechanical Keyboard",
    price: 2999,
    description: "A mechanical keyboard for productivity.",
    category: "Electronics",
    image: "/products/keyboard.jpg",
  },
  {
    id: "sunglasses",
    name: "Classic Sunglasses",
    price: 999,
    description: "Stylish sunglasses for everyday use.",
    category: "Fashion",
    image: "/products/sunglasses.jpg",
  },
  {
    id: "water-bottle",
    name: "Steel Water Bottle",
    price: 599,
    description: "Reusable stainless steel water bottle.",
    category: "Accessories",
    image: "/products/bottle.jpg",
  },
  {
    id: "desk-lamp",
    name: "LED Desk Lamp",
    price: 1299,
    description: "A modern LED lamp for your study desk.",
    category: "Home",
    image: "/products/lamp.jpg",
  },
];
export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}