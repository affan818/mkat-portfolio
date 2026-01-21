"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutBg from "./AboutBg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const section = useRef<HTMLDivElement>(null);
  const textBlock = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement[]>([]);
  const counters = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ===============================
         TEXT + CARDS ENTRANCE
      =============================== */
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 70%",
        },
      });

      introTl
        .from(textBlock.current, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          cards.current,
          {
            y: 60,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        );

      /* ===============================
         COUNTER STAGGER
      =============================== */
      const counterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 70%",
        },
      });

      counters.current.forEach((counter, i) => {
        const endValue = Number(counter.dataset.value);

        counterTl.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 1.6,
            ease: "power2.out",
            snap: { innerText: 1 },
          },
          i * 0.2,
        );
      });

      /* ===============================
         PIN + SCRUB (DESKTOP ONLY)
      =============================== */
      if (window.innerWidth > 1024) {
        ScrollTrigger.create({
          trigger: section.current,
          start: "top top",
          end: "+=600",
          pin: true,
          scrub: 1,
        });
      }

      /* ===============================
         CARD INTERACTIONS
      =============================== */
      cards.current.forEach((card) => {
        // Desktop hover effects
        if (window.innerWidth > 1024) {
          card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);

            gsap.to(card, {
              rotateX: -(y - rect.height / 2) / 25,
              rotateY: (x - rect.width / 2) / 25,
              duration: 0.3,
              ease: "power3.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.6,
              ease: "power3.out",
            });
          });
        }

        // Mobile tap ripple
        card.addEventListener("click", (e) => {
          const rect = card.getBoundingClientRect();
          const ripple = document.createElement("span");

          ripple.className = "tap-ripple";
          ripple.style.left = `${e.clientX - rect.left}px`;
          ripple.style.top = `${e.clientY - rect.top}px`;

          card.appendChild(ripple);
          setTimeout(() => ripple.remove(), 600);
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative bg-[#0B0B0F] py-24 md:py-40 text-white overflow-hidden"
      id="about"
    >
      <AboutBg />

      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* LEFT CONTENT */}
        <div ref={textBlock} className="space-y-6 md:space-y-8">
          <h2 className="font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl">
            We are not just developers.
            <span className="block text-[#8d0b41]">
              We build digital powerhouses.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
            We partner with ambitious brands to create high-performing digital
            products. From concept to conversion, everything we build is
            engineered for growth.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {[
            { label: "Projects Delivered", value: 120 },
            { label: "Client Satisfaction", value: 98 },
            { label: "Years Experience", value: 5 },
            { label: "Global Clients", value: 40 },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cards.current[i] = el;
              }}
              className="stat-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-xl"
            >
              <h3 className="font-bold text-[#8d0b41] text-4xl sm:text-5xl md:text-6xl">
                <span
                  ref={(el) => {
                    if (el) counters.current[i] = el;
                  }}
                  data-value={item.value}
                >
                  0
                </span>
                {item.label === "Client Satisfaction" ? "%" : "+"}
              </h3>

              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
