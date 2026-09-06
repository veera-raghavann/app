"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import ProgressRail from "@/components/learning/ProgressRail";
import ConceptProgress from "@/components/learning/ConceptProgress";

export default function ConceptShell({
  number,
  kicker,
  title,
  intro,
  children,
}: {
  number: string;
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="shell">
      <ConceptProgress />
      <header className="nav">
        <div className="container nav-inner">
          <Link className="brand" href="/">APP<span style={{ color: "var(--accent)" }}>.</span></Link>
          <div className="nav-links"><Link href="/learn">Learning map</Link><span>{number} / {kicker}</span></div>
          <span className="eyebrow"><span className="dot" /> Interactive lesson</span>
        </div>
      </header>
      <div className="concept-layout container">
        <ProgressRail />
        <article className="concept-main">
          <header className="concept-hero" id="intuition">
            <div className="section-kicker">{kicker}</div>
            <h1>{title}</h1>
            <p>{intro}</p>
          </header>
          {children}
        </article>
      </div>
    </main>
  );
}
