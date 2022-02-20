import { useState } from "react";

const Game = ({ playerTurn, setPlayerTurn }) => {
  const tileSymbols = {
    1: "",
    "1clicked": false,
    2: "",
    "2clicked": false,
    3: "",
    "3clicked": false,
    4: "",
    "4clicked": false,
    5: "",
    "5clicked": false,
    6: "",
    "6clicked": false,
    7: "",
    "7clicked": false,
    8: "",
    "8clicked": false,
    9: "",
    "9clicked": false,
  };

  const [gameSymbol, setGameSymbol] = useState(tileSymbols);
  const playerClick = (boxId) => {
    if (playerTurn == 1) {
      console.log("playerOne");
      setGameSymbol((prev) => {
        const newObj = { ...prev };
        newObj[`${boxId}clicked`] = true;
        newObj[boxId] = "⭕️";
        return newObj;
      });
      setPlayerTurn(2);
    } else {
      setGameSymbol((prev) => {
        const newObj = { ...prev };
        newObj[boxId] = "❌";
        newObj[`${boxId}clicked`] = true;
        console.log(newObj);
        return newObj;
      });
      setPlayerTurn(1);
    }
  };

  return (
    <div>
      <h2>Noughts and Crosses</h2>
      <div className="gameBoard">
        <div
          className={`Box`}
          onClick={() => {
            if (gameSymbol["1clicked"] == false) {
              playerClick(1);
            }
          }}
        >
          <p>{gameSymbol[1]}</p>
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if (gameSymbol["2clicked"] == false) {
              playerClick(2);
            }
          }}
        >
          <p>{gameSymbol[2]}</p>
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if(gameSymbol["3clicked"] == false) {
              playerClick(3); 
            }
          }}
        >
          <p>{gameSymbol[3]}</p>
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if(gameSymbol["4clicked"] == false) {
              playerClick(4); 
            }
          }}
        >
          <p>{gameSymbol[4]}</p>
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if(gameSymbol["5clicked"] == false) {
              playerClick(5); 
            }
          }}
        >
          <p>{gameSymbol[5]}</p>
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if(gameSymbol["6clicked"] == false) {
              playerClick(6); 
            }
          }}
        >
          <p>{gameSymbol[6]}</p>
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if(gameSymbol["7clicked"] == false) {
              playerClick(7); 
            }
          }}
        >
          <p>{gameSymbol[7]}</p>
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if(gameSymbol["8clicked"] == false) {
              playerClick(8); 
            }
          }}
        >
          <p>{gameSymbol[8]}</p>
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if(gameSymbol["9clicked"] == false) {
              playerClick(9); 
            }
          }}
        >
          <p>{gameSymbol[9]}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
