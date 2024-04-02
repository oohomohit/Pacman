import { useEffect } from "react";
import { useGame } from "../contexts/GameContext";

function Timer() {
  const { secondsRemaining, setSecondsRemaining, status, setStatus } =
    useGame();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      if (status === "ready") return;
      if (secondsRemaining === 0) {
        setStatus("ready");
      }
      const id = setInterval(function () {
        setSecondsRemaining((cur) => cur - 1);
      }, 1000);
      return () => clearInterval(id);
    },
    [status, secondsRemaining, setStatus, setSecondsRemaining]
  );

  return (
    <div className="timer">
      {mins < 10 ? "0" : ""}
      {mins}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}

export default Timer;
