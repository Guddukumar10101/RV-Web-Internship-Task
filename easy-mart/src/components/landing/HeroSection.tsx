"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-[var(--background)] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.6_0.2_120)] via-[oklch(0.85_0.22_90)] to-[oklch(0.95_0.2_80)]">
            Compare Grocery Prices Instantly
          </h1>
          <p className="text-lg sm:text-xl text-[var(--muted-foreground)]">
            Easy Mart helps you find the best prices for your favorite groceries across platforms like Blinkit, Zepto, and more — all in one click.
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="px-6 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-[oklch(0.95_0.2_90)] to-[oklch(0.6_0.18_130)] text-white shadow-md hover:scale-105 transition-transform"
            >
              Compare Now
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[oklch(0.85_0.22_90)] text-[oklch(0.7_0.18_90)] hover:bg-[oklch(0.9_0.15_95)/20%] dark:hover:bg-[oklch(0.3_0.1_120)/25%] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/hero-grocery.svg" // Make sure you add this to public/images/
            alt="Grocery Cart Comparison"
            width={600}
            height={500}
            className="w-full h-auto rounded-xl shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
