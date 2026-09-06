"use client";

import Link from "next/link";
import { useState } from "react";

const flows = {
  sequence: { title: "Sequence", copy: "Statements execute in order — one after another.", steps: ["Start", "Read input", "Process", "Show result", "End"] },
  selection: { title: "Selection", copy: "A condition decides which path the program follows.", steps: ["Start", "Condition", "Yes → Task A", "No → Task B", "End"] },
  repetition: { title: "Repetition", copy: "A block repeats while its condition keeps the flow alive.", steps: ["Start", "Check condition", "Run block", "Return to condition", "End"] },
};

export default function StructuredPage() {
  const [kind, setKind] = useState<keyof typeof flows>("sequence");
  const current = flows[kind];

  return (
    <main className="shell">
      <header className="nav"><div className="container nav-inner"><Link className="brand" href="/">APP<span style={{ color: "var(--accent)" }}>.</span></Link><div className="nav-links"><Link href="/learn">Learning map</Link><span>02 / Structured</span></div><span className="eyebrow"><span className="dot" /> Flow simulator</span></div></header>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="section-head"><div className="section-kicker">Structured programming</div><h1 style={{ margin: "12px 0 18px", fontSize: "clamp(55px, 8vw, 100px)", lineHeight: .9, letterSpacing: "-.07em" }}>Make the flow visible.</h1><p>Sequence, selection and repetition are the building blocks of structured control flow. Choose a form and follow the path.</p></div>
          <div className="row" style={{ justifyContent: "flex-start", marginBottom: 18 }}>{(Object.keys(flows) as Array<keyof typeof flows>).map((key) => <button key={key} className={`button ${kind === key ? "primary" : "secondary"}`} onClick={() => setKind(key)}>{flows[key].title}</button>)}</div>
          <div className="visual-card"><div className="visual-header"><span>EXECUTION FLOW</span><span>{current.title.toUpperCase()}</span></div><div style={{ padding: "48px 10px" }}><div className="stack">{current.steps.map((step, i) => <div key={step} className="stack" style={{ gap: 10 }}>{i > 0 && <div className="arrow">↓</div>}<div className={`node ${i === 1 ? "accent" : ""}`} style={{ minWidth: 190, textAlign: "center" }}>{step}</div></div>)}</div></div></div>
          <div className="card" style={{ marginTop: 14 }}><div className="card-num">WHY IT MATTERS</div><h3>{current.title}</h3><p>{current.copy} Structured programming emphasizes organized control flow and manageable blocks so the program is easier to follow and maintain.</p></div>
        </div>
      </section>
      <footer className="footer"><div className="container"><Link href="/learn">← Back to learning map</Link></div></footer>
    </main>
  );
}
