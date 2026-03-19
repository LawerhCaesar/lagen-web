import { ProductGrid } from "../../components/ProductGrid";

// Temporary mock data reflecting the "Spring Summer '26" theme
const MOCK_PRODUCTS = [
  { id: "1", name: "Focus T-Shirt", price: "£85.00", image: "/home1.jpeg", hoverImage: "/hero2.jpeg", category: "Apparel" },
  { id: "2", name: "Hybrid Shell Jacket", price: "£245.00", image: "/home2.jpeg", hoverImage: "/hero4.jpeg", category: "Outerwear" },
  { id: "3", name: "Prestige Oversized Hoodie", price: "£160.00", image: "/home3.jpeg", hoverImage: "/hero1.jpeg", category: "Prestige" },
  { id: "4", name: "Initial Cargo Pant", price: "£140.00", image: "/home4.jpeg", hoverImage: "/hero3.jpeg", category: "Bottoms" },
  { id: "5", name: "Nexus Graphic Tee", price: "£90.00", image: "/hero2.jpeg", hoverImage: "/home1.jpeg", category: "Apparel" },
  { id: "6", name: "Technical Training Short", price: "£75.00", image: "/hero3.jpeg", hoverImage: "/home4.jpeg", category: "Shorts" },
  { id: "7", name: "Lagen Wordmark Cap", price: "£45.00", image: "/public/logo.png", category: "Accessories" },
  { id: "8", name: "Owners Club Quarter Zip", price: "£130.00", image: "/hero4.jpeg", hoverImage: "/home2.jpeg", category: "Apparel" },
];

export const metadata = {
  title: "Shop All | LA'EGEN",
  description: "Browse the full LA'EGEN catalog.",
};

export default function ShopPage() {
  return (
    <main className="flex-1">
      <ProductGrid 
        products={MOCK_PRODUCTS} 
        title="Shop All" 
      />
    </main>
  );
}
