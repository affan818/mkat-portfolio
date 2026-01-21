"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".cta-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  useEffect(() => {
    if (!modalRef.current) return;

    if (open) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }
  }, [open]);

  return (
    <>
      {/* CTA SECTION */}
      <section className="cta-popup" ref={sectionRef} id="contact">
        <div className="cta-popup-wrapper">
          <h2 className="cta-animate">
            Let’s build something
            <span>that actually works.</span>
          </h2>

          <p className="cta-animate">
            Tell us about your project and we’ll get back with clarity, not
            fluff.
          </p>

          <button className="cta-btn cta-animate" onClick={() => setOpen(true)}>
            Start a conversation
          </button>
        </div>
      </section>

      {/* POPUP FORM */}
      {open && (
        <div className="cta-modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="cta-modal"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cta-close" onClick={() => setOpen(false)}>
              ×
            </button>

            <h3>Tell us about your project</h3>

            <form className="cta-form">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Email address" required />
              <textarea
                placeholder="What are you looking to build?"
                rows={4}
                required
              />
              <button type="submit">Send inquiry</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
