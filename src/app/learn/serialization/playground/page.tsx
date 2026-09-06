"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const fields = ["name", "age", "section"] as const;

type Student = Record<(typeof fields)[number], string>;

const initial: Student = { name: "Veera", age: "19", section: "AF1" };

export default function SerializationPlaygroundPage() {
  const [student, setStudent] = useState<Student>(initial);
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<"binary" | "text">("binary");

  const representation = useMemo(() => {
    const raw = JSON.stringify(student);
    if (mode === "text") return raw;
    return Array.from(new TextEncoder().encode(raw))
      .map((n) => n.toString(2).padStart(8, "0"))
      .join(" ");
  }, [student, mode]);

  const labels = ["Object in memory", "Serialize", "Representation", "Stored / transmitted", "Deserialize", "Object restored"];

  return (
    <main className="shell">
      <header className="nav">
        <div className="container nav-inner">
          <Link className="brand" href="/">APP<span style={{ color: "var(--accent)" }}>.</span></Link>
          <div className="nav-links"><Link href="/learn">Learning map</Link><Link href="/learn/serialization">Serialization</Link></div>
          <span className="eyebrow"><span className="dot" /> Playground</span>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 78 }}>
        <div className="container">
          <div className="section-head" style={{ maxWidth: 850 }}>
            <div className="section-kicker">Object serialization</div>
            <h1 style={{ margin: "12px 0 18px", fontSize: "clamp(52px, 8vw, 96px)", lineHeight: .9, letterSpacing: "-.07em" }}>Change the object.<br />Trace what travels.</h1>
            <p>Edit the object's state, choose its representation, and move through the lifecycle one step at a time.</p>
          </div>

          <div className="playground-grid">
            <div className="card">
              <div className="card-num">1 · OBJECT STATE</div>
              <h3 style={{ marginTop: 18 }}>Student</h3>
              <div className="field-list">
                {fields.map((field) => (
                  <label className="field" key={field}>
                    <span>{field}</span>
                    <input value={student[field]} onChange={(e) => setStudent((s) => ({ ...s, [field]: e.target.value }))} />
                  </label>
                ))}
              </div>
              <div className="segmented" style={{ marginTop: 24 }}>
                <button className={mode === "binary" ? "selected" : ""} onClick={() => setMode("binary")}>Bytes</button>
                <button className={mode === "text" ? "selected" : ""} onClick={() => setMode("text")}>Text</button>
              </div>
            </div>

            <div className="visual-card">
              <div className="visual-header"><span>LIVE TRACE</span><span>{String(step + 1).padStart(2, "0")} / 06</span></div>
              <div className="trace">
                <div className={`trace-node ${step === 0 || step === 5 ? "active" : ""}`}>
                  <strong>Student</strong>
                  <span>{student.name} · {student.age} · {student.section}</span>
                </div>
                <div className={`trace-line ${step >= 1 ? "lit" : ""}`} />
                <div className={`trace-node ${step >= 1 && step <= 4 ? "active" : ""}`}>
                  <strong>{step <= 1 ? "State" : mode === "binary" ? "Byte stream" : "Serialized text"}</strong>
                  <span>{step <= 1 ? "inside the running program" : representation.slice(0, mode === "binary" ? 58 : 76)}</span>
                </div>
                <div className={`trace-line ${step >= 3 ? "lit" : ""}`} />
                <div className={`trace-node ${step >= 3 ? "active" : ""}`}>
                  <strong>Storage / network</strong>
                  <span>{step < 3 ? "waiting for a transferable representation" : "representation can leave the process"}</span>
                </div>
              </div>

              <div className="trace-copy">
                <div className="card-num">{labels[step].toUpperCase()}</div>
                <p>
                  {step === 0 && "The object currently exists as state in memory."}
                  {step === 1 && "The serialization operation converts the object's state into a structured representation."}
                  {step === 2 && "This representation is the form that can be stored or transmitted."}
                  {step === 3 && "The serialized representation can persist data or move between processes or machines."}
                  {step === 4 && "Deserialization reads the representation and reconstructs the object's state."}
                  {step === 5 && "The reconstructed object is available again with its stored state."}
                </p>
              </div>

              <div className="actions" style={{ justifyContent: "center" }}>
                <button className="button secondary" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Back</button>
                <button className="button primary" onClick={() => setStep((s) => (s + 1) % labels.length)}>{step === 5 ? "Replay" : "Next step"}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="container"><Link href="/learn/serialization">← Back to concept</Link></div></footer>
    </main>
  );
}
