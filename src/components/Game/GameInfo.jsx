import clsx from "clsx";
import DuduIcon from "../../icons/dudu.png";
import BubuIcon from "../../icons/bubu.png";
import GomaIcon from "../../icons/goma.png";
import PeachuIcon from "../../icons/peachu.png";
import { GameSymbol, Profile } from "..";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Dudu",
    rating: 1230,
    avatar: DuduIcon,
    symbol: 0,
  },
  {
    id: 2,
    name: "Bubu",
    rating: 6000,
    avatar: BubuIcon,
    symbol: 1,
  },
  {
    id: 3,
    name: "Gomapipoparatiti",
    rating: 300,
    avatar: GomaIcon,
    symbol: 2,
  },
  {
    id: 4,
    name: "Peachupepeachupipipi",
    rating: 500,
    avatar: PeachuIcon,
    symbol: 3,
  },
];

export const GameInfo = ({ className, playersAmount, currentStep }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl px-8 shadow-md grid grid-cols-2 gap-3",
        className,
      )}
    >
      {players.slice(0, playersAmount).map((player) => (
        <PlayerInfo
          key={player.id}
          {...player}
          isTimerRunning={player.symbol === currentStep}
        />
      ))}
    </div>
  );
};

const PlayerInfo = ({ name, rating, avatar, symbol, isTimerRunning }) => {
  const [seconds, setSeconds] = useState(60);
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");

  const getTimeColor = () => {
    if (isTimerRunning) {
      return seconds <= 10 ? "text-orange-600" : "text-slate-900";
    }

    return "text-slate-300";
  };

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((prev) => Math.max(prev - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  return (
    <div className="flex even:flex-row-reverse gap-3 items-center">
      <div className="relative">
        <div className="w-5 h-5 rounded-full bg-white absolute -top-1 -left-1 flex items-center justify-center">
          <GameSymbol symbol={symbol} />
        </div>
        <Profile
          className="w-[180px]"
          name={name}
          rating={rating}
          avatar={avatar}
        />
      </div>
      <div className="w-px h-8 bg-slate-200" />
      <div className={clsx("text-lg font-semibold", getTimeColor())}>
        {min}:{sec}
      </div>
    </div>
  );
};
