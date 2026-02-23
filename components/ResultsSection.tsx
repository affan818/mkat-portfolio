"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 120, suffix: "%", label: "Average lead growth" },
  { value: 4.2, suffix: "x", label: "Return on ad spend" },
  { value: 98, suffix: "%", label: "Client retention rate" },
  { value: 3.5, suffix: "M+", label: "Impressions generated" },
];

export default function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".result-item");

    items.forEach((item) => {
      const number = item.querySelector(".result-number span") as HTMLElement;

      const target = Number(number.dataset.value);

      // Card reveal
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        },
      );

      // Number count
      gsap.fromTo(
        number,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.2,
          ease: "power3.out",
          snap: { innerText: 0.1 },
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        },
      );
    });
  }, []);

  return (
    <section className="results-section" ref={sectionRef}>
      <div className="results-wrapper">
        {/* HEADER */}
        <div className="results-header">
          <h2>
            Results
            <span>that matter</span>
          </h2>
          <p>
            Not likes for the sake of likes but real progress that is visible in
            your business.
          </p>
        </div>

        {/* GRID */}
        <div className="results-grid">
          {stats.map((stat, i) => (
            <div className="result-item" key={i}>
              <div className="result-number">
                <span data-value={stat.value}>0</span>
                {stat.suffix}
              </div>
              <p className="result-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
