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

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

        {/* Product Image */}
        <div>
          <Image
            src="/images/ascend-hoodie.jpeg"
            alt={product.name}
            width={700}
            height={700}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-[6px] text-gray-400">
            Premium Streetwear
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {product.name}
          </h1>

          <p className="mt-6 text-3xl font-bold">
            £{product.price}
          </p>

          <p className="mt-6 text-gray-400">
            Premium heavyweight streetwear hoodie made for everyday comfort and style.
          </p>

          <p className="mb-3 mt-8 uppercase tracking-[4px] text-gray-400">
            Select Size
          </p>

          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
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
              addToCart({
                ...product,
                selectedSize,
              });

              router.push("/cart");
            }}
            className="mt-10 rounded-full bg-white py-4 text-lg font-bold text-black transition hover:bg-gray-200"
          >
            Add to Cart
          </button>

          {/* Buy Now */}
          <button
            onClick={() => router.push("/checkout")}
            className="mt-4 rounded-full border border-white py-4 text-lg font-bold transition hover:bg-white hover:text-black"
          >
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}