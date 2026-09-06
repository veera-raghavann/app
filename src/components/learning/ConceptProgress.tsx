"use client";

import { useEffect, useState } from "react";
import { learningSections } from "@/lib/learning";

export default function ConceptProgress() {
  const [active, setActive] = useState("intuition");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0);

      let closest = "intuition";
      let best = Number.POSITIVE_INFINITY;
      for (const section of learningSections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const distance = Math.abs(el.getBoundingClientRect().top - 130);
        if (distance < best) {
          best = distance;
          closest = section.id;
        }
      }
      setActive(closest);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div className="reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      <div className="mobile-progress-label">{learningSections.find((section) => section.id === active)?.title}</div>
    </>
  );
}
