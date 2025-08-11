"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, Home, Info, ShoppingBag, Phone } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: <Home size={18} className="mr-2" /> },
  { href: "/products", label: "Products", icon: <ShoppingBag size={18} className="mr-2" /> },
  { href: "/about", label: "About", icon: <Info size={18} className="mr-2" /> },
  { href: "/contact", label: "Contact", icon: <Phone size={18} className="mr-2" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-[var(--border)] shadow-[0_2px_12px_-2px_oklch(0.15_0.12_120/35%)] 
             transition-colors bg-[var(--background)/80] backdrop-blur 
             dark:bg-[var(--background)]"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.6_0.2_120)] via-[oklch(0.85_0.22_90)] to-[oklch(0.95_0.2_80)] bg-clip-text text-transparent"
        >
          Easy Mart
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                isActive(href)
                  ? "bg-gradient-to-r from-[oklch(0.6_0.2_120)] via-[oklch(0.85_0.22_90)] to-[oklch(0.95_0.2_80)] text-white shadow-md"
                  : "text-[var(--muted-foreground)] hover:text-[oklch(0.7_0.2_95)] dark:text-white dark:hover:text-[oklch(0.95_0.18_90)] hover:bg-[oklch(0.9_0.15_95)/15%] dark:hover:bg-[oklch(0.4_0.18_90)/25%]"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}

          <div className="ml-4">
            <ThemeToggle />
          </div>

          <div className="ml-4 flex gap-2">
            <Link
              href="/login"
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                pathname === "/login"
                  ? "text-white bg-gradient-to-r from-[oklch(0.95_0.2_90)] to-[oklch(0.6_0.18_130)] shadow"
                  : "text-white bg-gradient-to-r from-[oklch(0.95_0.2_90)] to-[oklch(0.6_0.18_130)] hover:opacity-90"
              }`}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={`px-3 py-1 rounded-full text-sm font-medium border transition-all ${
                pathname === "/register"
                  ? "border-[oklch(0.85_0.22_90)] text-white bg-[oklch(0.85_0.22_90)]/90 shadow"
                  : "border-[oklch(0.85_0.22_90)] text-[oklch(0.7_0.18_90)] hover:bg-[oklch(0.9_0.15_95)/20%] dark:hover:bg-[oklch(0.3_0.1_120)/25%]"
              }`}
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--foreground)] dark:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center px-3 py-2 rounded-md font-medium transition-all ${
                isActive(href)
                  ? "bg-gradient-to-r from-[oklch(0.6_0.2_120)] via-[oklch(0.85_0.22_90)] to-[oklch(0.95_0.2_80)] text-white shadow"
                  : "text-[var(--muted-foreground)] hover:text-[oklch(0.7_0.2_95)] dark:text-white dark:hover:text-[oklch(0.95_0.18_90)] hover:bg-[oklch(0.9_0.15_95)/15%] dark:hover:bg-[oklch(0.4_0.18_90)/25%]"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}

          <div className="pt-3 flex items-center justify-between">
            <ThemeToggle />
            <Link
              href="/login"
              className={`text-sm font-medium ${
                pathname === "/login"
                  ? "text-[oklch(0.95_0.22_90)] underline"
                  : "text-[oklch(0.75_0.18_90)] dark:text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={`text-sm font-medium ${
                pathname === "/register"
                  ? "text-[oklch(0.9_0.2_90)] underline"
                  : "text-[oklch(0.5_0.15_120)] dark:text-[oklch(0.9_0.2_90)]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
