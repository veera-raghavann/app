"use client";

import { motion } from "motion/react";
import { useState } from "react";

const lines = [
  { code: "int marks = 72;", note: "Create the input value." },
  { code: "if (marks >= 50) {", note: "Evaluate the condition." },
  { code: "  result = \"Pass\";", note: "The YES branch executes." },
  { code: "} else {", note: "The alternative branch is skipped." },
  { code: "  result = \"Try again\";", note: "This line executes only when the condition is false." },
  { code: "}", note: "The branch completes." },
];

export default function CodeTrace() {
  const [line, setLine] = useState(1);

  return (
    <div className="code-trace">
      <div className="code-trace-toolbar">
        <span>STEP THROUGH</span>
        <div className="execution-buttons">
          <button className="button secondary" onClick={() => setLine((v) => Math.max(0, v - 1))} disabled={line === 0}>Previous</button>
          <button className="button primary" onClick={() => setLine((v) => (v + 1) % lines.length)}>{line === lines.length - 1 ? "Replay" : "Next line"}</button>
        </div>
      </div>
      <div className="code-editor">
        {lines.map((item, index) => (
          <motion.button key={index} className={`code-line ${index === line ? "active" : ""}`} onClick={() => setLine(index)} animate={{ opacity: index === line ? 1 : .72 }}>
            <span className="code-number">{String(index + 1).padStart(2, "0")}</span>
            <code>{item.code}</code>
          </motion.button>
        ))}
      </div>
      <motion.div className="code-trace-note" key={line} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
        <span>NOW EXECUTING</span>
        <strong>{lines[line].code}</strong>
        <p>{lines[line].note}</p>
      </motion.div>
    </div>
  );
}
