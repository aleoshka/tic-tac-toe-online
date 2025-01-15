import { GameSymbol } from "../GameSymbol";

export const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  if (isDraw) {
    return <div className="mb-4">Ничья!</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-4">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-4">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
};
