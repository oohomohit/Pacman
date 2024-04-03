import { useGame } from "../contexts/GameContext";

const EasyDummydata = [
  {
    username: "Vidya Sagar",
    enroll: "21UCS108",
    score: 98,
  },
  {
    username: "Mohit",
    enroll: "21UCS109",
    score: 89,
  },
  {
    username: "Govind",
    enroll: "21UCS087",
    score: 99,
  },
  {
    username: "Chetan",
    enroll: "21UCS123",
    score: 99,
  },
];
const MediumDummydata = [
  {
    username: "Vidya Sagar",
    enroll: "21UCS108",
    score: 95,
  },
  {
    username: "Mohit",
    enroll: "21UCS109",
    score: 79,
  },
  {
    username: "Govind",
    enroll: "21UCS087",
    score: 85,
  },
];
const HardDummydata = [
  {
    username: "Vidya Sagar",
    enroll: "21UCS108",
    score: 76,
  },
  {
    username: "Mohit",
    enroll: "21UCS109",
    score: 98,
  },
];

function LeaderBoard() {
  const { LeaderBoard } = useGame();
  EasyDummydata.sort((a, b) => {
    return b.score - a.score;
  });
  MediumDummydata.sort((a, b) => {
    return b.score - a.score;
  });
  HardDummydata.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <div>
      <h1 style={{width : "100%", display: "flex", justifyContent: "center"}}>Leaderboard</h1>
      <div style={{ display: "flex", gap: "100px" }}>
  <div >
    <div style={{fontSize : "2rem", fontWeight : "bold"}}>Easy Level</div>
    <table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {EasyDummydata.slice(0, 3).map((obj, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{obj.username}</td>
            <td>{obj.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div >
    <div style={{fontSize : "2rem", fontWeight : "bold"}}>Medium Level</div>
    <table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {MediumDummydata.slice(0, 3).map((obj, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{obj.username}</td>
            <td>{obj.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div >
    <div style={{fontSize : "2rem", fontWeight : "bold"}}>Hard Level</div>
    <table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {HardDummydata.slice(0, 3).map((obj, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{obj.username}</td>
            <td>{obj.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
}

export default LeaderBoard;
