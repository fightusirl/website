import { Discord } from "@/components/icons/Discord";
import { Github } from "@/components/icons/Github";
import { Youtube } from "@/components/icons/Youtube";
import Button from "@/components/ui/Button";

export const Header: React.FC = props => {
  return (
    <div className="w-full flex justify-center h-[7rem]">
      <div className="flex flex-row justify-between items-center px-4 py-4 w-5xl">
        <div className="flex gap-4">
          <Button href="https://www.youtube.com/@FightUsIRL" ariaLabel="Youtube" rotate={8}>
            <Youtube />
          </Button>
          <Button href="https://github.com/FightUsIRL" ariaLabel="Github" rotate={-8}>
            <Github />
          </Button>
          <Button href="https://discord.com" ariaLabel="Github" rotate={8}>
            <Discord />
          </Button>
        </div>
        <div className="flex gap-8">
          <div className="text-base font-bubble hover:underline hover:underline-offset-10">FIGHTUSIRL</div>
          <div className="text-base font-bubble hover:underline hover:underline-offset-10">Projects</div>
          <div className="text-base font-bubble hover:underline hover:underline-offset-10">Events</div>
        </div>
        <div>
          <Button href="https://www.youtube.com/@FightUsIRL" ariaLabel="Youtube" rotate={-4}>
            {"Join the Fun"}
          </Button>
        </div>
      </div>
    </div>
  );
};
