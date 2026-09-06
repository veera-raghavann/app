"use client";

import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";
import DecisionVisualizer from "@/components/learning/DecisionVisualizer";
import ConceptReveal from "@/components/learning/ConceptReveal";

export default function DecisionPage() {
  return (
    <ConceptShell number="02A" kicker="Structured programming · Selection" title="Change the input. Watch the branch move." intro="A selection structure uses a condition to control which path executes. APP makes that decision visible so you can predict the result before reading the syntax.">
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">Interactive decision</div>
        <h2>What changes when the condition changes?</h2>
        <div className="visual-card"><DecisionVisualizer /></div>
        <ConceptReveal title="Why the branch changes">
          <p>The condition is evaluated first. Its result determines which branch can execute; the other branch is not the selected path for that run.</p>
        </ConceptReveal>
      </section>
      <section className="lesson-section" id="code">
        <div className="lesson-kicker">Code connection</div>
        <h2>Same mental model. Real Java syntax.</h2>
        <pre className="code-block"><code>{`int marks = 72;\n\nif (marks >= 50) {\n    result = "Pass";\n} else {\n    result = "Try again";\n}`}</code></pre>
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
