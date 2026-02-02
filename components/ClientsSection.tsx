"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "Client One", logo: "clients/client-1.png" },
  { name: "Client Two", logo: "clients/client-2.png" },
  { name: "Client Three", logo: "clients/client-3.png" },
  { name: "Client Four", logo: "clients/client-4.png" },
  { name: "Client Five", logo: "clients/client-5.png" },
  { name: "Client Six", logo: "clients/client-6.png" },
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth / 2;

      gsap.set(track, { x: 0 });
      track.addEventListener("touchstart", () => gsap.globalTimeline.pause());
      track.addEventListener("touchend", () => gsap.globalTimeline.resume());

      gsap.to(track, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const parsed = parseFloat(x);
            return `${parsed % -totalWidth}px`;
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="clients-section" ref={sectionRef}>
      <div className="clients-wrapper">
        {/* HEADER */}
        <div className="clients-header">
          <h2>
            Trusted by
            <span>brands worldwide</span>
          </h2>
          <p>
            We collaborate with ambitious brands across industries to build
            digital experiences that perform and scale.
          </p>
        </div>

        {/* LOGOS */}
        <div className="clients-marquee">
          <div className="marquee-track" ref={trackRef}>
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div className="client-logo" key={i}>
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
