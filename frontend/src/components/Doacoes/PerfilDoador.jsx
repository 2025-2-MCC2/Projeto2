import React, { useState, useEffect } from 'react';
import './PerfilDoador.css';

function PerfilDoador() {
  const [isEditing, setIsEditing] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const avatarsDisponiveis = [
    '👨‍💼', '👩‍💼', '👨‍🎓', '👩‍🎓', '👨‍⚕️', '👩‍⚕️',
    '👨‍🍳', '👩‍🍳', '👨‍🔧', '👩‍🔧', '👨‍🌾', '👩‍🌾',
    '🧑‍💻', '👨‍🎨', '👩‍🎨', '👨‍✈️', '👩‍✈️', '👨‍🚀',
    '🐶', '🐱', '🦁', '🐼', '🦊', '🐻', '🐨', '🐯',
    '🌟', '⭐', '💫', '✨', '🎨', '🎭', '🎪', '🎯'
  ];

  const [perfil, setPerfil] = useState(() => {
    const nomeSalvo = localStorage.getItem('nomeDoador');
    const avatarSalvo = localStorage.getItem('avatarDoador');
    return {
      nome: nomeSalvo || 'Nome do Doador',
      avatar: avatarSalvo || '👤',
      email: 'doador@email.com',
      telefone: '(11) 98765-4321',
      cpf: '123.456.789-00',
      endereco: 'Rua Example, 123',
      cidade: 'São Paulo',
      estado: 'SP'
    };
  });

  const [formData, setFormData] = useState({ ...perfil });

  // Atualiza estado com nome salvo ao carregar
  useEffect(() => {
    const nomeSalvo = localStorage.getItem('nomeDoador');
    const avatarSalvo = localStorage.getItem('avatarDoador');
    if (nomeSalvo) {
      setPerfil(prev => ({ ...prev, nome: nomeSalvo }));
      setFormData(prev => ({ ...prev, nome: nomeSalvo }));
    }
    if (avatarSalvo) {
      setPerfil(prev => ({ ...prev, avatar: avatarSalvo }));
      setFormData(prev => ({ ...prev, avatar: avatarSalvo }));
    }
  }, []);

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
    localStorage.setItem('nomeDoador', formData.nome);
    localStorage.setItem('avatarDoador', formData.avatar);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...perfil });
    setIsEditing(false);
  };

  const handleSelectAvatar = (avatar) => {
    setFormData(prev => ({ ...prev, avatar }));
    setPerfil(prev => ({ ...prev, avatar }));
    localStorage.setItem('avatarDoador', avatar);
    setShowAvatarModal(false);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div className="perfil-avatar-wrapper">
          <div className="perfil-avatar">{perfil.avatar}</div>
          <button 
            className="btn-change-avatar" 
            onClick={() => setShowAvatarModal(true)}
            title="Trocar avatar"
          >
            📷
          </button>
        </div>
        <div className="perfil-nome">
          <h1>{perfil.nome}</h1>
          <span className="perfil-subtitle">Doador desde 2024</span>
        </div>
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

      {/* Modal de Seleção de Avatar */}
      {showAvatarModal && (
        <div className="avatar-modal-overlay" onClick={() => setShowAvatarModal(false)}>
          <div className="avatar-modal" onClick={(e) => e.stopPropagation()}>
            <div className="avatar-modal-header">
              <h3>Escolha seu Avatar</h3>
              <button 
                className="btn-close-modal" 
                onClick={() => setShowAvatarModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="avatar-grid">
              {avatarsDisponiveis.map((avatar, index) => (
                <button
                  key={index}
                  className={`avatar-option ${perfil.avatar === avatar ? 'selected' : ''}`}
                  onClick={() => handleSelectAvatar(avatar)}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PerfilDoador;