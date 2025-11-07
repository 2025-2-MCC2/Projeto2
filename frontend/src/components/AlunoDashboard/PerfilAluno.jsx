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
    <div className="perfil-page">
      <SidebarAluno />

      <div className="perfil-container">
        <div className="perfil-header">
          <h1 className="perfil-title">Edite seu perfil</h1>
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="btn-editar">
              <Edit2 size={18} />
              Editar perfil
            </button>
          ) : (
            <div className="btn-actions">
              <button onClick={() => setIsEditing(false)} className="btn-cancelar">
                Cancelar
              </button>
              <button onClick={handleSave} className="btn-salvar">
                Salvar
              </button>
            </div>
          )}
        </div>

        <div className="perfil-grid">
          {/* Formulário à esquerda */}
          <div className="card-formulario">
            <div className="avatar-container">
              <div className="avatar-circle">
                <User className="avatar-icon" />
              </div>
            </div>

            <div>
              <div className="form-group">
                <label className="form-label">Nome completo</label>
                <input
                  type="text"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Grupo</label>
                <input
                  type="text"
                  name="grupo"
                  value={formData.grupo}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="form-input"
                />
              </div>

              <div className="representante-info">
                <div className="representante-icon"></div>
                <p className="representante-text">
                  Email do representante: {representante?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Integrantes à direita */}
          <div className="card-integrantes">
            <div className="integrantes-header">
              <h2 className="integrantes-title">Integrantes</h2>
              <button className="btn-visualizar">Visualizar todos</button>
            </div>

            <div className="integrantes-list">
              {integrantes.map((integrante) => (
                <div key={integrante.id} className="integrante-item">
                  <div className="integrante-info">
                    <div
                      className={`integrante-avatar ${
                        integrante.representante ? "representante" : "membro"
                      }`}
                    >
                      {integrante.inicial}
                    </div>
                    <div className="integrante-dados">
                      <p className="integrante-nome">{integrante.nome}</p>
                      <p className="integrante-email">{integrante.email}</p>
                      {integrante.representante && (
                        <span className="badge-representante">Representante</span>
                      )}
                    </div>
                  </div>
                  <div className="integrante-actions">
                    <button className="btn-action">
                      <MessageCircle size={18} />
                    </button>
                    <button className="btn-action">
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
