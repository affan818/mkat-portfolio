"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
<<<<<<< HEAD
  { name: "Client One", logo: "clients/client-1.jpg" },
  { name: "Client Two", logo: "clients/client-2.jpg" },
  { name: "Client Three", logo: "clients/client-3.jpg" },
  { name: "Client Four", logo: "clients/client-4.jpg" },
  { name: "Client Five", logo: "clients/client-5.jpg" },
  { name: "Client Six", logo: "clients/client-6.jpg" },
  { name: "Client Seven", logo: "clients/client-7.jpg" },
  { name: "Client Eight", logo: "clients/client-8.jpg" },
  { name: "Client Nine", logo: "clients/client-9.jpg" },
  { name: "Client Ten", logo: "clients/client-10.jpg" },
  { name: "Client Eleven", logo: "clients/client-11.jpg" },
  { name: "Client twelve", logo: "clients/client-12.jpg" },
  { name: "Client thirteen", logo: "clients/client-13.jpg" },
  { name: "Client Fourteen", logo: "clients/client-14.jpg" },
=======
  { name: "Client One", logo: "clients/client-1.png" },
  { name: "Client Two", logo: "clients/client-2.png" },
  { name: "Client Three", logo: "clients/client-3.png" },
  { name: "Client Four", logo: "clients/client-4.png" },
  { name: "Client Five", logo: "clients/client-5.png" },
  { name: "Client Six", logo: "clients/client-6.png" },
>>>>>>> e698cd326e9f868d3d208a5b9da5faf278f2c9f7
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
        duration: 60,
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
            With <span>experience</span> across various industries
          </h2>
          <p>We help you build a digital presence that lasts and performs.</p>
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
