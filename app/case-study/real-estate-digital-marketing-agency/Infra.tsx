"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../case-study.css";
gsap.registerPlugin(ScrollTrigger);
import GrowthGraph from "./GrowthGraph";
export default function Infra() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          },
        );
      });

      gsap.to("#progress", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          scrub: true,
          start: "top top",
          end: "bottom bottom",
        },
      });
    });

    return () => ctx.revert(); // 🔥 THIS LINE FIXES EVERYTHING
  }, []);

  return (
    <main className="bg-[#0B0B0F] text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-4xl reveal">
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-tight">
              Solving Real Estate Lead Generation with{" "}
              <span className="text-[#8d0b41]">Digital Marketing</span>
            </h1>

            <p className="mt-6 text-gray-400 max-w-xl">
              This case study shows how a real estate digital marketing agency
              helped a local brokerage scale lead generation, brand trust, and
              organic visibility using a full-funnel strategy built on Meta ads,
              SEO, and local optimization.
            </p>
          </div>

          {/* RIGHT GRAPH */}
          <div className="relative hidden md:block reveal">
            <GrowthGraph />

            {/* label */}
            <div className="absolute bottom-6 left-6 text-lg text-gray-300">
              Upward journey : The Saga Continues
            </div>

            {/* glow */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[#8d0b41]/20 blur-[140px]" />
          </div>
        </div>
      </section>

      {/* STICKY META */}
      <section className="sticky top-[var(--nav-height)] z-30 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Client</span>
            <p>Broker & Consultant</p>
          </div>
          <div>
            <span className="text-gray-500">Industry</span>
            <p>Real Estate</p>
          </div>
          <div>
            <span className="text-gray-500">Services</span>
            <p>Meta Ads, SEO, Local Optimization</p>
          </div>
          <div>
            <span className="text-gray-500">Location</span>
            <p>Amravati, Maharashtra</p>
          </div>
        </div>

        <div className="h-[2px] bg-white/10">
          <div id="progress" className="h-full w-0 bg-[#8d0b41]" />
        </div>
      </section>

      {/* ABOUT CLIENT */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-4xl reveal">
          <h2 className="text-2xl font-semibold mb-4">About the Client</h2>

          <p className="text-gray-400 leading-relaxed">
            Our Client is a real estate brokerage based in Amravati,
            Maharashtra, operating since 2011. The business deals in residential
            plots, commercial properties, agricultural land, and plotted
            developments. While the brand had strong offline credibility, its
            digital presence did not reflect its market standing.
          </p>
        </div>
      </section>
      {/* VISUAL BREAK / SHOWCASE */}
      <section className="px-6 md:px-12 bg-[#0B0B0F]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div className="reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Visual Context
            </span>

            <h3 className="mt-4 text-3xl font-semibold leading-snug">
              Building trust visually
              <br />
              before asking for enquiries
            </h3>

            <p className="mt-4 text-gray-400 max-w-md">
              Every visual touchpoint was designed to signal credibility,
              clarity, and local relevance before driving users into lead forms.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4 reveal">
            <div className="aspect-[4/5] rounded-xl bg-gray-800 overflow-hidden" />
            <div className="aspect-[4/5] rounded-xl bg-gray-700 overflow-hidden translate-y-10 md:translate-y-16" />
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="px-6 md:px-12 py-24 bg-[#0F0F14]">
        <div className="max-w-4xl reveal">
          <h2 className="text-2xl font-semibold mb-6">
            Challenges Faced by a Real Estate Business Before Digital Marketing
          </h2>

          <div className="space-y-4 mt-10">
            {[
              "Low-quality leads from boosted posts with no targeting or funnel logic",
              "No website to capture, educate, or convert traffic",
              "Weak local SEO performance with poor Google Business visibility",
              "Inconsistent brand identity and low online trust signals",
            ].map((item, i) => (
              <div
                key={i}
                className="reveal group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-[#8d0b41]/40"
              >
                {/* Accent line */}
                <span className="absolute left-0 top-0 h-full w-[3px] bg-[#8d0b41] opacity-0 transition group-hover:opacity-100" />

                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-500">
            The client clearly stated their priority on the first call:{" "}
            <b>
              {" "}
              <a className="text-white" href="https://mkatbrandworks.com/">
                long-term SEO growth,
              </a>
            </b>{" "}
            local visibility, and sustainable lead generation, not short-term
            hacks.
          </p>
        </div>
      </section>
      {/* stretgy  */}
      {/* STRATEGY SECTION */}
      <section className="px-6 md:px-12 py-32 bg-[#0F0F14]">
        <div className="max-w-6xl mx-auto">
          {/* SECTION HEADER */}
          <div className="max-w-3xl reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Strategy
            </span>

            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Strategy by MKAT Brandworks - <br />
              Real Estate Lead Generation & Branding
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl">
              We designed a connected digital ecosystem rather than isolated
              campaigns. The approach focused on building authority first, then
              scaling demand.
            </p>
          </div>

          {/* STRATEGY GRID */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LEFT: FOUNDATION */}
            <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-6">
                Website Development & <br /> SEO Foundation
              </h3>

              <div className="space-y-4">
                {[
                  "Designed and developed a clean, SEO-friendly website from scratch",
                  "Implemented location-intent keywords aligned with Amravati search demand",
                  "Structured pages for scalability and future campaigns",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-lg border border-white/10 px-5 py-4 transition hover:border-[#8d0b41]/40"
                  >
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-[#8d0b41] opacity-0 transition group-hover:opacity-100" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER: VISUAL DIVIDER / FLOW */}
            <div className="reveal hidden md:flex flex-col items-center justify-center">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-[#8d0b41]/50 to-transparent" />
              <span className="mt-6 text-xs uppercase tracking-widest text-gray-500">
                Execution Flow
              </span>
            </div>

            {/* RIGHT: OUTCOME */}
            <div className="reveal rounded-2xl border border-[#8d0b41]/30 bg-[#8d0b41]/10 p-8">
              <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
                Outcome
              </span>

              <h3 className="mt-4 text-2xl font-semibold leading-snug">
                SEO authority translated <br /> into measurable visibility
              </h3>

              <p className="mt-6 text-gray-200 leading-relaxed">
                Multiple keywords moved to Page 1, with 2–3 keywords holding #1
                and #2 positions, while others climbed into the top 20–30.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO & GOOGLE BUSINESS */}
      <section className="px-6 md:px-12 py-32 bg-[#0B0B0F]">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="max-w-3xl reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Local SEO
            </span>

            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              SEO & Google Business Profile <br />
              Optimization for Real Estate
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl">
              Local visibility was treated as a primary growth channel, not a
              support activity. The focus was on accuracy, relevance, and
              consistency across Google surfaces.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT: ACTIONS */}
            <div className="space-y-6 reveal">
              {[
                "Corrected categories, services, and content on Google Business Profile",
                "Improved local relevance with consistent updates and media",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-6 transition hover:border-[#8d0b41]/40"
                >
                  {/* Accent indicator */}
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-[#8d0b41] opacity-0 transition group-hover:opacity-100" />

                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* RIGHT: OUTCOME CARD */}
            <a href="https://mkatbrandworks.com/seo.html">
              <div className="reveal relative rounded-2xl border border-[#8d0b41]/40 bg-gradient-to-br from-[#8d0b41]/20 to-transparent p-10">
                <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
                  Outcome
                </span>
                <h3 className="mt-4 text-4xl font-semibold text-white">100+</h3>

                <p className="mt-2 text-lg text-gray-200">
                  organic calls every month
                </p>

                <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
                  Generated purely via Google Business Profile, without any paid
                  promotion.
                </p>

                {/* subtle glow */}
                <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-[#8d0b41]/10 blur-3xl opacity-40" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* META ADS STRATEGY */}
      <section className="px-6 md:px-12 py-32 bg-[#0F0F14]">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="max-w-3xl reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Paid Media
            </span>

            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Meta Ads for Real Estate <br />
              Lead Generation Approach
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl">
              Boosted posts were replaced with a structured performance system
              designed to generate high-intent leads and enable faster, more
              effective sales follow-ups.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* LEFT: STRATEGY STEPS */}
            <div className="md:col-span-2 space-y-5 reveal">
              {[
                "Replaced boosted posts with structured lead generation campaigns",
                "Used instant lead forms as the primary funnel for faster sales follow-ups",
                "Location targeting across Amravati and nearby regions (including project-specific areas)",
                "Buyer-focused targeting for age group 26–50+",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-[#8d0b41]/40"
                >
                  {/* Step indicator */}
                  <span className="absolute right-4 top-4 text-xs text-gray-500">
                    Step {i + 1}
                  </span>

                  {/* Accent bar */}
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-[#8d0b41] opacity-0 transition group-hover:opacity-100" />

                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* RIGHT: OUTCOME */}
            <div className="reveal relative rounded-2xl border border-[#8d0b41]/40 bg-gradient-to-br from-[#8d0b41]/20 to-transparent p-8">
              <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
                Outcome
              </span>

              <h3 className="mt-6 text-xl font-semibold leading-snug">
                Predictable lead flow <br /> with strong buyer intent
              </h3>

              <p className="mt-6 text-gray-300 leading-relaxed">
                Stable lead flow with strong intent and manageable follow-ups
                for the sales team.
              </p>

              {/* subtle glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-[#8d0b41]/10 blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* LOCALISED CONTENT STRATEGY */}
      <section className="px-6 md:px-12 py-32 bg-[#0B0B0F]">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="max-w-3xl reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Content Strategy
            </span>

            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Localised Social Media & <br />
              Content Strategy
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl">
              We repositioned our client as a{" "}
              <b>
                {" "}
                <a
                  className="text-white"
                  href="https://mkatbrandworks.com/social-media.html"
                >
                  real estate consultant and market authority
                </a>
              </b>
              , not just a broker.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* LEFT: CONTENT FORMATS */}
            <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-6">
                Educational & Informative Formats
              </h3>

              <div className="space-y-4">
                {[
                  "Carousel posts for informative and educational content",
                  "Voiceover-based video reels highlighting local infrastructure growth",
                  "Upcoming government and private projects",
                  "Property investment insights",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-lg border border-white/10 px-5 py-4 transition hover:border-[#8d0b41]/40"
                  >
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-[#8d0b41] opacity-0 transition group-hover:opacity-100" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER: LANGUAGE & LOCALISATION */}
            <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-6">
                Language & Regional Relevance
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#8d0b41]" />
                  Language testing across English, Hindi, and Marathi
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#8d0b41]" />
                  Marathi voiceovers delivered the strongest engagement
                </li>
              </ul>
            </div>

            {/* RIGHT: AUTHORITY & IMPACT */}
            <div className="reveal relative rounded-2xl border border-[#8d0b41]/40 bg-gradient-to-br from-[#8d0b41]/20 to-transparent p-8">
              <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
                Impact
              </span>

              <h3 className="mt-4 text-xl font-semibold leading-snug">
                Trust, authority, and <br />
                long-term engagement
              </h3>

              <p className="mt-6 text-gray-300 leading-relaxed">
                Educational blogs were published on the website covering
                Amravati real estate trends and consultancy topics. This content
                strategy significantly improved trust and engagement while
                supporting both paid and organic efforts.
              </p>

              {/* subtle glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-[#8d0b41]/10 blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION & OPTIMIZATION */}
      <section className="px-6 md:px-12 py-32 bg-[#0F0F14]">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="max-w-3xl reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Optimization
            </span>

            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Execution & Optimization
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl">
              Performance was treated as an ongoing system, not a one-time
              setup. Continuous testing and refinement ensured lead quality
              improved over time.
            </p>
          </div>

          {/* CORE GRID */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* LEFT: BUDGET & FORMATS */}
            <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-6">
                Budget Allocation & Ad Formats
              </h3>

              <div className="space-y-4">
                {[
                  "Optimised monthly ad budget with precise allocation to maximise lead quality",
                  "Ad formats included image ads, carousel ads, and video ads",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-lg border border-white/10 px-5 py-4 transition hover:border-[#8d0b41]/40"
                  >
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-[#8d0b41] opacity-0 transition group-hover:opacity-100" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: TESTING ENGINE */}
            <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-6">
                Continuous Testing Framework
              </h3>

              <ul className="space-y-4 text-gray-300">
                {[
                  "Creatives (static vs video)",
                  "Audience segments",
                  "Copy angles and language",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#8d0b41]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* INSIGHT / WINNER */}
          <div className="mt-16 reveal relative rounded-2xl border border-[#8d0b41]/40 bg-gradient-to-br from-[#8d0b41]/20 to-transparent p-10 max-w-4xl">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Key Insight
            </span>

            <h3 className="mt-4 text-2xl font-semibold leading-snug">
              Video creatives consistently outperformed
              <br />
              other formats
            </h3>

            <p className="mt-6 text-gray-300 leading-relaxed">
              This insight guided future optimizations and helped refine the
              creative direction to maximise engagement and lead quality.
            </p>

            {/* subtle glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-[#8d0b41]/10 blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="px-6 md:px-12 py-40 bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="max-w-3xl reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Results
            </span>

            <h2 className="mt-4 text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-tight">
              Real Estate Marketing <br />
              Success Story
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl">
              The combined impact of SEO, Google Business optimization, content,
              and Meta ads translated into measurable lead quality, lower
              acquisition costs, and stronger buyer intent.
            </p>
          </div>

          {/* LEAD GEN METRICS */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal relative rounded-2xl border border-[#8d0b41]/40 bg-gradient-to-br from-[#8d0b41]/25 to-transparent p-10">
              <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
                Cost Efficiency
              </span>

              <h3 className="mt-6 text-4xl font-semibold text-white">
                ₹14 - ₹38
              </h3>

              <p className="mt-3 text-gray-200">Cost per lead (CPL)</p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                CPL varied based on project value, allowing premium projects to
                attract higher-intent buyers without compromising lead quality.
              </p>

              <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-[#8d0b41]/10 blur-3xl opacity-40" />
            </div>

            <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-10">
              <span className="text-sm uppercase tracking-wider text-gray-400">
                Buyer Intent
              </span>

              <h3 className="mt-6 text-4xl font-semibold">₹60 - ₹80L</h3>

              <p className="mt-3 text-gray-300">Premium plotted projects</p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Higher-value projects recorded slightly higher CPLs, but
                delivered significantly stronger buyer intent and
                sales-qualified enquiries.
              </p>
            </div>

            <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-10">
              <span className="text-sm uppercase tracking-wider text-gray-400">
                Lead Quality
              </span>

              <h3 className="mt-6 text-4xl font-semibold">1 - 2 Site visits</h3>

              <p className="mt-3 text-gray-300">per 15-20 leads</p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                The sales team consistently recorded physical site visits from
                Meta leads, indicating strong alignment between targeting and
                buyer intent.
              </p>
            </div>
          </div>

          {/* ORGANIC GROWTH */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div className="reveal">
              <h3 className="text-2xl font-semibold mb-8">
                Organic Growth & Local Visibility
              </h3>

              <div className="space-y-5">
                {[
                  "Page 1 rankings for high-intent local keywords",
                  "100+ monthly organic calls via Google Business Profile",
                  "Steady growth in website traffic and local discovery",
                  "Increased frequency of DM enquiries",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-[#8d0b41]/40"
                  >
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-[#8d0b41] opacity-0 transition group-hover:opacity-100" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: BIG STAT */}
            <div className="reveal relative rounded-2xl border border-[#8d0b41]/40 bg-gradient-to-br from-[#8d0b41]/25 to-transparent p-12">
              <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
                Organic Impact
              </span>

              <h3 className="mt-6 text-6xl font-semibold">100+</h3>

              <p className="mt-3 text-lg text-gray-200">
                organic calls every month
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
                Generated purely through Google Business Profile and local SEO,
                without paid promotion.
              </p>

              <div className="pointer-events-none absolute -inset-8 rounded-2xl bg-[#8d0b41]/10 blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT BEYOND NUMBERS */}
      <section className="px-6 md:px-12 py-40 bg-[#0F0F14] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER */}
          <div className="max-w-3xl reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Impact
            </span>

            <h2 className="mt-4 text-[clamp(2.4rem,4.8vw,3.6rem)] font-semibold leading-tight">
              Impact Beyond <br /> Numbers
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl">
              While performance metrics validated success, the real
              transformation was visible in brand perception, trust, and
              long-term positioning.
            </p>
          </div>

          {/* IMPACT GRID */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="reveal relative rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-4">
                Brand Recall & Trust
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Significant improvement in brand recall and trust, with
                audiences beginning to recognise Infradeals as a credible and
                authoritative real estate name in the region.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="reveal relative rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-4">
                Repeat Enquiries & Referrals
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Increase in repeat enquiries and referrals, signalling that
                trust had moved beyond first contact into long-term
                consideration.
              </p>
            </div>

            {/* CARD 3 – HIGHLIGHT */}
            <div className="reveal relative rounded-2xl border border-[#8d0b41]/40 bg-gradient-to-br from-[#8d0b41]/25 to-transparent p-8">
              <h3 className="text-xl font-semibold mb-4">
                Visual Identity Dominance
              </h3>

              <p className="text-gray-200 leading-relaxed">
                The visual identity became so distinctive that competitors began
                copying creatives, leading to the implementation of watermark
                protection to safeguard brand assets.
              </p>

              {/* glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-[#8d0b41]/15 blur-3xl opacity-40" />
            </div>
          </div>

          {/* CLIENT RELATIONSHIP */}
          <div className="mt-32 max-w-4xl reveal">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Client Relationship
            </span>

            <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-snug">
              A long-term partnership <br /> built on trust and growth
            </h3>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl">
              Our Client continues to{" "}
              <b>
                {" "}
                <a className="text-white" href="https://mkatbrandworks.com/">
                  trust our strategic direction and execution{" "}
                </a>
              </b>{" "}
              and looks forward to a long-term partnership focused on
              sustainable digital growth.
            </p>
          </div>
        </div>

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#8d0b41]/10 blur-[120px]" />
        </div>
      </section>

      {/* WHY THIS CASE STUDY MATTERS – REFINED */}
      <section className="px-6 md:px-12 py-48 bg-[#0B0B0F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* BIG STATEMENT */}
          <div className="reveal max-w-5xl">
            <span className="text-sm uppercase tracking-wider text-[#8d0b41]">
              Why this matters
            </span>

            <h2 className="mt-6 text-[clamp(2.6rem,5vw,4.4rem)] font-semibold leading-[1.05]">
              Real estate doesn’t scale <br />
              with louder ads.
              <br />
              <span className="text-[#8d0b41]">It scales with relevance.</span>
            </h2>
          </div>

          {/* INSIGHT STRIP */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            {/* LEFT – KEY INSIGHT */}
            <div className="reveal">
              <span className="block text-xs uppercase tracking-widest text-gray-500 mb-6">
                Key Insight
              </span>

              <p className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-xl">
                In real estate, local relevance, regional language, and
                education-driven content outperform generic selling.
              </p>

              <p className="mt-6 text-gray-400 max-w-lg">
                When SEO, local search, and paid media work together, lead
                quality improves naturally.
              </p>
            </div>

            {/* RIGHT – MKAT PHILOSOPHY */}
            <div className="reveal relative pl-0 md:pl-10 border-l border-white/10">
              <span className="block text-xs uppercase tracking-widest text-gray-500 mb-6">
                Why MKAT Brandworks Succeeded
              </span>

              <p className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-xl">
                We didn’t run ads in isolation.
              </p>

              <p className="mt-6 text-gray-400 max-w-lg">
                We built a{" "}
                <b>
                  <a
                    className="text-white"
                    href="https://mkatbrandworks.com/contact.html"
                  >
                    connected growth system
                  </a>
                </b>{" "}
                combining SEO, Google Business optimization, content, and Meta
                ads. That’s how real estate lead generation becomes predictable
                and scalable.
              </p>
            </div>
          </div>
        </div>

        {/* SOFT BACKGROUND DEPTH */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#8d0b41]/10 blur-[160px]" />
        </div>
      </section>
    </main>
  );
}
