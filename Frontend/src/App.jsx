import StartScreen from "../pages/StartScreen";
import MazePage from "../pages/MazePage";
import FinishScreen from "../pages/FinishScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="mazepage" element={<MazePage />} />
        <Route path="result" element={<FinishScreen />} />
      </Routes>
    </div>
  );
}

export default App;
