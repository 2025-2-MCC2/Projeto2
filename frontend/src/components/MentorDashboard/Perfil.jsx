import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./Perfil.css";

export default function Perfil() {
  const teamMembers = [
    { id: 1, initials: "C", name: "Clara", email: "clara@email.com" },
    { id: 2, initials: "J", name: "João", email: "joao@email.com" },
    { id: 3, initials: "L", name: "Lucas", email: "lucas@email.com" },
  ];

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
                <button className="edit-member">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
