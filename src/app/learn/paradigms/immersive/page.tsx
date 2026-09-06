import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";
import ParadigmMap from "@/components/learning/ParadigmMap";
import ExecutionCode from "@/components/learning/ExecutionCode";

export default function ParadigmsImmersivePage() {
  return (
    <ConceptShell number="01A" kicker="Programming paradigms · immersive" title="Change the lens. Change the way the program is shaped." intro="A programming paradigm is an approach to structuring, organizing and executing code. Start from the map, then compare how different lenses change the mental model.">
      <section className="lesson-section" id="visual"><div className="lesson-kicker">01 · Paradigm map</div><h2>See the family before the labels.</h2><div className="visual-card"><ParadigmMap /></div></section>
      <section className="lesson-section" id="mechanism"><div className="lesson-kicker">02 · Think in steps</div><h2>Imperative programming makes execution explicit.</h2><ExecutionCode code={["int total = 0;","for (int value : values) {","  total += value;","}","System.out.println(total);"]} steps={[{line:1,label:"State",detail:"The program starts with a mutable total."},{line:2,label:"Iteration",detail:"The loop establishes repeated control flow over the values."},{line:3,label:"Mutation",detail:"The current value changes the program state."},{line:5,label:"Output",detail:"The resulting state is presented."}]} /></section>
      <section className="lesson-section" id="recall"><div className="card recall-card"><div className="lesson-kicker">03 · Recall</div><h3>Different paradigms give you different lenses.</h3><p>The supplied material presents programming paradigms as approaches that differ in abstraction, data handling, control flow and programming concepts.</p><Link className="button primary" href="/learn/structured">Next: Structured Programming</Link></div></section>
    </ConceptShell>
  );
}
