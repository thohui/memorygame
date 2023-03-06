import classNames from "classnames";
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
    if (!animating) {
      processInput(props.id);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={classNames(
        "md:w-[200px]",
        "md:h-[200px]",
        "sm:w-[175px]",
        "sm:h-[175px]",
        "w-[100px]",
        "h-[100px]",
        "bg-red-100",
        {
          "cursor-pointer": !animating,
          "active:bg-red-400": !animating,
        },
      )}
    >
    </div>
  );
});
