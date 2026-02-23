"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RightAnimation() {
  const container = useRef<HTMLDivElement>(null);
  const ringOuter = useRef<HTMLDivElement>(null);
  const ringMid = useRef<HTMLDivElement>(null);
  const ringInner = useRef<HTMLDivElement>(null);
  const core = useRef<HTMLDivElement>(null);
  const particles = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const rings = [
        ringOuter.current,
        ringMid.current,
        ringInner.current,
        core.current,
      ].filter(Boolean);

      gsap.fromTo(
        rings,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          stagger: 0.12,
          delay: 0.4,
        },
      );

      ringOuter.current &&
        gsap.to(ringOuter.current, {
          rotate: 360,
          duration: 60,
          repeat: -1,
          ease: "linear",
        });

      ringMid.current &&
        gsap.to(ringMid.current, {
          rotate: -360,
          duration: 42,
          repeat: -1,
          ease: "linear",
        });

      ringInner.current &&
        gsap.to(ringInner.current, {
          rotate: 360,
          duration: 26,
          repeat: -1,
          ease: "linear",
        });

      core.current &&
        gsap.to(core.current, {
          scale: 1.15,
          repeat: -1,
          yoyo: true,
          duration: 2.4,
          ease: "sine.inOut",
        });

      particles.current.forEach((dot, i) => {
        if (!dot) return;
        gsap.to(dot, {
          rotate: 360,
          transformOrigin: "50% 50%",
          duration: 10 + i * 3,
          repeat: -1,
          ease: "linear",
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="relative h-[440px] w-[440px] flex items-center justify-center"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 rounded-full bg-[#8d0b41]/30 blur-[200px]" />

      {/* OUTER RING */}
      <div
        ref={ringOuter}
        className="absolute h-[380px] w-[380px] rounded-full border border-[#8d0b41]/30"
      />

      {/* MID RING */}
      <div
        ref={ringMid}
        className="absolute h-[300px] w-[300px] rounded-full border border-[#8d0b41]/45"
      />

      {/* INNER RING */}
      <div
        ref={ringInner}
        className="absolute h-[220px] w-[220px] rounded-full border border-[#8d0b41]/65"
      />

      {/* ORBIT PARTICLES */}
      <div className="absolute h-[300px] w-[300px]">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) particles.current[i] = el;
            }}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-[#ff3b7f]"
            style={{
              transform: `rotate(${i * 60}deg) translateX(150px)`,
            }}
          />
        ))}
      </div>

      {/* CORE */}
      <div
        ref={core}
        className="h-[90px] w-[90px] rounded-full bg-gradient-to-br from-[#8d0b41] to-[#ff3b7f] shadow-[0_0_80px_rgba(141,11,65,0.7)]"
      />
    </div>
  );
}
