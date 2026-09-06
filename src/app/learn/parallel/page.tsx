"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function ParallelPage() {
  const [cores, setCores] = useState(4);
  const [tasks, setTasks] = useState(8);
  const [running, setRunning] = useState(false);
  const lanes = useMemo(() => Array.from({ length: cores }, (_, i) => i), [cores]);

  return (
    <main className="shell">
      <header className="nav"><div className="container nav-inner"><Link className="brand" href="/">APP<span style={{ color: "var(--accent)" }}>.</span></Link><div className="nav-links"><Link href="/learn">Learning map</Link><span>07 / Parallel</span></div><span className="eyebrow"><span className="dot" /> Playground</span></div></header>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="section-head"><div className="section-kicker">Parallel computing</div><h1 style={{ margin: "12px 0 18px", fontSize: "clamp(58px, 9vw, 108px)", lineHeight: .88, letterSpacing: "-.075em" }}>Split the work.</h1><p>Parallel computing breaks a larger job into subtasks that can execute concurrently on multiple processors, cores or computers. Change the number of cores and see the model.</p></div>
          <div style={{ display: "grid", gridTemplateColumns: "280px minmax(0,1fr)", gap: 14 }}>
            <div className="card">
              <div className="card-num">CONTROLS</div>
              <label style={{ display: "block", marginTop: 30, fontSize: 13 }}>Tasks · {tasks}</label>
              <input type="range" min="4" max="16" value={tasks} onChange={(e) => setTasks(Number(e.target.value))} style={{ width: "100%", marginTop: 12 }} />
              <label style={{ display: "block", marginTop: 28, fontSize: 13 }}>Cores · {cores}</label>
              <input type="range" min="1" max="8" value={cores} onChange={(e) => setCores(Number(e.target.value))} style={{ width: "100%", marginTop: 12 }} />
              <button className="button primary" style={{ width: "100%", marginTop: 30 }} onClick={() => setRunning(!running)}>{running ? "Pause simulation" : "Run simulation"}</button>
            </div>
            <div className="visual-card"><div className="visual-header"><span>WORK DISTRIBUTION</span><span>{cores} CORES · {tasks} TASKS</span></div><div style={{ padding: "34px 4px" }}>{lanes.map((lane) => <div key={lane} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 14, alignItems: "center", marginBottom: 13 }}><span style={{ color: "var(--muted)", fontSize: 12 }}>CORE {lane + 1}</span><div style={{ height: 30, borderRadius: 10, border: "1px solid var(--line)", background: "rgba(255,255,255,.7)", overflow: "hidden", position: "relative" }}>{Array.from({ length: Math.ceil(tasks / cores) }, (_, j) => <span key={j} style={{ position: "absolute", left: `${(j / Math.ceil(tasks / cores)) * 100}%`, width: `${(1 / Math.ceil(tasks / cores)) * 100 - 2}%`, top: 3, bottom: 3, borderRadius: 7, background: running ? "rgba(110,92,255,.20)" : "rgba(18,18,18,.08)", transition: "background .2s" }} />)}</div></div>)}</div><div style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>The material distinguishes shared-memory and distributed-memory approaches, and also introduces SIMD, MIMD, task parallelism and data parallelism.</div></div>
          </div>
        </div>
      </section>
      <footer className="footer"><div className="container"><Link href="/learn">← Back to learning map</Link></div></footer>
    </main>
  );
}
