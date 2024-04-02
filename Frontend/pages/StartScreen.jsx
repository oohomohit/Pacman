import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import Rules from "../src/components/Rules";
import { useGame } from "../src/contexts/GameContext";
import LeaderBoard from "../src/components/LeaderBoard";

function StartScreen() {
  const { dispatch, MazeInput, setDifficulty, difficulty, setMazeSize } =
    useGame();
  const [userName, setUserName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  let V = MazeInput();
  async function handleDifficultyLevel(e) {
    setDifficulty(Number(e.target.value));
    setMazeSize(Number(e.target.value));
    V = MazeInput();
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
          onClick={() => dispatch({ type: "start", payload: V })}
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
