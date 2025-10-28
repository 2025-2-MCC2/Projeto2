import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Login from "./components/Login";
import CadastroAluno from "./components/CadastroAluno";
import CadastroMentor from "./components/CadastroMentor";
import MentorDashboard from "./components/MentorDashboard";
import "./index.css";
import "./i18n";
import LoginAluno from "./components/LoginAluno";

function App() {
  const location = useLocation(); // pega a rota atual
  const showHeaderFooter = location.pathname === "/"; // true só na Home

  return (
    <>
      {showHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-aluno" element={<CadastroAluno />} />
        <Route path="/cadastro-mentor" element={<CadastroMentor />} />
        <Route path="/dashboard-mentor" element={<MentorDashboard />} />
        <Route path="/login-aluno" element={<LoginAluno />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;
