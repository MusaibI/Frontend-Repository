import { useState } from "react";

export const initialBoard = Array(9).fill(null);
export const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const WINNER_ARRAY = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNER_ARRAY.length; i++) {
      const [a, b, c] = WINNER_ARRAY[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins`;
    if (!board.includes(null)) `It is a draw`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  };
  const handleClick = (index) => {
    const winner = calculateWinner(board);
    console.log("fggg", winner);
    if (winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  const resetButton = () => {
    setBoard(initialBoard);
  };

  return { board, isXNext, handleClick, resetButton, getStatusMessage };
};
