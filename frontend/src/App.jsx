import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Login from "./components/Login";
import CadastroAluno from "./components/CadastroAluno";
import CadastroMentor from "./components/CadastroMentor";
import LoginMentor from "./components/LoginMentor";
import MentorDashboard from "./components/MentorDashboard";
import LoginAluno from "./components/LoginAluno";
import Messages from "./components/MentorDashboard/Messages"; 
import Perfil from "./components/MentorDashboard/Perfil";
import Progress from "./components/MentorDashboard/Progress";
import Reports from "./components/MentorDashboard/Reports";
import Student from "./components/AlunoDashboard/Student";
import "./index.css";
import "./i18n";

function App() {
  const location = useLocation();
  const showHeaderFooter = location.pathname === "/";

  return (
    <>
      {showHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-aluno" element={<CadastroAluno />} />
        <Route path="/cadastro-mentor" element={<CadastroMentor />} />
        <Route path="/login-mentor" element={<LoginMentor />} />
        <Route path="/login-aluno" element={<LoginAluno />} />
        <Route path="/dashboard-mentor" element={<MentorDashboard />} />
        <Route path="/dashboard-mentor/messages" element={<Messages />} /> 
        <Route path="/dashboard-mentor/perfil" element={<Perfil />} />
        <Route path="/dashboard-mentor/progress" element={<Progress />} />
        <Route path="/dashboard-mentor/reports" element={<Reports />} />
        <Route path="/dashboard-aluno" element={<Student />} /> {}
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;
