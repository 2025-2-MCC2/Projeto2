import React from 'react';
import './SobreNos.css';

function SobreNos() {
  const valores = [
    {
      icone: '💚',
      titulo: 'Transparência',
      descricao: 'Todas as doações são rastreadas e você pode ver exatamente onde seu dinheiro está sendo usado.'
    },
    {
      icone: '🤝',
      titulo: 'Compromisso',
      descricao: 'Estamos comprometidos em fazer a diferença real na vida das pessoas que mais precisam.'
    },
    {
      icone: '🎯',
      titulo: 'Impacto',
      descricao: 'Focamos em causas que geram o maior impacto positivo para a sociedade.'
    },
    {
      icone: '🌟',
      titulo: 'Comunidade',
      descricao: 'Construímos uma comunidade de pessoas que acreditam em um mundo melhor.'
    }
  ];

  const equipe = [
    { nome: 'Maria Silva', cargo: 'Fundadora & CEO', emoji: '👩‍💼' },
    { nome: 'João Santos', cargo: 'Diretor de Operações', emoji: '👨‍💼' },
    { nome: 'Ana Costa', cargo: 'Coordenadora de Campanhas', emoji: '👩‍💻' },
    { nome: 'Pedro Oliveira', cargo: 'Gerente de Comunicação', emoji: '👨‍💻' }
  ];

  return (
    <div className="sobre-nos-container">
      <section className="hero-section">
        <h1>Sobre Nós</h1>
        <p className="hero-subtitle">
          Conectando corações generosos a causas que transformam vidas
        </p>
      </section>

      <section className="missao-section">
        <div className="missao-content">
          <div className="missao-card">
            <h2>Nossa Missão</h2>
            <p>
              Facilitar o processo de doação e tornar transparente o impacto de cada contribuição,
              conectando pessoas que querem ajudar com causas que realmente fazem a diferença.
            </p>
          </div>
          
          <div className="missao-card">
            <h2>Nossa Visão</h2>
            <p>
              Ser a plataforma mais confiável e acessível para doações no Brasil,
              criando um mundo onde toda pessoa possa contribuir para um futuro melhor.
            </p>
          </div>
        </div>
      </section>

      <section className="valores-section">
        <h2>Nossos Valores</h2>
        <div className="valores-grid">
          {valores.map((valor, index) => (
            <div key={index} className="valor-card">
              <div className="valor-icone">{valor.icone}</div>
              <h3>{valor.titulo}</h3>
              <p>{valor.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="impacto-section">
        <h2>Nosso Impacto</h2>
        <div className="impacto-stats">
          <div className="impacto-card">
            <span className="impacto-numero">R$ 500K+</span>
            <span className="impacto-label">Arrecadados</span>
          </div>
          <div className="impacto-card">
            <span className="impacto-numero">1.500+</span>
            <span className="impacto-label">Doadores Ativos</span>
          </div>
          <div className="impacto-card">
            <span className="impacto-numero">25+</span>
            <span className="impacto-label">Campanhas Realizadas</span>
          </div>
          <div className="impacto-card">
            <span className="impacto-numero">5.000+</span>
            <span className="impacto-label">Vidas Impactadas</span>
          </div>
        </div>
      </section>

      <section className="equipe-section">
        <h2>Nossa Equipe</h2>
        <div className="equipe-grid">
          {equipe.map((membro, index) => (
            <div key={index} className="equipe-card">
              <div className="equipe-avatar">{membro.emoji}</div>
              <h3>{membro.nome}</h3>
              <p>{membro.cargo}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Faça Parte Dessa História</h2>
        <p>Junte-se a nós e ajude a transformar o mundo, uma doação por vez.</p>
        <button className="btn-cta">Começar a Doar Agora</button>
      </section>
    </div>
  );
}

export default SobreNos;