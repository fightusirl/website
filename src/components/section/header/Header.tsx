import { Discord } from "@/components/icons/Discord";
import { Github } from "@/components/icons/Github";
import { Youtube } from "@/components/icons/Youtube";
import clsx from "clsx";
import Link from "next/link";

export const Header: React.FC = props => {
  return (
    <div className="w-full flex justify-center h-28">
      <div className="flex flex-row justify-between items-center px-4 py-4 w-5xl">
        <div className="flex gap-4">
          <Social href="https://www.youtube.com/@FightUsIRL" ariaLabel="Youtube" rotate={8}>
            <Youtube />
          </Social>
          <Social href="https://github.com/FightUsIRL" ariaLabel="Github" rotate={-8}>
            <Github />
          </Social>
          <Social href="https://discord.com" ariaLabel="Github" rotate={8}>
            <Discord />
          </Social>
        </div>
        <div className="flex gap-8">
          <div className="text-base font-bubble hover:underline hover:underline-offset-10">Projects</div>
          <div className="text-base font-bubble hover:underline hover:underline-offset-10">Events</div>
        </div>
        <div>
          <Social href="https://www.youtube.com/@FightUsIRL" ariaLabel="Youtube" rotate={-4}>
            {"Join the Fun"}
          </Social>
        </div>
      </div>
    </div>
  );
};

function Social({
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
        "transition-transform hover:-translate-y-0.5 active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50",
        isText ? "px-4 h-11 text-md font-bubble" : "h-11 w-11"
      )}
    >
      {children}
    </Link>
  );
}
