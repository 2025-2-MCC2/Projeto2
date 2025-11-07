import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CadastroAluno from "./components/CadastroAluno";
import CadastroMentor from "./components/CadastroMentor";
import LoginMentor from "./components/LoginMentor";
import MentorDashboard from "./components/MentorDashboard";
import LoginAluno from "./components/LoginAluno";
import Messages from "./components/MentorDashboard/Messages";
import Perfil from "./components/MentorDashboard/Perfil";
import Progress from "./components/MentorDashboard/Progress";
import Reports from "./components/MentorDashboard/Reports";
import Mentoring from "./components/MentorDashboard/Mentoring";
import Materials from "./components/MentorDashboard/Materials";
import Config from "./components/MentorDashboard/Config";
import Student from "./components/AlunoDashboard/Student";
import PerfilAluno from "./components/AlunoDashboard/PerfilAluno/PerfilAluno";
import ProgressoAluno from "./components/AlunoDashboard/ProgressoAluno/ProgressoAluno";
import RelatoriosAluno from "./components/AlunoDashboard/RelatoriosAluno/RelatoriosAluno";
import MensagensAluno from "./components/AlunoDashboard/MensagensAluno/MensagensAluno";
import AgendaAluno from "./components/AlunoDashboard/AgendaAluno/AgendaAluno";
import MateriaisAluno from "./components/AlunoDashboard/MateriaisAluno/MateriaisAluno";
import ConfiguracoesAluno from "./components/AlunoDashboard/ConfiguracoesAluno/ConfiguracoesAluno";

// ✅ SUA NOVA PÁGINA DE DOAÇÕES
import MinhasDoacoes from "./components/Doacoes/MinhasDoacoes";

import "./index.css";
import "./i18n";

function App() {
  const location = useLocation();

  const showHeaderFooter = location.pathname === "/";

  return (
    <>
      {showHeaderFooter && <Navbar />}

      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Hero />} />

        {/* Páginas de cadastro e login */}
        <Route path="/cadastro-aluno" element={<CadastroAluno />} />
        <Route path="/cadastro-mentor" element={<CadastroMentor />} />
        <Route path="/login-mentor" element={<LoginMentor />} />
        <Route path="/login-aluno" element={<LoginAluno />} />

        {/* Dashboards */}
        <Route path="/dashboard-mentor" element={<MentorDashboard />} />
        <Route path="/dashboard-mentor/messages" element={<Messages />} />
        <Route path="/dashboard-mentor/perfil" element={<Perfil />} />
        <Route path="/dashboard-mentor/progress" element={<Progress />} />
        <Route path="/dashboard-mentor/reports" element={<Reports />} />
        <Route path="/dashboard-mentor/mentoring" element={<Mentoring />} />
        <Route path="/dashboard-mentor/materials" element={<Materials />} />
        <Route path="/dashboard-mentor/config" element={<Config />} />

        {/* 🧩 DASHBOARD DO ALUNO */}
        <Route path="/dashboard-aluno" element={<Student />} />
        <Route path="/dashboard-aluno/inicio" element={<InicioAluno />} />
        <Route path="/dashboard-aluno/perfil" element={<PerfilAluno />} />
        <Route path="/dashboard-aluno/progresso" element={<ProgressoAluno />} />
        <Route path="/dashboard-aluno/relatorios" element={<RelatóriosAluno />} />
        <Route path="/dashboard-aluno/mensagens" element={<MensagensAluno />} />
        <Route path="/dashboard-aluno/agenda" element={<AgendaAluno />} />
        <Route path="/dashboard-aluno/materiais" element={<MateriaisAluno />} />
        <Route path="/dashboard-aluno/configuracoes" element={<ConfiguraçõesAluno />} />

        {/* ✅ SUA NOVA PÁGINA DE DOAÇÕES */}
        <Route path="/Doacoes" element={<MinhasDoacoes />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;
