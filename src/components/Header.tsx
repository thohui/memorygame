import { useEffect, useState } from "react";
import { useGame } from "../game";

export const Header = () => {
  const { score, gameover, reset } = useGame((state) => ({
    score: state.level,
    gameover: state.gameover,
    reset: state.reset,
  }));
  const [highscore, setHighscore] = useState(score);
  //TODO: persist high score in localstorage

  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
    }
  }, [score, highscore]);

  return (
    <div className="flex w-full flex-col items-center font-mono font-extrabold text-lg">
      <p>Score: {score}</p>
      <p>High score: {highscore}</p>
      {gameover && (
        <p className="text-red-700">
          You lost! click <button onClick={reset} className="text-blue-600">here</button> to restart!
        </p>
      )}
    </div>
  );
};
