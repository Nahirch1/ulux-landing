"use client";

import React from "react";
import { motion } from "framer-motion";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}

export function MovingBorder({
  children,
  duration = 3,
  className = "",
  containerClassName = "",
}: MovingBorderProps) {
  return (
    <div
      className={`relative inline-flex overflow-hidden rounded-full p-[1px] ${containerClassName}`}
    >
      {/* Borde animado */}
      <motion.div
        className="absolute inset-[-100%]"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, transparent 0deg, transparent 250deg, #d6a84b 290deg, #f5d27a 320deg, transparent 360deg)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Botón */}
      <div
        className={`relative z-10 flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}