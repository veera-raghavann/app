"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Branch = "pass" | "retry";

type Props = {
  title?: string;
  condition?: string;
  leftLabel?: string;
  rightLabel?: string;
};

export default function FlowMachine({ title = "Decision machine", condition = "marks ≥ 50", leftLabel = "Pass", rightLabel = "Try again" }: Props) {
  const [branch, setBranch] = useState<Branch>("pass");
  const [running, setRunning] = useState(false);

  const path = useMemo(() => branch === "pass" ? ["Input", condition, leftLabel] : ["Input", condition, rightLabel], [branch, condition, leftLabel, rightLabel]);

  return (
    <div className="flow-machine">
      <div className="flow-machine-head">
        <div><span className="section-kicker">Branching visualizer</span><strong>{title}</strong></div>
        <div className="segmented">
          <button className={branch === "pass" ? "selected" : ""} onClick={() => { setBranch("pass"); setRunning(false); }}>Condition true</button>
          <button className={branch === "retry" ? "selected" : ""} onClick={() => { setBranch("retry"); setRunning(false); }}>Condition false</button>
        </div>
      </div>
      <div className="flow-machine-stage">
        {path.map((item, index) => (
          <div className="machine-step" key={`${item}-${index}`}>
            <motion.div className={`machine-node ${running && index === path.length - 1 ? "accent" : ""}`} animate={{ y: running ? [0, -5, 0] : 0 }} transition={{ duration: .8, delay: index * .15 }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </motion.div>
            {index < path.length - 1 && <motion.div className="machine-arrow" animate={{ opacity: running ? [0.35, 1, .35] : .6 }} transition={{ duration: .8, repeat: running ? Infinity : 0 }}>↓</motion.div>}
          </div>
        ))}
        <AnimatePresence mode="wait">
          {running && <motion.div key={branch} className="machine-result" initial={{ opacity: 0, scale: .92, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .92 }}>{branch === "pass" ? "✓" : "↻"} {branch === "pass" ? leftLabel : rightLabel}</motion.div>}
        </AnimatePresence>
      </div>
      <div className="flow-machine-footer"><p>The selected branch changes the route the program takes.</p><button className="button primary" onClick={() => setRunning((value) => !value)}>{running ? "Stop trace" : "Run trace"}</button></div>
    </div>
  );
}
