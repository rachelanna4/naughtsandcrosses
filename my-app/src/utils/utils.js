export const checkWin = (gameBoard) => {
  if (
    verticalCheck(gameBoard) ||
    horizontalCheck(gameBoard) ||
    diagonalCheck(gameBoard)
  ) {
    return true;
  }
  return false;
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

const verticalCheck = (gameBoard) => {
  const oneToSeven = [gameBoard[1], gameBoard[4], gameBoard[7]];
  const twoToEight = [gameBoard[2], gameBoard[5], gameBoard[8]];
  const threeToNine = [gameBoard[3], gameBoard[6], gameBoard[9]];

  if (
    oneToSeven.every((element) => element === "⭕️") ||
    oneToSeven.every((element) => element === "❌")
  ) {
    return true;
  } else if (
    twoToEight.every((element) => element === "⭕️") ||
    twoToEight.every((element) => element === "❌")
  ) {
    return true;
  } else if (
    threeToNine.every((element) => element === "⭕️") ||
    threeToNine.every((element) => element === "❌")
  ) {
    return true;
  } else {
    return false;
  }
};

const diagonalCheck = (gameBoard) => {
  const oneToNine = [gameBoard[1], gameBoard[5], gameBoard[9]];
  const threeToSeven = [gameBoard[3], gameBoard[5], gameBoard[7]];

  if (
    oneToNine.every((element) => element === "⭕️") ||
    oneToNine.every((element) => element === "❌")
  ) {
    return true;
  } else if (
    threeToSeven.every((element) => element === "⭕️") ||
    threeToSeven.every((element) => element === "❌")
  ) {
    return true;
  } else {
    return false;
  }
};
