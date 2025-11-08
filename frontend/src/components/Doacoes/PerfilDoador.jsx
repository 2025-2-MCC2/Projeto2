import React, { useState } from 'react';
import './PerfilDoador.css';

function PerfilDoador() {
  const [isEditing, setIsEditing] = useState(false);
  const [perfil, setPerfil] = useState({
    nome: 'Nome do Doador',
    email: 'doador@email.com',
    telefone: '(11) 98765-4321',
    cpf: '123.456.789-00',
    endereco: 'Rua Example, 123',
    cidade: 'São Paulo',
    estado: 'SP'
  });

  const [formData, setFormData] = useState({ ...perfil });

  const estatisticas = {
    totalDoado: 'R$ 2.450,00',
    numeroDoacao: 12,
    campanhasFavoritas: 3,
    impactoVidas: 45
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setPerfil({ ...formData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...perfil });
    setIsEditing(false);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div className="perfil-avatar">👤</div>
        <h1>{perfil.nome}</h1>
        <p className="perfil-subtitle">Doador desde 2024</p>
      </div>

      <div className="perfil-stats">
        <div className="stat-box">
          <span className="stat-value">{estatisticas.totalDoado}</span>
          <span className="stat-label">Total Doado</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">{estatisticas.numeroDoacao}</span>
          <span className="stat-label">Doações Realizadas</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">{estatisticas.campanhasFavoritas}</span>
          <span className="stat-label">Campanhas Apoiadas</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">{estatisticas.impactoVidas}</span>
          <span className="stat-label">Vidas Impactadas</span>
        </div>
      </div>

      <div className="perfil-content">
        <div className="perfil-section">
          <div className="section-header">
            <h2>Informações Pessoais</h2>
            {!isEditing ? (
              <button className="btn-editar" onClick={() => setIsEditing(true)}>
                ✏️ Editar
              </button>
            ) : (
              <div className="btn-group">
                <button className="btn-cancelar" onClick={handleCancel}>
                  Cancelar
                </button>
                <button className="btn-salvar" onClick={handleSave}>
                  Salvar
                </button>
              </div>
            )}
          </div>

          <div className="info-grid">
            <div className="info-item">
              <label>Nome Completo</label>
              {isEditing ? (
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              ) : (
                <p>{perfil.nome}</p>
              )}
            </div>

            <div className="info-item">
              <label>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{perfil.email}</p>
              )}
            </div>

            <div className="info-item">
              <label>Telefone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              ) : (
                <p>{perfil.telefone}</p>
              )}
            </div>

            <div className="info-item">
              <label>CPF</label>
              {isEditing ? (
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                />
              ) : (
                <p>{perfil.cpf}</p>
              )}
            </div>

            <div className="info-item">
              <label>Endereço</label>
              {isEditing ? (
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                />
              ) : (
                <p>{perfil.endereco}</p>
              )}
            </div>

            <div className="info-item">
              <label>Cidade</label>
              {isEditing ? (
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
              ) : (
                <p>{perfil.cidade}</p>
              )}
            </div>

            <div className="info-item">
              <label>Estado</label>
              {isEditing ? (
                <input
                  type="text"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                />
              ) : (
                <p>{perfil.estado}</p>
              )}
            </div>
          </div>
        </div>

        <div className="perfil-section">
          <h2>Conquistas</h2>
          <div className="conquistas-grid">
            <div className="conquista-card">
              <div className="conquista-icon">🌟</div>
              <h4>Primeira Doação</h4>
              <p>Realizou sua primeira contribuição</p>
            </div>
            <div className="conquista-card">
              <div className="conquista-icon">💚</div>
              <h4>Doador Frequente</h4>
              <p>10+ doações realizadas</p>
            </div>
            <div className="conquista-card">
              <div className="conquista-icon">🏆</div>
              <h4>Herói da Comunidade</h4>
              <p>Impactou 40+ vidas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilDoador;