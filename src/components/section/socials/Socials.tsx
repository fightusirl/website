import { Github } from "@/components/icons/Github";
import { Youtube } from "@/components/icons/Youtube";
import { FC } from "react";

type SocialItem = {
  label: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const socials: SocialItem[] = [
  {
    label: "@FightUsIRL",
    href: "https://www.youtube.com/@FightUsIRL",
    icon: Youtube,
  },
  {
    label: "FightUsIRL",
    href: "https://github.com/FightUsIRL",
    icon: Github,
  },
];

export const Socials: FC = () => {
  return (
    <div className="flex gap-[24px] flex-wrap items-center justify-center">
      {socials.map(social => {
        return (
          <a
            key={social.label}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon />
            {social.label}
          </a>
        );
      })}
    </div>
  );
};
