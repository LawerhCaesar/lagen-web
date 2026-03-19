"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, Bookmark, ChevronDown, Menu, X } from "lucide-react";

const CURRENCIES = ["AUD", "USD"] as const;
type Currency = (typeof CURRENCIES)[number];

const navLeft = [
  { label: "men.", href: "#" },
  { label: "women.", href: "#" },
  { label: "unisex.", href: "#" },
  { label: "collection.", href: "#" },
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:h-24 lg:px-8">
        {/* Left: hamburger on mobile/tablet, nav links on desktop */}
        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/90 transition hover:text-white md:min-h-[40px] md:min-w-[40px]"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 md:h-5 md:w-5" />
          </button>
          <div className="hidden lg:flex lg:items-center lg:gap-14">
            {navLeft.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Center logo - responsive height */}
        <Link
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center"
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

        {/* Right: icons + optional nav on tablet/desktop */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <div className="hidden md:flex md:items-center md:gap-8 lg:gap-14">
            {navRight.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="relative flex items-center">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="cursor-pointer appearance-none border-0 bg-transparent py-2 pr-6 text-[11px] uppercase tracking-wider text-white/80 focus:outline-none focus:ring-0 [&>option]:bg-black [&>option]:text-white sm:py-1.5"
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
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/90 transition hover:text-white md:min-h-[40px] md:min-w-[40px]"
              aria-label="Wishlist"
            >
              <Bookmark className="h-5 w-5 md:h-4 md:w-4" />
            </button>
            <Link
              href="/login"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/90 transition hover:text-white md:min-h-[40px] md:min-w-[40px]"
              aria-label="Account"
            >
              <User className="h-5 w-5 md:h-4 md:w-4" />
            </Link>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/90 transition hover:text-white md:min-h-[40px] md:min-w-[40px]"
              aria-label="Search"
            >
              <Search className="h-5 w-5 md:h-4 md:w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/tablet menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-opacity duration-200 md:bg-black/98 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col pt-6">
          <div className="flex items-center justify-between px-4">
            <span className="text-[11px] font-medium uppercase tracking-wider text-white/60">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/90 transition hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-8" aria-label="Main navigation">
            <div className="space-y-1">
              {navLeft.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.5 text-base font-medium uppercase tracking-[0.2em] text-white transition hover:text-white/90"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="my-4 border-t border-white/10" />
            <div className="space-y-1">
              {navRight.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.5 text-base font-medium uppercase tracking-[0.2em] text-white transition hover:text-white/90"
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
