"use client";

import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  category?: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <div className="w-full bg-black py-8 sm:py-12">
      {/* Header Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h1 className="text-center text-2xl font-semibold uppercase tracking-[0.2em] text-white sm:text-3xl md:text-4xl py-12">
            {title}
          </h1>
        )}

        {/* Minimalist Filter/Sort Toolbar */}
        <div className="sticky top-[56px] md:top-[80px] lg:top-[96px] z-30 bg-black/80 backdrop-blur-sm border-y border-white/10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-white/70 transition">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
            </button>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-white/70 transition">
              Sort
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/40">
            {products.length} Products
          </p>
        </div>

        {/* Responsive Grid: 2 columns mobile, 3 tablet, 4 desktop */}
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8 lg:mt-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
