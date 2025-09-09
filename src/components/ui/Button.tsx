import clsx from "clsx";
import Link from "next/link";

export default function Button({
  href,
  ariaLabel,
  rotate,
  children,
}: {
  href: string;
  ariaLabel: string;
  rotate?: number;
  children: React.ReactNode;
}) {
  const isText = typeof children === "string";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl",
        "bg-brand-pink text-white shadow-[0_2px_0_rgba(0,0,0,1)]",
        "transition-transform hover:-translate-y-0.5 active:translate-y-0 hover:bg-brand-blue",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50",
        isText ? "px-4 h-11 text-md font-bubble" : "h-11 w-11"
      )}
    >
      {children}
    </Link>
  );
}
