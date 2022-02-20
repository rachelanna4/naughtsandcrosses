import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [playerTurn, setPlayerTurn] = useState("⭕️");
  const [playerScores, setPlayerScores] = useState({ "⭕️": 0, "❌": 0 });

  return (
    <div>
      <Header playerTurn={playerTurn} playerScores={playerScores} />
      <Game
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        setPlayerScores={setPlayerScores}
      />
    </div>
  );
}

export default App;
