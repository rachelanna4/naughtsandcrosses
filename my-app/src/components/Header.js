const Header = ({ playerTurn }) => {
  return (
    <header>
      <h1>Welcome to our terrible game</h1>

      <h2>player{playerTurn}'s turn</h2>
    </header>
  );
};

export default Header;
