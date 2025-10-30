"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show:  { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 380, damping: 30 } },
};
const slideUp = {
  hidden: { opacity: 0, y: 18 },
  show:  { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 380, damping: 30 } },
};
const slideRight = {
  hidden: { opacity: 0, x: 24 },
  show:  { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 380, damping: 30 } },
};

export default function Footer() {
  return (
    <footer
      className="pt-14 pb-10 border-t"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* TOP: 3 equal columns */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-10">
          {/* LEFT: Business + Contact */}
          <motion.address
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideLeft}
            className="not-italic space-y-3"
          >
            <h3
              className="text-xl font-semibold tracking-tight"
              style={{ color: "var(--foreground)" }} // ensures deep dark text in light mode
            >
              Generations Tax &amp; Wealth Management
            </h3>

            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Premium bookkeeping, accounting &amp; tax services for growing businesses.
            </p>

            <div className="pt-2 text-sm">
              <div className="italic" style={{ color: "var(--muted)" }}>
                3909 Northdale Blvd #270e, Tampa, FL 33624
              </div>
              <div className="mt-1" style={{ color: "var(--foreground)" }}>
                Office:{" "}
                <a
                  href="tel:+18774411040"
                  className="underline-offset-4 hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  877-441-1040
                </a>
              </div>
              <div style={{ color: "var(--foreground)" }}>Fax: 813-533-7571</div>
              <div className="mt-1">
                <a
                  href="mailto:Info@gtaxwealth.com"
                  className="underline-offset-4 hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Info@gtaxwealth.com
                </a>
              </div>
            </div>
          </motion.address>

          {/* MIDDLE: Company */}
          <motion.nav
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
            aria-label="Company"
          >
            <h4 className="text-sm font-medium mb-3" style={{ color: "var(--muted)" }}>
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>

          {/* RIGHT: Support & Legal */}
          <motion.nav
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideRight}
            aria-label="Support and Legal"
          >
            <h4 className="text-sm font-medium mb-3" style={{ color: "var(--muted)" }}>
              Support &amp; Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#faqs" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#help-center" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/#privacy" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#terms" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.nav>
        </div>
      </div>

      {/* LOWER ROW 1: Social Icons */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={slideUp}
        className="max-w-7xl mx-auto px-6 mt-12"
      >
        <div className="flex items-center justify-center gap-10">
          {[
            { Icon: FaXTwitter, label: "X / Twitter", href: "https://x.com" },
            { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
            { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
            { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
            { Icon: SiTiktok, label: "TikTok", href: "https://tiktok.com" },
          ].map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "2px solid var(--border)",
                color: "var(--foreground)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                // focus ring color from token
                "--tw-ring-color": "var(--border)",
              } as React.CSSProperties}
              whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.25, ease: "easeOut" } }}
              whileTap={{ scale: 0.94 }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* LOWER ROW 2: Copyright */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={slideUp}
        className="max-w-7xl mx-auto px-6 mt-10 pt-6 text-center text-sm"
        style={{
          borderTop: "1px solid var(--border)",
          color: "var(--muted)",
        }}
      >
        © {new Date().getFullYear()} Generations Tax &amp; Wealth Management —{" "}
        <Link href="/#terms" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
          Terms
        </Link>{" "}
        ·{" "}
        <Link href="/#billing" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
          Billing &amp; Payment
        </Link>{" "}
        ·{" "}
        <Link href="/#privacy" className="hover:underline underline-offset-4" style={{ color: "var(--accent)" }}>
          Privacy
        </Link>
      </motion.div>
    </footer>
  );
}
