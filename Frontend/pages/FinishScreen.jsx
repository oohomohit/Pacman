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
    setUserName,
    setEnroll,
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
    setEnroll("");
    setUserName("");
    navigate("/start");
  }

  function handleLogout() {
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
          <h3>Your Answer: {inputString} </h3>
          <h3>
            <strong style={{ color: "green" }}>Correct Answer:</strong>{" "}
            {currentMaze.Path}
          </h3>
        </>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button className="btn btn-ui" onClick={handleRestart}>
          Restart Game
        </button>
        <button
          style={{ marginLeft: "10px" }}
          className="btn btn-ui"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
}
export default FinishScreen;
