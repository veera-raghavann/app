"use client";

import Link from "next/link";
import { useState } from "react";
import ConceptShell from "@/components/learning/ConceptShell";

const ideas = [
  { id: "encapsulation", title: "Encapsulation", copy: "Bundle data and the methods that operate on it inside one object, keeping internal details hidden." },
  { id: "abstraction", title: "Abstraction", copy: "Focus the model on the attributes and behaviours that matter while hiding unnecessary complexity." },
  { id: "inheritance", title: "Inheritance", copy: "Let a class inherit properties and behaviours from a base class so related types can reuse structure." },
  { id: "polymorphism", title: "Polymorphism", copy: "Treat different related classes through a common abstraction while allowing each class to provide its own behaviour." },
];

export default function OopPage() {
  const [active, setActive] = useState("encapsulation");
  const item = ideas.find((idea) => idea.id === active)!;

  return (
    <ConceptShell number="03" kicker="Object-oriented programming" title="Think in objects, state and behaviour." intro="OOP revolves around objects and models real-world entities and their interactions. Explore the four ideas as one connected mental model.">
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">Visual model</div>
        <h2>One object can hold both state and behaviour.</h2>
        <div className="oop-scene">
          <div className="object-card">
            <div className="object-cap">OBJECT</div>
            <div className="object-name">BankAccount</div>
            <div className="object-divider" />
            <div className="object-list"><span>balance</span><span>owner</span><span>accountNo</span></div>
            <div className="object-divider" />
            <div className="object-list"><span>deposit()</span><span>withdraw()</span><span>getBalance()</span></div>
          </div>
          <div className="object-caption">Data + behaviour, kept together.</div>
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
        <pre className="code-block"><code>{`class BankAccount {\n  private double balance;\n\n  void deposit(double amount) {\n    balance += amount;\n  }\n}`}</code></pre>
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
