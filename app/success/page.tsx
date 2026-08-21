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

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      setTotal(44.99);

      setItems([
        {
          name: "ASCENDLAB Black Hoodie",
          size: "M",
          quantity: 1,
          price: 44.99,
        },
      ]);

      clearCart();
      setLoading(false);
      return;
    }

    async function getOrder() {
      try {
        const response = await fetch(
          `/api/checkout-session?session_id=${sessionId}`
        );

        const data = await response.json();

        if (response.ok) {
          if (typeof data.total === "number") {
            setTotal(data.total / 100);
          }

          if (Array.isArray(data.items)) {
            setItems(data.items);
          }
        }
      } catch (error) {
        console.error("Failed to load order:", error);
      } finally {
        clearCart();
        setLoading(false);
      }
    }

    getOrder();
  }, [searchParams, clearCart]);

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">

        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl text-black">
            ✓
          </div>
        </div>

        {/* Brand */}
        <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
          ASCENDLAB
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-5xl font-black">
          Order Confirmed
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Thank you for your order. Your payment was successful and your
          ASCENDLAB order has been received.
        </p>

        {/* Order Details */}
        <div className="mt-10 rounded-2xl bg-zinc-900 p-8 text-left">

          <h2 className="mb-6 text-2xl font-bold">
            Order Details
          </h2>

          {loading ? (
            <p className="text-gray-400">
              Loading order details...
            </p>
          ) : items.length > 0 ? (
            <div className="space-y-5">
              {items.map((item, index) => (
                <div
                  key={`${item.name}-${item.size}-${index}`}
                  className="border-b border-white/10 pb-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">
                        {item.name}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        Size: {item.size}
                      </p>

                      <p className="text-sm text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      £{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              Your order has been received.
            </p>
          )}

          {/* Total */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-lg text-gray-400">
              Total Paid
            </span>

            <span className="text-2xl font-bold">
              {total !== null
                ? `£${total.toFixed(2)}`
                : "Loading..."}
            </span>
          </div>

        </div>

        {/* Continue Shopping */}
        <button
          onClick={() => router.push("/")}
          className="mt-10 w-full rounded-full bg-white py-4 text-lg font-bold text-black transition hover:bg-gray-200"
        >
          Continue Shopping
        </button>

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
            <p className="text-gray-400">
              Loading...
            </p>
          </div>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}