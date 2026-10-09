
import { NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(secretKey);

const HOODIE_PRICE_PENCE = 4499;
const ALLOWED_SIZES = new Set(["XS", "S", "M", "L", "XL", "XXL"]);

type CartItem = {
  quantity?: unknown;
  selectedSize?: unknown;
  size?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cart = body?.cart;

    if (!Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const validatedItems: {
      size: string;
      quantity: number;
    }[] = [];

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
            "For orders of 3 or more hoodies, please contact ASCENDLAB for a delivery quote.",
        },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      validatedItems.map((item) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: `ASCENDLAB Black Hoodie - Size ${item.size}`,
          },
          // Use the server's price, not the price sent by the browser.
          unit_amount: HOODIE_PRICE_PENCE,
        },
        quantity: item.quantity,
      }));

    const shippingAmount = totalHoodies === 1 ? 699 : 1099;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,

      // Collect a UK delivery address securely through Stripe Checkout.
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },

      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingAmount,
              currency: "gbp",
            },
            display_name: "UK standard delivery",
          },
        },
      ],

      success_url:
        "https://ascendlab.co.uk/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://ascendlab.co.uk/cart",
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
