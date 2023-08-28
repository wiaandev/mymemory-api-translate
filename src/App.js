import "./Assets/base.scss";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom"; // using React Router Framework to enable client-side routing from page to page
import Translate from "./Pages/Translate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/translate" element={<Translate />}></Route>
      {/* <Route path="/character" element={<CharacterPage />}></Route> */}
    </Routes>
  );
}

export default App;
