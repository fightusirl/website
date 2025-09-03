import { Icon } from "@/components/ui/icons/Icons";
import { FC } from "react";

type SocialItem = {
  label: string;
  href: string;
  icon: keyof typeof Icon;
};

const socials: SocialItem[] = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: "Youtube",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: "Github",
  },
];

export const Socials: FC = () => {
  return (
    <div>
      {socials.map(social => {
        const IconComponent = Icon[social.icon];
        return (
          <a
            key={social.label}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent fill="red" />
            {social.label}
          </a>
        );
      })}
    </div>
  );
};
