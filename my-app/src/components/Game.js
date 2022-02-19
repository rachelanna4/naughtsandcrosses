import { useState } from "react";

const Game = (playerTurn, setPlayerTurn) => {
  const tileSymbols = {
    1: "❌",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  };

  const [gameSymbol, setGameSymbol] = useState(tileSymbols);

  const playerClick = (boxId) => {
    if (playerTurn == 1) {
      tileSymbols[boxId] = "⭕️";
    } else {
      tileSymbols[boxId] = "❌";
    }
  };

  return (
    <div>
      <h2>Noughts and Crosses</h2>
      <div className="gameBoard">
        <div className={`Box ${tileSymbols[1]}`} id="1">
          <p>{tileSymbols[1]}</p>
        </div>
        <div className="Box" id="2">
          2
        </div>
        <div className="Box" id="3">
          3
        </div>
        <div className="Box" id="4">
          4
        </div>
        <div className="Box" id="5">
          5
        </div>
        <div className="Box" id="6">
          6
        </div>
        <div className="Box" id="7">
          7
        </div>
        <div className="Box" id="8">
          8
        </div>
        <div className="Box" id="9">
          9
        </div>
      </div>
    </div>
  );
};

export default Game;
