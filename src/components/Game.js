import { useState, useEffect } from "react";
import { checkWin } from "../utils/utils";
import playerAvatar from "../utils/playerAvatar.json";

const Game = ({
  playerTurn,
  setPlayerTurn,
  setPlayerScores,
  redirect,
  setRedirect,
}) => {
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
  const [hasWon, setHasWon] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState("");

  useEffect(() => {
    setHasWon(checkWin(gameSymbol));
  }, [gameSymbol]);

  const playerClick = (boxId) => {
    if (playerTurn === "⭕️") {
      setGameSymbol((prev) => {
        const newObj = { ...prev };
        newObj[`${boxId}clicked`] = true;
        newObj[boxId] = "⭕️";
        return newObj;
      });
      setPlayerTurn("❌");
      setWinningPlayer("⭕️");
    } else {
      setGameSymbol((prev) => {
        const newObj = { ...prev };
        newObj[boxId] = "❌";
        newObj[`${boxId}clicked`] = true;
        return newObj;
      });

      setPlayerTurn("⭕️");
      setWinningPlayer("❌");
    }
    setRedirect(true);
    setTimeout(() => {
      window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 4000);
  };

  const resetGame = () => {
    if (hasWon) {
      setPlayerScores((prev) => {
        const newObj = { ...prev };
        newObj[winningPlayer]++;
        return newObj;
      });
    }
    setGameSymbol(tileSymbols);
    setHasWon(false);
    setPlayerTurn("⭕️");
    setWinningPlayer("");
  };

  return (
    <div>
      <div className="gameBoard">
        <div
          className={`Box invisible-top invisible-left`}
          onClick={() => {
            if (gameSymbol["1clicked"] === false && hasWon === false) {
              playerClick(1);
              // gameSymbol[1] === "⭕️"
              //   ? test = playerAvatar.playerOne
              //   : test =playerAvatar.playerTwo
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["1clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[1] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
        <div
          className={`Box invisible-top`}
          onClick={() => {
            if (gameSymbol["2clicked"] === false && hasWon === false) {
              playerClick(2);
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["2clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[2] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
        <div
          className={`Box invisible-top invisible-right`}
          onClick={() => {
            if (gameSymbol["3clicked"] === false && hasWon === false) {
              playerClick(3);
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["3clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[3] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
        <div
          className={`Box invisible-left`}
          onClick={() => {
            if (gameSymbol["4clicked"] === false && hasWon === false) {
              playerClick(4);
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["4clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[4] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
        <div
          className={`Box`}
          onClick={() => {
            if (gameSymbol["5clicked"] === false && hasWon === false) {
              playerClick(5);
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["5clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[5] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
        <div
          className={`Box invisible-right`}
          onClick={() => {
            if (gameSymbol["6clicked"] === false && hasWon === false) {
              playerClick(6);
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["6clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[6] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
        <div
          className={`Box invisible-bottom invisible-left `}
          onClick={() => {
            if (gameSymbol["7clicked"] === false && hasWon === false) {
              playerClick(7);
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["7clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[7] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
        <div
          className={`Box invisible-bottom`}
          onClick={() => {
            if (gameSymbol["8clicked"] === false && hasWon === false) {
              playerClick(8);
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["8clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[8] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
        <div
          className={`Box invisible-bottom invisible-right`}
          onClick={() => {
            if (gameSymbol["9clicked"] === false && hasWon === false) {
              playerClick(9);
            }
          }}
        >
          <img
            className={`fade-in-image ${
              gameSymbol["9clicked"] ? "" : "invisible"
            }`}
            alt="Elmo"
            src={
              gameSymbol[9] === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
        </div>
      </div>
      {hasWon ? (
        <h4 className="footer">
          <img
            className="winnerIcon"
            alt="Elmo"
            src={
              winningPlayer === "⭕️"
                ? playerAvatar.playerOne
                : playerAvatar.playerTwo
            }
          />
          <span className="winnerText">is the winner!</span>
        </h4>
      ) : null}
      <div className="resetButton">
        <button
          onClick={() => {
            resetGame();
          }}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Game;
