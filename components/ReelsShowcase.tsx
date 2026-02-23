"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const reels = [
  {
    video: "https://mkatbrandworks.com/reels/sg-2.mp4",
    title: "Real Estate Reel",
  },

  {
    video: "https://mkatbrandworks.com/reels/ashiesh.mp4",
    title: "High CTR Reel",
  },
  {
    video: "https://mkatbrandworks.com/reels/infra-1.mp4",
    title: "Ad Specific",
  },
  {
    video: "https://mkatbrandworks.com/reels/Dermys.mp4",
    title: "High Engagement",
  },
  {
    video: "https://mkatbrandworks.com/reels/gc-2.mp4",
    title: "Ad Specific",
  },
  {
    video: "https://mkatbrandworks.com/reels/sg-3.mp4",
    title: "Real Estate Reel",
  },
  {
    video: "https://mkatbrandworks.com/reels/Gc-1.mp4",
    title: "Brand Awareness Reel",
  },

  {
    video: "https://mkatbrandworks.com/reels/solar.mp4",
    title: "Local Solar Benefits",
  },
  {
    video: "https://mkatbrandworks.com/reels/sg-1.mp4",
    title: "Location Hotspot",
  },
];

export default function ReelsShowcase() {
  const bg1 = useRef<HTMLDivElement>(null);
  const bg2 = useRef<HTMLDivElement>(null);
  const activeVideoRef = useRef<HTMLVideoElement | null>(null);

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

  // ▶ Play only one video at a time
  const handlePlay = (video: HTMLVideoElement) => {
    // Pause previous (but DO NOT reset time)
    if (activeVideoRef.current && activeVideoRef.current !== video) {
      activeVideoRef.current.pause();
    }

    activeVideoRef.current = video;
    video.play().catch(() => {});
  };

  const handlePause = (video: HTMLVideoElement) => {
    video.pause();
  };

  return (
    <section className="reels-section">
      <div className="reels-bg">
        <div ref={bg1} className="reels-blob blob-one" />
        <div ref={bg2} className="reels-blob blob-two" />
      </div>

      <div className="reels-wrapper">
        <div className="reels-header">
          <h2>
            With <span>experience</span> across various industries
          </h2>
          <p>We help you build a digital presence that lasts and performs</p>
        </div>

        <div className="reels-track">
          {reels.map((reel, i) => (
            <div className="reel-card" key={i}>
              <video
                key={i}
                loop
                playsInline
                preload="none"
                onMouseEnter={(e) => handlePlay(e.currentTarget)}
                onMouseLeave={(e) => handlePause(e.currentTarget)}
                onClick={(e) => handlePlay(e.currentTarget)} // mobile
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
