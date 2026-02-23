"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

type CaseItem = {
  title: string;
  category: string;
  image: string;
  slug: string;
};

// 🔥 BASE PATH (important for live)
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const cases: CaseItem[] = [
  {
    title: "Real Estate Lead Engine",
    category: "Paid Ads + Social media",
    image: "creatives/1.png",
    slug: "real-estate-digital-marketing-agency",
  },
  {
    title: "Real Estate Developer Build Brand Authority ",
    category: "Website + SEO",
    image: "creatives/7.png",
    slug: "real-estate-developer-digital-marketing",
  },
  {
    title: "Brand Awareness at Scale",
    category: "Social Media + Paid Ads",
    image: "creatives/4.png",
    slug: "local-business-digital-marketing",
  },
  {
    title: "Always-On Growth System",
    category: "Full Funnel Marketing",
    image: "creatives/12.png",
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
      duration: 0.08,
      ease: "power3.out",
    });

    yTo.current = gsap.quickTo(previewRef.current, "y", {
      duration: 0.08,
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
          <h2 className="fancy-heading">
            Case <span>Studies</span>
          </h2>
          <p>
            See what we did and how it worked for us. And how every campaign
            tells a story of clarity, strategy, and growth.
          </p>
        </div>

        {/* LIST */}
        <div className="case-hover-list">
          {cases.map((item, i) => {
            const href = `${BASE_PATH}/case-study/${item.slug}/`;

            return (
              <div key={item.slug}>
                {/* DESKTOP + MOBILE MAIN LINK */}
                <a
                  href={href}
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
                </a>

                {/* MOBILE PREVIEW */}
                {mobileActive === i && (
                  <div className="case-mobile-preview">
                    <img src={item.image} alt={item.title} draggable={false} />
                    <a href={href} className="case-mobile-cta">
                      View case study →
                    </a>
                  </div>
                )}
              </div>
            );
          })}
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
