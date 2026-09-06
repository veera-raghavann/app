"use client";

import { motion } from "motion/react";

export default function AnimatedObject({ active = "source" }: { active?: "source" | "encapsulated" | "abstracted" | "inherited" | "polymorphic" }) {
  const states = {
    source: { title: "BankAccount", subtitle: "object", lines: ["balance", "owner", "accountNo"], methods: ["deposit()", "withdraw()", "getBalance()"] },
    encapsulated: { title: "BankAccount", subtitle: "encapsulated object", lines: ["private balance", "private owner", "private accountNo"], methods: ["deposit()", "withdraw()", "getBalance()"] },
    abstracted: { title: "BankAccount", subtitle: "public model", lines: ["balance", "owner"], methods: ["deposit()", "withdraw()"] },
    inherited: { title: "SavingsAccount", subtitle: "inherits BankAccount", lines: ["balance", "owner", "interestRate"], methods: ["deposit()", "withdraw()", "addInterest()"] },
    polymorphic: { title: "Account", subtitle: "common abstraction", lines: ["deposit()", "withdraw()"], methods: ["SavingsAccount", "CurrentAccount"] },
  }[active];

  return (
    <motion.div className="object-card" layout transition={{ type: "spring", stiffness: 260, damping: 24 }}>
      <div className="object-cap">{states.subtitle.toUpperCase()}</div>
      <motion.div className="object-name" layout>{states.title}</motion.div>
      <div className="object-divider" />
      <div className="object-list">
        {states.lines.map((line) => <motion.span layout key={line}>{line}</motion.span>)}
      </div>
      <div className="object-divider" />
      <div className="object-list">
        {states.methods.map((method) => <motion.span layout key={method}>{method}</motion.span>)}
      </div>
    </motion.div>
  );
}
