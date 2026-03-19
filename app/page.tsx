import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero: full viewport, image + overlay - responsive for mobile/tablet */}
      <section className="relative flex min-h-[calc(100dvh-8rem)] w-full items-center justify-center overflow-hidden sm:min-h-[calc(100dvh-7rem)] md:min-h-[calc(100dvh-6.5rem)] lg:min-h-[calc(100vh-6rem)]">
        <Image
          src="/hero1.jpeg"
          alt="Spring Summer 26"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white sm:text-xs">
            Now Live
          </p>
          <h1 className="mt-2 text-3xl font-semibold uppercase tracking-[0.2em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Spring Summer &apos;26
          </h1>
          <Link
            href="/collections/spring-summer"
            className="mt-6 min-h-[44px] rounded-md bg-[#5c4033] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#4a3328] sm:mt-8 sm:px-8"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="w-full bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/80">
            Engineered for performance
          </p>
          <h2 className="mt-2 text-2xl font-medium uppercase tracking-[0.1em] text-white sm:text-3xl">
            Latest Arrivals
          </h2>
          
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16">
            <Link href="/collections/new-arrivals" className="group relative block aspect-[4/5] overflow-hidden bg-zinc-900">
              <Image
                src="/home1.jpeg"
                alt="New Arrivals Look 1"
                fill
                className="object-cover object-center transition duration-700 ease-in-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h3 className="text-lg font-medium tracking-[0.1em] text-white">Focus Apparel</h3>
                <span className="mt-2 inline-flex border-b border-white pb-0.5 text-[11px] uppercase tracking-wider text-white/90">
                  Shop Collection
                </span>
              </div>
            </Link>

            <Link href="/collections/new-arrivals" className="group relative block aspect-[4/5] overflow-hidden bg-zinc-900">
              <Image
                src="/home2.jpeg"
                alt="New Arrivals Look 2"
                fill
                className="object-cover object-center transition duration-700 ease-in-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h3 className="text-lg font-medium tracking-[0.1em] text-white">Hybrid Outerwear</h3>
                <span className="mt-2 inline-flex border-b border-white pb-0.5 text-[11px] uppercase tracking-wider text-white/90">
                  Shop Collection
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Discovery / Owners Club Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950">
        <div className="mx-auto flex flex-col items-center px-4 py-20 text-center sm:px-6 lg:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/80">
            For enthusiasts, by enthusiasts
          </p>
          <h2 className="mt-3 text-2xl font-medium uppercase tracking-[0.2em] text-white sm:text-3xl md:text-4xl">
            La&apos;egen Prestige
          </h2>
          <div className="mt-12 w-full max-w-4xl opacity-90 transition duration-1000 hover:opacity-100">
             <Image
                src="/home3.jpeg"
                alt="Prestige Collection"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
          </div>
          <Link
            href="/collections/prestige"
            className="mt-12 rounded-md border border-white px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Discover Prestige
          </Link>
        </div>
      </section>
      
      {/* Featured Collection Snippet */}
      <section className="w-full bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-xl font-medium uppercase tracking-[0.1em] text-white sm:text-2xl">
            Initial Made for Everyday
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 lg:mt-12">
            {[1, 2, 3, 4].map((i) => (
              <Link key={i} href="/products/initial" className="group rounded block">
                <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                   {/* Placeholder for individual products */}
                    <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-700">
                       <Image
                          src={i % 2 === 0 ? "/home4.jpeg" : "/hero2.jpeg"}
                          alt="Product"
                          width={400}
                          height={533}
                          className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition duration-500"
                        />
                    </div>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center text-center">
                  <span className="text-xs uppercase tracking-wider text-white">Initial T-Shirt {i}</span>
                  <span className="mt-1 text-xs text-zinc-400">£85</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
