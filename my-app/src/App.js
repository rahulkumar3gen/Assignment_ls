import { Route, BrowserRouter, Routes } from "react-router-dom";
import Easy from "./components/easy/Easy";
import Hard from "./components/hard/Hard";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="/hard" element={<Hard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
