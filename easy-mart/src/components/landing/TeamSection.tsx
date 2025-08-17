"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  { name: "Guddu Kumar Yadav", role: "Founder & Developer", img: "/images/team/Guddu.jpg" },
  { name: "Nitish Kumar ", role: "Backend Developer", img: "/images/team/nk.jpg" },
  { name: "Nitish Pal", role: "API Engineer", img: "/images/team/nitishpal.jpg" },
  { name: "Hanshraj Kumar Singh ", role: "Tester ", img: "/images/team/hans.png" },
  { name: "Augustine Dungdung", role: "UI Designer", img: "/images/team/augustine.jpg" },
];

export const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [dotIndex, setDotIndex] = useState(0);
  const teamTriple = [...team, ...team, ...team]; // Looping list

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const visibleItems = team.length;
    const totalItems = teamTriple.length;
    const itemWidth = container.scrollWidth / totalItems;

    const scrollToMiddle = () => {
      container.scrollTo({
        left: itemWidth * visibleItems,
        behavior: "instant" as ScrollBehavior,
      });
    };

    // scrollToMiddle(); // Set to middle once

    let animationFrame: number;

    const scroll = () => {
      if (!container || isHovered) {
        animationFrame = requestAnimationFrame(scroll);
        return;
      }

      container.scrollLeft += 8.5;

      const maxScroll = itemWidth * visibleItems * 2;
      const minScroll = itemWidth * visibleItems * 0.5;

      // Only reset scroll if it's at extreme end (prevent jump on hover)
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = itemWidth * visibleItems;
      }

      const currentIndex =
        Math.floor((container.scrollLeft % (itemWidth * visibleItems)) / itemWidth) %
        visibleItems;
      setDotIndex(currentIndex);

      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const handleDotClick = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / teamTriple.length;
    const visibleItems = team.length;

    container.scrollTo({
      left: itemWidth * (visibleItems + index),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative pt-32 pb-28 bg-[var(--background)] overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--foreground)]">
        Meet the Team
      </h2>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-8 overflow-x-auto px-4 md:px-10 no-scrollbar scroll-smooth pt-16 pb-6"
      >
        {teamTriple.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.12, rotateX: 6, rotateY: 6 }}
            transition={{ duration: 0.4 }}
            className="min-w-[250px] bg-[var(--card)] border border-transparent rounded-2xl shadow-md p-8 pt-28 text-center flex-shrink-0 group relative overflow-visible"
            style={{
              borderImage: "linear-gradient(135deg, var(--primary), var(--yellow)) 1",
              borderImageSlice: 1,
            }}
          >
            {/* Static reserved image space */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-28 md:h-28 z-30 pointer-events-none overflow-visible">
              <motion.div
                className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.65] group-hover:-translate-y-2"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-[var(--primary)] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                />
              </motion.div>
            </div>

            <motion.h3
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="mt-8 font-bold text-lg text-[var(--foreground)]"
            >
              {member.name}
            </motion.h3>
            <motion.p
              className="text-sm text-[var(--muted-foreground)]"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              {member.role}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {team.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              dotIndex === i
                ? "bg-gradient-to-r from-[var(--primary)] to-[var(--yellow)] scale-110 shadow-md"
                : "bg-[var(--muted-foreground)] opacity-60"
            }`}
            aria-label={`Scroll to team ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
