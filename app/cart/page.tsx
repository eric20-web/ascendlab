"use client";

import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const router = useRouter();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold sm:text-5xl">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item: any, index: number) => (
              <div
                key={index}
                className="rounded-xl bg-zinc-900 p-4 sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  
                  {/* Product */}
                  <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={160}
                      height={160}
                      className="h-28 w-28 shrink-0 rounded-xl object-cover sm:h-40 sm:w-40"
                    />

                    <div className="min-w-0 flex-1">
                      <h2 className="break-words text-xl font-bold sm:text-2xl">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-gray-400">
                        Size: {item.selectedSize || "M"}
                      </p>

                      <p className="mt-2 text-gray-400">
                        £{item.price}
                      </p>

                      {/* Quantity */}
                      <div className="mt-4 flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(index)}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-xl hover:bg-zinc-700"
                        >
                          −
                        </button>

                        <span className="text-lg font-bold">
                          {item.quantity || 1}
                        </span>

                        <button
                          onClick={() => increaseQuantity(index)}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-xl hover:bg-zinc-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(index)}
                    className="w-full rounded-lg bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-red-700 sm:w-auto"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="border-t border-zinc-700 pt-6">
              <div className="mb-6 flex items-center justify-between text-2xl font-bold">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-gray-200"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}