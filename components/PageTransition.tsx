"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlay = useRef<HTMLDivElement>(null);
  const path = usePathname();

  useEffect(() => {
    gsap.fromTo(
      overlay.current,
      { y: "100%" },
      { y: "0%", duration: 0.8, ease: "power4.inOut" }
    );

    gsap.to(overlay.current, {
      y: "-100%",
      duration: 0.8,
      delay: 0.8,
      ease: "power4.inOut",
    });
  }, [path]);

  return (
    <>
      <div ref={overlay} className="fixed inset-0 z-[9998] bg-[#0B0B0F]" />
      {children}
    </>
  );
}
