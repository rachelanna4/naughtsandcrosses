export const checkWin = (gameBoard) => {
  /*
Horizontal
  1 2 3
  4 5 6
  7 8 9

  Vertical
  1 4 7
  2 5 8
  3 6 9

  Diagonal

  1 5 9
  3 5 7
*/

  console.log(horizontalCheck(gameBoard), "<<<<<<<<<");
};

const horizontalCheck = (gameBoard) => {
  const oneToThree = [gameBoard[1], gameBoard[2], gameBoard[3]];
  const fourToSix = [gameBoard[4], gameBoard[5], gameBoard[6]];
  const sevenToNine = [gameBoard[7], gameBoard[8], gameBoard[9]];

  if (
    oneToThree.every((element) => element === "⭕️") ||
    oneToThree.every((element) => element === "❌")
  ) {
    return true;
  }
  if (
    oneToThree.every((element) => element === "⭕️") ||
    oneToThree.every((element) => element === "❌")
  ) {
    return true;
  } else if (
    fourToSix.every((element) => element === "⭕️") ||
    fourToSix.every((element) => element === "❌")
  ) {
    return true;
  } else if (
    sevenToNine.every((element) => element === "⭕️") ||
    sevenToNine.every((element) => element === "❌")
  ) {
    return true;
  } else {
    return false;
  }
}; // func end

// const verticalCheck = (gameBoard) => {
//   const oneToSeven = [gameBoard[1], gameBoard[4], gameBoard[7]]
//   const twoToEight = [gameBoard[2], gameBoard[5], gameBoard[8]]
//   const threeToNine = [gameBoard[3], gameBoard[6], gameBoard[9]]

//   if () {

//   } else if () {

//   } else if () {

//   } else {
//     return false
//   }
// };

const diagonalCheck = () => {};
