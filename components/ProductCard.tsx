"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  category?: string;
}

export function ProductCard({ id, name, price, image, hoverImage, category }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={`/products/${id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 transition-colors group-hover:border-white/10">
        <Image
          src={isHovered && hoverImage ? hoverImage : image}
          alt={name}
          fill
          className="object-cover object-center transition duration-700 ease-in-out group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Quick Add Overlay (Represent Clo Style) */}
        <div className={`absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-3 transition-transform duration-300 translate-y-full group-hover:translate-y-0`}>
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            Quick Add +
          </p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col items-center">
        {category && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">
            {category}
          </span>
        )}
        <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-white group-hover:text-white/80 transition">
          {name}
        </h3>
        <span className="mt-1 text-[11px] font-medium text-zinc-400">
          {price}
        </span>
      </div>
    </Link>
  );
}
