import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Perfil.css";

export default function Perfil() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, initials: "C", name: "Clara", email: "clara@email.com", isRep: false },
    { id: 2, initials: "J", name: "João", email: "joao@email.com", isRep: true },
    { id: 3, initials: "L", name: "Lucas", email: "lucas@email.com", isRep: false },
  ]);

  const [editingMember, setEditingMember] = useState(null);

  const handleOpenModal = (member) => setEditingMember(member);
  const handleCloseModal = () => setEditingMember(null);

  const handleSaveMember = (updatedMember) => {
    setTeamMembers((prev) =>
      prev.map((m) => (m.id === updatedMember.id ? updatedMember : m))
    );
    handleCloseModal();
  };

  const handleRemoveMember = (id) => {
    setTeamMembers((prev) => prev.filter((m) => m.id !== id));
    handleCloseModal();
  };

  return (
    <div className="perfil-page">
      <Sidebar />

      <main className="perfil-main">
        <h1 className="perfil-title">
          <FontAwesomeIcon icon={faUser} /> Perfil do Mentor
        </h1>

        {/* Dados Pessoais */}
        <section className="personal-info">
          <h2>Dados Pessoais</h2>
          <div className="info-item">
            <FontAwesomeIcon icon={faUser} className="info-icon" />
            <label>Nome:</label>
            <input type="text" defaultValue="Rafaela" />
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faUser} className="info-icon" />
            <label>Sobrenome:</label>
            <input type="text" defaultValue="Morais" />
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <label>Email representante:</label>
            <span>representante@equipe.com</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <label>Email pessoal:</label>
            <span>rafa@mentor.com</span>
          </div>
        </section>

        {/* Integrantes */}
        <section className="team-members">
          <h2>
            Integrantes
            <a href="#">Ver todos</a>
          </h2>
          <ul>
            {teamMembers.map((member) => (
              <li key={member.id}>
                <div className="avatar">{member.initials}</div>
                <div className="member-info">
                  <span className="name">{member.name}</span>
                  <span className="email">{member.email}</span>
                </div>
                <button
                  className="edit-member"
                  onClick={() => handleOpenModal(member)}
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Modal de edição */}
      {editingMember && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Editar Integrante</h3>
              <button className="close-btn" onClick={handleCloseModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="modal-body">
              <label>Nome:</label>
              <input
                type="text"
                value={editingMember.name}
                onChange={(e) =>
                  setEditingMember({ ...editingMember, name: e.target.value })
                }
              />
              <label>
                <input
                  type="checkbox"
                  checked={editingMember.isRep}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, isRep: e.target.checked })
                  }
                />{" "}
                Representante
              </label>
            </div>

            <div className="modal-footer">
              <button
                className="remove-btn"
                onClick={() => handleRemoveMember(editingMember.id)}
              >
                Remover
              </button>
              <button
                className="save-btn"
                onClick={() => handleSaveMember(editingMember)}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
