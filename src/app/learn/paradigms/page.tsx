"use client";

import Link from "next/link";
import { useState } from "react";

const modes = [
  { key: "imperative", label: "Imperative", line: "Tell the computer what to do, step by step.", children: ["Structured", "Procedural", "Object-Oriented"] },
  { key: "declarative", label: "Declarative", line: "Describe what the result should be.", children: ["Logic", "Functional", "Data-driven"] },
];

export default function ParadigmsPage() {
  const [mode, setMode] = useState("imperative");

  return (
    <main className="shell">
      <header className="nav">
        <div className="container nav-inner">
          <Link className="brand" href="/">APP<span style={{ color: "var(--accent)" }}>.</span></Link>
          <div className="nav-links"><Link href="/learn">Learning map</Link><span>01 / Paradigms</span></div>
          <span className="eyebrow"><span className="dot" /> Interactive concept</span>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="section-head" style={{ maxWidth: 900 }}>
            <div className="section-kicker">Programming paradigms</div>
            <h1 style={{ margin: "12px 0 18px", fontSize: "clamp(58px, 9vw, 112px)", lineHeight: .88, letterSpacing: "-.075em" }}>There is more than one way to think about code.</h1>
            <p>Paradigms are different approaches to structuring, organizing and executing programs. Explore the map, then change the model and watch the explanation shift.</p>
          </div>

          <div className="visual-card" style={{ padding: "28px", marginTop: 35 }}>
            <div className="visual-header"><span>INTERACTIVE MAP</span><span>ABSTRACTION · CONTROL FLOW · DATA</span></div>
            <div style={{ padding: "56px 18px 24px" }}>
              <div className="node" style={{ margin: "0 auto", width: "fit-content", minWidth: 220, textAlign: "center", fontWeight: 700 }}>Programming Paradigms</div>
              <div className="arrow" style={{ textAlign: "center", margin: 18 }}>↓</div>
              <div className="row">
                {modes.map((m) => <button key={m.key} className={`node ${mode === m.key ? "accent" : ""}`} onClick={() => setMode(m.key)} style={{ cursor: "pointer", minWidth: 180 }}>{m.label}</button>)}
              </div>
              <div className="arrow" style={{ textAlign: "center", margin: 18 }}>↓</div>
              <div className="row">
                {modes.find((m) => m.key === mode)!.children.map((child) => <div key={child} className="node">{child}</div>)}
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
            <div className="card">
              <div className="card-num">ACTIVE MODEL</div>
              <h3>{modes.find((m) => m.key === mode)!.label}</h3>
              <p>{modes.find((m) => m.key === mode)!.line}</p>
            </div>
            <div className="card">
              <div className="card-num">MENTAL MODEL</div>
              <h3>Choose the right lens.</h3>
              <p>Learning multiple paradigms gives you more than syntax — it gives you different ways to decompose and solve problems.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="container"><Link href="/learn">← Back to learning map</Link></div></footer>
    </main>
  );
}
