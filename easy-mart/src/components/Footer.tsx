"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--card)] text-[var(--foreground)] border-t border-[var(--border)] py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-3">
            Easy Mart
          </h2>
          <p className="text-[var(--muted-foreground)]">
            Smart shopping for modern shopkeepers. Compare prices, save time,
            grow faster.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[var(--muted-foreground)]">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="relative font-medium transition-all duration-300
                             after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                             after:bg-gradient-to-r after:from-[#166534] after:to-[#65a30d]
                             dark:after:from-[#facc15] dark:after:to-[#f59e0b]
                             hover:after:w-full after:transition-all after:duration-500
                             hover:text-[var(--primary)] dark:hover:text-[var(--accent)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media & Toggle */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
            Connect with Us
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-[var(--muted-foreground)] mb-4">
            {[
              { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
              { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
              { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
              {
                icon: <Mail size={20} />,
                label: "Email",
                href: "mailto:support@easymart.com",
              },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2 rounded-full transition-all duration-300 
                           bg-transparent text-inherit
                           hover:text-white
                           hover:bg-gradient-to-r hover:from-[#166534] hover:to-[#65a30d]
                           dark:hover:from-[#facc15] dark:hover:to-[#f59e0b]"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-sm text-[var(--muted-foreground)]">
        © {new Date().getFullYear()} Easy Mart. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
