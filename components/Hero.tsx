"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
      });

      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      });

      gsap.from(btnRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
      });

      gsap.to(glowRef.current, {
        scale: 1.15,
        y: -40,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (window.innerWidth > 768) {
        gsap.to(titleRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef} id="home">
      <div className="hero-bg" />

      <div className="hero-content">
        <div className="hero-title-wrap">
          <h1 ref={titleRef}>
            Marketing <span>doesn’t</span> have to be complicated.
          </h1>
        </div>

        <p ref={subtitleRef}>
          We simplify the process and help your business communicate better and
          grow consistently.
        </p>

        <Link href={"#contact"}>
          <button ref={btnRef} className="hero-btn">
            Start a project
          </button>
        </Link>
      </div>

      <div className="hero-glow" ref={glowRef} />
    </section>
  );
}
