import React from "react";
import { useGame } from "../game";

interface Props {
  id: number;
}

export const Tile = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { animating, processInput } = useGame((state) => ({
    animating: state.animating,
    processInput: state.processInput,
  }));

  const handleClick = () => {
    if (animating) {
      return;
    }
    processInput(props.id);
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className="w-1/2 h-1/2 bg-red-100 active:bg-red-400 cursor-pointer"
    >
    </div>
  );
});
