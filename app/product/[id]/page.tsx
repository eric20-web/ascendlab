"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/context/CartContext";
import { products } from "@/app/data/products";

export default function ProductPage() {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const product = products[0];
  const [selectedSize, setSelectedSize] = useState("M");

  function addProductToCart() {
    addToCart({
      ...product,
      selectedSize,
    });
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-black px-4 py-10 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Product */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">

          {/* Product Image */}
          <div>
            <Image
              src="/images/ascend-hoodie.jpeg"
              alt={product.name}
              width={700}
              height={700}
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">

            <p className="uppercase tracking-[6px] text-gray-400">
              Premium Streetwear
            </p>

            <h1 className="mt-4 text-4xl font-black sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-bold">
              £{product.price.toFixed(2)}
            </p>

            <p className="mt-6 text-gray-400">
              Premium heavyweight streetwear hoodie made for everyday
              comfort and style.
            </p>

            {/* Size */}
            <p className="mb-3 mt-8 uppercase tracking-[4px] text-gray-400">
              Select Size
            </p>

            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border px-5 py-3 transition ${
                    selectedSize === size
                      ? "border-white bg-white text-black"
                      : "border-white text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => {
                addProductToCart();
                router.push("/cart");
              }}
              className="mt-10 w-full rounded-full bg-white py-4 text-lg font-bold text-black transition hover:bg-gray-200"
            >
              Add to Cart
            </button>

            {/* Buy Now */}
            <button
              onClick={() => {
                addProductToCart();
                router.push("/checkout");
              }}
              className="mt-4 w-full rounded-full border border-white py-4 text-lg font-bold transition hover:bg-white hover:text-black"
            >
              Buy Now
            </button>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10 pt-8 text-center">
          <p className="text-sm font-semibold tracking-[0.3em]">
            ASCENDLAB
          </p>

          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
            <a
              href="/shop"
              className="transition hover:text-white"
            >
              Shop
            </a>

            <a
              href="/about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            © 2026 ASCENDLAB. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  );
}