"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  async function handleCheckout() {
    try {
      if (cart.length === 0) {
        alert("Your cart is empty.");
        router.push("/cart");
        return;
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Unable to start Stripe Checkout.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-8 text-4xl font-bold">
          Checkout
        </h1>

        <div className="rounded-2xl bg-zinc-900 p-8">

          <h2 className="mb-6 text-2xl font-bold">
            Order Summary
          </h2>

          {cart.map((item: any, index: number) => (
            <div
              key={`${item.id}-${item.selectedSize}-${index}`}
              className="mb-4 flex items-center justify-between border-b border-white/10 pb-4"
            >
              <div>
                <p className="font-semibold">
                  {item.name}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Size: {item.selectedSize}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Quantity: {item.quantity || 1}
                </p>
              </div>

              <p className="font-semibold">
                £{(item.price * (item.quantity || 1)).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="mt-6 flex items-center justify-between">
            <span className="text-gray-400">
              Total
            </span>

            <span className="text-2xl font-bold">
              £{total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-8 w-full rounded-full bg-white py-4 font-bold text-black transition hover:bg-gray-200"
          >
            Proceed to Payment
          </button>

          <button
            onClick={() => router.push("/cart")}
            className="mt-4 w-full rounded-full border border-white py-4 font-bold transition hover:bg-white hover:text-black"
          >
            Back to Cart
          </button>

        </div>
      </div>
    </main>
  );
}