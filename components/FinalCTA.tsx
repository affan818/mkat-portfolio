"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    business: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        {
          name: form.name,
          phone: form.phone,
          city: form.city,
          business: form.business,
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY!,
      );

      setSuccess(true);
    } catch (error) {
      console.log(error);
      alert("Failed to send");
    }
  };

  useEffect(() => {
    if (!success || !successRef.current) return;

    gsap.fromTo(
      successRef.current,
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
    );

    // auto close modal
    const t = setTimeout(() => {
      setOpen(false);
      setSuccess(false);
      setForm({ name: "", phone: "", city: "", business: "" });
    }, 2500);

    return () => clearTimeout(t);
  }, [success]);

  // CTA scroll animation
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

  // modal open animation
  useEffect(() => {
    if (!modalRef.current || !open) return;

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
    );
  }, [open]);

  return (
    <>
      {/* CTA SECTION */}
      <section className="cta-popup" ref={sectionRef} id="contact">
        <div className="cta-popup-wrapper">
          <h2 className="cta-animate">
            Let’s build something <span>that actually works.</span>
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

      {/* POPUP */}
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

            {!success ? (
              <form className="cta-form" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="business"
                  placeholder="What business do you run?"
                  rows={4}
                  value={form.business}
                  onChange={handleChange}
                  required
                />

                <button type="submit">Send inquiry</button>
              </form>
            ) : (
              <div
                ref={successRef}
                className="flex flex-col items-center text-center gap-3 py-10"
              >
                <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-semibold">Inquiry Sent</h3>
                <p className="text-sm opacity-70">
                  We’ll contact you shortly via email.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
