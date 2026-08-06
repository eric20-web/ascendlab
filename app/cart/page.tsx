"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="mb-8 text-5xl font-bold">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-900 p-6"
            >
              <h2 className="text-2xl font-bold">{item.name}</h2>

              <p className="mt-2 text-gray-400">
                £{item.price}
              </p>
            </div>
          ))}

          <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-black hover:bg-gray-200">
            Checkout
          </button>
        </div>
      )}
    </main>
  );
}