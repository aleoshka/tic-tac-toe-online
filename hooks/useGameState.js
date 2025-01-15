import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "../constants";

export const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }

  return null;
};

export const useGameState = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSeq, setWinnerSeq] = useState(null);

  const handleCellClick = (index) => {
    if (cells[index] || winnerSeq) return;

    const cellsCopy = [...cells];
    cellsCopy[index] = currentStep;

    setCells(cellsCopy);
    setWinnerSeq(computeWinner(cellsCopy));
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
  };

  const handleResetClick = () => {
    setCells(Array(9).fill(null));
    setCurrentStep(SYMBOL_O);
    setWinnerSeq(null);
  };

  const winnerSymbol = winnerSeq && cells[winnerSeq[0]];
  const isDraw = !cells.includes(null);

  return {
    cells,
    currentStep,
    winnerSeq,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
  };
};
