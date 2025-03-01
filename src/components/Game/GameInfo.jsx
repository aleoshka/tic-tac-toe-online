import clsx from "clsx";
import { Profile } from "..";
import { CircleIcon, CrossIcon } from "../../icons";

export const GameInfo = ({ className }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl px-8 shadow-md flex justify-between",
        className,
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <div className="w-5 h-5 rounded-full bg-white absolute -top-1 -left-1 flex items-center justify-center">
            <CrossIcon />
          </div>
          <Profile id="dudu" className="w-[180px]" />
        </div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="text-lg text-slate-900 font-semibold">01:08</div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="text-lg text-orange-600 font-semibold">00:08</div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="relative">
          <div className="w-5 h-5 rounded-full bg-white absolute -top-1 -left-1 flex items-center justify-center">
            <CircleIcon />
          </div>
          <Profile id="bubu" className="w-[180px]" />
        </div>
      </div>
    </div>
  );
};
