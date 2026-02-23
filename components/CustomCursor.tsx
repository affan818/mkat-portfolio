"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      // fast core
      gsap.to(dot.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out",
      });

      // smooth aura
      gsap.to(ring.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const hoverOn = () => {
      gsap.to(ring.current, {
        scale: 1.8,
        opacity: 0.15,
        duration: 0.3,
      });
    };

    const hoverOff = () => {
      gsap.to(ring.current, {
        scale: 1,
        opacity: 0.35,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", hoverOn);
      el.addEventListener("mouseleave", hoverOff);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", hoverOn);
        el.removeEventListener("mouseleave", hoverOff);
      });
    };
  }, []);

  return (
    <>
      {/* AURA */}
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[998] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d0b41] opacity-30"
      />

      {/* CORE */}
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d0b41] mix-blend-difference"
      />
    </>
  );
}
