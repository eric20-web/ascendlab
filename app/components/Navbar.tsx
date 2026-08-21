"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-5 py-4 md:px-10 md:py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="transition hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/ascendlab-logo.png"
            alt="ASCENDLAB"
            width={160}
            height={107}
            priority
            className="w-24 md:w-40"
            style={{ height: "auto" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-base text-white md:flex">
          <Link
            href="/"
            className="transition hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="transition hover:text-gray-300"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="transition hover:text-gray-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-gray-300"
          >
            Contact
          </Link>

          <Link
            href="/cart"
            className="transition hover:text-gray-300"
          >
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-white/40 text-white md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-white transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-4 flex flex-col rounded-lg border border-white/20 bg-black/95 p-5 text-center text-white md:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/10 py-3"
          >
            Home
          </Link>

          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/10 py-3"
          >
            Shop
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/10 py-3"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/10 py-3"
          >
            Contact
          </Link>

          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="py-3"
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}