
import { NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(secretKey);
const expectedLiveMode = secretKey.startsWith("sk_live_");

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId || !sessionId.startsWith("cs_")) {
      return NextResponse.json(
        { error: "Invalid checkout session" },
        { status: 400 }
      );
    }

    const session =
      await stripe.checkout.sessions.retrieve(sessionId);

    // Ensure the session matches this site's Stripe mode.
    if (session.livemode !== expectedLiveMode) {
      return NextResponse.json(
        { error: "Unable to verify this order" },
        { status: 400 }
      );
    }

    // Confirm this is a paid, GBP payment checkout.
    if (
      session.mode !== "payment" ||
      session.payment_status !== "paid" ||
      session.currency !== "gbp"
    ) {
      return NextResponse.json(
        { error: "Payment has not been confirmed" },
        { status: 400 }
      );
    }

    const lineItems =
      await stripe.checkout.sessions.listLineItems(sessionId);

    const items = lineItems.data.map((item) => {
      const description = item.description || "";

      const sizeMatch = description.match(
        /Size\s*[-:]?\s*([A-Za-z0-9]+)/i
      );

      const name =
        description
          .replace(/\s*-\s*Size\s*[A-Za-z0-9]+$/i, "")
          .trim() || "ASCENDLAB Black Hoodie";

      return {
        name,
        size: sizeMatch ? sizeMatch[1] : "Unknown",
        quantity: item.quantity || 1,
        price: (item.price?.unit_amount ?? 0) / 100,
      };
    });

    return NextResponse.json({
      total: session.amount_total,
      currency: session.currency,
      payment_status: session.payment_status,
      items,
    });
  } catch (error) {
    // Keep detailed errors in server logs, not in customer responses.
    console.error("CHECKOUT SESSION ERROR:", error);

    return NextResponse.json(
      {
        error:
          "Unable to verify your order. Please contact ASCENDLAB.",
      },
      { status: 500 }
    );
  }
}
