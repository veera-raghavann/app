"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import ConceptShell from "@/components/learning/ConceptShell";
import ExecutionFlow from "@/components/learning/ExecutionFlow";
import FlowMachine from "@/components/learning/FlowMachine";
import ExecutionCode from "@/components/learning/ExecutionCode";
import { RevealCard } from "@/components/learning/ConceptExperience";

const code = [
  "int marks = 72;",
  "String result;",
  "if (marks >= 50) {",
  "  result = \"Pass\";",
  "} else {",
  "  result = \"Try again\";",
  "}",
  "System.out.println(result);",
];

export default function StructuredVisualPage() {
  const [reps, setReps] = useState(4);
  const loopSteps = useMemo(() => ["Start", ...Array.from({ length: reps }, (_, i) => `Iteration ${i + 1}`), "End"], [reps]);

  return (
    <ConceptShell number="02A" kicker="Structured programming · visual lab" title="Don’t memorize the flow. Run it." intro="Structured programming uses organized control flow: sequence, selection and repetition. This lab lets you trace each shape, change the branch, and step through real Java code.">
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">01 · Sequence</div>
        <h2>Execution moves forward, one step at a time.</h2>
        <div className="visual-card"><ExecutionFlow steps={[{ label: "Start", detail: "The program begins." }, { label: "Input", detail: "Read the required value." }, { label: "Process", detail: "Perform the operation." }, { label: "Output", detail: "Present the result." }, { label: "End", detail: "Execution finishes." }]} /></div>
      </section>

      <section className="lesson-section" id="mechanism">
        <div className="lesson-kicker">02 · Selection</div>
        <h2>One condition. Two possible paths.</h2>
        <div className="visual-card"><FlowMachine /></div>
      </section>

      <section className="lesson-section">
        <div className="lesson-kicker">03 · Repetition</div>
        <h2>Loops are controlled return journeys.</h2>
        <div className="card">
          <label className="field"><span>Iterations · {reps}</span><input type="range" min="1" max="8" value={reps} onChange={(e) => setReps(Number(e.target.value))} /></label>
          <div style={{ marginTop: 25 }}><ExecutionFlow steps={loopSteps.map((label, i) => ({ label, detail: i === 0 ? "Enter the loop." : i === loopSteps.length - 1 ? "The condition is no longer satisfied." : "Run the loop body, then return to the condition." }))} loopTo={1} interval={700} /></div>
        </div>
      </section>

      <section className="lesson-section" id="code">
        <div className="lesson-kicker">04 · Code connection</div>
        <h2>See the source code follow the same shape.</h2>
        <ExecutionCode code={code} steps={[
          { line: 1, label: "State", detail: "marks starts with the value 72." },
          { line: 2, label: "Prepare result", detail: "A variable is ready to hold the branch outcome." },
          { line: 3, label: "Decision", detail: "The program evaluates whether marks is at least 50." },
          { line: 4, label: "True branch", detail: "Because 72 ≥ 50, the pass branch executes." },
          { line: 8, label: "Output", detail: "The resulting value is printed." },
        ]} />
      </section>

      <section className="lesson-section">
        <div className="lesson-kicker">05 · Transfer</div>
        <div className="idea-grid">
          <RevealCard eyebrow="Mental model" title="Sequence"><p>Forward path.</p></RevealCard>
          <RevealCard eyebrow="Mental model" title="Selection"><p>Choose a path.</p></RevealCard>
          <RevealCard eyebrow="Mental model" title="Repetition"><p>Return and repeat.</p></RevealCard>
          <RevealCard eyebrow="Mental model" title="Structured"><p>Keep the logic organized.</p></RevealCard>
        </div>
      </section>

      <section className="lesson-section" id="recall">
        <div className="card recall-card"><div className="lesson-kicker">Recall</div><h3>Say it without looking.</h3><p>Sequence executes in order. Selection chooses between paths. Repetition revisits a block while its condition keeps the flow alive.</p><Link className="button primary" href="/learn">Continue</Link></div>
      </section>
    </ConceptShell>
  );
}
