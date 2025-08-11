"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Real-time price comparison",
  "Supports multiple grocery platforms",
  "Intelligent deal suggestions",
  "Clean, intuitive UI/UX",
  "Works on all devices",
  "Fully customizable alerts",
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-[var(--background)] px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[var(--foreground)]"
        >
          Why Choose Easy Mart?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mt-4 text-[var(--muted-foreground)]"
        >
          Powerful tools and smart comparisons to help you save more on everyday essentials.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 text-left">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-[var(--card)] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <CheckCircle className="text-[var(--primary)]" size={28} />
              <span className="text-[var(--foreground)] font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
