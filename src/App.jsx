import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Bartend from "./components/Bartend";
import Workshop from "./components/Workshop";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/events" element={<Bartend />} />
      </Routes>
    </>
  );
}

export default App;
