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
import PerfilAluno from "./components/AlunoDashboard/PerfilAluno";
import ProgressoAluno from "./components/AlunoDashboard/ProgressoAluno";
import RelatoriosAluno from "./components/AlunoDashboard/RelatoriosAluno";
import MensagemAluno from "./components/AlunoDashboard/Tarefas/Mensagem";
import AgendaAluno from "./components/AlunoDashboard/Tarefas/agenda";
import MateriaisAluno from "./components/AlunoDashboard/Tarefas/material";
import ConfiguracoesAluno from "./components/AlunoDashboard/Tarefas/config";



import NavbarDoacoes from "./components/Doacoes/NavbarDoacoes";
import MinhasDoacoes from "./components/Doacoes/MinhasDoacoes";
import Campanhas from "./components/Doacoes/Campanhas";
import SobreNos from "./components/Doacoes/SobreNos";
import PerfilDoador from "./components/Doacoes/PerfilDoador";

import "./index.css";
import "./i18n";

function App() {
  const location = useLocation();

  const showHeaderFooter = location.pathname === "/";
  const isDoacoesRoute = location.pathname.startsWith("/doacoes");

  return (
    <>
      {showHeaderFooter && <Navbar />}
      {isDoacoesRoute && <NavbarDoacoes />}

      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/cadastro-aluno" element={<CadastroAluno />} />
        <Route path="/cadastro-mentor" element={<CadastroMentor />} />
        <Route path="/login-mentor" element={<LoginMentor />} />
        <Route path="/login-aluno" element={<LoginAluno />} />

        <Route path="/dashboard-mentor" element={<MentorDashboard />} />
        <Route path="/dashboard-mentor/messages" element={<Messages />} />
        <Route path="/dashboard-mentor/perfil" element={<Perfil />} />
        <Route path="/dashboard-mentor/progress" element={<Progress />} />
        <Route path="/dashboard-mentor/reports" element={<Reports />} />
        <Route path="/dashboard-mentor/mentoring" element={<Mentoring />} />
        <Route path="/dashboard-mentor/materials" element={<Materials />} />
        <Route path="/dashboard-mentor/config" element={<Config />} />

        <Route path="/dashboard-aluno" element={<Student />} />
        <Route path="/dashboard-aluno/perfil" element={<PerfilAluno />} />
        <Route path="/dashboard-aluno/progresso" element={<ProgressoAluno />} />
        <Route path="/dashboard-aluno/relatorios" element={<RelatoriosAluno />} />
        <Route path="/dashboard-aluno/mensagens" element={<MensagemAluno />} />
        <Route path="/dashboard-aluno/agenda" element={<AgendaAluno />} />
        <Route path="/dashboard-aluno/materiais" element={<MateriaisAluno />} />
        <Route path="/dashboard-aluno/configuracoes" element={<ConfiguracoesAluno />} />


        <Route path="/doacoes" element={<MinhasDoacoes />} />
        <Route path="/doacoes/campanhas" element={<Campanhas />} />
        <Route path="/doacoes/sobre-nos" element={<SobreNos />} />
        <Route path="/doacoes/perfil" element={<PerfilDoador />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;