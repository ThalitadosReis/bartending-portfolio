import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Bartend from "./components/Events";
import Workshop from "./components/Workshop";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/contact" element={<ContactForm />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/events" element={<Bartend />} />
      </Routes>
    </>
  );
}

export default App;
