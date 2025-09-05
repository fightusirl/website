"use client";

export default function CircleText( { text, radius }: { text: string, radius: number } ) {

  return (
    <div className="flex items-center justify-center py-10 text-black">
      <svg
        viewBox="0 0 100 100"
        className={`w-${radius} h-${radius} animate-spin-slow hover:[animation-play-state:paused]`}
        aria-label="Circular text"
      >
        <defs>
          {/* Circle path with radius 35 centered at (50,50) */}
          <path
            id="circlePath"
            d={`M50,50 m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>

        {/* Optional visual guide for debugging: add 'stroke-current' to see the path */}
        {/* <circle cx="50" cy="50" r="35" className="fill-none stroke-current opacity-20" /> */}

        <text className="text-[12px] tracking-[0.06em] font-bubble text-black"  textLength="250" lengthAdjust="spacingAndGlyphs">
          <textPath href="#circlePath" startOffset="0%">
            {"Bongurrence • Bongurrence •"}
          </textPath>
        </text>
      </svg>
    </div>
  );
}