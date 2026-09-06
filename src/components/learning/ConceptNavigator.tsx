"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const items = [
  ["01", "Paradigms", "/learn/paradigms"],
  ["02", "Structured", "/learn/structured"],
  ["03", "OOP", "/learn/oop"],
  ["04", "Subroutines", "/learn/subroutines"],
  ["05", "Serialization", "/learn/serialization"],
  ["06", "Parallel", "/learn/parallel"],
] as const;

export default function ConceptNavigator({ current }: { current: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [current]);
  return (
    <div className="concept-navigator">
      <button className="concept-navigator-trigger" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span><i /> {current}</span><span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div className="concept-navigator-panel" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
          {items.map(([n, label, href]) => <Link key={n} href={href} className={label === current ? "current" : ""}><span>{n}</span>{label}</Link>)}
        </motion.div>
      )}
    </div>
  );
}
