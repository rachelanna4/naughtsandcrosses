import playerAvatar from "../utils/playerAvatar.json";

const Header = ({ playerTurn, redirect }) => {
  return (
    <header className="mainHeader">
      <h1>Noughts & Crosses </h1>
      <div className="scoreMain">
        {/* <img src={playerAvatar.playerOne} alt="Elmo" />
        <img src={playerAvatar.playerTwo} alt="Cookie Monster" /> */}
      </div>
      <h3>
        {/* <img
          className='userIcon'
          alt='Elmo'
          src={
            playerTurn === "⭕️"
              ? playerAvatar.playerOne
              : playerAvatar.playerTwo
          }
        /> */}
        <span
          className={`playerTurnFont  ${
            redirect ? "mattMessage fade-in-image" : ""
          }`}
        >
          {" "}
          {!redirect &&
            (playerTurn === "⭕️"
              ? "Player 1 it's your turn"
              : "Player 2 it's your turn")}
          {redirect && "Never gonna give up Rick Rolling you Matt"}
        </span>
      </h3>
    </header>
  );
};

export default Header;
