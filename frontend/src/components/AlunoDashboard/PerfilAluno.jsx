import React, { useState } from "react";
import { User, Mail, MessageCircle, Edit2 } from "lucide-react";
import SidebarAluno from "../AlunoDashboard/SidebarAluno/SidebarAluno";
import "./PerfilAluno.css";

export default function PerfilAluno() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: "Rafael Morais",
    email: "mentor@email.com",
    grupo: "Equipe Alpha",
  });

  const [integrantes] = useState([
    { id: 1, nome: "Ana Souza", email: "ana.souza@email.com", representante: true, inicial: "A" },
    { id: 2, nome: "João Lima", email: "joao.lima@email.com", representante: false, inicial: "J" },
    { id: 3, nome: "Carla Mendes", email: "carla.mendes@email.com", representante: false, inicial: "C" },
    { id: 4, nome: "Lucas Pereira", email: "lucas.pereira@email.com", representante: false, inicial: "L" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const representante = integrantes.find((int) => int.representante);

  return (
    <div className="aluno-perfil-page">
      <SidebarAluno />

      <div className="aluno-perfil-container">
        <div className="aluno-perfil-header">
          <h1 className="aluno-perfil-title">Edite seu perfil</h1>
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="aluno-btn-editar">
              <Edit2 size={18} />
              Editar perfil
            </button>
          ) : (
            <div className="aluno-btn-actions">
              <button onClick={() => setIsEditing(false)} className="aluno-btn-cancelar">
                Cancelar
              </button>
              <button onClick={handleSave} className="aluno-btn-salvar">
                Salvar
              </button>
            </div>
          )}
        </div>

        <div className="aluno-perfil-grid">
          {/* Formulário à esquerda */}
          <div className="aluno-card-formulario">
            <div className="aluno-avatar-container">
              <div className="aluno-avatar-circle">
                <User className="aluno-avatar-icon" />
              </div>
            </div>

            <div>
              <div className="aluno-form-group">
                <label className="aluno-form-label">Nome completo</label>
                <input
                  type="text"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="aluno-form-input"
                />
              </div>

              <div className="aluno-form-group">
                <label className="aluno-form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="aluno-form-input"
                />
              </div>

              <div className="aluno-form-group">
                <label className="aluno-form-label">Grupo</label>
                <input
                  type="text"
                  name="grupo"
                  value={formData.grupo}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="aluno-form-input"
                />
              </div>

              <div className="aluno-representante-info">
                <div className="aluno-representante-icon"></div>
                <p className="aluno-representante-text">
                  Email do representante: {representante?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Integrantes à direita */}
          <div className="aluno-card-integrantes">
            <div className="aluno-integrantes-header">
              <h2 className="aluno-integrantes-title">Integrantes</h2>
              <button className="aluno-btn-visualizar">Visualizar todos</button>
            </div>

            <div className="aluno-integrantes-list">
              {integrantes.map((integrante) => (
                <div key={integrante.id} className="aluno-integrante-item">
                  <div className="aluno-integrante-info">
                    <div
                      className={`aluno-integrante-avatar ${
                        integrante.representante ? "aluno-representante" : "aluno-membro"
                      }`}
                    >
                      {integrante.inicial}
                    </div>
                    <div className="aluno-integrante-dados">
                      <p className="aluno-integrante-nome">{integrante.nome}</p>
                      <p className="aluno-integrante-email">{integrante.email}</p>
                      {integrante.representante && (
                        <span className="aluno-badge-representante">Representante</span>
                      )}
                    </div>
                  </div>
                  <div className="aluno-integrante-actions">
                    <button className="aluno-btn-action">
                      <MessageCircle size={18} />
                    </button>
                    <button className="aluno-btn-action">
                      <Edit2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}