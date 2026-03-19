import Image from "next/image";
import Link from "next/link";

const COLLECTIONS = [
  {
    slug: "spring-summer",
    name: "Spring Summer '26",
    description: "The complete seasonal range.",
    image: "/hero1.jpeg",
  },
  {
    slug: "prestige",
    name: "La'egen Prestige",
    description: "For enthusiasts, by enthusiasts.",
    image: "/home3.jpeg",
  },
  {
    slug: "new-arrivals",
    name: "New Arrivals",
    description: "Engineered for performance.",
    image: "/home1.jpeg",
  },
];

export const metadata = {
  title: "Collections | LA'EGEN",
  description: "Browse curated collections by LA'EGEN.",
};

export default function CollectionsPage() {
  return (
    <main className="flex-1 bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.2em] text-white sm:text-4xl">
            Collections
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
          {COLLECTIONS.map((collection) => (
            <Link 
              key={collection.slug} 
              href={`/collections/${collection.slug}`}
              className="group relative block aspect-[16/9] overflow-hidden bg-zinc-900"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover object-center transition duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-xl font-medium uppercase tracking-[0.2em] text-white sm:text-2xl">
                  {collection.name}
                </h2>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition">
                  {collection.description}
                </p>
                <span className="mt-6 inline-flex border border-white px-6 py-2 text-[10px] uppercase tracking-widest text-white transition hover:bg-white hover:text-black">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
