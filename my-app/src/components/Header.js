const Header = ({ playerTurn, playerScores }) => {
  return (
    <header>
      <h1>Welcome to our terrible game</h1>
      <h2>
        Player ⭕️ Score: {playerScores["⭕️"]} Player ❌ Score:{" "}
        {playerScores["❌"]}{" "}
      </h2>
      <h3>player{playerTurn}'s turn</h3>
    </header>
  );
};

export default Header;
