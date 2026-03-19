"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, Bookmark, ChevronDown, Menu, X } from "lucide-react";

const CURRENCIES = ["AUD", "USD"] as const;
type Currency = (typeof CURRENCIES)[number];

const navLeft = [
  { label: "shop all.", href: "/shop" },
  { label: "collections.", href: "/collections" },
  { label: "men.", href: "/shop?gender=men" },
  { label: "women.", href: "/shop?gender=women" },
  { label: "coming soon.", href: "#" },
];

const navRight = [
  { label: "the unknown.", href: "#" },
  { label: "lagen Privée.", href: "#" },
  { label: "nexus.", href: "#" },
];

export function Navbar() {
  const [currency, setCurrency] = useState<Currency>("AUD");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[1920px] items-center px-4 sm:px-6 md:h-20 lg:h-24 lg:px-8">
        {/* Left: hamburger on mobile/tablet, nav links on desktop */}
        <nav className="flex flex-1 items-center justify-start gap-4 md:gap-6 lg:gap-8 grow">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex flex-none min-h-[44px] min-w-[44px] items-center justify-center text-white transition hover:text-white/70 md:min-h-[40px] md:min-w-[40px]"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 md:h-5 md:w-5" />
          </button>
          <div className="hidden lg:flex lg:items-center lg:gap-14">
            {navLeft.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.25em] text-white transition hover:text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Center logo - responsive height, flex-none ensures it takes its space */}
        <div className="flex flex-none items-center justify-center px-10 md:px-20 lg:px-32">
          <Link
            href="/"
            className="flex items-center transition hover:opacity-80"
            aria-label="Home"
          >
            <Image
              src="/logo.png"
              alt="Laegen"
              width={300}
              height={80}
              className="h-10 w-auto object-contain brightness-0 invert sm:h-12 md:h-16 lg:h-[80px]"
              priority
            />
          </Link>
        </div>

        {/* Right: navigation + icons */}
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <div className="hidden md:flex md:items-center md:gap-8 lg:gap-14">
            {navRight.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.25em] text-white transition hover:text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-none items-center gap-1 sm:gap-2 text-white">
            <div className="relative flex items-center">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="cursor-pointer appearance-none border-0 bg-transparent py-2 pr-6 text-[11px] uppercase tracking-wider text-white focus:outline-none focus:ring-0 [&>option]:bg-black [&>option]:text-white sm:py-1.5"
                aria-label="Select currency"
              >
                {CURRENCIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 h-3.5 w-3.5 text-white/60" aria-hidden />
            </div>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center transition hover:text-white/70 md:min-h-[40px] md:min-w-[40px]"
              aria-label="Wishlist"
            >
              <Bookmark className="h-5 w-5 md:h-4 md:w-4" />
            </button>
            <Link
              href="/login"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center transition hover:text-white/70 md:min-h-[40px] md:min-w-[40px]"
              aria-label="Account"
            >
              <User className="h-5 w-5 md:h-4 md:w-4" />
            </Link>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center transition hover:text-white/70 md:min-h-[40px] md:min-w-[40px]"
              aria-label="Search"
            >
              <Search className="h-5 w-5 md:h-4 md:w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/tablet menu overlay - z-[100] to cover everything including PromoBanner */}
      <div
        className={`fixed inset-0 z-[100] h-screen w-screen bg-black transition-opacity duration-300 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-screen flex-col bg-black pt-6">
          <div className="flex items-center justify-between px-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              Navigation
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white transition hover:rotate-90 hover:scale-110"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-12" aria-label="Main navigation">
            <div className="space-y-4">
              {navLeft.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-2xl font-semibold uppercase tracking-[0.15em] text-white transition hover:text-white/70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="my-8 h-px w-12 bg-white/20" />
            <div className="space-y-4">
              {navRight.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-xl font-medium uppercase tracking-[0.15em] text-white transition hover:text-white/70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
