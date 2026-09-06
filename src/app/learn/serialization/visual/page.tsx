"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import ConceptShell from "@/components/learning/ConceptShell";
import ExecutionCode from "@/components/learning/ExecutionCode";
import { RevealCard } from "@/components/learning/ConceptExperience";

const source = [
  "class Student implements Serializable {",
  "  String name;",
  "  int age;",
  "  String section;",
  "}",
  "ObjectOutputStream out = ...;",
  "out.writeObject(student);",
];

const trace = [
  { line: 1, label: "Serializable", detail: "The class declares that its objects can participate in Java serialization." },
  { line: 2, label: "State", detail: "The object's name is part of the state being represented." },
  { line: 3, label: "State", detail: "The age value is part of the object's state." },
  { line: 4, label: "State", detail: "The section value is part of the object's state." },
  { line: 6, label: "Prepare stream", detail: "A stream is prepared as the destination for the serialized representation." },
  { line: 7, label: "Serialize", detail: "The object's state is written into the stream." },
];

export default function SerializationVisualPage() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [pulse, setPulse] = useState(0);
  const stages = ["Object", "State", "Bytes", "Storage / network", "Reconstruction", "Object restored"];

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setStep((current) => {
        if (current === stages.length - 1) {
          setRunning(false);
          return current;
        }
        return current + 1;
      });
      setPulse((value) => value + 1);
    }, 1050);
    return () => window.clearInterval(timer);
  }, [running]);

  const representation = useMemo(() => {
    const raw = JSON.stringify({ name: "Veera", age: 19, section: "AF1" });
    return Array.from(new TextEncoder().encode(raw)).slice(0, 10).map((n) => n.toString(2).padStart(8, "0"));
  }, []);

  return (
    <ConceptShell number="05A" kicker="Object serialization · visual lab" title="Watch data leave memory." intro="Serialization is easiest to remember when you can see the state transform, travel, and return. This experience makes each stage explicit before connecting it to Java.">
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">01 · Lifecycle</div>
        <h2>An object does not travel as an object.</h2>
        <div className="visual-card">
          <div className="visual-header"><span>STATE TRANSFER</span><span>{String(step + 1).padStart(2, "0")} / 06</span></div>
          <div className="serialization-stage">
            <div className={`serialization-object ${step === 0 || step === 5 ? "is-active" : ""}`}><span>OBJECT</span><strong>Student</strong><small>name · age · section</small></div>
            <div className="serialization-route">
              {stages.map((stage, index) => (
                <div className="serialization-stop" key={stage}>
                  <motion.div className={`serialization-pill ${index <= step ? "reached" : ""} ${index === step ? "active" : ""}`} animate={{ scale: index === step ? 1.06 : 1 }} transition={{ type: "spring", stiffness: 320, damping: 25 }}><span>{String(index + 1).padStart(2, "0")}</span><strong>{stage}</strong></motion.div>
                  {index < stages.length - 1 && <div className={`serialization-line ${index < step ? "lit" : ""}`} />}
                </div>
              ))}
            </div>
            <div className="byte-rain" aria-label="Serialized byte representation">
              {representation.map((bits, index) => <motion.span key={`${bits}-${index}-${pulse}`} animate={step >= 2 && step <= 4 ? { y: [0, 9, 0], opacity: [0.45, 1, .55] } : { y: 0, opacity: .25 }} transition={{ duration: .9, delay: index * .05, repeat: step >= 2 && step <= 4 ? Infinity : 0 }}>{bits}</motion.span>)}
            </div>
          </div>
          <div className="serialization-explainer"><div className="section-kicker">{stages[step]}</div><p>{[
            "The Student object exists as state inside the running program.",
            "Its relevant attributes form the state that must be represented.",
            "That state becomes a stream of bytes — a representation that can move or persist.",
            "The representation can be saved or transmitted beyond the current process.",
            "Deserialization reads the representation and reconstructs the stored state.",
            "The object is available again with its state restored.",
          ][step]}</p></div>
          <div className="actions" style={{ justifyContent: "center" }}><button className="button secondary" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0}>Back</button><button className="button primary" onClick={() => { setRunning(true); if (step === stages.length - 1) setStep(0); }}>{running ? "Running…" : step === stages.length - 1 ? "Replay" : "Play journey"}</button><button className="button secondary" onClick={() => { setStep(0); setRunning(false); }}>Reset</button></div>
        </div>
      </section>

      <section className="lesson-section" id="mechanism">
        <div className="lesson-kicker">02 · Why</div>
        <div className="idea-grid">
          <RevealCard eyebrow="Persistence" title="Save state"><p>Serialized state can be persisted so it can be retrieved and reconstructed later.</p></RevealCard>
          <RevealCard eyebrow="Communication" title="Send state"><p>Serialized representations can move between processes or machines.</p></RevealCard>
          <RevealCard eyebrow="Reconstruction" title="Restore state"><p>Deserialization recreates an object's state from its representation.</p></RevealCard>
          <RevealCard eyebrow="Design" title="Handle constraints"><p>Compatibility, versioning, security and performance all matter when serialized data crosses boundaries.</p></RevealCard>
        </div>
      </section>

      <section className="lesson-section" id="code">
        <div className="lesson-kicker">03 · Java trace</div>
        <h2>Connect the animation to the program.</h2>
        <ExecutionCode code={source} steps={trace} />
      </section>

      <section className="lesson-section" id="playground">
        <div className="card recall-card"><div className="lesson-kicker">04 · Experiment</div><h3>Next: change the object's state.</h3><p>Edit the fields and watch the representation update. The same learning engine can later support deeper serialization examples and challenge questions.</p><Link className="button primary" href="/learn/serialization/playground">Open playground</Link></div>
      </section>

      <section className="lesson-section" id="recall"><div className="card recall-card"><div className="lesson-kicker">05 · Recall</div><h3>Serialization is a journey.</h3><p>Object state → representation → store or send → deserialize → object restored.</p><Link className="button primary" href="/learn">Continue</Link></div></section>
    </ConceptShell>
  );
}
