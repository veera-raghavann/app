"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ExecutionFlow({ steps, activeIndex = 0 }: { steps: string[]; activeIndex?: number }) {
  const [index, setIndex] = useState(activeIndex);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % steps.length);
    }, 900);
    return () => window.clearInterval(timer);
  }, [playing, steps.length]);

  return (
    <div className="execution-wrap">
      <div className="execution-controls">
        <button className="button secondary" onClick={() => setPlaying((value) => !value)}>
          {playing ? "Pause flow" : "Play flow"}
        </button>
        <button className="button secondary" onClick={() => setIndex(0)}>Restart</button>
      </div>
      <div className="execution-track">
        {steps.map((step, i) => (
          <div className="execution-step" key={step}>
            <motion.div
              className={`node execution-node ${i === index ? "accent" : ""}`}
              animate={{ y: i === index ? -6 : 0, scale: i === index ? 1.02 : 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <span className="execution-number">{String(i + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div className={`execution-connector ${i < index ? "lit" : ""}`} animate={{ scaleX: i < index ? 1 : .55 }} />
            )}
          </div>
        ))}
      </div>
      <p className="execution-caption">The active step follows the order in which the program executes its control flow.</p>
    </div>
  );
}
