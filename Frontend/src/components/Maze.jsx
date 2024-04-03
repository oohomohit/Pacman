import { useGame } from "../contexts/GameContext";
import styles from "./Maze.module.css";

function Maze() {
  const { currentMaze, status } = useGame();
  return (
    <div style={{ display : "flex", justifyContent : "center", opacity: status === "ready" ? "1" : "" }}>
      <ul style={{ listStyleType: "none" }} className={styles.container}>
        {currentMaze.matrix.map((row, rowIndex) => (
          <li key={rowIndex}>
            {row.map((cell, colIndex) => (
              <span
              className={styles.item}
              key={colIndex}
              style={{
                background: cell === 1 ? '#A0153E' : cell === 0 ? '#1A1E68' : '#D6D6D6',
                // display: 'inline-flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                // width: '30px', // Adjust width as needed
                // height: '30px', // Adjust height as needed
                // color: '#fff', // Text color
              }}
            >
              {cell === 1 ? '🐾' : cell === 0 ? '‎ ' : cell}
              {/* {cell === 1 ? '1' : cell === 0 ? '0 ' : cell} */}
              {/* {cell} */}
            </span>
            
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Maze;
