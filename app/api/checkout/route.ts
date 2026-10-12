
import { NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(secretKey);

const HOODIE_PRICE_PENCE = 4499;
const UK_SHIPPING_PENCE = 0;
const EUROPE_SHIPPING_PENCE = 1299;
const AFRICA_SHIPPING_PENCE = 1499;

const ALLOWED_SIZES = new Set(["XS", "S", "M", "L", "XL", "XXL"]);

type CartItem = {
  quantity?: unknown;
  selectedSize?: unknown;
  size?: unknown;
};

const EUROPE_COUNTRIES = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE",
  "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT",
  "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL",
  "PT", "RO", "SK", "SI", "ES", "SE", "CH"
] as const;

const AFRICA_COUNTRIES = [
  "DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM",
  "CF", "TD", "KM", "CG", "CD", "CI", "DJ", "EG",
  "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN",
  "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML",
  "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW",
  "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD",
  "TZ", "TG", "TN", "UG", "ZM", "ZW"
] as const;

const ALLOWED_COUNTRIES = new Set<string>([
  "GB",
  ...EUROPE_COUNTRIES,
  ...AFRICA_COUNTRIES
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cart = body?.cart;
    const country =
      typeof body?.country === "string"
        ? body.country.toUpperCase()
        : "";

    if (!ALLOWED_COUNTRIES.has(country)) {
      return NextResponse.json(
        { error: "Please select a supported delivery country." },
        { status: 400 }
      );
    }

    if (!Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const validatedItems: { size: string; quantity: number }[] = [];
    let totalHoodies = 0;

    for (const item of cart as CartItem[]) {
      const size = String(
        item.selectedSize ?? item.size ?? ""
      ).trim().toUpperCase();

      const quantity = Number(item.quantity ?? 1);

      if (!ALLOWED_SIZES.has(size)) {
        return NextResponse.json(
          { error: "Please select a valid hoodie size for every item." },
          { status: 400 }
        );
      }

      if (!Number.isInteger(quantity) || quantity < 1) {
        return NextResponse.json(
          { error: "Invalid item quantity." },
          { status: 400 }
        );
      }

      totalHoodies += quantity;
      validatedItems.push({ size, quantity });
    }

    if (totalHoodies > 2) {
      return NextResponse.json(
        {
          error:
            "For orders of 3 or more hoodies, please contact ASCENDLAB for a delivery quote."
        },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      validatedItems.map((item) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: `ASCENDLAB Black Hoodie - Size ${item.size}`
          },
          unit_amount: HOODIE_PRICE_PENCE
        },
        quantity: item.quantity
      }));

    const isUK = country === "GB";
    const isEurope = (
      EUROPE_COUNTRIES as readonly string[]
    ).includes(country);

    const shippingAmount = isUK
      ? UK_SHIPPING_PENCE
      : isEurope
        ? EUROPE_SHIPPING_PENCE
        : AFRICA_SHIPPING_PENCE;

    const shippingName = isUK
      ? "Free UK delivery"
      : isEurope
        ? "Europe delivery"
        : "Africa delivery";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,

      shipping_address_collection: {
        allowed_countries: [
          country as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry
        ]
      },

      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingAmount,
              currency: "gbp"
            },
            display_name: shippingName,
            delivery_estimate: isUK
              ? {
                  minimum: { unit: "business_day", value: 2 },
                  maximum: { unit: "business_day", value: 5 }
                }
              : {
                  minimum: { unit: "business_day", value: 5 },
                  maximum: { unit: "business_day", value: 15 }
                }
          }
        }
      ],

      success_url:
        "https://ascendlab.co.uk/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://ascendlab.co.uk/cart"
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("STRIPE CHECKOUT ERROR:", error);

    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 }
    );
  }
}
