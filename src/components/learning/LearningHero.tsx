"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function LearningHero() {
  return (
    <div className="learning-hero-visual" aria-hidden="true">
      <div className="learning-orbit orbit-a" />
      <div className="learning-orbit orbit-b" />
      <motion.div className="learning-core" animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <span>APP</span>
        <strong>VISUAL<br />LEARNING</strong>
        <small>See · Trace · Experiment</small>
      </motion.div>
      <div className="learning-chip chip-a">FLOW</div>
      <div className="learning-chip chip-b">STATE</div>
      <div className="learning-chip chip-c">CODE</div>
    </div>
  );
}
