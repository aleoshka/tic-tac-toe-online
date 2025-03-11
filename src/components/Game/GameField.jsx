import clsx from "clsx";
import { Button } from "../../ui";
import { GameSymbol } from "./GameSymbol";

export const GameField = ({
  className,
  currentStep,
  nextStep,
  cells,
  handleClick,
}) => {
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo currentStep={currentStep} nextStep={nextStep} />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            onClick={() => handleClick(index)}
            symbol={symbol}
          />
        ))}
      </GameGrid>
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

const GameMoveInfo = ({ currentStep, nextStep }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-slate-900 font-semibold text-xl flex items-center gap-1">
          Ход: <GameSymbol symbol={currentStep} className="w-5 h-5" />
        </div>
        <div className="text-slate-400 text-xs flex items-center gap-1">
          Следующий: <GameSymbol symbol={nextStep} />
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

const GameGrid = ({ children }) => {
  return (
    <div className="mt-3 border-[0.5px] border-slate-200 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] ">
      {children}
    </div>
  );
};

const GameCell = ({ onClick, symbol }) => {
  return (
    <button onClick={onClick} className="border-[0.5px] border-slate-200">
      <GameSymbol symbol={symbol} className="w-5 h-5 mx-auto" />
    </button>
  );
};
