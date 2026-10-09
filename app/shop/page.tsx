"use client";

import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-16 text-white sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between sm:mb-12">
          <Link
            href="/"
            className="text-lg font-bold tracking-[0.3em] transition hover:opacity-80 sm:text-xl sm:tracking-[0.35em]"
          >
            ASCENDLAB
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/30 px-4 py-2 text-xs transition hover:bg-white hover:text-black sm:px-5 sm:text-sm"
          >
            Back Home
          </Link>
        </div>

        {/* Title */}
        <div className="mb-12 text-center sm:mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 sm:text-sm">
            ASCENDLAB
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-5xl md:text-6xl">
            SHOP
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Premium streetwear designed for people who refuse to stay where
            they are.
          </p>
        </div>

        {/* Product */}
        <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-zinc-900">

          {/* Product Image */}
          <div className="relative aspect-square w-full">
            <Image
              src="/images/ascend-hoodie.jpeg"
              alt="ASCENDLAB Black Hoodie"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="p-6 sm:p-7">

            <p className="text-xs uppercase tracking-widest text-gray-400 sm:text-sm">
              Featured
            </p>

            <div className="mt-2 flex items-start justify-between gap-4">
              <h2 className="text-xl font-bold sm:text-2xl">
                ASCENDLAB Black Hoodie
              </h2>

              <p className="whitespace-nowrap text-lg font-bold sm:text-xl">
                £44.99
              </p>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Premium heavyweight streetwear hoodie made for everyday
              comfort and style.
            </p>

            <Link
              href="/product/1"
              className="mt-6 block w-full rounded-full bg-white py-4 text-center text-sm font-bold text-black transition hover:bg-gray-200 sm:text-base"
            >
              VIEW PRODUCT
            </Link>

          </div>
        </div>

        {/* Brand Statement */}
        <section className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-16 text-center">
          <p className="text-xs tracking-[0.35em] text-gray-400">
            THE ASCENDLAB MINDSET
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            KEEP MOVING.
            <br />
            KEEP ASCENDING.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Premium pieces for people who are always moving forward.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-block rounded-full border border-white/30 px-7 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            OUR STORY
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm font-semibold tracking-[0.3em]">
            ASCENDLAB
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-5 text-sm text-gray-400 sm:gap-6">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
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
            <Link
  href="/shipping"
  className="transition hover:text-white"
>
  Delivery
</Link>
<Link
  href="/returns"
  className="transition hover:text-white"
>
  Returns & Refunds
</Link>

          </div>

          <p className="mt-6 text-xs text-gray-500">
            © 2026 ASCENDLAB. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  );
}