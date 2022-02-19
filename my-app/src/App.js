import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [playerTurn, setPlayerTurn] = useState(1);

  return (
    <div>
      <Header playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Game playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
    </div>
  );
}

export default App;
