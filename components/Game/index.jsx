import { useGameState } from "../../hooks/useGameState";
import { GameCell } from "../GameCell";
import { GameInfo } from "../GameInfo";
import { ResetButton } from "../ResetButton";

export const Game = () => {
  const {
    cells,
    currentStep,
    winnerSeq,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
  } = useGameState();

  return (
    <div
      className={
        "flex flex-col items-center w-72 mx-auto my-24 p-5 border border-black"
      }
    >
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />

      <div className="grid grid-cols-[repeat(3,_40px)] grid-rows-[repeat(3,_40px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            onClick={() => handleCellClick(index)}
            isWinner={winnerSeq && winnerSeq.includes(index)}
          />
        ))}
      </div>
      <ResetButton onCLick={handleResetClick} />
    </div>
  );
};
