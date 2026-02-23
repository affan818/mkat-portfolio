"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLSpanElement>(null);
  const bottom = useRef<HTMLSpanElement>(null);

  const [open, setOpen] = useState(false);

  // 🔥 BASE PATH (important for live)
  const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  // Navbar entrance
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  // Toggle animation
  useEffect(() => {
    if (open) {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.6,
        ease: "power4.out",
      });
      gsap.to(top.current, { rotate: 45, y: 6, duration: 0.3 });
      gsap.to(bottom.current, { rotate: -45, y: -6, duration: 0.3 });
    } else {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(top.current, { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(bottom.current, { rotate: 0, y: 0, duration: 0.3 });
    }
  }, [open]);

  return (
    <>
      <header ref={navRef} className="nav-wrapper">
        <nav className="nav-inner">
          <Link href="/" className="logo">
            <Image
<<<<<<< HEAD
              src={`${BASE_PATH}/logo.png`}
=======
              src="logo.png"
>>>>>>> e698cd326e9f868d3d208a5b9da5faf278f2c9f7
              alt="Your Brand Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <div className="nav-links">
            <a href={`${BASE_PATH}/`}>Home</a>
            <a href={`${BASE_PATH}/#about`}>About</a>
            <a href={`${BASE_PATH}/#work`}>Our Creatives</a>
            <a href={`${BASE_PATH}/#studies`}>Case Studies</a>
            <a href={`${BASE_PATH}/#contact`}>Contact</a>
          </div>

          {/* Mobile toggle */}
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span ref={top} />
            <span ref={bottom} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div ref={menuRef} className="mobile-panel">
        <a onClick={() => setOpen(false)} href="#">
          Home
        </a>
        <a onClick={() => setOpen(false)} href="#about">
          About
        </a>
        <a onClick={() => setOpen(false)} href="#work">
          Our Creatives
        </a>
        <a href="#studies" onClick={() => setOpen(false)}>
          Case Studies
        </a>
        <a onClick={() => setOpen(false)} href="#contact">
          Contact
        </a>
      </div>
    </>
  );
}
