"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section
        className="relative flex min-h-[75vh] items-center justify-center bg-cover bg-center px-5 text-center sm:px-6"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-3xl">
          <p className="mb-4 text-xs font-medium tracking-[0.35em] text-gray-300 sm:text-sm sm:tracking-[0.4em]">
            ASCENDLAB
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            LEVEL UP
            <br />
            YOUR EVERYDAY
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-300 sm:mt-6 sm:text-base sm:leading-7">
            Premium streetwear designed for people who refuse to stay
            where they are.
          </p>

          {/* Shop Now */}
          <Link
            href="/shop"
            className="mt-7 inline-block bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#B8962E] sm:mt-8 sm:px-8 sm:py-4 sm:text-base"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="px-6 py-16 sm:py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-gray-400 sm:text-sm">
              THE ASCENDLAB MINDSET
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              WEAR THE VISION.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Built for the next generation. Premium comfort, confidence
              and a mindset of always moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="px-6 py-16 sm:py-20 md:px-12">
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-xs tracking-[0.3em] text-gray-400 sm:text-sm">
            FEATURED
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            OUR PICKS
          </h2>
        </div>

        <div className="mx-auto max-w-sm">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg bg-white">
            <img
              src="/images/ascend-hoodie.jpeg"
              alt="ASCENDLAB Black Hoodie"
              className="h-[400px] w-full object-cover sm:h-[450px]"
            />
          </div>

          {/* Product Info */}
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold sm:text-xl">
                ASCENDLAB Black Hoodie
              </h3>

              <p className="mt-1 text-sm text-gray-400 sm:text-base">
                Premium heavyweight hoodie
              </p>
            </div>

            <p className="whitespace-nowrap text-lg font-semibold sm:text-xl">
              £44.99
            </p>
          </div>

          {/* View Product */}
          <Link
            href="/product/1"
            className="mt-6 block w-full bg-white py-4 text-center text-sm font-semibold text-black transition hover:bg-gray-200 sm:text-base"
          >
            VIEW PRODUCT
          </Link>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="border-t border-white/10 px-6 py-16 text-center sm:py-20">
        <p className="text-xs tracking-[0.35em] text-gray-400">
          THE ASCENDLAB MINDSET
        </p>

        <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
          KEEP MOVING.
          <br />
          KEEP ASCENDING.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Your journey doesn't stop here. Wear the vision and keep
          moving forward.
        </p>

        <Link
          href="/about"
          className="mt-7 inline-block rounded-full border border-white/30 px-7 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
        >
          OUR STORY
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="text-sm font-semibold tracking-[0.3em]">
          ASCENDLAB
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
          <Link
            href="/shop"
            className="transition hover:text-white"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>

          <Link
            href="/cart"
            className="transition hover:text-white"
          >
            Cart
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          © 2026 ASCENDLAB. All rights reserved.
        </p>
      </footer>
    </main>
  );
}