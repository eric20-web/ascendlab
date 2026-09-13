import { NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(secretKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cart = body.cart;

    if (!Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const lineItems = cart.map((item: any) => ({
      price_data: {
        currency: "gbp",
        product_data: {
          name: `${item.name} - Size ${item.selectedSize || "N/A"}`,
        },
        unit_amount: Math.round(Number(item.price) * 100),
      },
      quantity: Number(item.quantity) || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,

      success_url:
        "https://ascendlab.co.uk/success?session_id={CHECKOUT_SESSION_ID}",

      cancel_url:
        "https://ascendlab.co.uk/cart",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("========== STRIPE ERROR ==========");

    if (error instanceof Stripe.errors.StripeError) {
      console.error("Message:", error.message);
      console.error("Code:", error.code);
      console.error("Type:", error.type);
    } else {
      console.error(error);
    }

    console.error("==================================");

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Stripe session failed",
      },
      { status: 500 }
    );
  }
}