"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

export function RevealCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <motion.article className="reveal-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .5, ease: "easeOut" }}>
      <span>{eyebrow}</span><h3>{title}</h3><div>{children}</div>
    </motion.article>
  );
}

export function ConceptStatement({ children }: { children: ReactNode }) {
  return <motion.div className="concept-statement" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65 }}>{children}</motion.div>;
}
