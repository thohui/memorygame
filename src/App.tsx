import { Board } from "./components/Board";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex justify-center items-center pt-12">
        <Board />
      </div>
    </div>
  );
}

export default App;
