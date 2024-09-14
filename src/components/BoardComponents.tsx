import React, { FC, useEffect, useState } from 'react';
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import CellComponents from './CellComponents';
import { Player } from '../modules/Player';

interface IBoard {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponents: FC<IBoard> = ({
  board,
  setBoard,
  swapPlayer,
  currentPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      updateBoard();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }
  return (
    <div>
    <h3>Текущий игрок {currentPlayer?.color}</h3>
      <div className="board">
        {board.cells.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((cell) => (
              <CellComponents
                click={click}
                cell={cell}
                key={cell.id}
                selected={
                  cell.x === selectedCell?.x &&
                  cell.y === selectedCell?.y
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardComponents;
