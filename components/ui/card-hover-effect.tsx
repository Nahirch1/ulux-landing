"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type HoverItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

interface HoverEffectProps {
  items: HoverItem[];
  className?: string;
}

export function HoverEffect({
  items,
  className = "",
}: HoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={item.title}
          className="relative block h-full p-2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 block rounded-3xl bg-white/[0.06]"
                layoutId="ulux-hover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.18,
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 h-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-7 transition-colors duration-300 hover:border-yellow-500/30">
            {item.icon && (
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                {item.icon}
              </div>
            )}

            <h3 className="text-lg font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/55">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}