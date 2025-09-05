import { Beer } from "@/components/icons/Beer";
import CircleText from "@/components/ui/CircleText";
import { clsx } from "clsx";

export const Sticker: React.FC = () => {
  return (
    <div className="absolute bottom-[5rem] right-[5rem]">
      <div
        className={clsx(
          "flex items-center justify-center",
          "h-48 w-48 rounded-full",
          "bg-[#ffd93d] text-white shadow-[4px_4px_0_rgba(0,0,0,1)]",
          "border-2 border-black"
        )}
      >
        <CircleText text="Bongurrence • 6. september • " radius={40} size={168} />
        <Beer style={{ transform: `rotate(10deg)` }} className="absolute p-1 w-14 h-auto" />
      </div>
    </div>
  );
};
