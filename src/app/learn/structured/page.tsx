import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";
import ExecutionFlow from "@/components/learning/ExecutionFlow";
import FlowMachine from "@/components/learning/FlowMachine";
import ExecutionCode from "@/components/learning/ExecutionCode";

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

export default function StructuredPage() {
  return (
    <ConceptShell number="02" kicker="Structured programming" title="Make the flow visible." intro="Structured programming organizes code around logical control structures. Trace sequence, selection and repetition as execution rather than memorised labels.">
      <section className="lesson-section" id="visual"><div className="lesson-kicker">Sequence</div><h2>Execution moves forward, one step at a time.</h2><div className="visual-card"><ExecutionFlow steps={[{ label:"Start", detail:"The program begins." },{ label:"Input", detail:"Read the required value." },{ label:"Process", detail:"Perform the operation." },{ label:"Output", detail:"Present the result." },{ label:"End", detail:"Execution finishes." }]} /></div></section>
      <section className="lesson-section" id="mechanism"><div className="lesson-kicker">Selection</div><h2>One condition. Two possible paths.</h2><div className="visual-card"><FlowMachine /></div></section>
      <section className="lesson-section"><div className="lesson-kicker">Repetition</div><h2>A loop is a controlled return.</h2><div className="visual-card"><ExecutionFlow loopTo={1} interval={720} steps={[{ label:"Start", detail:"Enter the repetition structure." },{ label:"Check condition", detail:"The condition decides whether the block runs." },{ label:"Run block", detail:"Perform the repeated statements." },{ label:"Return", detail:"Go back to the condition." },{ label:"End", detail:"Stop when the condition no longer keeps the loop alive." }]} /></div></section>
      <section className="lesson-section" id="code"><div className="lesson-kicker">Code connection</div><h2>Now watch the same logic inside Java.</h2><ExecutionCode code={code} steps={[{line:1,label:"State",detail:"marks starts at 72."},{line:2,label:"Variable",detail:"result is ready for the branch outcome."},{line:3,label:"Decision",detail:"The program evaluates whether marks is at least 50."},{line:4,label:"True path",detail:"72 satisfies the condition, so the pass branch executes."},{line:8,label:"Output",detail:"The program prints the result."}]} /></section>
      <section className="lesson-section" id="recall"><div className="card recall-card"><div className="lesson-kicker">Recall</div><h3>Three shapes. One mental model.</h3><p>Sequence moves forward. Selection chooses a path. Repetition returns to a condition and repeats a block. Structured programming makes that control flow explicit and organized.</p><Link className="button primary" href="/learn">Continue</Link></div></section>
    </ConceptShell>
  );
}
