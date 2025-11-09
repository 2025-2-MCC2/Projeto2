import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SobreNos.css';

function SobreNos() {
  const navigate = useNavigate();

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
             O projeto Lideranças Empáticas tem como objetivo elevar o aprendizado dos estudantes do 1° semestre dos cursos de ciências econômicas, ciências contábeis e administração da Fundação Escola de Comércio Álvares Penteado - FECAP
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
            <span className="impacto-numero">87.763 Kg</span>
            <span className="impacto-label">Em arrecadações</span>
          </div>
          <div className="impacto-card">
            <span className="impacto-numero">1.950</span>
            <span className="impacto-label">Famílias alimentadas durante 1 mês</span>
          </div>
          <div className="impacto-card">
            <span className="impacto-numero">+1.600</span>
            <span className="impacto-label">Alunos participantes</span>
          </div>
          <div className="impacto-card">
            <span className="impacto-numero">7.800</span>
            <span className="impacto-label">Pessoas alimentadas durante 1 mês</span>
          </div>
        </div>
      </section>

      <section className="video-section">
        <h2>Conheça Nossa História</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/3nrICgzuPFQ"
            title="Lideranças Empáticas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="cta-section">
        <h2>Faça Parte Dessa História</h2>
        <p>Junte-se a nós e ajude a transformar o mundo, uma doação por vez.</p>
        <button 
          className="btn-cta"
          onClick={() => navigate('/doacoes')}
        >
          Começar a Doar Agora
        </button>
      </section>
    </div>
  );
}

export default SobreNos;