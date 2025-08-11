// components/landing/PlatformLogos.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const platforms = [
  { name: "Blinkit", src: "/logos/blinkit.png" },
  { name: "BigBasket", src: "/logos/bigbasket.png" },
  { name: "JioMart", src: "/logos/jiomart.png" },
  { name: "Amazon Fresh", src: "/logos/amazonfresh1.png" },
];

export function PlatformLogos() {
  return (
    <section className="py-16 bg-[var(--card)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold text-[var(--foreground)] mb-12">
          Trusted by Top Grocery Platforms
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center justify-center">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image
                src={platform.src}
                alt={platform.name}
                width={100}
                height={40}
                className="grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
