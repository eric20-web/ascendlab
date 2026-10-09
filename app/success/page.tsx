"use client";

import {
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CartContext } from "@/app/context/CartContext";

type OrderItem = {
  name: string;
  size: string;
  quantity: number;
  price: number;
};

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearCart } = useContext(CartContext);

  const [total, setTotal] = useState<number | null>(null);
  const [items, setItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    let cancelled = false;

    async function getOrder() {
      if (!sessionId) {
        setError("We couldn't verify your payment. Please check your order before trying again.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`,
          { cache: "no-store" }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to verify your order.");
        }

        if (data.payment_status !== "paid") {
          throw new Error("Your payment has not been confirmed yet.");
        }

        if (cancelled) return;

        setTotal(
          typeof data.total === "number" ? data.total / 100 : null
        );

        setItems(Array.isArray(data.items) ? data.items : []);

        // Clear the cart only after payment is verified.
        clearCart();
      } catch (err) {
        if (cancelled) return;

        console.error("Failed to verify order:", err);
        setError(
          err instanceof Error
            ? err.message
            : "We couldn't verify your order. Please contact us before trying again."
        );
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    getOrder();

    return () => {
      cancelled = true;
    };
  }, [searchParams, clearCart]);

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        {loading ? (
          <p className="py-20 text-gray-400">
            Verifying your payment...
          </p>
        ) : error ? (
          <>
            <h1 className="text-4xl font-black">
              Payment Verification
            </h1>
            <p className="mt-6 text-gray-400">{error}</p>
            <button
              onClick={() => router.push("/contact")}
              className="mt-8 w-full rounded-full bg-white py-4 font-bold text-black"
            >
              Contact ASCENDLAB
            </button>
          </>
        ) : (
          <>
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl text-black">
                ✓
              </div>
            </div>

            <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
              ASCENDLAB
            </p>

            <h1 className="mt-4 text-5xl font-black">
              Order Confirmed
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              Thank you for your order. Your payment has been confirmed.
            </p>

            <div className="mt-10 rounded-2xl bg-zinc-900 p-8 text-left">
              <h2 className="mb-6 text-2xl font-bold">
                Order Details
              </h2>

              {items.map((item, index) => (
                <div
                  key={`${item.name}-${item.size}-${index}`}
                  className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-gray-400">
                      Size: {item.size}
                    </p>
                    <p className="text-sm text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg text-gray-400">
                  Total Paid
                </span>
                <span className="text-2xl font-bold">
                  {total !== null ? `£${total.toFixed(2)}` : "Unavailable"}
                </span>
              </div>
            </div>

            <button
              onClick={() => router.push("/")}
              className="mt-10 w-full rounded-full bg-white py-4 text-lg font-bold text-black transition hover:bg-gray-200"
            >
              Continue Shopping
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black px-6 py-20 text-white">
          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-gray-400">Loading...</p>
          </div>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}