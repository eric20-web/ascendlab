"use client";

import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">

      {/* Header */}
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.35em] hover:opacity-80"
          >
            ASCENDLAB
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/30 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            Back Home
          </Link>
        </div>

        {/* Title */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
            ASCENDLAB
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            SHOP
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Premium streetwear designed for people who refuse to stay where
            they are.
          </p>
        </div>

        {/* Product */}
        <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-zinc-900">

          <div className="relative aspect-square w-full">
            <Image
              src="/images/ascend-hoodie.jpeg"
              alt="ASCENDLAB Black Hoodie"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-7">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Featured
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              ASCENDLAB Black Hoodie
            </h2>

            <p className="mt-3 text-xl font-bold">
              £44.99
            </p>

            <Link
              href="/product/1"
              className="mt-6 block w-full rounded-full bg-white py-4 text-center font-bold text-black transition hover:bg-gray-200"
            >
              View Product
            </Link>

          </div>
        </div>

      </div>
    </main>
  );
}