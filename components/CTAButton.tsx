
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import React from "react";


interface CTAButtonProps extends HTMLMotionProps<"button"> {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
}


/**
 * CTAButton – Reusable motion button for links or actions.
 * Works as both <Link> and <button>.
*/

export default function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
  ...props

}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 ring-offset-2 text-sm sm:text-base";
  const styles = {
    primary:
      "bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-300 shadow-md hover:shadow-lg",
    ghost:
      "bg-transparent text-sky-700 border border-sky-200 hover:bg-sky-50 focus:ring-sky-200",
  };


  const MotionButton = (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -2 }}
      className={clsx(base, styles[variant], className)}
      onClick={onClick}
      type={type}
      aria-label={typeof children === "string" ? children : "CTA Button"}
      {...props}
    >
      {children}
    </motion.button>
  );

 
  if (href) {
    return (
      <Link href={href} className="inline-block">
        {MotionButton}
      </Link>
    );
  }

  return MotionButton;
}