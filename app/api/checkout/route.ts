import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
          name: `${item.name} - Size ${item.selectedSize}`,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,

      success_url:
        "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",

      cancel_url: "http://localhost:3000/cart",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe error:", error);

    return NextResponse.json(
      { error: "Stripe session failed" },
      { status: 500 }
    );
  }
}