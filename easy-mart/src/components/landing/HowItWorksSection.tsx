"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Search, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-[var(--primary)]" />,
    title: "Search Your Product",
    description:
      "Type in what you need – groceries, snacks, essentials – and let Easy Mart do the magic.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-[var(--primary)]" />,
    title: "Compare Prices",
    description:
      "View real-time price comparisons from Blinkit, BigBasket, Amazon, JioMart, and more.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-[var(--primary)]" />,
    title: "Choose & Save",
    description:
      "Pick the platform offering the best deal. Save money every time you shop.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-[var(--muted)] px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[var(--foreground)]"
        >
          How Easy Mart Works
        </motion.h2>
        <p className="mt-4 text-[var(--muted-foreground)] text-lg">
          Find the best grocery deals in 3 easy steps.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[var(--background)] p-4 rounded-full shadow-md">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{step.title}</h3>
              <p className="text-[var(--muted-foreground)]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
