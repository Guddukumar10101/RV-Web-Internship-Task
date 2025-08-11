"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ratings = [
  {
    platform: "Blinkit",
    score: 4.8,
    feedback: "Easy Mart saved me ₹500 last month! Love the real-time deals.",
  },
  {
    platform: "BigBasket",
    score: 4.6,
    feedback: "Super accurate price comparison. Now I always get the best offers.",
  },
  {
    platform: "JioMart",
    score: 4.7,
    feedback: "Game changer for bulk orders. Everything is faster and cheaper.",
  },
];

export function RatingsSection() {
  return (
    <section className="py-20 bg-[var(--card)] px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[var(--foreground)]"
        >
          Platform Ratings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mt-4 text-[var(--muted-foreground)]"
        >
          What real users say about our performance across top platforms.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {ratings.map((item, i) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[var(--background)] shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-[var(--border)]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.platform}</h3>
                <div className="flex items-center text-[var(--primary)] font-bold">
                  <Star className="fill-[var(--primary)] stroke-[var(--primary)] mr-1" size={20} />
                  {item.score}
                </div>
              </div>
              <p className="text-[var(--muted-foreground)] text-sm">{item.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
