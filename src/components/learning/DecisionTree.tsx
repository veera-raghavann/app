"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function DecisionTree() {
  const [value, setValue] = useState(72);
  const pass = value >= 50;
  return (
    <div className="decision-tree">
      <div className="decision-input">
        <span>INPUT</span>
        <strong>{value}</strong>
        <input aria-label="Input value" type="range" min="0" max="100" value={value} onChange={(e) => setValue(Number(e.target.value))} />
      </div>
      <div className="tree-line vertical" />
      <motion.div className="tree-question" animate={{ scale: [1, 1.015, 1] }} transition={{ duration: .5 }}>
        <span>CONDITION</span>
        <strong>{value} ≥ 50</strong>
      </motion.div>
      <div className="tree-branches">
        <div className={`tree-branch ${pass ? "active" : ""}`}><span>YES</span><div className="tree-line horizontal" /><div className="tree-result">Pass</div></div>
        <div className={`tree-branch ${!pass ? "active" : ""}`}><span>NO</span><div className="tree-line horizontal" /><div className="tree-result">Try again</div></div>
      </div>
      <div className="decision-meter"><span>FALSE</span><div><i style={{ left: `${value}%` }} /></div><span>TRUE</span></div>
    </div>
  );
}
