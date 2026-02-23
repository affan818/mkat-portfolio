"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    img: "creatives/1.png",
    category: "E-commerce",
    title: "Festive Sale Creatives",
  },
  {
    img: "creatives/2.png",
    category: "Branding",
    title: "Awareness Campaign",
  },
  {
    img: "creatives/3.png",
    category: "Performance Ads",
    title: "High CTR Visuals",
  },
  {
    img: "creatives/4.png",
    category: "Minimal Design",
    title: "Clean Visual Identity",
  },
  {
    img: "creatives/5.png",
    category: "Social Media",
    title: "Scroll-Stopping Content",
  },
  {
    img: "creatives/6.png",
    category: "Social Media",
    title: "Scroll-Stopping Content",
  },
  {
    img: "creatives/10.png",
    category: "Social Media",
    title: "Scroll-Stopping Content",
  },
  {
    img: "creatives/11.png",
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
            What we <span>create</span> for Instagram
          </h2>
          <p>
            Built to catch the eye, communicate clearly, and get people to
            respond
          </p>
          <p className="editorial-hint">Scroll to explore ↓</p>
        </div>

        {/* GRID */}
        <div className="editorial-grid">
          {posts.map((post, i) => (
            <article className="editorial-card" key={i}>
              <div className="editorial-image reveal-mask">
                <img src={post.img} alt={post.title} loading="lazy" />
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
