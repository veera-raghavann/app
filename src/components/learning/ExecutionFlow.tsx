"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export type ExecutionStep = {
  label: string;
  detail?: string;
  tone?: "default" | "decision" | "terminal";
};

export default function ExecutionFlow({ steps, activeIndex = 0, interval = 900, loopTo }: { steps: ExecutionStep[]; activeIndex?: number; interval?: number; loopTo?: number }) {
  const [index, setIndex] = useState(activeIndex);
  const [playing, setPlaying] = useState(false);

  useEffect(() => setIndex(activeIndex), [activeIndex]);

  useEffect(() => {
    if (!playing || steps.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => {
        if (loopTo !== undefined && current === steps.length - 1) return loopTo;
        return (current + 1) % steps.length;
      });
    }, interval);
    return () => window.clearInterval(timer);
  }, [playing, steps.length, interval, loopTo]);

  return (
    <div className="execution-wrap">
      <div className="execution-controls">
        <div className="execution-live"><span className="dot" /> LIVE EXECUTION</div>
        <div className="execution-buttons">
          <button className="button secondary" onClick={() => setIndex((current) => Math.max(0, current - 1))}>Previous</button>
          <button className="button primary" onClick={() => setPlaying((value) => !value)}>{playing ? "Pause flow" : "Play flow"}</button>
          <button className="button secondary" onClick={() => { setIndex(0); setPlaying(false); }}>Restart</button>
        </div>
      </div>
      <div className="execution-track">
        {steps.map((step, i) => (
          <div className="execution-step" key={`${step.label}-${i}`}>
            <button className="execution-click" onClick={() => { setIndex(i); setPlaying(false); }}>
              <motion.div
                className={`node execution-node ${i === index ? "accent" : ""} ${step.tone ?? ""}`}
                animate={{ y: i === index ? -7 : 0, scale: i === index ? 1.03 : 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                <span className="execution-number">{String(i + 1).padStart(2, "0")}</span>
                <strong>{step.label}</strong>
                {step.detail && <span>{step.detail}</span>}
              </motion.div>
            </button>
            {i < steps.length - 1 && (
              <motion.div
                className={`execution-connector ${i < index ? "lit" : ""}`}
                animate={{ scaleX: i < index ? 1 : .45 }}
                transition={{ duration: .28 }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="execution-status">
        <strong>{steps[index]?.label}</strong>
        <span>{steps[index]?.detail ?? "Follow the highlighted step."}</span>
      </div>
    </div>
  );
}
