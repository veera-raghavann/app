"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const stages = [
  { key: "object", label: "Object", note: "State exists in memory." },
  { key: "serialize", label: "Serialize", note: "State is converted into a transferable representation." },
  { key: "bytes", label: "Byte stream", note: "The representation can travel beyond the current process." },
  { key: "store", label: "Store / send", note: "Persist it or move it to another process or machine." },
  { key: "restore", label: "Deserialize", note: "Read the representation and reconstruct the state." },
  { key: "restored", label: "Object restored", note: "The object is available again with its state." },
];

export default function StateJourney() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setStep((current) => {
        if (current === stages.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [playing]);

  return (
    <div className="state-journey">
      <div className="state-toolbar">
        <div className="state-counter"><span>{String(step + 1).padStart(2, "0")}</span> / {String(stages.length).padStart(2, "0")}</div>
        <div className="actions state-actions">
          <button className="button secondary" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0}>Back</button>
          <button className="button secondary" onClick={() => { setStep(0); setPlaying(false); }}>Restart</button>
          <button className="button primary" onClick={() => setPlaying((value) => !value)}>{playing ? "Pause" : step === stages.length - 1 ? "Replay" : "Play"}</button>
        </div>
      </div>

      <div className="state-stage">
        <div className={`state-object object-${step === 5 ? "restored" : step >= 2 ? "travel" : "source"}`}>
          <div className="state-object-cap">STATE</div>
          <strong>Student</strong>
          <span>name · age · section</span>
        </div>

        <div className="state-route">
          {stages.map((stage, index) => (
            <div className="state-stop" key={stage.key}>
              <motion.div
                className={`state-pill ${index <= step ? "reached" : ""} ${index === step ? "active" : ""}`}
                animate={{ scale: index === step ? 1.04 : 1, y: index === step ? -5 : 0 }}
                transition={{ type: "spring", stiffness: 340, damping: 24 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage.label}</strong>
              </motion.div>
              {index < stages.length - 1 && <div className={`state-link ${index < step ? "lit" : ""}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="state-explainer">
        <div className="section-kicker">What is happening?</div>
        <h3>{stages[step].label}</h3>
        <p>{stages[step].note}</p>
      </div>
    </div>
  );
}
