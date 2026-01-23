"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import AuthorityStack from "./AuthorityStack";
export default function SGrealty() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".cs-intro-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#0B0B0F] text-white">
      <section className="min-h-screen flex items-center px-6 md:px-12 bg-[#0B0B0F] overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="reveal max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#8d0b41]">
              Case Study
            </span>

            <h1 className="mt-6 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-tight">
              Real Estate Developer
              <br />
              <span className="text-[#8d0b41]">Digital Marketing</span> Case
              Study
            </h1>

            <p className="mt-6 text-gray-400">
              This real estate developer digital marketing case study explains
              how a Nagpur-based developer strengthened brand authority, organic
              visibility, and long-term digital presence using SEO, social media
              marketing, and content-led branding.
            </p>
          </div>

          {/* RIGHT – AUTHORITY STACK */}
          <AuthorityStack />
        </div>
      </section>
      {/* CLIENT PROFILE */}
      <section className="relative px-6 md:px-12 py-28">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT – CONTENT */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              About the Client
            </span>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Real Estate Developer
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our client is an experienced real estate developer based in
              Nagpur, Maharashtra. The brand develops plotted layouts, farm
              projects, residential homes, and apartments, catering to buyers
              seeking both lifestyle value and long-term investment
              opportunities.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Backed by senior-level experience in real estate development, the
              team brings strong on-ground credibility and deep market
              understanding. However, their digital presence did not reflect the
              scale, professionalism, or maturity of the brand.
            </p>
          </div>

          {/* RIGHT – BRAND SNAPSHOT */}
          <div className="relative grid grid-cols-1 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-sm text-gray-400">Location</p>
              <p className="mt-1 text-lg font-medium">Nagpur, Maharashtra</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-sm text-gray-400">Property Segments</p>
              <p className="mt-1 text-lg font-medium">
                Plotted layouts, farm projects, residential homes & apartments
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-sm text-gray-400">Brand Reality</p>
              <p className="mt-1 text-lg font-medium">
                Strong offline credibility, underdeveloped digital presence
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CHALLENGES */}
      <section className="relative px-6 md:px-12 py-28 bg-black/30">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT – HEADING + CONTEXT */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Challenges
            </span>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Challenges Faced by a Real Estate Developer
              <br />
              Before Digital Marketing
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Before partnering with{" "}
              <b>
                <a
                  className="text-white"
                  href="https://mkatbrandworks.com/index.html"
                >
                  MKAT Brandworks,
                </a>
              </b>{" "}
              Our client faced several digital limitations:
            </p>

            <p className="text-gray-400 leading-relaxed">
              The client was not inclined toward paid advertising and relied
              heavily on channel partners for sales. Their core requirement was
              long-term brand positioning, credibility, and organic visibility,
              not short-term lead spikes.
            </p>
          </div>

          {/* RIGHT – LIST (CONTENT SAME) */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-gray-300">
                No strong or consistent brand identity online
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-gray-300">
                Absence of a professional website to showcase multiple projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-gray-300">
                Very basic social media presence with low engagement
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-gray-300">
                No structured SEO strategy for organic discovery
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-gray-300">
                Limited visibility for developer-related searches in Nagpur and
                Maharashtra
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES & EXPECTATIONS */}
      <section className="relative px-6 md:px-12 py-28">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT – CONTEXT */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Objectives & Expectations
            </span>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Objectives & Expectations
            </h2>

            <p className="text-gray-400 leading-relaxed">
              There were no numeric targets. The client expected visible
              progress within 3 to 5 months, focused on quality rather than
              volume.
            </p>
          </div>

          {/* RIGHT – OBJECTIVES LIST (UNCHANGED CONTENT) */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#8d0b41]" />
              <p className="text-gray-300">
                Build a professional, scalable website for a real estate
                developer
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#8d0b41]" />
              <p className="text-gray-300">
                Establish a strong brand presence on social media
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#8d0b41]" />
              <p className="text-gray-300">
                Implement SEO for long-term organic growth
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#8d0b41]" />
              <p className="text-gray-300">
                Position the business as a credible and future-ready developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY – STATEMENT STYLE */}
      <section className="relative px-6 md:px-12 py-32 bg-black/30">
        <div className="mx-auto max-w-4xl text-center space-y-10">
          {/* LABEL */}
          <span className="inline-block text-xs tracking-widest uppercase text-[#8d0b41]">
            Strategy
          </span>

          {/* HEADING */}
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-tight">
            Strategy by MKAT Brandworks
            <br />
            SEO, Branding & Visibility
          </h2>

          {/* DIVIDER */}
          <div className="mx-auto h-px w-24 bg-[#8d0b41]/60" />

          {/* CONTENT (UNCHANGED) */}
          <p className="mx-auto max-w-2xl text-gray-300 leading-relaxed text-lg">
            We implemented a brand-first digital strategy, where SEO, content,
            and social media supported each other.
          </p>
        </div>
      </section>

      {/* WEBSITE & SEO */}
      <section className="relative px-6 md:px-12 py-32">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* HEADER */}
          <div className="max-w-3xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Website & SEO
            </span>

            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-tight">
              Website Development & SEO for Real Estate Developers
            </h2>

            <p className="text-gray-400 leading-relaxed">
              SEO was a core pillar of the strategy, not an afterthought.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* LEFT – APPROACH */}
            <div className="space-y-10">
              {/* APPROACH INTRO */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Our approach included:
                </p>

                <div className="space-y-3">
                  <p className="text-gray-300">
                    Designing and developing a clean, professional website
                    aligned with developer search intent
                  </p>
                  <p className="text-gray-300">
                    Structuring the site to support multiple verticals:
                  </p>
                </div>
              </div>

              {/* VERTICALS */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Plotted layouts",
                  "Farm projects",
                  "Residential homes",
                  "Apartments",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* ON-PAGE SEO */}
              <div className="space-y-4">
                <p className="text-gray-300">
                  Implementing on-page SEO fundamentals:
                </p>

                <div className="space-y-2 pl-4 border-l border-white/10">
                  <p className="text-gray-300">Proper heading hierarchy</p>
                  <p className="text-gray-300">Clean URL structure</p>
                  <p className="text-gray-300">
                    Internal linking across project pages
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Optimising content for{" "}
                  <b>
                    <a
                      className="text-white"
                      href="https://mkatbrandworks.com/seo.html"
                    >
                      Nagpur and Maharashtra-based real estate searches
                    </a>
                  </b>
                </p>
              </div>
            </div>

            {/* RIGHT – RESULTS */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 space-y-6">
              <h3 className="text-xl font-semibold">SEO Results Achieved</h3>

              <div className="space-y-4">
                <p className="text-gray-300">
                  Multiple relevant keywords ranking on Page 1 and Page 2
                </p>
                <p className="text-gray-300">
                  Steady improvement in organic visibility for developer-focused
                  searches
                </p>
                <p className="text-gray-300">
                  Stronger discoverability without dependence on paid ads
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  This helped our client build organic authority as a real
                  estate developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA & CONTENT */}
      <section className="relative px-6 md:px-12 py-32 bg-black/30">
        <div className="mx-auto max-w-6xl space-y-24">
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Social Media & Content
            </span>

            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-tight">
              Real Estate Social Media Marketing Strategy
            </h2>
          </div>

          {/* SOCIAL MEDIA STRATEGY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* LEFT – STRATEGY TEXT */}
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                We rebuilt our client&apos;s social presence with a storytelling
                and brand positioning approach, not generic posting.
              </p>

              <p>Key focus areas included:</p>

              <div className="space-y-2 pl-4 border-l border-white/10">
                <p>Consistent visual identity and premium graphic design</p>
                <p>
                  Content explaining{" "}
                  <b>
                    <a
                      className="text-white"
                      href="https://mkatbrandworks.com/social-media.html"
                    >
                      real estate investment benefits
                    </a>
                  </b>{" "}
                </p>
                <p>Project-specific communication across:</p>
              </div>
            </div>

            {/* RIGHT – PROJECT GROUPING */}
            <div className="grid grid-cols-1 gap-4">
              {[
                "SG Estate Phase 1, 2, and 3 (Phase 3 nearly sold out)",
                "SG Farms Phase 1 and 2",
                "SG Homes",
                "SG Apartments",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT AUTHORITY */}
      <section className="relative px-6 md:px-12 py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* LEFT – STORY */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Content & Authority
            </span>

            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-tight">
              Real Estate Content Marketing & <br />
              Local Authority Building
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Content played a major role in brand credibility.
            </p>

            <p className="text-gray-400 leading-relaxed">
              This positioned the client as a knowledge-driven real estate
              developer, not just a project promoter.
            </p>
          </div>

          {/* RIGHT – AUTHORITY TOPICS */}
          <div className="space-y-8">
            <p className="text-gray-300">
              We created and published content around:
            </p>

            <div className="space-y-4">
              {[
                "Infrastructure and development growth in Nagpur",
                "Importance of emerging corridors such as Wardha Road",
                "Long-term investment narratives aligned with city expansion",
                "Market education rather than hard selling",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* EXECUTION WITH CREATIVES */}
      <section className="relative px-6 md:px-12 py-32 bg-black/30">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* LEFT – CONTENT (UNCHANGED) */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Execution
            </span>

            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-tight">
              Execution Across Multiple Projects
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our Client operates multiple large-scale projects simultaneously.
              Our execution supported all developments through:
            </p>

            <div className="space-y-2 pl-4 border-l border-white/10 text-gray-300">
              <p>Image posts</p>
              <p>Carousel posts</p>
              <p>Reels</p>
              <p>Informational creatives</p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Even without running ads, continuous creative testing helped
              improve engagement quality and overall brand perception.
            </p>
          </div>

          {/* RIGHT – CREATIVE SHOWCASE */}
          <div className="grid grid-cols-2 gap-6">
            {/* Creative 1 */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/creative-1.jpg"
                alt="SG Realty Creative"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Creative 2 */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/creative-2.jpg"
                alt="SG Realty Creative"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="relative px-6 md:px-12 py-32 bg-black/30">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Results
            </span>

            <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
              Results – Real Estate Branding & SEO Success Story
            </h2>
          </div>

          {/* RESULTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* LEFT – ORGANIC VISIBILITY */}
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
              <h3 className="text-xl font-semibold">
                Organic Visibility & Brand Growth
              </h3>

              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Improved organic visibility for real estate developer searches
                </p>
                <p>Better brand recall across Nagpur and Maharashtra</p>
                <p>Increased confidence among buyers and channel partners</p>
                <p>
                  Professional digital presence aligned with developer
                  credibility
                </p>
              </div>
            </div>

            {/* RIGHT – IMPACT BEYOND METRICS */}
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
              <h3 className="text-xl font-semibold">Impact Beyond Metrics</h3>

              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>Stronger positioning as a serious, long-term developer</p>
                <p>
                  Digital assets that support sales conversations and channel
                  partners
                </p>
                <p>
                  Scalable foundation ready for future performance marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CLIENT RELATIONSHIP */}
      <section className="relative px-6 md:px-12 py-28">
        <div className="mx-auto max-w-4xl text-center space-y-10">
          {/* LABEL */}
          <span className="inline-block text-xs tracking-widest uppercase text-[#8d0b41]">
            Client Relationship
          </span>

          {/* HEADING */}
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
            A Long-Term Strategic Partnership
          </h2>

          {/* CONTENT (UNCHANGED) */}
          <p className="text-gray-400 leading-relaxed text-lg">
            The Developer has been working with MKAT Brandworks for over a year.
            The client values the structured execution, SEO-driven thinking, and
            long-term brand vision and continues the collaboration for sustained
            growth.
          </p>

          {/* SUBTLE DIVIDER */}
          <div className="mx-auto h-px w-24 bg-white/10" />

          {/* PARTNERSHIP TAG */}
          <p className="text-sm text-gray-500">
            Ongoing collaboration focused on sustainable digital growth
          </p>
        </div>
      </section>

      {/* FINAL INSIGHT */}
      <section className="relative px-6 md:px-12 py-36 bg-black/40 overflow-hidden">
        {/* subtle ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d0b41]/20 blur-[200px]" />

        <div className="relative mx-auto max-w-5xl text-center space-y-20">
          {/* HEADER */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Why This Case Study Matters
            </span>

            <h2 className="text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-tight">
              Why This Case Study Matters for
              <br />
              Real Estate Developers
            </h2>
          </div>

          {/* INSIGHT BLOCKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            {/* KEY INSIGHT */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-wide text-white">
                Key Insight
              </h3>

              <div className="h-px w-16 bg-[#8d0b41]" />

              <p className="text-gray-300 leading-relaxed text-lg">
                For real estate developers,{" "}
                <b>
                  <a
                    className="text-white"
                    href="https://mkatbrandworks.com/index.html"
                  >
                    SEO and brand trust compound over time
                  </a>
                </b>
                . Visibility, authority, and consistency matter more than
                instant lead volume.
              </p>
            </div>

            {/* WHY MKAT */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-wide text-white">
                Why MKAT Brandworks Succeeded
              </h3>

              <div className="h-px w-16 bg-[#8d0b41]" />

              <p className="text-gray-300 leading-relaxed text-lg">
                We aligned strategy with the client&apos;s mindset. By combining
                SEO for real estate developers, social media marketing, and
                content-led branding, we helped the client
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
