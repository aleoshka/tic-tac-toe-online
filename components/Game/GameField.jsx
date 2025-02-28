import clsx from "clsx";
import { Button } from "../../ui";
import { CircleIcon, CrossIcon } from "../../icons";

export const GameField = ({ className }) => {
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo />
      <GameGrid />
    </GameFieldLayout>
  );
};

const GameFieldLayout = ({ children, className }) => {
  return (
    <div className={clsx("bg-white rounded-2xl px-8 shadow-md", className)}>
      {children}
    </div>
  );
};

const GameMoveInfo = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-slate-900 font-semibold text-xl flex items-center gap-1">
          Ход: <CircleIcon className="w-5 h-5" />
        </div>
        <div className="text-slate-400 text-xs flex items-center gap-1">
          Следующий: <CrossIcon />
        </div>
      </div>
      <div className="flex gap-2.5 items-center">
        <Button variant="primary" size="md">
          Ничья
        </Button>
        <Button
          variant="outline"
          size="md"
          className="hover:bg-red-600 hover:text-white hover:border-red-600"
        >
          Сдаться
        </Button>
      </div>
    </div>
  );
};

const GameGrid = () => {
  const cells = Array(19 * 19).fill(null);

  return (
    <div className="mt-3 border-[0.5px] border-slate-200 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] ">
      {cells.map((_, index) => (
        <GameCell key={index} />
      ))}
    </div>
  );
};

const GameCell = () => {
  return (
    <button className="border-[0.5px] border-slate-200 ">
      <CircleIcon className="w-5 h-5 mx-auto" />
    </button>
  );
};
