"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Discover", desc: "Understanding your brand, audience, and goals." },
  { title: "Strategy", desc: "Defining direction and execution roadmap." },
  { title: "Create", desc: "Designing content and digital experiences." },
  { title: "Launch", desc: "Executing across the right platforms." },
  { title: "Optimize", desc: "Improving performance through insights." },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const barFillRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<HTMLSpanElement[]>([]);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !circleRef.current) return;

    /* ================= PIN RIGHT SIDE (DESKTOP) ================= */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: pinRef.current,
      pinSpacing: false,
    });

    /* ================= DESKTOP CIRCLE PROGRESS ================= */
    const radius = 52;
    const circumference = 2 * Math.PI * radius;

    circleRef.current.style.strokeDasharray = `${circumference}`;
    circleRef.current.style.strokeDashoffset = `${circumference}`;

    gsap.to(circleRef.current, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    /* ================= MOBILE STEP SNAP ================= */
    const items =
      sectionRef.current.querySelectorAll<HTMLDivElement>(".process-step");

    items.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 65%",
        end: "bottom 65%",
        onEnter: () => activateStep(index),
        onEnterBack: () => activateStep(index),
      });
    });

    function activateStep(index: number) {
      /* Bar fill */
      if (barFillRef.current) {
        gsap.to(barFillRef.current, {
          scaleX: (index + 1) / steps.length,
          transformOrigin: "left center",
          duration: 0.3,
          ease: "power2.out",
        });
      }

      /* Dots */
      dotRefs.current.forEach((dot, i) => {
        dot.classList.toggle("active", i <= index);
      });

      /* Glow pulse */
      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { opacity: 0.25, scale: 0.9 },
          { opacity: 0.6, scale: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    }

    /* ================= STEP ACTIVE STATE ================= */
    items.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 60%",
        end: "bottom 60%",
        toggleClass: "active",
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="process-clear" ref={sectionRef}>
      <div className="process-clear-wrapper process-layout">
        {/* LEFT */}
        <div>
          <div className="process-clear-header">
            <h2>
              Our Process
              <span>a simple system that works</span>
            </h2>
            <p>A clear, repeatable approach we follow on every project.</p>
          </div>

          <div className="process-clear-steps">
            {steps.map((step, i) => (
              <div className="process-step" key={i}>
                <span className="step-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="process-clear-right" ref={pinRef}>
          <div className="process-progress">
            <div className="process-glow" ref={glowRef} />
            <svg width="120" height="120">
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                ref={circleRef}
                cx="60"
                cy="60"
                r="52"
                stroke="#8d0b41"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="progress-label">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
