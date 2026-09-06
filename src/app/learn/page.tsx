"use client";

import Link from "next/link";
import { useState } from "react";

const roadmap = [
  { id: "01", title: "Programming Paradigms", desc: "Build the map before learning the territory.", status: "Start here", href: "/learn/paradigms" },
  { id: "02", title: "Structured Programming", desc: "See sequence, selection and repetition as execution paths.", status: "Core", href: "/learn/structured" },
  { id: "03", title: "Procedural Programming", desc: "Break complex work into reusable procedures.", status: "Core", href: "/learn/procedural" },
  { id: "04", title: "Object-Oriented Programming", desc: "Think in objects, state and behavior.", status: "Core", href: "/learn/oop" },
  { id: "05", title: "Subroutines & Methods", desc: "Understand calls, abstraction and modularity.", status: "Core", href: "/learn/subroutines" },
  { id: "06", title: "Object Serialization", desc: "Watch an object's state become transportable data.", status: "Flagship", href: "/learn/serialization" },
  { id: "07", title: "Parallel Computing", desc: "See work split across processors and recombine.", status: "Flagship", href: "/learn/parallel" },
];

export default function LearnPage() {
  const [active, setActive] = useState("01");

  return (
    <main className="shell">
      <header className="nav">
        <div className="container nav-inner">
          <Link className="brand" href="/">APP<span style={{ color: "var(--accent)" }}>.</span></Link>
          <div className="nav-links"><Link href="/">Home</Link><a href="#roadmap">Roadmap</a></div>
          <span className="eyebrow">Unit I · Visual learning</span>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Learning map</div>
            <h1 style={{ margin: "12px 0", fontSize: "clamp(52px, 8vw, 96px)", lineHeight: .9, letterSpacing: "-.07em" }}>Learn the system, not the slides.</h1>
            <p>Move through APP as a connected sequence of mental models. Start with the map, then zoom into how each programming style behaves.</p>
          </div>

          <div id="roadmap" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.15fr) minmax(300px, .85fr)", gap: 20, alignItems: "start" }}>
            <div>
              {roadmap.map((item) => (
                <button key={item.id} onClick={() => setActive(item.id)} style={{ width: "100%", display: "grid", gridTemplateColumns: "54px 1fr auto", textAlign: "left", alignItems: "center", gap: 18, padding: "22px 0", border: 0, borderTop: "1px solid var(--line)", background: "transparent", cursor: "pointer", color: "inherit" }}>
                  <span style={{ color: "var(--muted)", fontSize: 12 }}>{item.id}</span>
                  <span>
                    <strong style={{ display: "block", fontSize: 22, letterSpacing: "-.03em" }}>{item.title}</strong>
                    <span style={{ display: "block", marginTop: 5, color: "var(--muted)", fontSize: 14 }}>{item.desc}</span>
                  </span>
                  <span style={{ color: active === item.id ? "var(--accent)" : "var(--muted)", fontSize: 12 }}>{item.status}</span>
                </button>
              ))}
            </div>

            <div className="visual-card" style={{ position: "sticky", top: 96 }}>
              {(() => {
                const current = roadmap.find((r) => r.id === active)!;
                return <>
                  <div className="visual-header"><span>SELECTED</span><span>{current.id}</span></div>
                  <div style={{ padding: "70px 10px 55px" }}>
                    <div className="eyebrow"><span className="dot" /> {current.status}</div>
                    <h2 style={{ margin: "16px 0 12px", fontSize: 40, lineHeight: 1, letterSpacing: "-.05em" }}>{current.title}</h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6, fontSize: 15 }}>{current.desc}</p>
                    <Link className="button primary" href={current.href} style={{ marginTop: 24 }}>Open concept</Link>
                  </div>
                </>;
              })()}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
