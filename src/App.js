import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liked" element={<Liked />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
