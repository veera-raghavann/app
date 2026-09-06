"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useState } from "react";

export default function ConceptReveal({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="concept-reveal">
      <button className={`reveal-trigger ${open ? "open" : ""}`} onClick={() => setOpen((v) => !v)}>
        <span>{open ? "Hide explanation" : "Show me why"}</span>
        <span className="reveal-plus">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div className="reveal-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .28 }}>
            <div className="lesson-kicker">{title}</div>
            <div className="reveal-content">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
