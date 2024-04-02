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
    <>
      <h1>LeaderBoard</h1>
      <div>
        <ol>
          Easy List:
          {EasyDummydata.slice(0, 3).map((obj, idx) => {
            return <li>{`${obj.username} -> ${obj.score}`}</li>;
          })}
        </ol>
      </div>
      <div>
        <ol>
          Medium List:
          {MediumDummydata.slice(0, 3).map((obj, idx) => {
            return <li>{`${obj.username} -> ${obj.score}`}</li>;
          })}
        </ol>
      </div>
      <div>
        <ol>
          Hard List:
          {HardDummydata.slice(0, 3).map((obj, idx) => {
            return <li>{`${obj.username} -> ${obj.score}`}</li>;
          })}
        </ol>
      </div>
    </>
  );
}

export default LeaderBoard;
