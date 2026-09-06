"use client";

import Link from "next/link";
import { learningSections } from "@/lib/learning";

type Props = {
  active?: string;
};

export default function ProgressRail({ active }: Props) {
  return (
    <aside className="learning-rail" aria-label="Lesson progress">
      {learningSections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={active === section.id ? "rail-item active" : "rail-item"}
        >
          <span>{section.label}</span>
          <span>{section.title}</span>
        </Link>
      ))}
    </aside>
  );
}
