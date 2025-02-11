import { clsx } from "clsx";
import { GameSymbol } from "../GameSymbol";

export const GameCell = ({ symbol, onClick, isWinner }) => {
  return (
    <button
      className={clsx(
        "border border-gray-400 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-green-300",
      )}
      onClick={onClick}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  );
};
