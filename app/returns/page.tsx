
import Link from "next/link";

export default function ReturnsPage() {
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
          Returns &amp; Refunds
        </h1>

        <p className="mt-6 leading-7 text-gray-300">
          We want you to be happy with your ASCENDLAB purchase.
          Please read our returns and refund information below.
          Nothing in this policy limits your legal rights.
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold">
              1. Changing your mind
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              For most online orders, you can cancel within 14 days
              after the day you receive your hoodie, without giving
              a reason. After telling us you wish to cancel, you
              normally have a further 14 days to send the item back.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              To notify us, visit our Contact page and clearly state
              that you wish to cancel your order. Please include
              your order number so we can identify your purchase.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              2. Condition of returned items
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              You may handle a hoodie as you reasonably would in a
              shop to check its fit and features. Please return it
              with reasonable care and include any original
              packaging where possible.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              If an item has been handled beyond what is necessary
              to inspect it and its value has been reduced, the
              amount refunded may be reduced where the law permits.
              This does not remove your rights regarding faulty
              or misdescribed goods.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              3. Return postage
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              If you return an item because you have changed your
              mind, you are responsible for the direct return
              postage cost, provided this was made clear before
              your purchase.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              If an item is faulty, damaged on arrival, or sent
              incorrectly, please contact us. We will explain the
              next steps and deal with return costs in accordance
              with your legal rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              4. Refunds
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              When you cancel an online order within the applicable
              cancellation period, we will refund the price paid
              and the cost of standard delivery, where required
              by law. If you chose a more expensive delivery
              option, we only need to refund the standard delivery
              cost.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              Refunds will be issued using the original payment
              method, normally within 14 days of receiving the
              returned goods or receiving evidence that they have
              been sent back, whichever applies under the law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              5. Faulty or incorrect items
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              If your hoodie is faulty, damaged, or not as
              described, contact us as soon as possible with your
              order number and details of the issue. Your statutory
              rights, including any applicable right to a refund,
              repair, or replacement, are not affected by this
              policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              6. How to contact us
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              For cancellations, returns, or refund enquiries,
              contact ASCENDLAB with your order number and a
              description of your request.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-gray-200"
            >
              Contact ASCENDLAB
            </Link>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold">
              Standard cancellation notice
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              To cancel your order, you can send us a clear
              statement through our Contact page. You may use
              the following wording:
            </p>
            <div className="mt-4 rounded-xl border border-white/10 bg-zinc-900 p-5 leading-7 text-gray-300">
              I am notifying ASCENDLAB that I wish to cancel
              my order.
              <br /><br />
              Order number:
              <br />
              Item(s):
              <br />
              Name:
              <br />
              Date:
            </div>
          </div>
        </section>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-5 text-sm text-gray-400">
            <Link
              href="/shipping"
              className="transition hover:text-white"
            >
              Delivery Policy
            </Link>
            <Link
              href="/shop"
              className="transition hover:text-white"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
