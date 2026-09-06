"use client";

import Link from "next/link";
import { useState } from "react";
import ConceptShell from "@/components/learning/ConceptShell";
import AnimatedObject from "@/components/learning/AnimatedObject";

const ideas = [
  { id: "encapsulation", title: "Encapsulation", copy: "Bundle data and the methods that operate on it inside one object, keeping internal details hidden." },
  { id: "abstraction", title: "Abstraction", copy: "Focus the model on the attributes and behaviours that matter while hiding unnecessary complexity." },
  { id: "inheritance", title: "Inheritance", copy: "Let a class inherit properties and behaviours from a base class so related types can reuse structure." },
  { id: "polymorphism", title: "Polymorphism", copy: "Treat different related classes through a common abstraction while allowing each class to provide its own behaviour." },
] as const;

export default function OopPage() {
  const [active, setActive] = useState<(typeof ideas)[number]["id"]>("encapsulation");
  const item = ideas.find((idea) => idea.id === active)!;

  return (
    <ConceptShell number="03" kicker="Object-oriented programming" title="Think in objects, state and behaviour." intro="OOP revolves around objects and models real-world entities and their interactions. Explore the four ideas as one connected mental model.">
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">Visual model</div>
        <h2>Watch the same object change as the idea changes.</h2>
        <div className="oop-scene">
          <AnimatedObject active={active} />
          <div className="object-caption">Data + behaviour, kept together and re-modelled through OOP ideas.</div>
        </div>
      </section>

      <section className="lesson-section" id="mechanism">
        <div className="lesson-kicker">Four ideas</div>
        <div className="idea-grid">
          {ideas.map((idea) => (
            <button key={idea.id} className={`idea-card ${active === idea.id ? "selected" : ""}`} onClick={() => setActive(idea.id)}>
              <span>{idea.id}</span><strong>{idea.title}</strong><p>{idea.copy}</p>
            </button>
          ))}
        </div>
        <div className="card" style={{ marginTop: 14 }}>
          <div className="card-num">ACTIVE IDEA</div>
          <h3 style={{ marginTop: 12 }}>{item.title}</h3>
          <p>{item.copy}</p>
        </div>
      </section>

      <section className="lesson-section" id="code">
        <div className="lesson-kicker">Code connection</div>
        <h2>Turn the model into a class.</h2>
        <pre className="code-block"><code>{`class BankAccount {
  private double balance;

  void deposit(double amount) {
    balance += amount;
  }
}`}</code></pre>
      </section>

      <section className="lesson-section" id="recall">
        <div className="lesson-kicker">Recall</div>
        <div className="card recall-card">
          <h3>What is the main idea?</h3>
          <p>OOP groups state and behaviour into objects and uses abstraction, encapsulation, inheritance and polymorphism to manage complex systems.</p>
          <Link className="button primary" href="/learn">Continue learning</Link>
        </div>
      </section>
    </ConceptShell>
  );
}
