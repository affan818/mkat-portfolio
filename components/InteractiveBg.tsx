"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InteractiveBg() {
  const orb = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orb.current) return;

    const move = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

      gsap.to(orb.current, {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        ref={orb}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d0b41]/30 blur-[160px]"
      />
    </div>
  );
}
