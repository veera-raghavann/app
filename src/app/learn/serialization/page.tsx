"use client";

import Link from "next/link";
import { useState } from "react";

export default function SerializationPage() {
  const [step, setStep] = useState(0);
  const labels = ["Object", "Serialize", "Byte stream", "Stored / sent", "Deserialize", "Object restored"];

  return (
    <main className="shell">
      <header className="nav"><div className="container nav-inner"><Link className="brand" href="/">APP<span style={{ color: "var(--accent)" }}>.</span></Link><div className="nav-links"><Link href="/learn">Learning map</Link><span>06 / Serialization</span></div><span className="eyebrow"><span className="dot" /> Flagship experience</span></div></header>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="section-head"><div className="section-kicker">Object serialization</div><h1 style={{ margin: "12px 0 18px", fontSize: "clamp(58px, 9vw, 108px)", lineHeight: .88, letterSpacing: "-.075em" }}>Make an object travel.</h1><p>Serialization converts an object's state into a format that can be stored, transmitted and reconstructed later. Walk through the lifecycle instead of memorising the definition.</p></div>
          <div className="visual-card"><div className="visual-header"><span>OBJECT LIFECYCLE</span><span>{String(step + 1).padStart(2, "0")} / 06</span></div><div style={{ padding: "46px 10px" }}><div className="row" style={{ minHeight: 220 }}><div className={`node ${step === 0 || step === 5 ? "accent" : ""}`} style={{ minWidth: 220, minHeight: 130, display: "grid", placeItems: "center", textAlign: "center" }}><div><strong style={{ fontSize: 20 }}>Student</strong><br /><span style={{ color: "var(--muted)", fontSize: 13 }}>name · age · section</span></div></div><div className="arrow">→</div><div className={`node ${step >= 1 && step <= 4 ? "accent" : ""}`} style={{ minWidth: 220, minHeight: 130, display: "grid", placeItems: "center", textAlign: "center" }}><div><strong style={{ fontSize: 20 }}>State</strong><br /><span style={{ color: "var(--muted)", fontSize: 13 }}>{step < 2 ? "in memory" : step < 5 ? "byte stream" : "reconstructed"}</span></div></div></div><div style={{ maxWidth: 700, margin: "24px auto 0", textAlign: "center" }}><strong>{labels[step]}</strong><p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{step === 0 && "The object currently exists as state inside the running program."}{step === 1 && "Serialization begins: the object's state is converted into a transferable representation."}{step === 2 && "The state is represented as a stream of bytes that can leave the current memory."}{step === 3 && "Those bytes can be persisted or transmitted to another process or machine."}{step === 4 && "Deserialization reads the representation and reconstructs the object's state."}{step === 5 && "The object is available again with its stored state restored."}</p></div><div className="actions" style={{ justifyContent: "center" }}><button className="button secondary" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Back</button><button className="button primary" onClick={() => setStep((s) => (s + 1) % labels.length)}>{step === labels.length - 1 ? "Replay" : "Next step"}</button></div></div></div>
          <div className="card" style={{ marginTop: 14 }}><div className="card-num">JAVA CONNECTION</div><h3>Serializable</h3><p>The course material notes that languages and frameworks can require an object to implement an interface — for example, Java's Serializable interface — to indicate that it can be serialized.</p></div>
        </div>
      </section>
      <footer className="footer"><div className="container"><Link href="/learn">← Back to learning map</Link></div></footer>
    </main>
  );
}
