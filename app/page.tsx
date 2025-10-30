"use client";


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

 
export default function Page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </motion.div>
      <Footer />
    </main>
  );
}