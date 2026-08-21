import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session_id" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"],
    });

    const items =
      session.line_items?.data.map((item) => {
        const description =
          item.price?.product &&
          typeof item.price.product !== "string"
            ? "name" in item.price.product
              ? item.price.product.name
              : item.description || "ASCENDLAB Black Hoodie"
            : item.description || "ASCENDLAB Black Hoodie";

        const sizeMatch = description.match(/Size\s+([A-Za-z0-9]+)/i);

        return {
          name: description.replace(/\s*-\s*Size\s+[A-Za-z0-9]+/i, ""),
          size: sizeMatch ? sizeMatch[1] : "M",
          quantity: item.quantity || 1,
          price: (item.price?.unit_amount || 0) / 100,
        };
      }) || [];

    return NextResponse.json({
      total: session.amount_total,
      currency: session.currency,
      payment_status: session.payment_status,
      items,
    });
  } catch (error) {
    console.error("Checkout session error:", error);

    return NextResponse.json(
      { error: "Unable to retrieve checkout session" },
      { status: 500 }
    );
  }
}