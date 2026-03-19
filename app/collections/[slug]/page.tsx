import { notFound } from "next/navigation";
import { ProductGrid } from "../../../components/ProductGrid";

const COLLECTIONS_DATA: Record<string, { title: string; description: string }> = {
  "spring-summer": {
    title: "Spring Summer '26",
    description: "The complete seasonal range featuring lightweight apparel and iconic layering.",
  },
  "prestige": {
    title: "La'egen Prestige",
    description: "Exclusive pieces engineered for enthusiasts, by enthusiasts.",
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "The latest technical innovations and seasonal staples.",
  },
};

// Mock products filtered by collection
const MOCK_PRODUCTS = [
  { id: "1", name: "Focus T-Shirt", price: "£85.00", image: "/home1.jpeg", hoverImage: "/hero2.jpeg", category: "Apparel" },
  { id: "2", name: "Hybrid Shell Jacket", price: "£245.00", image: "/home2.jpeg", hoverImage: "/hero4.jpeg", category: "Outerwear" },
  { id: "3", name: "Prestige Oversized Hoodie", price: "£160.00", image: "/home3.jpeg", hoverImage: "/hero1.jpeg", category: "Prestige" },
  { id: "4", name: "Initial Cargo Pant", price: "£140.00", image: "/home4.jpeg", hoverImage: "/hero3.jpeg", category: "Bottoms" },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = COLLECTIONS_DATA[slug];
  return {
    title: collection ? `${collection.title} | LA'EGEN` : "Collection",
  };
}

export default async function CollectionSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = COLLECTIONS_DATA[slug];

  if (!collection) {
    notFound();
  }

  return (
    <main className="flex-1">
      <header className="pt-20 pb-4 text-center bg-black">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.2em] text-white sm:text-4xl">
          {collection.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto px-4 text-[11px] uppercase tracking-[0.1em] text-white/50 leading-relaxed">
          {collection.description}
        </p>
      </header>
      
      <ProductGrid 
        products={MOCK_PRODUCTS} 
      />
    </main>
  );
}
