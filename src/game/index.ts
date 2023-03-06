import { create } from "zustand";

interface State {
  animating: boolean;
  gameover: boolean;
  level: number;
  solution: number[];
  solutionIndex: number;
  setAnimating: (value: boolean) => void;
  nextLevel: () => void;
  processInput: (tile: number) => void;
  reset: () => void;
}

const randomizeTile = (previous = -1) => {
  let tile = Math.floor(Math.random() * 100) % 9;
  while (tile === previous) {
    tile = Math.floor(Math.random() * 100) % 9;
  }
  return tile;
};

export const useGame = create<State>((set, get) => ({
  animating: false,
  gameover: false,
  level: 0,
  solution: [randomizeTile()],
  solutionIndex: 0,
  setAnimating: (value) => set(() => ({ animating: value })),
  nextLevel: () =>
    set((state) => ({
      level: state.level + 1,
      solution: [
        ...state.solution,
        randomizeTile(state.solution[state.solution.length - 1]),
      ],
      solutionIndex: 0,
    })),
  processInput: (tile) => {
    const store = get();
    const isCorrect = store.solution[store.solutionIndex] === tile;
    if (!isCorrect) {
      set({ gameover: true });
      return;
    }
    if (store.solutionIndex === store.solution.length - 1) {
      store.nextLevel();
      return;
    }
    set((state) => ({ solutionIndex: state.solutionIndex + 1 }));
  },
  reset: () =>
    set(() => ({
      gameover: false,
      animating: false,
      level: 0,
      solution: [randomizeTile()],
      solutionIndex: 0,
    })),
}));
