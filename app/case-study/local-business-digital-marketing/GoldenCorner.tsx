"use client";

import HardwareVisual from "./HardwareVisual";
import "../case-study.css";
export default function HeroLocalBusiness() {
  return (
    <main className="bg-[#0B0B0F] text-white">
      <section className="relative min-h-screen px-6 md:px-12 flex items-center overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <div className="max-w-4xl reveal">
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-tight">
              Local Business{" "}
              <span className="text-[#8d0b41]">Digital Marketing</span> Case
              Study
            </h1>

            <p className="mt-6 text-gray-400 max-w-xl">
              This local business digital marketing case study shows how a
              hardware showroom used audience-segmented Meta ads, WhatsApp lead
              generation, and social media marketing to drive enquiries,
              walk-ins, and brand recall across Nagpur.
            </p>
          </div>
          {/* RIGHT VISUAL */}
          <HardwareVisual />
        </div>
      </section>
      {/* ABOUT THE CLIENT */}
      <section className="relative px-6 md:px-12 py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* LEFT – CLIENT PROFILE */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              About the Client
            </span>

            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-tight">
              About the Client
            </h2>

            <p className="text-gray-400 leading-relaxed">
              our client has a well-established hardware showroom in Nagpur with
              multiple locations. The business caters to both retail buyers and
              professional trade customers, offering premium kitchen hardware,
              door fittings, accessories, and complete sample kitchen setups.
            </p>
          </div>

          {/* RIGHT – CONTEXT / GAP */}
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <p className="text-gray-300 leading-relaxed">
              Despite having strong physical showrooms and a wide product range,
              Their digital presence did not reflect the quality, scale, or
              professionalism of their offline business.
            </p>

            {/* subtle divider */}
            <div className="h-px w-16 bg-[#8d0b41]/60" />

            <p className="text-sm text-gray-500">
              Offline credibility was strong. Online perception needed
              alignment.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="relative px-6 md:px-12 py-32 bg-black/30">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Challenges
            </span>

            <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
              Challenges Faced by a Local Retail Business
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
                  MKAT Brandworks
                </a>
              </b>
              , They faced several issues:
            </p>
          </div>

          {/* CHALLENGES LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Low-quality and inconsistent social media presence",
              "No professional video content showcasing showroom experience",
              "No structured funnel to convert social media attention into enquiries",
              "No audience segmentation in digital marketing",
              "Complete dependence on walk-in traffic",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>

          {/* CORE PAIN POINT */}
          <div className="relative rounded-3xl border border-[#8d0b41]/40 bg-[#8d0b41]/10 p-10 max-w-4xl">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Core Pain Point
            </span>

            <p className="mt-4 text-gray-200 leading-relaxed text-lg">
              On the first call, the client clearly expressed one key pain
              point:
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              They wanted high-quality video content that could properly
              showcase their showroom, sample kitchens, and premium hardware
              products in a professional and trustworthy way.
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTIVES & EXPECTATIONS */}
      <section className="relative px-6 md:px-12 py-36 overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#8d0b41]/20 blur-[200px]" />

        <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* LEFT – INTENT */}
          <div className="space-y-8">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Objectives & Expectations
            </span>

            <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
              Clear Goals. <br />
              Real Business Intent.
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-md">
              The primary goals were:
            </p>
          </div>

          {/* RIGHT – OBJECTIVES */}
          <div className="space-y-6">
            {[
              "Build a premium and consistent social media presence",
              "Drive WhatsApp enquiries, calls, and showroom footfalls",
              "Target different buyer types with different messaging, not one generic audience",
              "Use Meta ads as a scalable local business lead generation channel",
            ].map((goal) => (
              <div
                key={goal}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300 leading-relaxed"
              >
                {goal}
              </div>
            ))}
          </div>
        </div>

        {/* EXPECTATION STRIP */}
        <div className="relative mx-auto mt-28 max-w-4xl rounded-3xl border border-[#8d0b41]/40 bg-[#8d0b41]/10 p-10 text-center">
          <p className="text-gray-200 leading-relaxed text-lg">
            There was no long-term wait expected. The client wanted a real
            business response, not just reach or engagement.
          </p>
        </div>
      </section>

      {/* STRATEGY – AUDIENCE SEGMENTATION */}
      <section className="relative px-6 md:px-12 py-36 bg-black/30">
        <div className="mx-auto max-w-6xl space-y-24">
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Strategy
            </span>

            <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
              Strategy by MKAT Brandworks –
              <br />
              Audience Segmented Retail Marketing
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Instead of treating them as a single-audience retail brand, we
              built the strategy around distinct customer segments, each with a
              different intent and decision-making process.
            </p>
          </div>

          {/* KEY DIFFERENTIATOR */}
          <div className="rounded-3xl border border-[#8d0b41]/40 bg-[#8d0b41]/10 p-10 max-w-4xl">
            <h3 className="text-lg font-semibold mb-4">
              Audience Segmentation Strategy (Key Differentiator)
            </h3>

            <p className="text-gray-300 leading-relaxed">
              We divided the audience into three clear segments:
            </p>
          </div>

          {/* SEGMENTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* SEGMENT 1 */}
            <div className="segment-card">
              <h4>New Homeowners & People Building Homes</h4>

              <p className="segment-sub">This audience included:</p>

              <ul>
                <li>First-time home buyers</li>
                <li>Customers currently constructing or renovating homes</li>
              </ul>

              <p className="segment-sub">Messaging focus:</p>

              <ul>
                <li>Kitchen hardware setup solutions</li>
                <li>Door handles and fittings for new homes</li>
                <li>
                  Value-driven offers such as the ₹9,999 kitchen hardware setup
                </li>
                <li>
                  Visual demonstrations of finished kitchens and interiors
                </li>
              </ul>
            </div>

            {/* SEGMENT 2 */}
            <div className="segment-card">
              <h4>Interior Designers & Architects</h4>

              <p className="segment-sub">
                This professional audience required a completely different
                approach.
              </p>

              <p className="segment-sub">Messaging focus:</p>

              <ul>
                <li>Product quality and finish</li>
                <li>Range availability</li>
                <li>Showroom variety and sampling</li>
                <li>Reliability for client projects</li>
              </ul>

              <p className="segment-note">
                Content and ads were positioned to make our client look like a
                dependable vendor partner, not just a retail store.
              </p>
            </div>

            {/* SEGMENT 3 */}
            <div className="segment-card">
              <h4>Civil Engineers & Contractors</h4>

              <p className="segment-sub">
                For this segment, trust and consistency mattered more than
                offers.
              </p>

              <p className="segment-sub">Messaging focus:</p>

              <ul>
                <li>Bulk availability</li>
                <li>Long-term product reliability</li>
                <li>Easy coordination across multiple showroom locations</li>
                <li>On-time supply for ongoing projects</li>
              </ul>
            </div>
          </div>

          {/* CLOSING LINE */}
          <div className="max-w-4xl text-gray-400 leading-relaxed text-lg">
            This segmentation allowed us to speak directly to intent, rather
            than pushing the same content to everyone.
          </div>
        </div>
      </section>

      {/* PLATFORM & FUNNEL STRATEGY */}
      <section className="relative px-6 md:px-12 py-36">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* LEFT – STRATEGY CONTEXT */}
          <div className="space-y-8">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Platform & Funnel Strategy
            </span>

            <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
              Platform & Funnel Strategy
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Platform Selection
            </p>

            <p className="text-gray-400 leading-relaxed">
              We chose Meta platforms (Instagram and Facebook) because:
            </p>

            <div className="space-y-4">
              <div className="strategy-point">
                Hardware products are highly visual
              </div>

              <div className="strategy-point">
                Meta allows hyperlocal and interest-based targeting
              </div>

              <div className="strategy-point">
                WhatsApp integration works best for local retail enquiries
              </div>
            </div>
          </div>

          {/* RIGHT – FUNNEL FLOW */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-10 space-y-8">
            <h3 className="text-lg font-semibold">Funnel Logic</h3>

            <div className="space-y-6">
              <div className="funnel-step">
                <span>Instagram & Facebook</span>
              </div>

              <div className="funnel-divider" />

              <div className="funnel-step">
                <span>Visual Ads & Content</span>
              </div>

              <div className="funnel-divider" />

              <div className="funnel-step">
                <span>WhatsApp Enquiries</span>
              </div>

              <div className="funnel-divider" />

              <div className="funnel-step">
                <span>Calls & Showroom Visits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP LEAD GENERATION FUNNEL */}
      <section className="relative px-6 md:px-12 py-32 bg-black/30">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Funnel Strategy
            </span>

            <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
              WhatsApp Lead Generation Funnel
            </h2>
          </div>

          {/* FUNNEL FLOW */}

          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {["Ad", "WhatsApp", "Real enquiry", "Walk-in"].map((step, i) => (
              <div key={step} className="flex items-center gap-6">
                {/* STEP */}
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-8 py-5 text-gray-200 text-base">
                  {step}
                </div>

                {/* ARROW */}
                {i !== 3 && (
                  <div className="hidden md:flex items-center">
                    <svg
                      width="48"
                      height="14"
                      viewBox="0 0 48 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-70"
                    >
                      <path
                        d="M0 7H44M44 7L38 1M44 7L38 13"
                        stroke="#8d0b41"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* EXPLANATION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300">
              Faster response time
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300">
              Higher enquiry intent
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300">
              Easy handling across multiple showroom locations
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT & CREATIVE EXECUTION */}
      <section className="relative px-6 md:px-12 py-32 bg-black/30">
        <div className="mx-auto max-w-6xl space-y-24">
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Content & Creative Execution
            </span>

            <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
              Content & Creative Execution
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Content quality was central to conversions.
            </p>
          </div>

          {/* EXECUTION GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* LEFT – VISUAL CONTENT */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">What We Executed:</h3>

              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300">
                  <p className="font-medium mb-2">
                    Professional showroom shoots highlighting:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Sample kitchens</li>
                    <li>Door handle collections</li>
                    <li>Hero hardware products</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300">
                  <p className="font-medium mb-2">
                    Video reels with English and Hindi voiceovers explaining:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Product usage</li>
                    <li>Application in real homes</li>
                    <li>Quality differentiation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT – CONTINUOUS CONTENT */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300">
                <p className="font-medium mb-2">
                  Daily Instagram stories featuring:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>New arrivals</li>
                  <li>Hero products</li>
                  <li>In-store highlights</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-gray-300">
                <p>
                  Offer-based campaigns, especially the ₹9,999 kitchen hardware
                  setup, which delivered strong traction among new homeowners
                </p>
              </div>
            </div>
          </div>

          {/* ALIGNMENT STATEMENT */}
          <div className="max-w-4xl rounded-3xl border border-[#8d0b41]/40 bg-[#8d0b41]/10 p-10">
            <p className="text-gray-200 leading-relaxed text-lg">
              Each creative was aligned with one audience segment, not mixed
              messaging.
            </p>
          </div>
        </div>
      </section>

      {/* EXECUTION & OPTIMIZATION + RESULTS */}
      <section className="relative px-6 md:px-12 py-36 bg-black/30">
        <div className="mx-auto max-w-6xl space-y-28">
          {/* ================= EXECUTION ================= */}
          <div className="space-y-16">
            {/* HEADER */}
            <div className="max-w-4xl space-y-6">
              <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
                Execution & Optimization
              </span>

              <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
                Execution & Optimization
              </h2>
            </div>

            {/* EXECUTION GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* LEFT */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>Campaigns were run on a monthly retainer model</p>
                <p>Primary focus on video reels and story-based ads</p>

                <div>
                  <p className="mb-2 font-medium">Continuous testing on:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Creatives (product demo vs showroom walkthrough)</li>
                    <li>Audience segments (homeowners vs professionals)</li>
                    <li>Copy tone (offer-led vs value-led)</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT – TURNING POINT */}
              <div className="rounded-3xl border border-[#8d0b41]/40 bg-[#8d0b41]/10 p-10 space-y-6">
                <p className="text-gray-200 leading-relaxed text-lg">
                  A major turning point came when{" "}
                  <b>
                    <a
                      className="text-white"
                      href="https://mkatbrandworks.com/social-media.html"
                    >
                      segmented creatives
                    </a>
                  </b>{" "}
                  started generating:
                </p>

                <ul className="space-y-2 text-gray-300">
                  <li>WhatsApp enquiries</li>
                  <li>Direct calls</li>
                  <li>Walk-ins referencing Instagram content</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= RESULTS ================= */}
          <div className="space-y-16">
            {/* RESULTS HEADER */}
            <div className="max-w-4xl space-y-6">
              <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
                Results
              </span>

              <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
                Results – Retail Lead Generation Using Meta Ads
              </h2>
            </div>

            {/* RESULTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
                <p className="text-sm text-gray-400 mb-2">
                  Performance Results
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Cost per lead ranged between ₹4.5 and ₹15–₹16, highly
                  efficient for local retail
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
                <p className="text-sm text-gray-400 mb-2">Speed of Response</p>
                <p className="text-gray-200 leading-relaxed">
                  Enquiries started coming from Day 1
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
                <p className="text-sm text-gray-400 mb-2">Audience Coverage</p>
                <p className="text-gray-200 leading-relaxed">
                  Strong response from both retail buyers and professional
                  segments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT BEYOND NUMBERS */}
      <section className="relative px-6 md:px-12 py-32 bg-black/30">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Impact Beyond Numbers
            </span>

            <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight">
              Impact Beyond Numbers
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              What changed wasn’t just performance metrics, but how the brand
              was perceived and how customers approached the buying process.
            </p>
          </div>

          {/* IMPACT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
              <p className="text-gray-200 leading-relaxed">
                Significant improvement in brand recall across Nagpur
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
              <p className="text-gray-200 leading-relaxed">
                Better trust among architects, interior designers, and engineers
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
              <p className="text-gray-200 leading-relaxed">
                Increase in repeat enquiries and professional referrals
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
              <p className="text-gray-200 leading-relaxed">
                Customers visiting the showroom already informed about products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT RELATIONSHIP */}
      <section className="relative px-6 md:px-12 py-28">
        <div className="mx-auto max-w-4xl text-center space-y-10">
          {/* LABEL */}
          <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
            Client Relationship
          </span>

          {/* HEADING */}
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
            A Continuing Growth Partnership
          </h2>

          {/* CONTENT (UNCHANGED) */}
          <p className="text-gray-400 leading-relaxed text-lg">
            They continues to work with MKAT Brandworks for social media
            marketing and Meta ads. The client values the segmented strategy,
            content quality, and consistent enquiry flow generated through
            digital channels.
          </p>
        </div>
      </section>

      {/* WHY THIS CASE STUDY MATTERS – FINAL */}
      <section className="relative px-6 md:px-12 py-40 bg-black/40 overflow-hidden">
        {/* subtle ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d0b41]/20 blur-[220px]" />

        <div className="relative mx-auto max-w-5xl space-y-20">
          {/* HEADER */}
          <div className="text-center space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Why This Case Study Matters
            </span>

            <h2 className="text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-tight">
              Why This Case Study Matters for
              <br />
              Local Businesses
            </h2>
          </div>

          {/* INSIGHT BLOCKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* KEY INSIGHT */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-wide">
                Key Insight
              </h3>

              <div className="h-px w-16 bg-[#8d0b41]" />

              <p className="text-gray-300 leading-relaxed text-lg">
                Local businesses grow faster when different customer types are
                spoken to differently. One message never fits all.
              </p>
            </div>

            {/* WHY MKAT */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-wide">
                Why MKAT Brandworks Succeeded
              </h3>

              <div className="h-px w-16 bg-[#8d0b41]" />

              <p className="text-gray-300 leading-relaxed text-lg">
                We combined audience segmentation,{" "}
                <b>
                  <a
                    className="text-white"
                    href="https://mkatbrandworks.com/index.html"
                  >
                    WhatsApp lead generation for local business,
                  </a>
                </b>{" "}
                social media marketing, and Meta ads to turn digital presence
                into real footfall and sales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
