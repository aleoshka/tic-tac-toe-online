import { useState } from "react";
import { GameField, GameInfo, GameTitle, Header } from "../components";
import { useGameState } from "../hooks/useGameState";

export default function HomePage() {
  const [playersAmount] = useState(4);
  const { currentStep, nextStep, cells, handleClick } =
    useGameState(playersAmount);

  return (
    <div className="bg-slate-50 min-h-screen pb-30">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersAmount={playersAmount} />
        <GameInfo
          playersAmount={playersAmount}
          currentStep={currentStep}
          className="mt-4 py-4"
        />
        <GameField
          currentStep={currentStep}
          nextStep={nextStep}
          cells={cells}
          handleClick={handleClick}
          className="mt-6 py-6"
        />
      </main>
    </div>
  );
}
