import { useState } from "react";
import Rules from "../src/components/Rules";
import { useGame } from "../src/contexts/GameContext";
import LeaderBoard from "../src/components/LeaderBoard";
import { useNavigate } from "react-router-dom";

function StartScreen() {
  const { difficulty, setMazeSize, MazeInput, setCurrentMaze, setStatus } =
    useGame();
  const [userName, setUserName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const navigate = useNavigate();
  function handleDifficultyLevel(e) {
    setMazeSize(Number(e.target.value));
  }
  function handleClick() {
    const V = MazeInput();
    setCurrentMaze(V);
    setStatus("active");
    navigate("/mazepage");
  }

  return (
    <div className="d-flex flex-row justify-content-between">
      <div>
        <h2>Welcome to the Pacman!</h2>
        <Rules />
        <form>
          <div>
            <label>
              <h2>Username: </h2>
            </label>
            <input
              style={{ fontSize: 30 }}
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value.toUpperCase())}
            ></input>
          </div>
          <div>
            <label>
              <h2>Enrollment: </h2>
            </label>
            <input
              style={{ fontSize: 30 }}
              type="text"
              placeholder="21UCS108"
              value={enrollment}
              onChange={(e) => setEnrollment(e.target.value.toUpperCase())}
            ></input>
          </div>
        </form>

        <div>
          <label htmlFor="difficulty" style={{ fontSize: "20px" }}>
            Difficulty Level:
          </label>
          <select
            id="difficulty"
            style={{ fontSize: "20px" }}
            value={difficulty}
            onChange={handleDifficultyLevel}
          >
            <option value="5">Easy</option>
            <option value="7">Medium</option>
            <option value="9">Hard</option>
          </select>
        </div>

        <button
          className="btn btn-ui"
          style={{ marginTop: "100px" }}
          onClick={handleClick}
        >
          Let's Start
        </button>
      </div>
      <div>
        <LeaderBoard />
      </div>
    </div>
  );
}

export default StartScreen;
