"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import ConceptShell from "@/components/learning/ConceptShell";
import ParticleFlow from "@/components/learning/ParticleFlow";

export default function ParallelPage() {
  const [cores, setCores] = useState(4);
  const [tasks, setTasks] = useState(8);
  const [running, setRunning] = useState(false);
  const lanes = useMemo(() => Array.from({ length: cores }, (_, i) => i), [cores]);
  const perLane = Math.ceil(tasks / cores);

  return (
    <ConceptShell number="06" kicker="Parallel computing" title="Split the work. Watch the system breathe." intro="Parallel computing breaks a larger task into smaller subtasks and executes them concurrently. Change the workload and processor count, then watch the distribution change. Available models include shared memory, distributed memory, SIMD, MIMD, task and data parallelism.">
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">Visual model</div>
        <h2>One job. Many processing lanes.</h2>
        <div className="visual-card">
          <div className="visual-header"><span>WORK DISTRIBUTION</span><span>{cores} CORES · {tasks} TASKS</span></div>
          <div className="parallel-stage">
            <ParticleFlow running={running} count={tasks} lanes={cores} />
            <div className="parallel-lanes">
              {lanes.map((lane) => (
                <div className="parallel-lane" key={lane}>
                  <span>CORE {lane + 1}</span>
                  <div className="parallel-track">
                    {Array.from({ length: perLane }, (_, j) => {
                      const task = lane + j * cores;
                      if (task >= tasks) return null;
                      return <motion.div key={task} className="parallel-task" animate={running ? { x: [0, 5, 0] } : { x: 0 }} transition={{ duration: .8, repeat: running ? Infinity : 0, delay: j * .05 }}>{String(task + 1).padStart(2, "0")}</motion.div>;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="actions" style={{ justifyContent: "center" }}>
            <button className="button primary" onClick={() => setRunning((value) => !value)}>{running ? "Pause simulation" : "Run simulation"}</button>
          </div>
        </div>
      </section>

      <section className="lesson-section" id="mechanism">
        <div className="lesson-kicker">Mechanism</div>
        <h2>Change the shape of the computation.</h2>
        <div className="playground-grid">
          <div className="card">
            <div className="card-num">EXPERIMENT</div>
            <label className="field"><span>Tasks · {tasks}</span><input type="range" min="4" max="16" value={tasks} onChange={(e) => setTasks(Number(e.target.value))} /></label>
            <label className="field" style={{ marginTop: 20 }}><span>Cores · {cores}</span><input type="range" min="1" max="8" value={cores} onChange={(e) => setCores(Number(e.target.value))} /></label>
          </div>
          <div className="idea-grid" style={{ marginTop: 0 }}>
            {["Shared memory", "Distributed memory", "SIMD", "MIMD"].map((item, i) => <div className="idea-card selected" key={item}><span>MODEL 0{i + 1}</span><strong>{item}</strong><p>{i === 0 ? "Multiple processors or cores share a common memory space." : i === 1 ? "Processors operate with their own memory and communicate through message passing." : i === 2 ? "One instruction operates on multiple data elements at once." : "Different processors or cores execute different instructions on different data."}</p></div>)}
          </div>
        </div>
      </section>

      <section className="lesson-section" id="code">
        <div className="lesson-kicker">Code connection</div>
        <h2>Parallelism is a strategy, not a magic speed button.</h2>
        <pre className="code-block"><code>{`// Conceptual model\nfor each task in tasks:\n    assign task to an available processing unit\n\nwait for all workers\ncombine the results`}</code></pre>
      </section>

      <section className="lesson-section" id="recall">
        <div className="lesson-kicker">Recall</div>
        <div className="card recall-card"><h3>What makes parallelism useful?</h3><p>Independent work can be distributed so multiple processing units operate at the same time. The material also highlights trade-offs such as load balancing, data dependencies, communication overhead and synchronization.</p><Link className="button primary" href="/learn">Back to learning map</Link></div>
      </section>
    </ConceptShell>
  );
}
