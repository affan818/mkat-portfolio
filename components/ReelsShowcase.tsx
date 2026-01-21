"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const reels = [
  { video: "/reels/1.mp4", title: "Real Estate Reel" },
  { video: "/reels/2.mp4", title: "Brand Awareness Reel" },
  { video: "/reels/3.mp4", title: "E-commerce Reel" },
  { video: "/reels/4.mp4", title: "High CTR Reel" },
];

export default function ReelsShowcase() {
  const bg1 = useRef<HTMLDivElement>(null);
  const bg2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(bg1.current, {
      x: 120,
      y: -80,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(bg2.current, {
      x: -100,
      y: 100,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="reels-section">
      {/* Animated Background */}
      <div className="reels-bg">
        <div ref={bg1} className="reels-blob blob-one" />
        <div ref={bg2} className="reels-blob blob-two" />
      </div>

      <div className="reels-wrapper">
        {/* Heading */}
        <div className="reels-header">
          <h2>
            Instagram Reels
            <span>designed to perform</span>
          </h2>
          <p>
            Short-form videos crafted to capture attention, boost reach, and
            drive real engagement.
          </p>
        </div>

        {/* Reels */}
        <div className="reels-track">
          {reels.map((reel, i) => (
            <div className="reel-card" key={i}>
              <video
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => {
                  const video = e.currentTarget;
                  const playPromise = video.play();
                  if (playPromise !== undefined) {
                    playPromise.catch(() => {});
                  }
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget;
                  video.pause();
                }}
              >
                <source src={reel.video} type="video/mp4" />
              </video>

              <span className="reel-title">{reel.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
