import { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../modules/Player';
import { Colors } from '../modules/Colors';

interface ITimer {
  currentPlayer: Player | null;
  restart: () => void;
}
export const Timer: FC<ITimer> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    handleTimer();
  }, [currentPlayer]);

  // таймер
  function handleTimer() {
    if (timer.current) clearInterval(timer.current);
    //переключение таймера у игроков
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    //частота обновления таймера
    timer.current = setInterval(() => {
      callback();
    }, 1000);

    // остановка игры
    function isGameOver(): boolean {
      console.log(`blackTime: ${blackTime}, whiteTime: ${whiteTime}`);
      return blackTime === 0 || whiteTime === 0;
    }

    const handleGameOver = () => {
      const loserMessage =
        blackTime === 0 ? 'Черные проиграли' : 'Белые проиграли';
      alert(loserMessage);
      if (timer.current) clearInterval(timer.current);
      restart();
    };
  }

  //УМЕНЬШЕНИЕ ВРЕМЕНИ У ЧЕРНЫХ
  function decrementBlackTimer() {
    setBlackTime((prev) => {
      if (prev === 0 && timer.current) {
        clearInterval(timer.current);
      }
      return prev - 1;
    });
  }
  //УМЕНЬШЕНИЕ ВРЕМЕНИ У БЕЛЫХ
  function decrementWhiteTimer() {
    setWhiteTime((prev) => {
      if (prev === 0 && timer.current) {
        clearInterval(timer.current);
      }
      return prev - 1;
    });
  }

  //РЕСТАРТ
  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};
