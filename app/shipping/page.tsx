
import Link from "next/link";

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to ASCENDLAB
        </Link>

        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-gray-400">
          ASCENDLAB
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-5xl">
          Delivery Policy
        </h1>

        <p className="mt-6 leading-7 text-gray-300">
          We want your ASCENDLAB order to reach you safely.
          Please read our delivery information before placing
          your order.
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold">UK delivery</h2>
            <p className="mt-3 leading-7 text-gray-400">
              We currently offer delivery within the United Kingdom.
              Delivery charges are shown in our secure checkout
              before you pay.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Delivery charges</h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
              <div className="flex justify-between gap-4 border-b border-white/10 p-4">
                <span className="text-gray-300">1 hoodie</span>
                <span className="font-semibold">£6.99</span>
              </div>
              <div className="flex justify-between gap-4 p-4">
                <span className="text-gray-300">2 hoodies</span>
                <span className="font-semibold">£10.99</span>
              </div>
            </div>

            <p className="mt-3 leading-7 text-gray-400">
              Orders of 3 or more hoodies require a delivery quote.
              Please contact ASCENDLAB before placing your order.
              We will confirm the delivery cost with you before
              arranging payment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Delivery times</h2>
            <p className="mt-3 leading-7 text-gray-400">
              We use a tracked courier service for standard UK
              deliveries. Delivery estimates depend on the service
              selected and when your parcel is dispatched.
              Courier estimates are not guaranteed delivery dates.
              We will provide any available tracking information
              once your order has been dispatched.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Delivery addresses</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Please enter a complete and accurate UK delivery
              address at checkout. Incorrect or incomplete details
              may delay delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Missing or damaged parcels</h2>
            <p className="mt-3 leading-7 text-gray-400">
              If your parcel has not arrived or your order arrives
              damaged, please contact us with your order details.
              We will investigate and help resolve the issue in
              accordance with your legal rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Contact us</h2>
            <p className="mt-3 leading-7 text-gray-400">
              For delivery questions or a quote for a larger order,
              please contact our team.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-gray-200"
            >
              Contact ASCENDLAB
            </Link>
          </div>
        </section>

        <div className="mt-14 border-t border-white/10 pt-6">
          <Link
            href="/shop"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Continue shopping →
          </Link>
        </div>
      </div>
    </main>
  );
}
