import { useState } from "react";

export const useGameState = (playersAmount) => {
  const [{ currentStep, cells }, setGameState] = useState(() => ({
    currentStep: 0,
    cells: Array(19 * 19).fill(null),
  }));
  const nextStep = (currentStep + 1) % playersAmount;
  console.log(typeof playersAmount);

  const handleClick = (index) => {
    if (cells[index] !== null) return;

    setGameState((prev) => {
      const updatedCells = [...prev.cells];
      updatedCells[index] = currentStep;

      return {
        ...prev,
        currentStep: (prev.currentStep + 1) % playersAmount,
        cells: updatedCells,
      };
    });
  };

  return { currentStep, nextStep, cells, handleClick };
};
