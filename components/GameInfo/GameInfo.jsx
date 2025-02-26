import Image from "next/image";
import clsx from "clsx";
import { Profile } from "../Profile";
import CrossIcon from "../../icons/game-info/cross.svg";
import CircleIcon from "../../icons/game-info/circle.svg";

export const GameInfo = ({ mt }) => {
  return (
    <div
      className={clsx(
        mt,
        "bg-white rounded-2xl px-8 py-4 shadow-md flex justify-between",
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Image
            src={CrossIcon}
            alt="cross-icon"
            className="absolute -left-1 -top-1"
          />
          <Profile id="dudu" />
        </div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="text-lg text-slate-900 font-semibold">01:08</div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="text-lg text-orange-600 font-semibold">00:08</div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="relative">
          <Image
            src={CircleIcon}
            alt="cross-icon"
            className="absolute -left-1 -top-1"
          />
          <Profile id="bubu" />
        </div>
      </div>
    </div>
  );
};
