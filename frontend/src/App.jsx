import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Login from "./components/Login"; // ou "./Login.jsx"
import "./index.css";
import "./i18n";
import CadastroAluno from "./components/CadastroAluno";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-aluno" element={<CadastroAluno />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

