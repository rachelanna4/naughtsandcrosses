import { useState } from "react";

const Game = ({playerTurn, setPlayerTurn}) => {
  const tileSymbols = {
    1: "",
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
      console.log("playerOne")
      setGameSymbol((prev)=>{
        console.log(prev)
        const newObj = {...prev}
        newObj[boxId] = "⭕️"
        console.log(newObj)
        return newObj
      })
      setPlayerTurn(2)
    } else {
      setGameSymbol((prev)=>{
        console.log(prev)
        const newObj = {...prev}
        newObj[boxId] = "❌"
        console.log(newObj)
        return newObj
      })
      setPlayerTurn(1)

      
    }
    
  };

  return (
    <div>
      <h2>Noughts and Crosses</h2>
      <div className="gameBoard">
        <div className={`Box`} onClick={(e) => {
          playerClick(1)}
        }>
        <p>{gameSymbol[1]}</p>
        </div>
        <div className={`Box`} onClick={() => {playerClick(2)}}>
        <p>{gameSymbol[2]}</p>
        </div>
        <div className={`Box`} onClick={() => {playerClick(3)}}>
        <p>{gameSymbol[3]}</p>
        </div>
        <div className={`Box`} onClick={() => {playerClick(4)}}>
        <p>{gameSymbol[4]}</p>
        </div>
        <div className={`Box`} onClick={() => {playerClick(5)}}>
        <p>{gameSymbol[5]}</p>
        </div>
        <div className={`Box`} onClick={() => {playerClick(6)}}>
        <p>{gameSymbol[6]}</p>
        </div>
        <div className={`Box`} onClick={() => {playerClick(7)}}>
        <p>{gameSymbol[7]}</p>
        </div>
        <div className={`Box`} onClick={() => {playerClick(8)}}>
        <p>{gameSymbol[8]}</p>
        </div>
        <div className={`Box`} onClick={() => {playerClick(9)}}>
        <p>{gameSymbol[9]}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Game;
