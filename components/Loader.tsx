"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
export default function Loader() {
  const loader = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(logo.current, {
      scale: 0.6,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).to(loader.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.5,
    });
  }, []);

  return (
    <div
      ref={loader}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0B0F]"
    >
      <div ref={logo} className="loader-logo">
        <Image
          src="logo.png"
          alt="MKAT Logo"
          width={140}
          height={48}
          priority
        />
      </div>
    </div>
  );
}
