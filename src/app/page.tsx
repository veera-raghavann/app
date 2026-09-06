"use client";

import { useState } from "react";

const concepts = [
  ["01", "Programming Paradigms", "See how different ways of thinking about programs relate to one another."],
  ["02", "Structured Programming", "Turn sequence, selection and repetition into a living execution flow."],
  ["03", "Object-Oriented Programming", "Meet objects, classes, abstraction, encapsulation, inheritance and polymorphism visually."],
  ["04", "Subroutines", "Zoom into modular programs and understand how complexity gets hidden behind a call."],
  ["05", "Object Serialization", "Watch an object become a byte stream, travel, and come back to life."],
  ["06", "Parallel Computing", "Split work across processors and see speed, scale and overhead emerge."],
];

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <main className="shell">
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">APP<span style={{ color: "var(--accent)" }}>.</span></a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#explore">Explore</a>
            <a href="#concepts">Concepts</a>
            <a href="#method">How it works</a>
          </nav>
          <a className="button primary" href="#concepts">Start learning</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow"><span className="dot" /> Advanced Programming Practice, reimagined</div>
            <h1>Understand code by seeing it.</h1>
            <p>
              APP turns static programming notes into interactive mental models — flow, motion, code and experiments that make difficult concepts feel obvious.
            </p>
            <div className="actions">
              <a className="button primary" href="#concepts">Explore concepts</a>
              <a className="button secondary" href="#method">See the learning model</a>
            </div>
          </div>

          <div className="visual-card" aria-label="Interactive concept preview">
            <div className="visual-header">
              <span>LIVE CONCEPT</span>
              <span>01 / PARADIGMS</span>
            </div>
            <div className="visual-stage">
              <div className="stack">
                <div className="node">How should a program think?</div>
                <div className="arrow">↓</div>
                <div className="row">
                  <div className="node accent">Imperative</div>
                  <div className="node">Declarative</div>
                </div>
                <div className="arrow">↓</div>
                <div className="row">
                  <div className="node">Structured</div>
                  <div className="node">Procedural</div>
                  <div className="node">Object-Oriented</div>
                </div>
                <div className="actions" style={{ justifyContent: "center", marginTop: 10 }}>
                  <button className="button primary" onClick={() => setPlaying((v) => !v)}>
                    {playing ? "Pause flow" : "Play flow"}
                  </button>
                </div>
                {playing && (
                  <div style={{ color: "var(--accent)", fontSize: 13, textAlign: "center" }}>
                    Flow active — follow the structure.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="explore">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">The idea</div>
            <h2>From notes to mental models.</h2>
            <p>
              Every lesson follows the same principle: explain the intuition first, reveal the structure, make the mechanism move, connect it to code, then let the learner experiment.
            </p>
          </div>
          <div className="row" style={{ justifyContent: "flex-start", gap: 10 }}>
            {["See", "Interact", "Code", "Experiment"].map((label, i) => (
              <div className="node" key={label}>{String(i + 1).padStart(2, "0")} · {label}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="concepts">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Course map</div>
            <h2>Start with the concepts that usually feel abstract.</h2>
          </div>
          <div className="cards">
            {concepts.map(([num, title, body]) => (
              <article className="card" key={num}>
                <div className="card-num">{num}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="method">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Learning loop</div>
            <h2>Build understanding that survives the exam.</h2>
            <p>
              A concept is not considered learned because you read it. APP makes you trace it, change it, predict it, and finally explain it back through code.
            </p>
          </div>
          <div className="visual-card">
            <div className="row" style={{ justifyContent: "space-between" }}>
              {[["01", "Intuition"], ["02", "Visualize"], ["03", "Interact"], ["04", "Code"], ["05", "Recall"]].map(([n, t]) => (
                <div className="node" key={n} style={{ minWidth: 150 }}>{n}<br /><strong>{t}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">APP — Advanced Programming Practice · Learn beyond syntax.</div>
      </footer>
    </main>
  );
}
