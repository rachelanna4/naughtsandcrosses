const Header = ({ playerTurn, playerScores }) => {
  return (
    <header className="mainHeader">
      <h1>Tic Tac Hoe</h1>
      <div className='scoreMain'>
      <h2 className ='score'>
         ⭕️ {playerScores["⭕️"]} 
      </h2>
      <h2 className ='score'>❌ {" "}
      {playerScores["❌"]}{" "}</h2>
      </div>
      <h3>player{playerTurn}'s turn</h3>
    </header>
  );
};

export default Header;
