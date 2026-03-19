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
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-white sm:text-sm">
            Now Live
          </p>
          <h1 className="mt-2 text-3xl font-semibold uppercase tracking-[0.2em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Spring Summer &apos;26
          </h1>
          <Link
            href="/collections/spring-summer"
            className="mt-6 min-h-[44px] rounded-md bg-[#5c4033] px-6 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#4a3328] sm:mt-8 sm:px-8"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
