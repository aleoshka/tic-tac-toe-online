import Image from "next/image";
import Link from "next/link";
import ArrowLeftIcon from "../../icons/game-title/arrow-left.svg";
import StarIcon from "../../icons/game-info/star.svg";
import PlayersIcon from "../../icons/game-info/players.svg";
import ClockIcon from "../../icons/game-info/clock.svg";

export const GameTitle = () => {
  return (
    <div className="pl-2">
      <Link href="#" className="flex gap-2 text-xs text-teal-600 -mb-0.5">
        <Image src={ArrowLeftIcon} alt="arrow-left" />
        На главную
      </Link>
      <h1 className="text-4xl">Крестики-нолики</h1>
      <div className="text-xs text-slate-400 flex gap-3">
        <Image src={StarIcon} alt="star" />
        <div className="flex gap-1">
          <Image src={PlayersIcon} alt="players" /> 2
        </div>
        <div className="flex gap-1">
          <Image src={ClockIcon} alt="clock" /> 1 мин на ход
        </div>
      </div>
    </div>
  );
};
