import Header from "../src/components/Header";
import Maze from "../src/components/Maze";
import Timer from "../src/components/Timer";
import SubmitButton from "../src/components/SubmitButton";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";
import { useGame } from "../src/contexts/GameContext";
import { useEffect } from "react";

function MazePage() {
  const { status, inputString, setInputString } = useGame();
  useEffect(function () {
    setInputString("");
  }, []);
  return (
    <div
      style={{
        backgroundColor: "rgba(245,187,42, 0.9)",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1px",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="mazePage"
    >
      <Header />
      <div
        style={{
          display: "flex",
        }}
      >
        <Timer />
      </div>
      <Main>
        <Maze />
        <div style={{display : "flex", flexDirection : "row", alignItems : "center", gap : "20px", width : "100%", justifyContent : "center"}}>
          <Footer>
            <form>
              <input
                value={inputString}
                style={{ fontSize: "20px", width : "400px", padding :"10px", borderRadius : "5px", border : "1px solid #ccc", boxShadow : "0 2px 4px rgba(0, 0, 0, 0.1)"}}
                type="text"
                placeholder="Your Answer"
                onChange={(e) => setInputString(e.target.value.toUpperCase())}
                disabled={status !== "ready"}
              />
            </form>
          </Footer>
          <SubmitButton />
        </div>
      </Main>
    </div>
  );
}

export default MazePage;
