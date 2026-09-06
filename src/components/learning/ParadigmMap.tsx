"use client";

import { motion } from "motion/react";
import { useState } from "react";

const branches = {
  imperative: {
    title: "Imperative",
    description: "Specify the sequence of instructions the computer should execute.",
    children: ["Structured", "Procedural", "Object-Oriented"],
  },
  declarative: {
    title: "Declarative",
    description: "Describe the desired result rather than prescribing each step.",
    children: ["Logic", "Functional", "Data-driven"],
  },
};

export default function ParadigmMap() {
  const [active, setActive] = useState<keyof typeof branches>("imperative");
  const current = branches[active];
  return (
    <div className="paradigm-map">
      <div className="paradigm-root">PROGRAMMING PARADIGMS</div>
      <div className="paradigm-stem" />
      <div className="paradigm-switch">
        {(Object.keys(branches) as Array<keyof typeof branches>).map((key) => (
          <button key={key} className={`button ${active === key ? "primary" : "secondary"}`} onClick={() => setActive(key)}>{branches[key].title}</button>
        ))}
      </div>
      <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="paradigm-detail">
        <span className="section-kicker">Active lens</span>
        <h3>{current.title}</h3>
        <p>{current.description}</p>
        <div className="paradigm-children">
          {current.children.map((child, index) => <motion.div key={child} className="node" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * .07 }}>{child}</motion.div>)}
        </div>
      </motion.div>
    </div>
  );
}
