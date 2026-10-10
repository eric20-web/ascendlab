
import Link from "next/link";

export default function TermsPage() {
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
          Terms &amp; Conditions
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Last updated: 10 October 2026
        </p>

        <p className="mt-6 leading-7 text-gray-300">
          These terms explain the conditions for using the
          ASCENDLAB website and buying products from our online
          store. Please read them before placing an order.
          Nothing in these terms limits your statutory rights.
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold">1. About ASCENDLAB</h2>
            <p className="mt-3 leading-7 text-gray-400">
              ASCENDLAB is a streetwear clothing brand selling
              products through this website. For questions about
              these terms, an order or a product, please contact
              us using our Contact page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">2. Products and availability</h2>
            <p className="mt-3 leading-7 text-gray-400">
              We make reasonable efforts to show products,
              colours, sizes and descriptions accurately.
              Images may differ slightly from the actual product
              because of lighting, screens or photography.
              Products and sizes are subject to availability.
              We will contact you if an issue affects an order
              we have accepted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">3. Prices and payment</h2>
            <p className="mt-3 leading-7 text-gray-400">
              The listed price of the ASCENDLAB Black Hoodie is
              £44.99 per item. Prices are displayed in pounds
              sterling. Applicable delivery charges are shown
              before payment, and the final total is shown at
              Stripe Checkout before you pay.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              Payments are processed through Stripe Checkout.
              Available payment methods are displayed during
              checkout. An order is not treated as paid until
              payment has been confirmed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">4. Placing an order</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Please check your selected sizes, quantities,
              contact details and delivery address before
              completing payment. We use the information you
              provide to process and deliver your order.
              Your order confirmation should be kept for
              your records.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">5. Delivery</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Current UK standard delivery charges are £6.99
              for one hoodie and £10.99 for two hoodies.
              Orders for three or more hoodies require a
              delivery quote before payment can be arranged.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              Delivery estimates depend on the service selected
              and when an order is dispatched. We will provide
              available tracking information after dispatch.
              We will communicate with you if a delivery issue
              affects your order. Your legal rights concerning
              delivery delays and non-delivery remain unaffected.
            </p>
            <Link
              href="/shipping"
              className="mt-3 inline-block text-white underline"
            >
              Read our Delivery Policy
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              6. Cancellation, returns and refunds
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              For most online purchases, you have a legal right
              to cancel within 14 days after receiving your
              goods, without giving a reason. After notifying
              us of cancellation, you normally have a further
              14 days to return the goods.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              Refunds, return postage and the handling of
              faulty or incorrectly supplied products will be
              dealt with in accordance with applicable law.
              Nothing in these terms removes your legal rights
              concerning faulty or misdescribed goods.
            </p>
            <Link
              href="/returns"
              className="mt-3 inline-block text-white underline"
            >
              Read our Returns &amp; Refunds Policy
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold">7. Website use</h2>
            <p className="mt-3 leading-7 text-gray-400">
              You agree not to misuse the website, interfere
              with its operation, attempt unauthorised access
              or submit fraudulent orders. Brand names, logos,
              original copy and other website content may not
              be copied or reused without permission where
              protected by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">8. Liability and legal rights</h2>
            <p className="mt-3 leading-7 text-gray-400">
              We do not exclude or limit liability where doing
              so would be unlawful. These terms do not affect
              any consumer rights that cannot legally be
              excluded or restricted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">9. Privacy</h2>
            <p className="mt-3 leading-7 text-gray-400">
              We use customer information to process orders,
              arrange delivery, manage customer enquiries and
              meet applicable legal obligations. Please read
              our Privacy Policy for further information.
            </p>
            <Link
              href="/privacy"
              className="mt-3 inline-block text-white underline"
            >
              Read our Privacy Policy
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              10. Changes to these terms
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              We may update these terms when our business
              practices or legal requirements change. The
              version displayed on this page will show its
              latest update date. Any order already accepted
              will be handled under the applicable terms and law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">11. Contact us</h2>
            <p className="mt-3 leading-7 text-gray-400">
              For questions about these terms, an order,
              delivery or a return, please contact ASCENDLAB.
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
          <div className="flex flex-wrap gap-5 text-sm text-gray-400">
            <Link href="/shipping" className="hover:text-white">
              Delivery
            </Link>
            <Link href="/returns" className="hover:text-white">
              Returns &amp; Refunds
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/shop" className="hover:text-white">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
