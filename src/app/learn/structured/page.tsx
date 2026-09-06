"use client";

import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";
import ExecutionFlow from "@/components/learning/ExecutionFlow";

const flows = {
  sequence: { title: "Sequence", copy: "Statements execute in order — one after another.", steps: ["Start", "Read input", "Process", "Show result", "End"] },
  selection: { title: "Selection", copy: "A condition decides which path the program follows.", steps: ["Start", "Condition", "Choose path", "Execute branch", "End"] },
  repetition: { title: "Repetition", copy: "A block repeats while its condition keeps the flow alive.", steps: ["Start", "Check condition", "Run block", "Return to condition", "End"] },
};

type FlowKey = keyof typeof flows;

export default function StructuredPage() {
  return (
    <ConceptShell
      number="02"
      kicker="Structured programming"
      title="Make the flow visible."
      intro="Structured programming organizes execution around sequence, selection and repetition so the logic becomes easier to follow and maintain. Trace the flow instead of memorising the names."
    >
      {(Object.keys(flows) as FlowKey[]).map((key) => (
        <section className="lesson-section" id={key === "sequence" ? "visual" : undefined} key={key}>
          <div className="lesson-kicker">{flows[key].title}</div>
          <h2>{flows[key].copy}</h2>
          <div className="visual-card">
            <div className="visual-header"><span>EXECUTION TRACE</span><span>{flows[key].title.toUpperCase()}</span></div>
            <ExecutionFlow steps={flows[key].steps} />
          </div>
        </section>
      ))}

      <section className="lesson-section" id="code">
        <div className="lesson-kicker">Code connection</div>
        <h2>Control structures are the shape of the program.</h2>
        <pre className="code-block"><code>{`if (marks >= 50) {\n  result = "Pass";\n} else {\n  result = "Try again";\n}`}</code></pre>
      </section>

      <section className="lesson-section" id="recall">
        <div className="lesson-kicker">Recall</div>
        <div className="card recall-card">
          <h3>Remember the three shapes.</h3>
          <p>Sequence moves forward. Selection chooses a path. Repetition returns to a condition and repeats a block.</p>
          <Link className="button primary" href="/learn">Back to learning map</Link>
        </div>
      </section>
    </ConceptShell>
  );
}
