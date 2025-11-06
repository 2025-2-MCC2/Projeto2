import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { FaGraduationCap, FaEnvelope, FaEdit, FaComments } from "react-icons/fa";
import "./Perfil.css";

export default function Perfil() {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const [nome, setNome] = useState("Rafael Morais");
  const [email, setEmail] = useState("mentor@email.com");
  const [grupo, setGrupo] = useState("Equipe Alpha");

  const integrantes = [
    { nome: "Ana Souza", email: "ana.souza@email.com", representante: true },
    { nome: "João Lima", email: "joao.lima@email.com" },
    { nome: "Carla Mendes", email: "carla.mendes@email.com" },
    { nome: "Lucas Pereira", email: "lucas.pereira@email.com" },
  ];

  const handleChatClick = () => {
    navigate("/dashboard-mentor/messages");
  };

  return (
    <div className="perfil-page">
      <Sidebar />

      <main className="perfil-main">
        <div className="perfil-header">
          <h1>Edite seu perfil</h1>
          <button
            className="editar-perfil-btn"
            onClick={() => setEditing(!editing)}
          >
            <FaEdit /> {editing ? "Salvar alterações" : "Editar perfil"}
          </button>
        </div>

        <div className="perfil-content">
          {/* Coluna esquerda */}
          <div className="perfil-left">
            <div className="perfil-avatar">
              <FaGraduationCap className="perfil-icon" />
            </div>

            <form className="perfil-form">
              <label>
                Nome completo
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  disabled={!editing}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!editing}
                />
              </label>

              <label>
                Grupo
                <input
                  type="text"
                  value={grupo}
                  onChange={(e) => setGrupo(e.target.value)}
                  disabled={!editing}
                />
              </label>

              <div className="email-representante">
                <FaEnvelope className="email-icon" />
                <span>Email do representante: representante@email.com</span>
              </div>
            </form>
          </div>

          {/* Coluna direita */}
          <div className="perfil-right">
            <div className="integrantes-header">
              <h2>Integrantes</h2>
              <a href="#" className="ver-todos">Visualizar todos</a>
            </div>

            <div className="integrantes-lista">
              {integrantes.map((pessoa, index) => (
                <div key={index} className="integrante-card">
                  <div className="integrante-avatar">
                    {pessoa.nome[0]}
                  </div>
                  <div className="integrante-info">
                    <strong>{pessoa.nome}</strong>
                    <span>{pessoa.email}</span>
                    {pessoa.representante && <span className="representante-label">Representante</span>}
                  </div>
                  <div className="integrante-acoes">
                    <button className="chat-btn" onClick={handleChatClick}>
                      <FaComments />
                    </button>
                    <button className="edit-btn">
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
