"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutBg() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const orb3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ===============================
       BASE FLOATING (ALWAYS ON)
    =============================== */
    gsap.to(orb1.current, {
      y: -60,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(orb2.current, {
      y: 80,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(orb3.current, {
      y: -40,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* ===============================
       MOUSE PARALLAX (DESKTOP ONLY)
    =============================== */
    if (window.innerWidth > 1024) {
      const move = (e: MouseEvent) => {
        const x = (e.clientX - window.innerWidth / 2) / 30;
        const y = (e.clientY - window.innerHeight / 2) / 30;

        gsap.to(orb1.current, { x, y, duration: 1.5, ease: "power3.out" });
        gsap.to(orb2.current, {
          x: -x,
          y: -y,
          duration: 1.8,
          ease: "power3.out",
        });
        gsap.to(orb3.current, {
          x: x * 0.6,
          y: -y * 0.6,
          duration: 2,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    }
  }, []);

  useEffect(() => {
    /* ===============================
       SCROLL VELOCITY REACTION
    =============================== */
    if (window.innerWidth > 1024) {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const velocity = Math.min(Math.abs(self.getVelocity()) / 300, 2);

          gsap.to(orb1.current, {
            scale: 1 + velocity * 0.08,
            x: velocity * 30,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(orb2.current, {
            scale: 1 + velocity * 0.12,
            x: -velocity * 40,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(orb3.current, {
            scale: 1 + velocity * 0.05,
            y: -velocity * 25,
            duration: 0.4,
            ease: "power3.out",
          });
        },
      });
    }
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {/* ORB 1 */}
      <div
        ref={orb1}
        className="
          absolute top-[20%] left-[15%]
          h-[280px] w-[280px]
          md:h-[380px] md:w-[380px]
          rounded-full
          bg-gradient-to-br from-[#8d0b41]/40 to-pink-500/20
          blur-[120px]
        "
      />

      {/* ORB 2 */}
      <div
        ref={orb2}
        className="
          absolute bottom-[15%] right-[10%]
          h-[320px] w-[320px]
          md:h-[450px] md:w-[450px]
          rounded-full
          bg-gradient-to-tr from-pink-500/30 to-purple-600/20
          blur-[140px]
        "
      />

      {/* ORB 3 */}
      <div
        ref={orb3}
        className="
          absolute top-[50%] right-[40%]
          h-[200px] w-[200px]
          md:h-[300px] md:w-[300px]
          rounded-full
          bg-[#8d0b41]/20
          blur-[100px]
        "
      />

      {/* NOISE OVERLAY */}
      <div className="noise-overlay" />
    </div>
  );
}
