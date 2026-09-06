"use client";

import Link from "next/link";
import ConceptShell from "@/components/learning/ConceptShell";
import StateJourney from "@/components/learning/StateJourney";

export default function SerializationPage() {
  return (
    <ConceptShell
      number="05"
      kicker="Object serialization"
      title="Make an object travel."
      intro="Serialization converts an object's state into a representation that can be stored, transmitted and reconstructed later. Walk through the lifecycle instead of memorising the definition."
    >
      <section className="lesson-section" id="visual">
        <div className="lesson-kicker">Visual model</div>
        <h2>Follow the state as it leaves memory and comes back.</h2>
        <div className="visual-card">
          <StateJourney />
        </div>
      </section>

      <section className="lesson-section" id="mechanism">
        <div className="lesson-kicker">The mechanism</div>
        <div className="cards compact-cards">
          <article className="card"><div className="card-num">01</div><h3>Persist</h3><p>Serialized state can be saved to a file or database and reconstructed later.</p></article>
          <article className="card"><div className="card-num">02</div><h3>Transmit</h3><p>The representation can move between processes or machines over a network.</p></article>
          <article className="card"><div className="card-num">03</div><h3>Restore</h3><p>Deserialization reads the representation and reconstructs the object's state.</p></article>
        </div>
      </section>

      <section className="lesson-section" id="code">
        <div className="lesson-kicker">Code connection</div>
        <h2>In Java, serializability can be declared through an interface.</h2>
        <pre className="code-block"><code>{`class Student implements Serializable {
  String name;
  int age;
  String section;
}`}</code></pre>
        <div className="card" style={{ marginTop: 14 }}><div className="card-num">WHY THIS MATTERS</div><h3 style={{ marginTop: 12 }}>Serializable</h3><p>The supplied course material notes that some languages and frameworks require objects to implement a particular interface, such as Java's Serializable interface, to indicate that the object is serializable.</p></div>
      </section>

      <section className="lesson-section" id="playground">
        <div className="lesson-kicker">Experiment</div>
        <h2>Change the object and see its representation change.</h2>
        <Link className="button primary" href="/learn/serialization/playground">Open serialization playground</Link>
      </section>

      <section className="lesson-section" id="recall">
        <div className="lesson-kicker">Recall</div>
        <div className="card recall-card">
          <h3>One sentence to remember.</h3>
          <p>Serialization turns object state into a transferable or storable representation; deserialization reconstructs the object state from it.</p>
          <Link className="button secondary" href="/learn">Continue learning</Link>
        </div>
      </section>
    </ConceptShell>
  );
}
