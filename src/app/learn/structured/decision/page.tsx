"use client";

import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";
import DecisionVisualizer from "@/components/learning/DecisionVisualizer";

export default function DecisionPage() {
  return (
    <ConceptShell
      number="02A"
      kicker="Structured programming · Selection"
      title="Change the input. Watch the branch move."
      intro="A selection structure uses a condition to control which path executes. APP makes that decision visible so you can predict the result before reading the syntax."
    >
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">Interactive decision</div>
        <h2>What changes when the condition changes?</h2>
        <div className="visual-card"><DecisionVisualizer /></div>
      </section>
      <section className="lesson-section" id="code">
        <div className="lesson-kicker">Code connection</div>
        <h2>Same mental model. Real Java syntax.</h2>
        <pre className="code-block"><code>{`int marks = 72;

if (marks >= 50) {
    result = "Pass";
} else {
    result = "Try again";
}`}</code></pre>
      </section>
      <section className="lesson-section" id="recall">
        <div className="card recall-card">
          <div className="lesson-kicker">Recall</div>
          <h3>Condition → path → outcome.</h3>
          <p>Selection is easier to reason about when you can see the condition choose a path before you think about the code syntax.</p>
          <Link className="button primary" href="/learn/structured">Back to structured programming</Link>
        </div>
      </section>
    </ConceptShell>
  );
}
