"use client";

import CTAButton from "./CTAButton";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-(--background) transition-colors">
      <div className="container text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-(--foreground)"
        >
          Empowering Small Businesses with Reliable Financial Management
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-(--muted) mb-8"
        >
          We provide expert accounting, bookkeeping, and tax support to keep your business finances in perfect order.

          Get onboarded to QuickBooks with personalized assistance and start receiving monthly reports like bank

          reconciliations, balance sheets, and profit & loss statements. Schedule a free one-hour consultation — in

          person or by video conference — to learn how we can simplify your financial management.
        </motion.p>

        <div className="flex justify-center gap-6">
          <CTAButton
            href="https://calendly.com/your-org/free-consultation"
            variant="primary"
            className="px-6 py-3"
          >
            Book via Calendly
          </CTAButton>
          <CTAButton
            href="/api/schedule/outlook"
            variant="ghost"
            className="px-6 py-3"
          >
            Book via Outlook
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
