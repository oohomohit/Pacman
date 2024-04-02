import { useNavigate } from "react-router-dom";
import { useGame } from "../src/contexts/GameContext";

function FinishScreen() {
  const navigate = useNavigate();
  const {
    secondsRemaining,
    inputString,
    currentMaze,
    mazeSize,
    setSecondsRemaining,
    setStatus,
    setMazeSize,
  } = useGame();
  let Ans = true;

  let row = currentMaze.Start[0];
  let col = currentMaze.Start[1];
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "U") {
      row--;
    }
    if (inputString[i] === "D") {
      row++;
    }
    if (inputString[i] === "L") {
      col--;
    }
    if (inputString[i] === "R") {
      col++;
    }
    if (
      row < 0 ||
      col < 0 ||
      row >= mazeSize ||
      col >= mazeSize ||
      currentMaze.matrix[row][col] === 0
    ) {
      Ans = false;
      break;
    }
  }
  let points;
  if (Ans && currentMaze.matrix[row][col] === "🚩") {
    points = secondsRemaining * 4;
  } else {
    points = 0;
  }
  const percentage = points;

  let emoji;
  if (percentage >= 100) emoji = "🥇";
  if (percentage < 100 && percentage >= 80) emoji = "🥳";
  if (percentage < 80 && percentage >= 50) emoji = "🫠";
  if (percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤯";

  function handleRestart() {
    setSecondsRemaining(30);
    setStatus("loading");
    setMazeSize(5);
    navigate("/");
  }
  return (
    <>
      <p className="result">
        {emoji} You have scored <strong>{points}</strong> out of 100
      </p>
      {points === 0 && (
        <>
          <p>Your Answer: {inputString} </p>
          <p>Correct Answer: {currentMaze.Path}</p>
        </>
      )}
      <button className="btn btn-ui" onClick={handleRestart}>
        Restart Game
      </button>
    </>
  );
}
export default FinishScreen;
