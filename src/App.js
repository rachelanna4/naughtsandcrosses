import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [playerTurn, setPlayerTurn] = useState("⭕️");
  const [playerScores, setPlayerScores] = useState({ "⭕️": 0, "❌": 0 });
  const [redirect, setRedirect] = useState(false);

  return (
    <div className="main">
      <Header playerTurn={playerTurn} redirect={redirect} />
      <Game
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        setPlayerScores={setPlayerScores}
        redirect={redirect}
        setRedirect={setRedirect}
      />
    </div>
  );
}

export default App;
