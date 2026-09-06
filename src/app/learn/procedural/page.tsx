"use client";

import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";

const steps = [
  ["Main problem", "Process a larger task"],
  ["Procedure A", "Handle one responsibility"],
  ["Procedure B", "Handle another responsibility"],
  ["Procedure C", "Compose the result"],
];

export default function ProceduralPage() {
  return (
    <ConceptShell number="04" kicker="Procedural programming" title="Turn one big problem into small jobs." intro="Procedural programming emphasizes breaking a program into smaller, manageable procedures or functions. The goal is a clearer, more reusable flow of work.">
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">Top-down design</div>
        <div className="visual-card" style={{ marginTop: 26 }}>
          <div className="visual-header"><span>DECOMPOSITION</span><span>MAIN → MODULES</span></div>
          <div style={{ padding: "44px 8px" }}>
            <div className="node accent" style={{ width: "fit-content", margin: "0 auto", minWidth: 240, textAlign: "center", fontWeight: 700 }}>{steps[0][0]}<br/><span style={{ fontWeight: 400, color: "var(--muted)" }}>{steps[0][1]}</span></div>
            <div className="arrow" style={{ textAlign: "center", margin: "18px 0" }}>↓</div>
            <div className="row">
              {steps.slice(1).map(([title, copy]) => (
                <div className="node" key={title} style={{ minWidth: 170, textAlign: "center" }}><strong>{title}</strong><br/><span style={{ color: "var(--muted)" }}>{copy}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="lesson-section" id="mechanism">
        <div className="lesson-kicker">Why it helps</div>
        <div className="cards compact-cards">
          <div className="card"><div className="card-num">01</div><h3>Modularity</h3><p>Each procedure focuses on a specific task, making a program easier to understand and maintain.</p></div>
          <div className="card"><div className="card-num">02</div><h3>Reusability</h3><p>A procedure can be called from different places instead of repeating the same implementation.</p></div>
          <div className="card"><div className="card-num">03</div><h3>Abstraction</h3><p>The caller can use a procedure without needing to know every implementation detail.</p></div>
        </div>
      </section>
      <section className="lesson-section" id="code">
        <div className="lesson-kicker">Code connection</div>
        <pre className="code-block"><code>{`void printReceipt() {\n  // focused task\n}\n\nprintReceipt();`}</code></pre>
      </section>
      <section className="lesson-section" id="recall">
        <div className="recall-card card"><h3>One mental model</h3><p>Main program = coordinator. Procedures = focused workers.</p><Link className="button primary" href="/learn">Continue learning</Link></div>
      </section>
    </ConceptShell>
  );
}
