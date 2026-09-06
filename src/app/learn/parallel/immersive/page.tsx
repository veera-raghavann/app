import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";
import ParallelStudio from "@/components/learning/ParallelStudio";
import ExecutionCode from "@/components/learning/ExecutionCode";

export default function ParallelImmersivePage() {
  return (
    <ConceptShell number="06B" kicker="Parallel computing · immersive" title="Don’t read parallelism. Watch work split." intro="This lesson turns the core idea into a machine you can manipulate. Change the workload, change the processing units, and observe how the system reorganizes its work.">
      <section className="lesson-section" id="visual"><div className="lesson-kicker">01 · Machine</div><h2>Put more workers on the same job.</h2><div className="visual-card"><ParallelStudio /></div></section>
      <section className="lesson-section" id="mechanism"><div className="lesson-kicker">02 · Execution</div><h2>Tasks become independent units of work.</h2><ExecutionCode code={["tasks = split(job)","workers = processors(n)","for task in tasks:","    dispatch(task)","wait()","combine(results)"]} steps={[{line:1,label:"Split",detail:"A larger computation is divided into smaller tasks."},{line:2,label:"Workers",detail:"Multiple processing units are made available."},{line:3,label:"Dispatch",detail:"Tasks are considered for concurrent execution."},{line:4,label:"Execute",detail:"Independent pieces of work can run at the same time."},{line:5,label:"Synchronize",detail:"The system waits where coordination is necessary."},{line:6,label:"Combine",detail:"The partial results are brought together."}]} /></section>
      <section className="lesson-section"><div className="lesson-kicker">03 · Models</div><div className="idea-grid"><div className="idea-card"><span>Shared memory</span><strong>Same address space</strong><p>Multiple processing units operate with access to common memory.</p></div><div className="idea-card"><span>Distributed memory</span><strong>Message passing</strong><p>Each processing unit keeps its own memory and communicates with others.</p></div><div className="idea-card"><span>SIMD</span><strong>One instruction</strong><p>The same operation is applied to multiple data elements.</p></div><div className="idea-card"><span>MIMD</span><strong>Different instructions</strong><p>Processing units can perform different instructions on different data.</p></div></div></section>
      <section className="lesson-section" id="recall"><div className="card recall-card"><div className="lesson-kicker">04 · Recall</div><h3>Parallelism is useful when work can be divided.</h3><p>The source material also identifies load balancing, data dependencies, communication overhead and synchronization as challenges.</p><Link className="button primary" href="/learn">Back to learning map</Link></div></section>
    </ConceptShell>
  );
}
