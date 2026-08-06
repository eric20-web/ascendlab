"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { products } from "./data/products";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  return (


    <main className="min-h-screen bg-black text-white">
      <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-bold tracking-widest">
          ASCENDLAB
        </h1>

        <div className="flex gap-8 text-lg">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section
        className="relative flex h-screen items-center bg-contain bg-no-repeat bg-right"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-xl">
            <p className="mb-4 uppercase tracking-[8px] text-gray-400">
              Premium Streetwear
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              ASCENDLAB
            </h1>

            <p className="mt-6 text-xl text-gray-300">
              Elevate Your Style. Elevate Your Mind.
            </p>

            <button className="mt-10 rounded-full bg-white px-8 py-4 font-bold text-black hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>
            <section className="bg-zinc-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-8">
          <p className="text-center uppercase tracking-[6px] text-gray-400">
            Our Picks
          </p>

          <div className="mt-16 flex justify-center">
            <div className="max-w-md w-full overflow-hidden rounded-xl bg-black">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {products[0].name}
                </h3>

                <p className="mt-2 text-gray-400">
                  £{products[0].price}
                </p>

                <p className="mb-3 mt-6 text-sm uppercase tracking-widest text-gray-400">
                  Select Size
                </p>

                <div className="flex flex-wrap gap-3">
                  {products[0].sizes.map((size) => (
                    <button
                      key={size}
                      className="rounded-lg border border-white px-4 py-2"
                    >
                      {size}
                    </button>
                  ))}
                </div>
<button
  onClick={() => {
    addToCart(products[0]);
    router.push("/cart");
  }}
  className="mt-6 w-full rounded-full bg-white py-3 font-bold text-black transition hover:bg-gray-200"
>
  Add to Cart
</button>
               

              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-center text-5xl font-black text-white">
            Why Choose ASCENDLAB
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-black p-8 text-center">
              <h3 className="text-2xl font-bold">🚚 Fast UK Delivery</h3>
              <p className="mt-4 text-gray-400">
                Fast and reliable delivery across the UK.
              </p>
            </div>

            <div className="rounded-xl bg-black p-8 text-center">
              <h3 className="text-2xl font-bold">⭐ Premium Quality</h3>
              <p className="mt-4 text-gray-400">
                Heavyweight premium hoodie made for comfort and style.
              </p>
            </div>

            <div className="rounded-xl bg-black p-8 text-center">
              <h3 className="text-2xl font-bold">🛡️ Built to Last</h3>
              <p className="mt-4 text-gray-400">
                Designed for everyday wear with lasting comfort and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 bg-black py-12 text-white">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <p className="text-gray-400">
            © 2026 ASCENDLAB. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}