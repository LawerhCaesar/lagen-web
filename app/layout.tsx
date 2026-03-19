import type { ReactNode } from "react";
import type { Viewport } from "next";
import "./globals.css";
import { PromoBanner } from "../components/PromoBanner";
import { Navbar } from "../components/Navbar";

export const metadata = {
  title: "Laegen",
  description: "Authentication for Laegen",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <PromoBanner />
        <Navbar />
        <main className="flex flex-1 flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}

