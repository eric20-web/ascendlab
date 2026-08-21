import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-12">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.35em] transition hover:opacity-70"
          >
            ASCENDLAB
          </Link>

          <Link
            href="/"
            className="rounded-full border border-gray-600 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            Back Home
          </Link>
        </div>

        {/* Hero */}
        <section className="mb-20 text-center">
          <p className="mb-4 text-sm tracking-[0.45em] text-gray-400">
            ASCENDLAB
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            ABOUT US
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Premium streetwear designed for people who refuse to stay where
            they are.
          </p>
        </section>

        {/* Story */}
        <section className="space-y-8">

          <div className="rounded-2xl bg-[#18181b] p-8 md:p-12">
            <h2 className="mb-5 text-3xl font-bold">
              Built to Ascend
            </h2>

            <p className="leading-8 text-gray-400">
              ASCENDLAB is a streetwear brand built around progress,
              confidence and individuality. We believe what you wear should
              reflect where you are going — not where you have been.
            </p>
          </div>

          <div className="rounded-2xl bg-[#18181b] p-8 md:p-12">
            <h2 className="mb-5 text-3xl font-bold">
              Our Mission
            </h2>

            <p className="leading-8 text-gray-400">
              Our mission is simple: create premium everyday pieces that
              combine comfort, style and a mindset of constant growth.
            </p>
          </div>

          <div className="rounded-2xl bg-[#18181b] p-8 md:p-12">
            <h2 className="mb-5 text-3xl font-bold">
              The ASCENDLAB Mindset
            </h2>

            <p className="leading-8 text-gray-400">
              Keep moving. Keep improving. Keep ascending. ASCENDLAB is for
              people who refuse to stay where they are.
            </p>
          </div>

        </section>

        {/* CTA */}
        <section className="mt-20 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
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