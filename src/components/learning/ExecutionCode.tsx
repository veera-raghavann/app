"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";

export type CodeTraceStep = {
  line: number;
  label: string;
  detail: string;
};

export default function ExecutionCode({ code, steps }: { code: string[]; steps: CodeTraceStep[] }) {
  const [step, setStep] = useState(0);
  const current = steps[step] ?? steps[0];
  const highlighted = useMemo(() => new Set([current?.line]), [current?.line]);

  return (
    <div className="code-lab">
      <div className="code-lab-head">
        <div><span className="section-kicker">Code execution</span><strong>Trace it line by line.</strong></div>
        <span className="code-step-count">{String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</span>
      </div>
      <div className="code-lab-body">
        <div className="code-editor" role="region" aria-label="Interactive code execution">
          {code.map((line, index) => {
            const lineNumber = index + 1;
            const active = highlighted.has(lineNumber);
            return (
              <motion.div key={`${lineNumber}-${line}`} className={`code-line ${active ? "active" : ""}`} animate={{ opacity: active ? 1 : .62, x: active ? 4 : 0 }}>
                <span className="code-ln">{String(lineNumber).padStart(2, "0")}</span>
                <code>{line}</code>
              </motion.div>
            );
          })}
        </div>
        <div className="code-explainer">
          <span className="section-kicker">{current?.label}</span>
          <h3>{current?.detail}</h3>
          <div className="code-controls">
            <button className="button secondary" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>Previous</button>
            <button className="button primary" onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))} disabled={step === steps.length - 1}>{step === steps.length - 1 ? "Complete" : "Next line"}</button>
            <button className="button secondary" onClick={() => setStep(0)}>Restart</button>
          </div>
          <div className="code-progress"><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
        </div>
      </div>
    </div>
  );
}
