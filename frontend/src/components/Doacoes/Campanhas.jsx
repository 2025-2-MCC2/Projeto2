import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Campanhas.css';

function Campanhas() {
  const navigate = useNavigate();

  const campanhas = [
    {
      titulo: 'Combate a Fome',
      descricao: 'Ajude a fornecer refeições nutritivas para famílias em situação de vulnerabilidade.',
      meta: 50000,
      arrecadado: 32450,
      doadores: 156,
      dias: 45,
      imagem: '🍽️'
    },
    {
      titulo: 'Educação para Todos',
      descricao: 'Proporcione acesso à educação de qualidade para crianças carentes.',
      meta: 30000,
      arrecadado: 18700,
      doadores: 98,
      dias: 30,
      imagem: '📚'
    },
    {
      titulo: 'Ajuda Humanitária',
      descricao: 'Contribua para melhorar o acesso a tratamentos médicos e medicamentos.',
      meta: 40000,
      arrecadado: 25300,
      doadores: 134,
      dias: 60,
      imagem: '🏥'
    }
  ];

  const calcularProgresso = (arrecadado, meta) => {
    return (arrecadado / meta) * 100;
  };

  const formatarValor = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="campanhas-container">
      <div className="campanhas-header">
        <h1>Campanhas Ativas</h1>
        <p>Escolha uma causa e faça a diferença na vida de pessoas que precisam</p>
      </div>

      <div className="campanhas-grid">
        {campanhas.map((campanha, index) => (
          <div key={index} className="campanha-card">
            <div className="campanha-icon">{campanha.imagem}</div>
            
            <h2>{campanha.titulo}</h2>
            <p className="campanha-descricao">{campanha.descricao}</p>

            <div className="progresso-container">
              <div className="progresso-info">
                <span className="valor-arrecadado">{formatarValor(campanha.arrecadado)}</span>
                <span className="valor-meta">de {formatarValor(campanha.meta)}</span>
              </div>
              <div className="barra-progresso">
                <div 
                  className="barra-preenchida"
                  style={{ width: `${calcularProgresso(campanha.arrecadado, campanha.meta)}%` }}
                ></div>
              </div>
              <div className="progresso-percentual">
                {calcularProgresso(campanha.arrecadado, campanha.meta).toFixed(0)}% alcançado
              </div>
            </div>

            <div className="campanha-stats">
              <div className="stat">
                <span className="stat-numero">{campanha.doadores}</span>
                <span className="stat-label">Doadores</span>
              </div>
              <div className="stat">
                <span className="stat-numero">{campanha.dias}</span>
                <span className="stat-label">Dias restantes</span>
              </div>
            </div>

            <button 
              className="btn-doar"
              onClick={() => navigate('/doacoes')}
            >
              Fazer Doação
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campanhas;