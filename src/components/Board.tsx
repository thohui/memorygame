import { useEffect, useRef } from "react";
import { useGame } from "../game";
import { Tile } from "./Tile";

export const Board = () => {
  const solution = useGame((state) => state.solution);
  const setAnimating = useGame((state) => state.setAnimating);
  const tiles = useRef<HTMLDivElement[]>(new Array<HTMLDivElement>(9));

  useEffect(() => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, solution.length * 650);

    solution.forEach((tile, index) => {
      setTimeout(() => {
        tiles.current[tile].animate({
          backgroundColor: "rgb(248 113 113)",
        }, {
          duration: 500,
          iterations: 1,
        });
      }, (index + 1) * 600);
    });
  }, [solution]);

  return (
    <div className="place-items-center grid grid-cols-3 gap-5">
      {[...Array(9)].map((_, i) => (
        <Tile
          key={i}
          id={i}
          ref={(el) => (tiles.current[i] = el as HTMLDivElement)}
        />
      ))}
    </div>
  );
};
