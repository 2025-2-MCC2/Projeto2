import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { FaGraduationCap, FaEnvelope, FaEdit, FaComments, FaCheckCircle } from "react-icons/fa";
import "./Perfil.css";

export default function Perfil() {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [nome, setNome] = useState("Rafael Morais");
  const [email, setEmail] = useState("mentor@email.com");
  const [grupo, setGrupo] = useState("Equipe Alpha");

  const [integrantes, setIntegrantes] = useState([
    { nome: "Ana Souza", email: "ana.souza@email.com", representante: true },
    { nome: "João Lima", email: "joao.lima@email.com", representante: false },
    { nome: "Carla Mendes", email: "carla.mendes@email.com", representante: false },
    { nome: "Lucas Pereira", email: "lucas.pereira@email.com", representante: false },
  ]);

  const equipesDisponiveis = [
    "Equipe Alpha",
    "Equipe Beta",
    "Equipe Gama",
    "Equipe Delta",
    "Equipe Ômega",
  ];

  const handleChatClick = () => navigate("/dashboard-mentor/messages");

  const handleSalvar = () => {
    setEditing(false);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
  };

  const toggleRepresentante = (index) => {
    const novosIntegrantes = [...integrantes];
    novosIntegrantes[index].representante = !novosIntegrantes[index].representante;
    setIntegrantes(novosIntegrantes);
  };

  const editarIntegrante = (index, campo, valor) => {
    const novos = [...integrantes];
    novos[index][campo] = valor;
    setIntegrantes(novos);
  };

  return (
    <div className="perfil-page">
      <Sidebar />

      <main className="perfil-main">
        {showAlert && (
          <div className="alert-success">
            <FaCheckCircle /> Alterações salvas com sucesso!
          </div>
        )}

        <div className="perfil-header">
          <h1>Edite seu perfil</h1>
          <button
            className="editar-perfil-btn"
            onClick={() => (editing ? handleSalvar() : setEditing(true))}
          >
            <FaEdit /> {editing ? "Salvar alterações" : "Editar perfil"}
          </button>
        </div>

        <div className="perfil-content">
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
                <select
                  value={grupo}
                  onChange={(e) => setGrupo(e.target.value)}
                  disabled={!editing}
                >
                  {equipesDisponiveis.map((eq, i) => (
                    <option key={i} value={eq}>{eq}</option>
                  ))}
                </select>
              </label>

              <div className="email-representante">
                <FaEnvelope className="email-icon" />
                <span>Email do representante: representante@email.com</span>
              </div>
            </form>
          </div>

          <div className="perfil-right">
            <div className="integrantes-header">
              <h2>Integrantes</h2>
              <a href="#" className="ver-todos">Visualizar todos</a>
            </div>

            <div className="integrantes-lista">
              {integrantes.map((pessoa, index) => (
                <div key={index} className="integrante-card">
                  <div className="integrante-avatar">{pessoa.nome[0]}</div>

                  <div className="integrante-info">
                    {editing ? (
                      <>
                        <input
                          type="text"
                          value={pessoa.nome}
                          onChange={(e) =>
                            editarIntegrante(index, "nome", e.target.value)
                          }
                        />
                        <input
                          type="email"
                          value={pessoa.email}
                          onChange={(e) =>
                            editarIntegrante(index, "email", e.target.value)
                          }
                        />
                      </>
                    ) : (
                      <>
                        <strong>{pessoa.nome}</strong>
                        <span>{pessoa.email}</span>
                      </>
                    )}
                    {pessoa.representante && (
                      <span className="representante-label">Representante</span>
                    )}
                  </div>

                  <div className="integrante-acoes">
                    <button className="chat-btn" onClick={handleChatClick}>
                      <FaComments />
                    </button>
                    <button
                      className="edit-btn"
                      onClick={() => toggleRepresentante(index)}
                      title="Alternar representante"
                    >
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
