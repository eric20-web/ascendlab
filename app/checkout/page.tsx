
"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + Number(item.price) * (Number(item.quantity) || 1),
    0
  );

  async function handleCheckout() {
    setError("");

    if (cart.length === 0) {
      router.push("/cart");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Unable to start checkout. Please try again."
        );
        return;
      }

      if (typeof data.url === "string" && data.url.length > 0) {
        window.location.href = data.url;
        return;
      }

      setError("Unable to start checkout. Please try again.");
    } catch (err) {
      console.error("Checkout request failed:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Checkout</h1>

        <div className="rounded-2xl bg-zinc-900 p-8">
          <h2 className="mb-6 text-2xl font-bold">
            Order Summary
          </h2>

          {cart.map((item: any, index: number) => (
            <div
              key={`${item.id}-${item.selectedSize}-${index}`}
              className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-gray-400">
                  Size: {item.selectedSize}
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Quantity: {item.quantity || 1}
                </p>
              </div>

              <p className="font-semibold">
                £
                {(
                  Number(item.price) * (Number(item.quantity) || 1)
                ).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-gray-400">
              Subtotal (before delivery)
            </span>
            <span className="text-2xl font-bold">
              £{total.toFixed(2)}
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-400">
            UK delivery is added at the secure payment step.
          </p>

          {error && (
            <div
              role="alert"
              className="mt-6 rounded-lg border border-red-500/50 bg-red-950/40 p-4 text-sm text-red-200"
            >
              {error}

              {error.includes("contact ASCENDLAB") && (
                <button
                  onClick={() => router.push("/contact")}
                  className="mt-3 block font-bold underline"
                >
                  Contact ASCENDLAB
                </button>
              )}
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-8 w-full rounded-full bg-white py-4 font-bold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Starting checkout..." : "Proceed to Payment"}
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
