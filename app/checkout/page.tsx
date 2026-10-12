
"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/context/CartContext";

const COUNTRY_GROUPS = [
  {
    label: "United Kingdom",
    countries: [{ code: "GB", name: "United Kingdom" }],
  },
  {
    label: "Europe",
    countries: [
      { code: "AT", name: "Austria" },
      { code: "BE", name: "Belgium" },
      { code: "BG", name: "Bulgaria" },
      { code: "HR", name: "Croatia" },
      { code: "CY", name: "Cyprus" },
      { code: "CZ", name: "Czechia" },
      { code: "DK", name: "Denmark" },
      { code: "EE", name: "Estonia" },
      { code: "FI", name: "Finland" },
      { code: "FR", name: "France" },
      { code: "DE", name: "Germany" },
      { code: "GR", name: "Greece" },
      { code: "HU", name: "Hungary" },
      { code: "IS", name: "Iceland" },
      { code: "IE", name: "Ireland" },
      { code: "IT", name: "Italy" },
      { code: "LV", name: "Latvia" },
      { code: "LI", name: "Liechtenstein" },
      { code: "LT", name: "Lithuania" },
      { code: "LU", name: "Luxembourg" },
      { code: "MT", name: "Malta" },
      { code: "NL", name: "Netherlands" },
      { code: "NO", name: "Norway" },
      { code: "PL", name: "Poland" },
      { code: "PT", name: "Portugal" },
      { code: "RO", name: "Romania" },
      { code: "SK", name: "Slovakia" },
      { code: "SI", name: "Slovenia" },
      { code: "ES", name: "Spain" },
      { code: "SE", name: "Sweden" },
      { code: "CH", name: "Switzerland" },
    ],
  },
  {
    label: "Africa",
    countries: [
      { code: "DZ", name: "Algeria" },
      { code: "AO", name: "Angola" },
      { code: "BJ", name: "Benin" },
      { code: "BW", name: "Botswana" },
      { code: "BF", name: "Burkina Faso" },
      { code: "BI", name: "Burundi" },
      { code: "CV", name: "Cabo Verde" },
      { code: "CM", name: "Cameroon" },
      { code: "CF", name: "Central African Republic" },
      { code: "TD", name: "Chad" },
      { code: "KM", name: "Comoros" },
      { code: "CG", name: "Republic of the Congo" },
      { code: "CD", name: "Democratic Republic of the Congo" },
      { code: "CI", name: "Côte d'Ivoire" },
      { code: "DJ", name: "Djibouti" },
      { code: "EG", name: "Egypt" },
      { code: "GQ", name: "Equatorial Guinea" },
      { code: "ER", name: "Eritrea" },
      { code: "SZ", name: "Eswatini" },
      { code: "ET", name: "Ethiopia" },
      { code: "GA", name: "Gabon" },
      { code: "GM", name: "Gambia" },
      { code: "GH", name: "Ghana" },
      { code: "GN", name: "Guinea" },
      { code: "GW", name: "Guinea-Bissau" },
      { code: "KE", name: "Kenya" },
      { code: "LS", name: "Lesotho" },
      { code: "LR", name: "Liberia" },
      { code: "LY", name: "Libya" },
      { code: "MG", name: "Madagascar" },
      { code: "MW", name: "Malawi" },
      { code: "ML", name: "Mali" },
      { code: "MR", name: "Mauritania" },
      { code: "MU", name: "Mauritius" },
      { code: "MA", name: "Morocco" },
      { code: "MZ", name: "Mozambique" },
      { code: "NA", name: "Namibia" },
      { code: "NE", name: "Niger" },
      { code: "NG", name: "Nigeria" },
      { code: "RW", name: "Rwanda" },
      { code: "ST", name: "São Tomé and Príncipe" },
      { code: "SN", name: "Senegal" },
      { code: "SC", name: "Seychelles" },
      { code: "SL", name: "Sierra Leone" },
      { code: "SO", name: "Somalia" },
      { code: "ZA", name: "South Africa" },
      { code: "SS", name: "South Sudan" },
      { code: "SD", name: "Sudan" },
      { code: "TZ", name: "Tanzania" },
      { code: "TG", name: "Togo" },
      { code: "TN", name: "Tunisia" },
      { code: "UG", name: "Uganda" },
      { code: "ZM", name: "Zambia" },
      { code: "ZW", name: "Zimbabwe" },
    ],
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("GB");

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + Number(item.price) * (Number(item.quantity) || 1),
    0
  );

  const totalHoodies = cart.reduce(
    (sum: number, item: any) =>
      sum + (Number(item.quantity) || 1),
    0
  );

  const requiresDeliveryQuote = totalHoodies >= 3;
  const isUK = country === "GB";

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
        body: JSON.stringify({ cart, country }),
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
          <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

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
                £{(
                  Number(item.price) * (Number(item.quantity) || 1)
                ).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-gray-400">Subtotal (before delivery)</span>
            <span className="text-2xl font-bold">£{total.toFixed(2)}</span>
          </div>

          <label htmlFor="delivery-country" className="mt-8 block font-semibold">
            Delivery country
          </label>
          <select
            id="delivery-country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="mt-2 w-full rounded-lg border border-white/20 bg-zinc-800 p-3 text-white"
          >
            {COUNTRY_GROUPS.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.countries.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          <p className="mt-3 text-sm text-gray-400">
            {isUK
              ? "Free UK delivery."
              : "International delivery charges apply. The final rate is shown at secure checkout."}
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
            onClick={() =>
              requiresDeliveryQuote ? router.push("/contact") : handleCheckout()
            }
            disabled={loading && !requiresDeliveryQuote}
            className="mt-8 w-full rounded-full bg-white py-4 font-bold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Starting checkout..."
              : requiresDeliveryQuote
                ? "Contact for Delivery Quote"
                : "Proceed to Payment"}
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
