import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function GrowthGraph() {
  const mainPath = useRef<SVGPathElement>(null);
  const bgPath = useRef<SVGPathElement>(null);
  const nodes = useRef<SVGGElement>(null);
  const cards = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    if (
      !mainPath.current ||
      !bgPath.current ||
      !nodes.current ||
      !cards.current
    )
      return;

    const ctx = gsap.context(() => {
      const mainLen = mainPath.current!.getTotalLength();
      const bgLen = bgPath.current!.getTotalLength();

      gsap.set([mainPath.current, bgPath.current], {
        strokeDasharray: (i: number) => (i === 0 ? mainLen : bgLen),
        strokeDashoffset: (i: number) => (i === 0 ? mainLen : bgLen),
      });

      gsap.set(nodes.current!.children, { scale: 0, opacity: 0 });
      gsap.set(cards.current!.children, { y: 10, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.6 });

      tl.to(bgPath.current, {
        strokeDashoffset: 0,
        duration: 2.2,
        ease: "power2.out",
      })
        .to(
          mainPath.current,
          {
            strokeDashoffset: 0,
            duration: 2.6,
            ease: "power3.out",
          },
          "-=1.6",
        )
        .to(
          nodes.current!.children,
          {
            scale: 1,
            opacity: 1,
            stagger: 0.3,
            duration: 0.5,
            ease: "back.out(2)",
          },
          "-=1.4",
        )
        .to(
          cards.current!.children,
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=1",
        );

      // subtle life
      gsap.to(nodes.current!.children, {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        stagger: 0.4,
        delay: 3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <svg
      width="520"
      height="360"
      viewBox="0 0 520 360"
      fill="none"
      className="overflow-visible"
    >
      {/* BACKGROUND FOUNDATION PATH */}
      <path
        ref={bgPath}
        d="M60 300 C 160 260, 240 280, 300 220 C 360 160, 420 180, 460 120"
        stroke="url(#bgGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* MAIN GROWTH PATH */}
      <path
        ref={mainPath}
        d="M60 300 C 160 240, 240 260, 300 190 C 360 120, 430 140, 480 80"
        stroke="url(#mainGradient)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* MILESTONE NODES */}
      <g ref={nodes}>
        <circle cx="60" cy="300" r="6" fill="#8d0b41" opacity="0.6" />
        <circle cx="300" cy="190" r="7" fill="#8d0b41" />
        <circle cx="480" cy="80" r="8" fill="#8d0b41" />
      </g>

      {/* FLOATING INFO CARDS */}
      <g ref={cards}>
        <rect
          x="200"
          y="230"
          rx="10"
          width="90"
          height="34"
          fill="rgba(141,11,65,0.12)"
        />
        <rect
          x="380"
          y="120"
          rx="10"
          width="110"
          height="34"
          fill="rgba(141,11,65,0.15)"
        />
      </g>

      {/* GRADIENTS */}
      <defs>
        <linearGradient
          id="mainGradient"
          x1="0"
          y1="360"
          x2="520"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8d0b41" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8d0b41" stopOpacity="1" />
        </linearGradient>

        <linearGradient
          id="bgGradient"
          x1="0"
          y1="360"
          x2="520"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8d0b41" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8d0b41" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
