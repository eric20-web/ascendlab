"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xrpzvrqd",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to send your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

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
              href="mailto:ascendlab88@gmail.com"
              className="break-all font-semibold text-[#e2b72f] transition hover:opacity-70"
            >
              ascendlab88@gmail.com
            </a>
          </div>

          {/* Customer Support */}
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

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Success Message */}
            {success && (
              <div className="rounded-xl border border-green-500/40 bg-green-500/10 px-5 py-4 text-green-400">
                <p className="text-lg font-bold">
                  Message Sent Successfully! ✓
                </p>

                <p className="mt-1 text-sm">
                  Thank you for contacting ASCENDLAB.
                  We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-4 text-red-400">
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-[#e2b72f]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-[#e2b72f]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="How can we help?"
                required
                className="w-full resize-none rounded-md border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-[#e2b72f]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-md bg-[#e2b72f] px-8 py-4 font-bold text-black transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {sending ? "SENDING..." : "SEND MESSAGE"}
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