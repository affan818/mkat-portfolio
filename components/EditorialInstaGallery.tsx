"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    img: "/project-1.jpg",
    category: "Real Estate",
    title: "Luxury Property Campaign",
  },
  {
    img: "/project-2.jpg",
    category: "E-commerce",
    title: "Festive Sale Creatives",
  },
  { img: "/project-3.jpg", category: "Branding", title: "Awareness Campaign" },
  {
    img: "/project-4.jpg",
    category: "Performance Ads",
    title: "High CTR Visuals",
  },
  {
    img: "/project-5.jpg",
    category: "Minimal Design",
    title: "Clean Visual Identity",
  },
  {
    img: "/project-6.jpg",
    category: "Social Media",
    title: "Scroll-Stopping Content",
  },
];

export default function EditorialInstaGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".editorial-card").forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => card.classList.add("is-visible"),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="editorial-section" ref={sectionRef} id="work">
      <div className="editorial-wrapper">
        {/* HEADER */}
        <div className="editorial-header">
          <h2>
            Instagram Creatives
            <span>crafted with intent</span>
          </h2>
          <p>
            A curated selection of social media visuals designed to capture
            attention, communicate value, and drive engagement.
          </p>
          <p className="editorial-hint">Scroll to explore the work ↓</p>
        </div>

        {/* GRID */}
        <div className="editorial-grid">
          {posts.map((post, i) => (
            <article className="editorial-card" key={i}>
              <div className="editorial-image reveal-mask">
                <img src={post.img} alt={post.title} />
              </div>

              {/* <div className="editorial-meta">
                <span className="editorial-category">{post.category}</span>
                <h3>{post.title}</h3>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
