"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

type CaseItem = {
  title: string;
  category: string;
  image: string;
  slug: string;
};

const cases: CaseItem[] = [
  {
    title: "Real Estate Lead Engine",
    category: "Performance Marketing",
    image: "/project-1.jpg",
    slug: "real-estate-digital-marketing-agency",
  },
  {
    title: "E-commerce Revenue Lift",
    category: "Paid Ads + CRO",
    image: "/project-2.jpg",
    slug: "real-estate-developer-digital-marketing",
  },
  {
    title: "Brand Awareness at Scale",
    category: "Social Media",
    image: "/project-3.png",
    slug: "local-business-digital-marketing",
  },
  {
    title: "Always-On Growth System",
    category: "Full Funnel Marketing",
    image: "/project-1.jpg",
    slug: "d2c-ecommerce-website-development",
  },
];

export default function CaseStudyList() {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  const [active, setActive] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  /* PRELOAD IMAGES */
  useEffect(() => {
    cases.forEach((c) => {
      const img = new Image();
      img.src = c.image;
    });
  }, []);

  /* FAST CURSOR FOLLOW */
  useEffect(() => {
    if (!previewRef.current) return;

    xTo.current = gsap.quickTo(previewRef.current, "x", {
      duration: 0.08, // 🔥 faster
      ease: "power3.out",
    });

    yTo.current = gsap.quickTo(previewRef.current, "y", {
      duration: 0.08, // 🔥 faster
      ease: "power3.out",
    });
  }, []);

  const movePreview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    xTo.current?.(e.clientX + 20);
    yTo.current?.(e.clientY + 20);
  };

  return (
    <section className="case-hover-section" id="studies">
      <div className="case-hover-wrapper">
        {/* HEADER */}
        <div className="case-hover-header">
          <h2>
            Case Studies
            <span>selected work & outcomes</span>
          </h2>
          <p>
            Explore our work. Tap to preview on mobile, hover to preview on
            desktop.
          </p>
        </div>

        {/* LIST */}
        <div className="case-hover-list">
          {cases.map((item, i) => (
            <div key={item.slug}>
              <Link
                href={`/case-study/${item.slug}`}
                className="case-hover-item"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onMouseMove={movePreview}
                onClick={(e) => {
                  if (window.innerWidth < 768 && mobileActive !== i) {
                    e.preventDefault();
                    setMobileActive(i);
                  }
                }}
              >
                <span className="case-index">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="case-text">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </Link>

              {/* MOBILE PREVIEW */}
              {mobileActive === i && (
                <div className="case-mobile-preview">
                  <img src={item.image} alt={item.title} draggable={false} />
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="case-mobile-cta"
                  >
                    View case study →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP PREVIEW */}
        <div
          ref={previewRef}
          className={`case-hover-preview ${active !== null ? "visible" : ""}`}
        >
          {active !== null && (
            <img
              src={cases[active].image}
              alt={cases[active].title}
              draggable={false}
            />
          )}
        </div>
      </div>
    </section>
  );
}
