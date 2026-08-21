import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black px-4 py-10 text-white sm:px-6 sm:py-16 md:px-12">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 flex items-center justify-between gap-4 sm:mb-16">
          <Link
            href="/"
            className="shrink-0 text-base font-bold tracking-[0.25em] transition hover:opacity-70 sm:text-xl sm:tracking-[0.35em]"
          >
            ASCENDLAB
          </Link>

          <Link
            href="/"
            className="shrink-0 rounded-full border border-gray-600 px-4 py-2 text-xs transition hover:bg-white hover:text-black sm:px-5 sm:text-sm"
          >
            Back Home
          </Link>
        </div>

        {/* Hero */}
        <section className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs tracking-[0.35em] text-gray-400 sm:text-sm sm:tracking-[0.45em]">
            ASCENDLAB
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            CONTACT US
          </h1>

          <p className="mx-auto mt-6 max-w-2xl px-2 text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8">
            Have a question about an order, our products, or ASCENDLAB?
            We&apos;d love to hear from you.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="grid gap-6 md:grid-cols-2 md:gap-8">

          {/* Email */}
          <div className="rounded-2xl bg-[#18181b] p-6 sm:p-8 md:p-10">
            <h2 className="mb-4 text-2xl font-bold">
              Email Us
            </h2>

            <p className="mb-6 leading-7 text-gray-400">
              For questions about orders, products, or anything else,
              send us an email.
            </p>

            <a
              href="mailto:hello@ascendlab.com"
              className="break-all font-semibold text-[#e2b72f] transition hover:opacity-70"
            >
              hello@ascendlab.com
            </a>
          </div>

          {/* Support */}
          <div className="rounded-2xl bg-[#18181b] p-6 sm:p-8 md:p-10">
            <h2 className="mb-4 text-2xl font-bold">
              Customer Support
            </h2>

            <p className="leading-7 text-gray-400">
              Need help with your order? Include your order number
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

        </section>

        {/* Contact Form */}
        <section className="mt-8 rounded-2xl bg-[#18181b] p-6 sm:mt-12 sm:p-8 md:p-12">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
            Send Us a Message
          </h2>

          <form className="space-y-6">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-[#e2b72f]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-[#e2b72f]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="How can we help?"
                className="w-full resize-none rounded-md border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-[#e2b72f]"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-md bg-[#e2b72f] px-8 py-4 font-bold text-black transition hover:opacity-80 sm:w-auto"
            >
              SEND MESSAGE
            </button>

          </form>
        </section>

        {/* CTA */}
        <section className="mt-12 text-center sm:mt-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Ascend?
          </h2>

          <Link
            href="/shop"
            className="mt-8 inline-block rounded-md bg-[#e2b72f] px-8 py-4 font-bold text-black transition hover:opacity-80"
          >
            SHOP NOW
          </Link>
        </section>

      </div>
    </main>
  );
}