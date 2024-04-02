import {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { EasyData } from "../data/EasyData";
import { MediumData } from "../data/MediumData";
import { HardData } from "../data/HardData";
const GameContext = createContext();

const initialState = {
  status: "loading",
  secondsRemaining: 30,
  currentMaze: [],
  points: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, currentMaze: action.payload, status: "active" };
    case "tick":
      return { ...state, secondsRemaining: state.secondsRemaining - 1 };
    case "ready":
      return { ...state, status: "ready" };
    case "submit":
      return {
        ...state,
        status: "submit",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restart":
      return {
        ...initialState,
        highScore: state.highScore,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function GameProvider({ children }) {
  const [
    { secondsRemaining, currentMaze, points, highScore, status },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [mazeSize, setMazeSize] = useState(5);
  const [inputString, setInputString] = useState("");
  const [difficulty, setDifficulty] = useState(5);
  const [leaderBoard, setLeaderBoard] = useState({});

  function MazeInput() {
    const V = [];

    for (let i = 0; i < mazeSize; i++) {
      const row = Array(mazeSize).fill(0);
      V.push(row);
    }
    const randomData =
      difficulty === 5
        ? EasyData
        : difficulty === 7
        ? MediumData
        : difficulty === 9
        ? HardData
        : "";
    let Idx = Math.floor(Math.random() * randomData.length);
    for (let i = 0; i < randomData[Idx].Coordinates.length; i++) {
      V[randomData[Idx].Coordinates[i][0]][
        randomData[Idx].Coordinates[i][1]
      ] = 1;
    }
    V[randomData[Idx].Start[0]][randomData[Idx].Start[1]] = "🐰";
    V[randomData[Idx].End[0]][randomData[Idx].End[1]] = "🚩";
    return V;
  }

  return (
    <GameContext.Provider
      value={{
        secondsRemaining,
        currentMaze,
        points,
        highScore,
        status,
        inputString,
        mazeSize,
        difficulty,
        leaderBoard,
        setLeaderBoard,
        setMazeSize,
        setDifficulty,
        setInputString,
        dispatch,
        MazeInput,
        reducer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { useGame, GameProvider };
