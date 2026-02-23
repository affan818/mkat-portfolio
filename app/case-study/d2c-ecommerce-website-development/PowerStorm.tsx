"use client";

import RightAnimation from "./RightAnimation";

export default function PowerStorm() {
  return (
    <main className="bg-[#0B0B0F] text-white">
      <section className="min-h-screen flex items-center px-6 md:px-12 bg-black overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT (DIRECT IN MAIN FILE) */}
          <div className="max-w-4xl">
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-tight">
              D2C Ecommerce Website Development{" "}
              <span className="text-[#8d0b41]">Case Study</span>
            </h1>

            <p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed">
              This D2C ecommerce website development case study explains how a
              nutritional supplement brand built a conversion-focused Shopify
              website designed for scale, performance marketing readiness, and
              smooth operations across India.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden md:block">
            <RightAnimation />

            {/* side glow */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[#8d0b41]/20 blur-[160px]" />
          </div>
        </div>
      </section>
      {/* ABOUT THE CLIENT */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute right-[-200px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#8d0b41]/15 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* LEFT CONTEXT */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              About the Client
            </span>

            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-tight">
              Powerstorrm
            </h2>

            <p className="text-gray-500 max-w-sm">
              A D2C nutritional supplement brand focused on building a strong
              digital foundation before scaling paid acquisition.
            </p>
          </div>

          {/* RIGHT NARRATIVE */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Powerstorrm is a Mumbai-based D2C nutritional supplement brand
              selling products PAN India. The brand wanted to enter the market
              with a strong digital foundation rather than rushing into paid ads
              with a weak website.
            </p>

            <p>
              They approached MKAT Brandworks with one clear requirement – build
              a future ready ecommerce website that converts and scales.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-[-220px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#8d0b41]/20 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* LEFT CONTEXT */}
          <div className="space-y-6">
            <span className="inline-block text-xs tracking-widest uppercase text-[#8d0b41]">
              Challenges
            </span>

            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-tight">
              Challenges Before <br />
              Ecommerce Website Development
            </h2>

            <p className="text-gray-500 max-w-sm">
              Like many early-stage D2C brands, Powerstorrm struggled with
              missing foundations that restricted scale, automation, and growth.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">
            {/* Challenge Cards */}
            <div className="grid gap-5">
              {[
                "No fully functional Shopify ecommerce website",
                "No CRO-focused user journey",
                "No integrated payment or shipping workflows",
                "No backend clarity on orders & fulfilment",
                "Heavy dependence on external operational support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 transition-all hover:border-[#8d0b41]/40 hover:bg-white/10"
                >
                  <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#8d0b41]/0 transition-all group-hover:bg-[#8d0b41]" />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Key Pain Point */}
            <div className="relative rounded-2xl border border-[#8d0b41]/30 bg-gradient-to-r from-[#8d0b41]/20 to-transparent p-8">
              <p className="text-gray-300 mb-2">
                The key concern discussed during the first call:
              </p>

              <p className="text-xl font-semibold text-white leading-snug">
                They needed a complete ecommerce system —
                <span className="text-[#ff7aa8]">
                  {" "}
                  not just a visually good website.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden">
        {/* ambient gradient */}
        <div className="pointer-events-none absolute right-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#8d0b41]/20 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl space-y-24">
          {/* TOP — Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div className="space-y-6">
              <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
                Objective
              </span>

              <h2 className="text-[clamp(2.4rem,4.5vw,3.4rem)] font-semibold leading-tight">
                Building the System <br />
                <span className="text-gray-400">Before Chasing Sales</span>
              </h2>

              <p className="text-gray-500 max-w-md text-lg">
                This project wasn’t driven by short-term revenue goals. The
                focus was to build a strong, scalable ecommerce foundation that
                could support long-term growth.
              </p>
            </div>

            {/* Objective Cards */}
            <div className="grid gap-6">
              {[
                "Develop a full-fledged Shopify ecommerce website",
                "Apply ecommerce CRO principles for higher conversions",
                "Integrate secure payments with PAN-India shipping",
                "Enable the internal team for independent operations",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all hover:border-[#8d0b41]/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8d0b41]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <p className="relative z-10 text-gray-200 text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM — Timeline */}
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-1">
                <span className="text-xs uppercase tracking-widest text-[#8d0b41]">
                  Project Timeline
                </span>

                <h3 className="mt-3 text-3xl font-semibold">
                  25 Days <br />
                  <span className="text-gray-400 text-xl font-normal">
                    End-to-End Delivery
                  </span>
                </h3>
              </div>

              <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">
                {[
                  "UX & Strategy",
                  "Design System",
                  "Development",
                  "Testing & Launch",
                ].map((phase, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    {phase}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute right-[-220px] top-1/3 h-[520px] w-[520px] rounded-full bg-[#8d0b41]/20 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl space-y-20">
          {/* HEADER */}
          <div className="max-w-3xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Strategy
            </span>

            <h2 className="text-[clamp(2.4rem,4.5vw,3.4rem)] font-semibold leading-tight">
              Strategy by MKAT Brandworks <br />
              <span className="text-gray-400">D2C Ecommerce Focus</span>
            </h2>
          </div>

          {/* STRATEGY STATEMENT */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
              We treated this as a D2C ecommerce website design and CRO project,
              not a design assignment.
            </p>
          </div>

          {/* PLATFORM SELECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <div className="space-y-6">
              <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
                Platform Selection
              </span>

              <p className="text-gray-300 text-lg leading-relaxed">
                Shopify was chosen for its scalability, stability, and
                performance-marketing compatibility
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
                <p className="text-gray-300 leading-relaxed">
                  Built to support future Meta Ads, Google Ads, and retention
                  campaigns without rework
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRO STRATEGY */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-[-220px] top-[40%] h-[520px] w-[520px] rounded-full bg-[#8d0b41]/20 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl space-y-24">
          {/* HEADER */}
          <div className="max-w-3xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              CRO Strategy
            </span>

            <h2 className="text-[clamp(2.4rem,4.5vw,3.4rem)] font-semibold leading-tight">
              Ecommerce CRO Website Strategy
            </h2>

            <p className="text-gray-400 text-lg">
              Instead of a template-driven site, we implemented CRO
              fundamentals:
            </p>
          </div>

          {/* CRO FUNDAMENTALS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* LEFT STACK */}
            <div className="space-y-5">
              {[
                "Clean and distraction-free UI",
                "Mobile-first design approach",
                "Clear product hierarchy and collections",
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-6"
                >
                  <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#8d0b41]" />
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>

            {/* RIGHT — PRODUCT PAGE OPTIMIZATION */}
            <div className="space-y-8">
              <p className="text-gray-400 text-lg">
                Product pages optimized for:
              </p>

              <div className="grid gap-4">
                {[
                  "Benefits over features",
                  "Trust elements",
                  "Simple buying flow",
                  "Fast and frictionless checkout experience",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-5 text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INTENT CALLOUT */}
          <div className="relative rounded-3xl border border-[#8d0b41]/30 bg-gradient-to-r from-[#8d0b41]/20 to-transparent p-10">
            <p className="text-xl font-medium text-white leading-relaxed max-w-4xl">
              The intent was to make the website a conversion engine, not just a
              product catalog.
            </p>
          </div>
        </div>
      </section>

      {/* FUNNEL × EXECUTION */}
      <section className="relative px-6 md:px-12 py-36">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 relative">
          {/* VERTICAL DIVIDER */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/10" />

          {/* LEFT — FUNNEL ARCHITECTURE */}
          <div className="space-y-16 pr-0 md:pr-16">
            <div className="space-y-6">
              <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
                Funnel Architecture
              </span>

              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Funnel Architecture for D2C Brands
              </h2>

              <p className="text-gray-400">
                The website was structured to support multiple user journeys:
              </p>
            </div>

            {/* Funnel Paths */}
            <div className="space-y-5 border-l border-white/10 pl-10">
              {[
                "Homepage → Collection pages",
                "Collection → Product detail pages",
                "Direct product landing for paid or organic traffic",
                "Smooth checkout flow with minimal drop-offs",
              ].map((item, i) => (
                <p key={i} className="text-gray-300 text-lg">
                  {item}
                </p>
              ))}
            </div>

            {/* Traffic Readiness */}
            <div className="pt-6">
              <p className="text-gray-400 mb-4">This ensured readiness for:</p>

              <div className="flex flex-wrap gap-6 text-gray-300">
                <span>Cold traffic</span>
                <span>Repeat buyers</span>
                <span>High-intent customers</span>
              </div>
            </div>
          </div>

          {/* RIGHT — EXECUTION & TECH */}
          <div className="space-y-16 pl-0 md:pl-16">
            <div className="space-y-6">
              <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
                Execution & Technical Implementation
              </span>

              <h3 className="text-3xl md:text-4xl font-semibold">
                What We Built
              </h3>
            </div>

            {/* Build Items */}
            <div className="space-y-5">
              {[
                "Complete Shopify website development from scratch",
                "Custom graphics aligned with supplement branding",
                "Shopify payment gateway integration using Razorpay",
                "Shipping integration via Shiprocket for PAN-India fulfilment",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-xl px-8 py-6 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Backend Setup */}
            <div className="pt-12 border-t border-white/10">
              <p className="text-gray-400 mb-6">Backend setup for:</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-300 text-center">
                <span>Order processing</span>
                <span>Inventory management</span>
                <span>Customer data tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM TRAINING & KNOWLEDGE TRANSFER */}
      <section className="relative px-6 md:px-12 py-36 bg-black/40">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* LEFT — CONTEXT */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Enablement
            </span>

            <h2 className="text-[clamp(2.4rem,4vw,3.2rem)] font-semibold leading-tight">
              Team Training & <br />
              Knowledge Transfer
            </h2>

            <p className="text-gray-500 max-w-sm text-lg">
              Beyond development, we ensured operational independence:
            </p>
          </div>

          {/* RIGHT — KNOWLEDGE FLOW */}
          <div className="relative space-y-10">
            {/* Training */}
            <div className="border-l border-white/10 pl-10 space-y-6">
              <p className="text-gray-300 text-lg">
                Conducted detailed training sessions with the internal team
              </p>

              <div className="space-y-4 text-gray-400">
                <p>Order handling workflows</p>
                <p>Payment and shipping management</p>
                <p>Basic website updates and maintenance</p>
              </div>
            </div>

            {/* Outcome */}
            <div className="pt-12 border-t border-white/10">
              <p className="text-xl font-medium text-white leading-relaxed max-w-lg">
                This reduced long-term dependency and enabled faster execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS & BUSINESS IMPACT */}
      <section className="relative px-6 md:px-12 py-40 overflow-hidden">
        {/* subtle background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/0" />

        <div className="relative mx-auto max-w-7xl space-y-32">
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Results & Business Impact
            </span>

            <h2 className="text-[clamp(2.6rem,4.5vw,3.6rem)] font-semibold leading-tight">
              Results & Business Impact
            </h2>

            <p className="text-gray-400 text-xl">
              Since this was a foundation-building ecommerce project, success
              was measured differently.
            </p>
          </div>

          {/* KEY OUTCOMES — LEFT ALIGNED IMPACT FLOW */}
          <div className="relative border-l border-white/10 pl-14 space-y-10">
            <p className="uppercase tracking-widest text-sm text-gray-500">
              Key Outcomes
            </p>

            <p className="text-gray-200 text-lg">
              A scalable D2C ecommerce website ready for performance marketing
            </p>

            <p className="text-gray-200 text-lg">
              Seamless payment and shipping operations from Day 1
            </p>

            <p className="text-gray-200 text-lg">
              Improved brand trust through professional website design
            </p>

            <p className="text-gray-200 text-lg">
              Faster go-to-market without technical bottlenecks
            </p>
          </div>

          {/* IMPACT BEYOND METRICS — SEPARATE EMPHASIS ZONE */}
          <div className="relative border-l border-[#8d0b41]/40 pl-14 space-y-10">
            <p className="uppercase tracking-widest text-sm text-gray-500">
              Impact Beyond Metrics
            </p>

            <p className="text-2xl font-medium text-white leading-relaxed">
              Strong internal confidence to scale traffic and sales
            </p>

            <p className="text-2xl font-medium text-white leading-relaxed">
              Reduced operational friction
            </p>

            <p className="text-2xl font-medium text-white leading-relaxed">
              A website built to support long-term growth, not quick fixes
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT RELATIONSHIP */}
      <section className="relative px-6 md:px-12 py-32">
        <div className="mx-auto max-w-6xl">
          {/* SOFT CONTAINER */}
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl px-12 py-16">
            {/* Label */}
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Client Relationship
            </span>

            {/* Content */}
            <div className="mt-8 space-y-8 max-w-4xl">
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                Powerstorrm appreciated the structured execution, speed of
                delivery, and clarity throughout the project.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                The client valued the fact that the website was not only
                delivered but also handed over with complete operational
                understanding.
              </p>
            </div>

            {/* Subtle divider */}
            <div className="mt-12 h-px w-24 bg-[#8d0b41]/40" />
          </div>
        </div>
      </section>

      {/* WHY THIS CASE STUDY MATTERS */}
      <section className="relative px-6 md:px-12 py-52 overflow-hidden">
        {/* subtle noise / depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(141,11,65,0.15),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* TITLE */}
          <div className="max-w-5xl mb-32">
            <span className="text-xs tracking-widest uppercase text-[#8d0b41]">
              Why This Case Study Matters
            </span>

            <h2 className="mt-6 text-[clamp(3rem,5vw,4.2rem)] font-semibold leading-tight">
              Why This Case Study Matters <br />
              for D2C Brands
            </h2>
          </div>

          {/* SPLIT BELIEF */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            {/* LEFT — KEY INSIGHT */}
            <div className="space-y-10">
              <p className="uppercase tracking-widest text-sm text-gray-500">
                Key Insight
              </p>

              <div className="space-y-8">
                <p className="text-4xl md:text-5xl font-semibold text-white leading-snug">
                  In D2C ecommerce,
                  <br />
                  ads amplify the website.
                </p>

                <p className="text-4xl md:text-5xl font-semibold text-[#8d0b41] leading-snug">
                  They do not fix it.
                </p>

                <p className="pt-8 text-xl text-gray-300 max-w-lg leading-relaxed border-t border-white/10">
                  Without a CRO-ready website, performance marketing will always
                  struggle.
                </p>
              </div>
            </div>

            {/* RIGHT — WHY MKAT */}
            <div className="relative border-l border-white/10 pl-20 space-y-10">
              <p className="uppercase tracking-widest text-sm text-gray-500">
                Why MKAT Brandworks Succeeded
              </p>

              <div className="space-y-8">
                <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                  We focused on D2C ecommerce website development, CRO thinking,
                  and system-level execution, not shortcuts.
                </p>

                <p className="text-2xl md:text-3xl font-medium text-gray-400 leading-relaxed">
                  That’s what makes ecommerce brands scalable.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL LINE */}
          <div className="mt-36 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white">
              Build the system first. Scale the ads later.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
