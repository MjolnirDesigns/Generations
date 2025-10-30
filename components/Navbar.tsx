"use client";

 
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/#contact" },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-(--card-bg) backdrop-blur-md shadow-sm z-50 border-b border-(--border)"

      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-(--accent)">
              Generations
            </span>

            <span className="text-sm font-medium text-(--muted) -mt-1">
              Tax & Wealth Management
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-(--foreground) hover:text-(--accent) font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <CTAButton href="/signup" variant="primary">
              Get Started
            </CTAButton>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-4 p-2 rounded-lg border border-(--border)] hover:bg-(--border) transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-(--accent)" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-(--foreground)"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-(--card-bg) border-t border-(--border) shadow-sm"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-(--foreground) hover:text-(--accent) font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <CTAButton
                href="/signup"
                variant="primary"
                className="w-[80%] justify-center"
              >
                Get Started
              </CTAButton>


              {/* Theme Toggle (mobile) */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 mt-2 rounded-lg border border-(--border) hover:bg-(--border) transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-(--accent)" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-400" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

 
      {/* Spacer to prevent Hero overlap */}
      <div className="h-20" />
    </>
  );
}