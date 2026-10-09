
import Link from "next/link";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Last updated: 10 October 2026
        </p>

        <p className="mt-6 leading-7 text-gray-300">
          ASCENDLAB respects your privacy. This policy explains
          what personal information we collect when you visit
          our website or place an order, how we use it, and
          the choices and rights available to you.
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold">
              1. Who we are
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              ASCENDLAB operates this online clothing store.
              We are responsible for deciding how personal
              information collected through our store is used.
              For privacy questions or requests, please contact
              us through our Contact page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              2. Information we collect
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              Depending on how you use our website, we may
              collect:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-gray-400">
              <li>Your name and email address.</li>
              <li>Your delivery address and other details needed to fulfil your order.</li>
              <li>Order details, including products, sizes, quantities and prices.</li>
              <li>Messages you send us about orders, returns or other enquiries.</li>
              <li>Technical information needed to operate, secure and troubleshoot the website.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              3. How we use your information
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              We use personal information to process orders,
              arrange payments and delivery, send relevant order
              updates, respond to enquiries, manage returns,
              prevent fraud and maintain website security.
              We may also keep records where required for
              accounting, tax and other legal obligations.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              We process information where necessary to fulfil
              our contract with you, comply with legal
              obligations or pursue legitimate interests such
              as protecting our store and resolving disputes.
              Where we rely on consent, you may withdraw it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              4. Payments and third-party services
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              We use Stripe to process online payments through
              its secure checkout. Payment information is
              handled by Stripe in accordance with its own
              privacy information. ASCENDLAB does not intend
              to store customers' full payment card details
              on its own website.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              We may share relevant information with our website
              hosting provider, payment processor, delivery
              company and professional advisers where needed
              to operate the store, deliver orders, meet legal
              obligations or resolve disputes. We only intend
              to share information relevant to the purpose.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              5. Cookies and local storage
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              Our website may use browser storage and essential
              technologies to operate features such as the
              shopping cart. Stripe may also use technologies
              needed to provide secure checkout and prevent
              fraud. Any non-essential analytics or advertising
              technologies, if introduced, will be handled in
              accordance with applicable consent requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              6. How long we keep information
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              We keep personal information only for as long as
              reasonably necessary for the purposes described
              in this policy, including order fulfilment,
              customer service, accounting, legal obligations
              and resolving disputes. The period depends on
              the type of information and the reason it is
              held. When it is no longer needed, we will
              securely delete it or otherwise dispose of it
              where appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              7. Keeping information secure
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              We take reasonable measures to protect personal
              information against unauthorised access, loss,
              misuse or disclosure. No method of online
              transmission or electronic storage can be
              guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              8. Your data protection rights
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              Depending on the circumstances, UK data
              protection law may give you the right to access
              your information, correct inaccurate details,
              request deletion, restrict or object to certain
              uses, or receive information in a portable
              format. Where processing is based on consent,
              you can withdraw that consent.
            </p>
            <p className="mt-3 leading-7 text-gray-400">
              To exercise a right or ask a question about
              your information, please contact us. You can
              also raise a concern with the UK Information
              Commissioner's Office (ICO).
            </p>
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-white underline"
            >
              Contact the ICO
            </a>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              9. Changes to this policy
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              We may update this policy when our practices
              or legal requirements change. The latest version
              will be published on this page with its
              updated date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              10. Contact ASCENDLAB
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              If you have questions about this policy or how
              we use your personal information, please contact
              us through our website.
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
            <Link
              href="/shipping"
              className="transition hover:text-white"
            >
              Delivery Policy
            </Link>
            <Link
              href="/returns"
              className="transition hover:text-white"
            >
              Returns &amp; Refunds
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
