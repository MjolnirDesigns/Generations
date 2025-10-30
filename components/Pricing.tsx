"use client";

 
import { useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { FlameIcon } from "lucide-react";
 

type Tier = {
  id: string;
  title: string;
  monthlyPrice?: number | null;
  setupFee?: string;
  features: string[];
};

 
const TIERS: Tier[] = [
  {
    id: "lite",
    title: "Lite (Personal)",
    monthlyPrice: 150,
    setupFee: "$125",
    features: ["User Dashboard", "Import/Sync", "Categorizations", "Reconciliations", "General Inquiry"],
  },
  {
    id: "base",
    title: "Base",
    monthlyPrice: 300,
    setupFee: "$250",
    features: ["User Dashboard", "Import/Sync", "Categorizations", "Reconciliations", "General Inquiry"],
  },
  {
    id: "base_plus",
    title: "Base+",
    monthlyPrice: 450,
    setupFee: "$500",
    features: [
      "User Dashboard",
      "Import/Sync",
      "Categorizations",
      "Reconciliations",
      "General Inquiry",
      "Balance Sheets",
      "Income Statements",
      "Profit & Loss Reports",
    ],
  },
  {
    id: "premium",
    title: "Premium",
    monthlyPrice: 600,
    setupFee: "$1000",
    features: [
      "User Dashboard",
      "Import/Sync",
      "Categorizations",
      "Reconciliations",
      "General Inquiry",
      "Balance Sheets",
      "Income Statements",
      "Profit & Loss Reports",
      "Excel Financial Model",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    monthlyPrice: null,
    setupFee: "TBD",
    features: [
      "All Premium Features",
      "Large Volume Service",
      "Dedicated Account Manager",
    ],
  },
];

 
export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const priceDisplay = (monthly: number | null | undefined) => {
    if (monthly == null) return "TBD";
    if (!isAnnual) return `$${monthly.toFixed(0)}/mo`;
    const annual = monthly * 10; // 2 months free (12 - 2 = 10)
    return `$${annual.toLocaleString()}/yr`;
  };

  return (
    <section id="pricing" className="py-20 bg-(--background) text-(--foreground)">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header and Toggle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-(--foreground)">Pricing</h2>
            <p className="text-(--text-muted) mt-2">
              Choose the plan that fits your business. Toggle monthly or annual billing.
            </p>
          </div>

          {/* Enhanced Toggle */}
          <div className="flex justify-center">
            <div
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle billing period"
              onClick={() => setIsAnnual((s) => !s)}
              className="relative flex items-center bg-(--card-bg) border border-(--border) rounded-full cursor-pointer w-64 h-12 shadow-sm overflow-hidden transition-all"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-0 left-0 w-1/2 h-full bg-(--accent) rounded-full ${
                  isAnnual ? "translate-x-full" : ""
                } transition-transform duration-300`}
              />
              <span
                className={`relative z-10 flex-1 text-center font-medium transition-colors ${
                  !isAnnual ? "text-white" : "text-(--text-muted)"
                }`}
              >
                Monthly
              </span>
              <span
                className={`relative z-10 flex-1 text-center font-medium transition-colors ${
                  isAnnual ? "text-white" : "text-(--text-muted)"
                }`}
              >
                Annual
              </span>
            </div>
          </div>
        </div>


        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TIERS.map((t) => {
            const highlight = t.id === "base_plus";
            return (
              <motion.article
                key={t.id}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-6 border shadow-md transition-all bg-(--card-bg) ${
                  highlight
                    ? "ring-2 ring-(--accent) transform scale-[1.02]"
                    : "hover:ring-1 hover:ring-(--border)"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{t.title}</h3>
                    <div className="text-sm text-(--text-muted)">Setup: {t.setupFee}</div>
                  </div>
                  {highlight && (
                    <FlameIcon className="w-6 h-6 text-orange-500 animate-pulse" />
                  )}
                </div>

                <div className="mt-6">
                  <div className="text-3xl font-bold">{priceDisplay(t.monthlyPrice)}</div>
                  <div className="text-sm text-(--text-muted) mt-1">
                    {isAnnual ? "Billed annually" : "Billed monthly"}
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-sm">
                  {[
                    "User Dashboard",
                    "Import/Sync",
                    "Categorizations",
                    "Reconciliations",
                    "General Inquiry",
                    "Balance Sheets",
                    "Income Statements",
                    "Profit & Loss Reports",
                    "Excel Financial Model",
                    "Large Volume Service",
                  ].map((feat) => {
                    const included = t.features.includes(feat);
                    return (
                      <li key={feat} className="flex items-center gap-3">
                        <span
                          className={`w-4 h-4 rounded-sm flex items-center justify-center ${
                            included
                              ? "bg-(--accent) text-white"
                              : "bg-(--border) text-(--text-muted)"
                          }`}
                        >
                          {included ? "✓" : "—"}
                        </span>
                        <span
                          className={included ? "text-(--foreground)" : "text-(--text-muted)"}
                        >
                          {feat}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6">
                  <CTAButton
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        const q = t.id;
                        window.location.href = `/signup?plan=${q}&annual=${isAnnual ? "1" : "0"}`;
                      }
                    }}
                    variant={highlight ? "primary" : "ghost"}
                    className="w-full justify-center"
                  >
                    Choose {t.title}
                  </CTAButton>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-(--text-muted) text-center">
          Annual pricing uses a 2-month-free model (monthly × 10 = annual). Adjust this formula as needed.
        </p>
      </div>
    </section>
  );
}