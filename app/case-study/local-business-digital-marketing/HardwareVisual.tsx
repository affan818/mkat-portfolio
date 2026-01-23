"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../case-study.css";
export default function HardwareVisual() {
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    // ENTRY GROW
    tl.fromTo(
      barsRef.current,
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

    // SUBTLE IDLE FLOAT (alive feel)
    tl.to(
      barsRef.current,
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
