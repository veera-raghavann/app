"use client";

import Link from "next/link";
import { useState } from "react";
import ConceptShell from "@/components/learning/ConceptShell";

const views = {
  subroutine: {
    title: "Subroutine",
    line: "A standalone named block, common in procedural and structured contexts.",
    caller: "processPayment()",
    target: "calculateTax()",
    detail: "Called explicitly by name; it can work with parameters and accessible program state."
  },
  method: {
    title: "Method",
    line: "A function or procedure associated with an object or class.",
    caller: "account.withdraw()",
    target: "BankAccount.withdraw()",
    detail: "Invoked through an object and can operate directly on that object's data and behaviour."
  }
} as const;

export default function SubroutinesPage() {
  const [mode, setMode] = useState<keyof typeof views>("subroutine");
  const view = views[mode];

  return (
    <ConceptShell number="05" kicker="Subroutines & methods" title="Hide complexity behind a call." intro="Subroutines break complex programs into manageable parts. Methods carry a similar idea into object-oriented programming, where behaviour is associated with an object or class.">
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">Interactive comparison</div>
        <div className="segmented large" role="tablist" aria-label="Subroutine or method">
          <button className={mode === "subroutine" ? "selected" : ""} onClick={() => setMode("subroutine")}>Subroutine</button>
          <button className={mode === "method" ? "selected" : ""} onClick={() => setMode("method")}>Method</button>
        </div>
        <div className="call-scene">
          <div className="call-node"><span>CALLER</span><strong>{view.caller}</strong></div>
          <div className="call-arrow">→</div>
          <div className="call-node accent"><span>{view.title.toUpperCase()}</span><strong>{view.target}</strong></div>
          <div className="call-arrow">→</div>
          <div className="call-node"><span>RESULT</span><strong>return value</strong></div>
        </div>
        <div className="card" style={{ marginTop: 18 }}><div className="card-num">MENTAL MODEL</div><h3 style={{ marginTop: 12 }}>{view.line}</h3><p>{view.detail}</p></div>
      </section>

      <section className="lesson-section" id="mechanism">
        <div className="lesson-kicker">Why modularize?</div>
        <div className="cards compact-cards">
          <div className="card"><div className="card-num">01</div><h3>Break apart</h3><p>Divide a large task into smaller, focused units.</p></div>
          <div className="card"><div className="card-num">02</div><h3>Reuse</h3><p>Call the same logic from multiple places instead of duplicating it.</p></div>
          <div className="card"><div className="card-num">03</div><h3>Isolate</h3><p>Test and maintain one part without rewriting the whole program.</p></div>
        </div>
      </section>

      <section className="lesson-section" id="code">
        <div className="lesson-kicker">Invocation</div>
        <pre className="code-block"><code>{mode === "subroutine" ? `calculateTax(amount);` : `account.withdraw(500);`}</code></pre>
        <p style={{ marginTop: 14, color: "var(--muted)" }}>The material distinguishes standalone subroutines from methods associated with an object or class, including the dot-notation form used for method calls.</p>
      </section>

      <section className="lesson-section" id="recall">
        <div className="recall-card card"><h3>One sentence to remember</h3><p>A reusable block gives the main program a name for a piece of work; a method additionally belongs to an object or class.</p><Link className="button primary" href="/learn">Back to learning map</Link></div>
      </section>
    </ConceptShell>
  );
}
