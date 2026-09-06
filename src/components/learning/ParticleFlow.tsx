"use client";

import { motion } from "motion/react";

export default function ParticleFlow({ running, count = 8, lanes = 4 }: { running: boolean; count?: number; lanes?: number }) {
  return (
    <div className="particle-grid" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const lane = i % Math.max(1, lanes);
        const delay = (i % Math.max(1, lanes)) * 0.12 + Math.floor(i / Math.max(1, lanes)) * 0.06;
        return (
          <motion.span
            key={i}
            className="particle"
            animate={running ? { x: [0, 72, 144], opacity: [0, 1, 1, 0] } : { x: 0, opacity: 0.45 }}
            transition={running ? { duration: 1.1, repeat: Infinity, delay, ease: "easeInOut" } : { duration: 0.2 }}
            style={{ top: `${18 + lane * 20}%`, left: "8%" }}
          />
        );
      })}
    </div>
  );
}
