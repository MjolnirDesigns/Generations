"use client";

 
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import {
  SiCalendly,
  SiQuickbooks,
  SiStripe,
  SiHubspot,
  SiGoogle,
} from "react-icons/si";
import { Sparkles } from "lucide-react";


export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 bg-(--background) text-(--foreground) transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* --- LEFT TEXT SECTION --- */}
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-(--foreground)"
          >
            Premium Bookkeeping & Financial Management for Small Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-lg text-(--text-muted) max-w-xl"
          >
            Accurate bookkeeping, timely reconciliations, and financial reports
            that help you make better decisions. Tax-focused, QuickBooks-savvy,
            and ready to connect with your systems.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <CTAButton href="/signup">Get Started</CTAButton>
            <a
              href="#pricing"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-(--border) text-sm text-(--foreground) hover:bg-(--border) transition-colors"
            >
              View Pricing
            </a>
          </motion.div>
        </div>

        {/* --- RIGHT BRAND VISUAL --- */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-linear-to-r from-sky-600 to-indigo-700 p-8 text-white">

            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Generations Tax & Wealth</div>
                <div className="text-xs opacity-80 mt-1">
                  Bookkeeping & Advisory
                </div>
              </div>
              <div className="text-sm opacity-90">Since 1999</div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-xs opacity-80">Clients</div>
                <div className="text-lg font-semibold">20+</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-xs opacity-80">Revenue</div>
                <div className="text-lg font-semibold">$5,000+</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-xs opacity-80">Services</div>
                <div className="text-lg font-semibold">5</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center justify-center">
                <Sparkles className="w-5 h-5 text-yellow-300 mb-1" />
                <div className="text-xs opacity-80">More Coming</div>
              </div>
            </div>

            {/* Tech Stack / Trusted By */}
            <div className="mt-8">
              <div className="text-xs opacity-80">Our Tech Stack</div>
              <div className="mt-3 flex flex-wrap gap-4 text-2xl opacity-90">
                <SiCalendly title="Calendly" />
                <SiQuickbooks title="QuickBooks" />
                <SiStripe title="Stripe" />
                <SiHubspot title="HubSpot" />
                <SiGoogle title="Google Workspace" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}