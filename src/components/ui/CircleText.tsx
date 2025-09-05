export function CircleText2( { text, radius }: { text: string, radius: number } ) {

  return (
    <div className="flex items-center justify-center py-10">
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

        <text className="text-[12px] tracking-[0.06em] font-bubble"  textLength="250" lengthAdjust="spacingAndGlyphs">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

import { useId } from "react";

/**
 * CircleText
 * - `radius` is in SVG viewBox units (0–50 makes sense for a 100×100 viewBox)
 * - `size` is the rendered pixel size of the SVG
 * - Avoids Tailwind JIT pitfalls from dynamic class names
 * - Ensures unique <path id> per instance
 * - Makes spin speed configurable without needing a custom Tailwind keyframe
 */

type Props = {
  text: string;
  /** Radius in viewBox units. Defaults to 35. */
  radius?: number;
  /** Rendered size in pixels. Defaults to 200. */
  size?: number;
  /** Optional extra classes for the SVG. */
  className?: string;
  /** Spin duration in ms. Defaults to 12000. */
  speedMs?: number;
};

export default function CircleText({
  text,
  radius = 35,
  size = 200,
  className = "",
  speedMs = 12000,
}: Props) {
  const uid = useId();
  const pathId = `circlePath-${uid}`;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center justify-center py-10">
      <svg
        viewBox="0 0 100 100"
        // Inline width/height sidestep Tailwind's class generation for dynamic values
        style={{ width: size, height: size, animationDuration: `${speedMs}ms` }}
        className={`animate-spin hover:[animation-play-state:paused] ${className}`}
        aria-label="Circular text"
      >
        <defs>
          {/* Circle path centered at (50,50) with configurable radius */}
          <path
            id={pathId}
            d={`M50,50 m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>

        {/* Optional debug guide: */}
        {/* <circle cx="50" cy="50" r={radius} className="fill-none stroke-current opacity-20" /> */}

        <text fontSize="12" letterSpacing="0.06em" className="font-bubble">
          <textPath
            href={`#${pathId}`}
            // Safari fallback (kept for broader compat)
            xlinkHref={`#${pathId}`}
            startOffset="0%"
            textLength={circumference}
            lengthAdjust="spacingAndGlyphs"
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
