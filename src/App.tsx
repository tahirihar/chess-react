import { useEffect, useState } from 'react';
import './App.css';
import BoardComponents from './components/BoardComponents';
import { Board } from './modules/Board';
import { Player } from './modules/Player';
import { Colors } from './modules/Colors';
import LostFigures from './components/LostFigures';
import { Timer } from './components/Timer';

function App() {
  const [board, setBoard] = useState(new Board());

  //состояние игроков
  const [whitePlayer, setWhitePlayer] = useState(
    new Player(Colors.WHITE)
  );
  const [blackPlayer, setBlackPlayer] = useState(
    new Player(Colors.BLACK)
  );
  //новый игрок
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(
    null
  );

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE
        ? blackPlayer
        : whitePlayer
    );
  }
  return (
    <div className="app">
      <Timer restart={restart} currentPlayer={currentPlayer} />

      <BoardComponents
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />

      <div>
        <LostFigures
          title="Черные фигуры"
          figures={board.lostBlackFigures}
        />
        <LostFigures
          title="Белые фигуры"
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  );
}

export default App;
