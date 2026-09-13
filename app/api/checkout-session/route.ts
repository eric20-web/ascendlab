import { NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(secretKey);

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

    // Get the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Get the items separately
    const lineItems = await stripe.checkout.sessions.listLineItems(
      sessionId,
      {
        expand: ["data.price.product"],
      }
    );

    const items = lineItems.data.map((item) => {
      const product =
        item.price?.product &&
        typeof item.price.product !== "string"
          ? item.price.product
          : null;

      const productName =
        product && "name" in product
          ? product.name
          : item.description || "ASCENDLAB Black Hoodie";

      const description = item.description || "";

      const sizeMatch = description.match(/Size\s*[:\-]?\s*([A-Za-z0-9]+)/i);

      return {
        name: productName,
        size: sizeMatch ? sizeMatch[1] : "M",
        quantity: item.quantity || 1,
        price: (item.price?.unit_amount || 0) / 100,
      };
    });

    return NextResponse.json({
      total: session.amount_total,
      currency: session.currency,
      payment_status: session.payment_status,
      items,
    });
  } catch (error) {
    console.error("========== CHECKOUT SESSION ERROR ==========");

    if (error instanceof Stripe.errors.StripeError) {
      console.error("Message:", error.message);
      console.error("Code:", error.code);
      console.error("Type:", error.type);
    } else {
      console.error(error);
    }

    console.error("============================================");

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to retrieve checkout session",
      },
      { status: 500 }
    );
  }
}