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
        className="relative flex min-h-[75vh] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-[0.4em] text-gray-300">
            ASCENDLAB
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            LEVEL UP
            <br />
            YOUR EVERYDAY
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-gray-300">
            Premium streetwear designed for people who refuse to stay
            where they are.
          </p>

          {/* SHOP NOW */}
          <Link
            href="/shop"
            className="mt-8 inline-block bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:bg-[#B8962E]"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm tracking-[0.3em] text-gray-400">
              THE ASCENDLAB MINDSET
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              WEAR THE VISION.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Built for the next generation. Premium comfort, confidence
              and a mindset of always moving forward.
            </p>
          </div>

          {/* Daughter wearing ASCENDLAB hoodie */}
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl">
            <img
              src="/images/ascendlab-daughter-hoodie.jpg"
              alt="ASCENDLAB hoodie"
              className="h-[500px] w-full object-cover object-center md:h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="px-6 py-20 md:px-12">
        <div className="mb-12 text-center">
          <p className="text-sm tracking-[0.3em] text-gray-400">
            FEATURED
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            OUR PICKS
          </h2>
        </div>

        <div className="mx-auto max-w-sm">
          <div className="overflow-hidden rounded-lg bg-white">
            <img
              src="/images/ascend-hoodie.jpeg"
              alt="ASCENDLAB Black Hoodie"
              className="h-[450px] w-full object-cover"
            />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                ASCENDLAB Black Hoodie
              </h3>

              <p className="mt-1 text-gray-400">
                Premium heavyweight hoodie
              </p>
            </div>

            <p className="text-xl font-semibold">
              £44.99
            </p>
          </div>

          {/* VIEW PRODUCT */}
          <Link
            href="/product/1"
            className="mt-6 block w-full bg-white py-4 text-center font-semibold text-black transition hover:bg-gray-200"
          >
            VIEW PRODUCT
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 ASCENDLAB. All rights reserved.
      </footer>
    </main>
  );
}