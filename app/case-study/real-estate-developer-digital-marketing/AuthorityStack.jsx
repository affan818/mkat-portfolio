import "../case-study.css";
export default function AuthorityOrbit() {
  return (
    <div className="relative hidden md:flex h-[460px] w-[460px] items-center justify-center">
      {/* ambient glow */}
      <div className="absolute h-[400px] w-[400px] rounded-full bg-[#8d0b41]/25 blur-[160px]" />

      {/* SYSTEM SVG */}
      <svg
        width="460"
        height="460"
        viewBox="0 0 460 460"
        className="absolute"
        fill="none"
      >
        {/* outer system ring */}
        <circle cx="230" cy="230" r="170" className="orbit-ring-outer" />

        {/* inner ring */}
        <circle cx="230" cy="230" r="120" className="orbit-ring-inner" />

        {/* radial connectors */}
        {[0, 90, 180, 270].map((deg, i) => (
          <line
            key={i}
            x1="230"
            y1="230"
            x2="230"
            y2="60"
            className="orbit-line"
            transform={`rotate(${deg} 230 230)`}
          />
        ))}
      </svg>

      {/* CORE */}
      <div className="absolute z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#8d0b41]/30 backdrop-blur text-sm font-medium text-white shadow-lg">
        Authority
      </div>

      {/* ORBITING NODES */}
      <div className="orbit-rotate refined">
        <div className="orbit-node">SEO</div>
        <div className="orbit-node">Content</div>
        <div className="orbit-node">Social</div>
        <div className="orbit-node">Trust</div>
      </div>
    </div>
  );
}
