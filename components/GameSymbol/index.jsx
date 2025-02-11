import { clsx } from "clsx";
import { SYMBOL_O, SYMBOL_X } from "../../constants";

export const GameSymbol = ({ symbol }) => {
  const getSymbolClass = (symbol) => {
    if (symbol === SYMBOL_X) return "text-red-600";
    if (symbol === SYMBOL_O) return "text-green-600";

    return "";
  };

  return (
    <span className={clsx("text-3xl", getSymbolClass(symbol))}>{symbol}</span>
  );
};
