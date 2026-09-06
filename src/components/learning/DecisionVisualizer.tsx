"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function DecisionVisualizer() {
  const [value, setValue] = useState(72);
  const pass = value >= 50;

  return (
    <div className="decision-lab">
      <div className="decision-controls">
        <label className="field">
          <span>Input value · {value}</span>
          <input type="range" min="0" max="100" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        </label>
        <div className="decision-rule"><span>condition</span><strong>value ≥ 50</strong></div>
      </div>

      <div className="decision-stage">
        <motion.div className="decision-node source" layout>Input<div>{value}</div></motion.div>
        <motion.div className="decision-connector" animate={{ opacity: 1 }} />
        <motion.div className={`decision-node decision ${pass ? "positive" : "negative"}`} layout>
          <span>DECISION</span>
          <strong>{value} ≥ 50?</strong>
          <em>{pass ? "YES" : "NO"}</em>
        </motion.div>
        <div className="decision-branches">
          <motion.div className={`decision-branch ${pass ? "active" : ""}`} layout>
            <span>YES</span><strong>Pass</strong>
          </motion.div>
          <motion.div className={`decision-branch ${!pass ? "active" : ""}`} layout>
            <span>NO</span><strong>Try again</strong>
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p key={String(pass)} className="decision-explanation" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          The condition is evaluated before the branch executes. Because the input is {value}, the program follows the <strong>{pass ? "YES" : "NO"}</strong> path.
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
