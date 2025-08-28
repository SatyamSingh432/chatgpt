import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Community from "./pages/Community";

function App() {
  return (
    <>
      <div>
        <SideBar />
        <Routes>
          <Route path="/" element={<ChatBox />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
