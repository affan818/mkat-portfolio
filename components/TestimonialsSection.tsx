"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Working with this team completely changed how we approach digital growth. Clear strategy, strong execution, and real results.",
    name: "Rahul Mehta",
    role: "Founder",
    company: "D2C Brand",
  },
  {
    quote:
      "They don’t just deliver creatives — they understand business. Our leads and conversions improved significantly.",
    name: "Ayesha Khan",
    role: "Marketing Head",
    company: "Real Estate Group",
  },
  {
    quote:
      "Professional, responsive, and performance-focused. Easily one of the best agency partnerships we’ve had.",
    name: "Siddharth Jain",
    role: "Co-founder",
    company: "E-commerce Startup",
  },
  {
    quote:
      "Their attention to detail and data-driven approach helped us scale campaigns without wasting budget.",
    name: "Neha Verma",
    role: "Growth Manager",
    company: "SaaS Company",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".testimonial-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-wrapper">
        {/* HEADER */}
        <div className="testimonials-header">
          <h2>
            Testimonials
            <span>what our clients say</span>
          </h2>
          <p>
            We build long-term partnerships by focusing on outcomes,
            transparency, and trust.
          </p>
        </div>

        {/* GRID */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-quote">“{t.quote}”</p>

              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
