import playerAvatar from "../utils/playerAvatar.json";

const Header = ({ playerTurn, playerScores }) => {
  return (
    <header className='mainHeader'>
      <h1>Noughts & Cookies </h1>
      <div className='scoreMain'>
        {/* <img src={playerAvatar.playerOne} alt="Elmo" />
        <img src={playerAvatar.playerTwo} alt="Cookie Monster" /> */}
      </div>
      <h3>
        <img
          className='userIcon'
          alt='Elmo'
          src={
            playerTurn === "⭕️"
              ? playerAvatar.playerOne
              : playerAvatar.playerTwo
          }
        />
        <span className='playerTurnFont'> Your turn</span>
      </h3>
    </header>
  );
};

export default Header;
