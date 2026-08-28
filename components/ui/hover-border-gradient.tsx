"use client";

import React from "react";
import { motion } from "framer-motion";

type HoverBorderGradientProps = {
  children: React.ReactNode;
  className?: string;
};

export function HoverBorderGradient({
  children,
  className = "",
}: HoverBorderGradientProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="group relative inline-flex overflow-hidden rounded-full p-[1px]"
    >
      <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0deg,#f5c542_90deg,transparent_180deg,#f5c542_270deg,transparent_360deg)] opacity-40 transition-opacity duration-300 group-hover:animate-spin group-hover:opacity-100" />

      <div
        className={`relative flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
}