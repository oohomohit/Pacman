import { useNavigate } from "react-router-dom";
import { useGame } from "../src/contexts/GameContext";

function FinishScreen() {
  const navigate = useNavigate();
  const {
    secondsRemaining,
    miliSecondsRemaining,
    inputString,
    currentMaze,
    mazeSize,
    setSecondsRemaining,
    setMiliSecondsRemaining,
    setUserName,
    setEnroll,
    setStatus,
    setMazeSize,
  } = useGame();

  let Ans = true;
  let row = currentMaze.Start[0];
  let col = currentMaze.Start[1];
  let points=0;
  console.log("userGame ", useGame());
  for (let i = 0; i < inputString.length; i++) {
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

    if (inputString[i] !== 'U' && inputString[i] !== 'D' && inputString[i] !== 'L' && inputString[i] !== 'R') {
      Ans = false;
      break;
    }

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
  
  if (Ans && currentMaze.matrix[row][col] === "🚩") {
    console.log("points -> ", "yes correct hai ");

    points = secondsRemaining * 1000;
    points+=(miliSecondsRemaining);
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
    <div style={{
      marginTop: "12rem",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#f5bb2a",
      border: "1px solid #ccc",
      width: "50%",
      minHeight: "300px",
      borderRadius: "5px",
    }}>
      <p className="result">
        {emoji} You have scored <strong>{points}</strong> out of 30000
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
          justifyContent: "center",
          gap: "10px",
          marginTop: "10rem",
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
    </div>
  );
}
export default FinishScreen;
