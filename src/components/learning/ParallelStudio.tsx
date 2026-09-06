"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

export default function ParallelStudio() {
  const [cores, setCores] = useState(4);
  const [tasks, setTasks] = useState(12);
  const [running, setRunning] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setTick((value) => value + 1), 520);
    return () => window.clearInterval(id);
  }, [running]);

  const queues = useMemo(() => Array.from({ length: tasks }, (_, i) => i), [tasks]);
  const perCore = Math.ceil(tasks / cores);

  return (
    <div className="parallel-studio">
      <div className="parallel-controls">
        <div><span className="section-kicker">Simulation</span><strong>Make parallelism visible.</strong></div>
        <button className="button primary" onClick={() => setRunning((value) => !value)}>{running ? "Pause" : "Run simulation"}</button>
      </div>
      <div className="parallel-sliders">
        <label className="field"><span>Tasks · {tasks}</span><input type="range" min="4" max="24" value={tasks} onChange={(e) => setTasks(Number(e.target.value))} /></label>
        <label className="field"><span>Processing units · {cores}</span><input type="range" min="1" max="8" value={cores} onChange={(e) => setCores(Number(e.target.value))} /></label>
      </div>
      <div className="parallel-board">
        {Array.from({ length: cores }, (_, core) => (
          <div className="parallel-lane" key={core}>
            <div className="parallel-lane-label">CORE {core + 1}</div>
            <div className="parallel-track">
              {queues.filter((_, i) => i % cores === core).map((task, localIndex) => (
                <motion.div key={task} className="parallel-task" animate={running ? { x: [0, 5, 0], opacity: [0.55, 1, .72] } : { x: 0, opacity: .58 }} transition={{ duration: .52, delay: localIndex * .05, repeat: running ? Infinity : 0 }}>
                  T{String(task + 1).padStart(2, "0")}
                </motion.div>
              ))}
              {Array.from({ length: Math.max(0, perCore - queues.filter((_, i) => i % cores === core).length) }, (_, i) => <div className="parallel-task ghost" key={`g-${i}`} />)}
            </div>
          </div>
        ))}
      </div>
      <div className="parallel-readout"><span>{tasks} tasks</span><span>÷</span><span>{cores} cores</span><span>≈</span><strong>{perCore} tasks/core</strong><span>frame {tick}</span></div>
    </div>
  );
}
