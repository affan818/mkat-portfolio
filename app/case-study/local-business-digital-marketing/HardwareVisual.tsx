"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "../case-study.css";

export default function HardwareVisual() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const bars = barsRef.current.filter(Boolean); // 👈 IMPORTANT
      if (!bars.length) return;

      const tl = gsap.timeline({ delay: 0.8 });

      // ENTRY GROW
      tl.fromTo(
        bars,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          stagger: 0.18,
          transformOrigin: "bottom",
        },
      );

      // IDLE FLOAT
      tl.to(
        bars,
        {
          y: -6,
          repeat: -1,
          yoyo: true,
          duration: 2.6,
          ease: "sine.inOut",
          stagger: {
            each: 0.2,
            yoyo: true,
          },
        },
        "+=0.3",
      );
    }, wrapperRef);

    return () => ctx.revert(); // 👈 CLEANUP
  }, []);

  return (
    <div className="relative hidden md:flex h-[420px] w-[420px] items-center justify-center">
      {/* ambient glow */}
      <div className="absolute h-[320px] w-[320px] rounded-full bg-[#8d0b41]/25 blur-[150px]" />

      {/* bars */}
      <div className="relative flex items-end gap-7 h-[260px]">
        {[140, 200, 170, 230].map((height, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) barsRef.current[i] = el;
            }}
            style={{ height }}
            className="growth-bar"
          >
            {/* inner shine */}
            <span className="bar-shine" />
          </div>
        ))}
      </div>
    </div>
  );
}
