"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Start Saving on Your Groceries Today
        </h2>
        <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
          Join thousands of users comparing prices from Blinkit, JioMart, BigBasket, and more. Discover the best deals, every time.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/register"
            className="bg-white text-[var(--primary)] font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Create Account
          </Link>
          <Link
            href="/login"
            className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-[var(--primary)] transition-all duration-300 font-semibold"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
