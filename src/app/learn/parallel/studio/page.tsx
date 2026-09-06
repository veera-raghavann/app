"use client";

import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";
import ParallelStudio from "@/components/learning/ParallelStudio";
import { RevealCard } from "@/components/learning/ConceptExperience";

export default function ParallelStudioPage() {
  return (
    <ConceptShell number="06A" kicker="Parallel computing · studio" title="See concurrency become a machine." intro="Parallel computing breaks larger work into subtasks that can execute at the same time. Change the workload and processing units and watch the distribution change."
    >
      <section className="lesson-section" id="visual"><div className="lesson-kicker">01 · Studio</div><h2>Make the workload breathe.</h2><div className="visual-card"><ParallelStudio /></div></section>
      <section className="lesson-section" id="mechanism"><div className="lesson-kicker">02 · Models</div><div className="idea-grid">
        <RevealCard eyebrow="Shared memory" title="Many workers, one space"><p>Multiple processors or cores operate with access to a common memory space.</p></RevealCard>
        <RevealCard eyebrow="Distributed memory" title="Many machines, messages"><p>Each processor or computer keeps its own memory and communicates by message passing.</p></RevealCard>
        <RevealCard eyebrow="SIMD" title="One instruction, many data"><p>The same instruction is applied to multiple data elements in parallel.</p></RevealCard>
        <RevealCard eyebrow="MIMD" title="Different work, different data"><p>Processors or cores can execute different instructions on different sets of data.</p></RevealCard>
      </div></section>
      <section className="lesson-section" id="code"><div className="lesson-kicker">03 · Mental model</div><div className="concept-statement">Parallelism is not simply “more cores = faster”. Work must be divisible, dependencies must be manageable, and coordination overhead must stay under control.</div></section>
      <section className="lesson-section" id="recall"><div className="card recall-card"><div className="lesson-kicker">04 · Recall</div><h3>Split → execute → coordinate → combine.</h3><p>The source material also highlights load balancing, data dependencies, communication overhead and synchronization as important challenges.</p><Link className="button primary" href="/learn">Continue</Link></div></section>
    </ConceptShell>
  );
}
