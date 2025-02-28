import Link from "next/link";
import { ArrowLeftIcon, ClockIcon, StarIcon, UserIcon } from "../../icons";

export const GameTitle = () => {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex gap-2 text-xs text-teal-600 -mb-0.5 items-center hover:text-teal-700"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl">Крестики-нолики</h1>
      <div className="text-xs text-slate-400 flex gap-3 items-center">
        <StarIcon />
        <div className="flex gap-1 items-center">
          <UserIcon /> 2
        </div>
        <div className="flex gap-1 items-center">
          <ClockIcon /> 1 мин на ход
        </div>
      </div>
    </div>
  );
};
