import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faChevronUp, faVideo, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

export default function Cards() {
  const navigate = useNavigate();

  return (
    <>
      <div className="cards-row">
        {/* Card 1 - Chat com equipe */}
        <div className="card">
          <div className="card-title">Chat com Equipe</div>
          <div className="card-content">
            <FontAwesomeIcon icon={faComments} className="card-icon" />
            <div className="card-text">
              <div>2 novas mensagens</div>
            </div>
          </div>

          <div className="avatars">
            <div className="avatar">C</div>
            <div className="avatar">N</div>
            <div className="avatar">J</div>
          </div>

          <button
            className="chat-button"
            onClick={() => navigate('/dashboard-mentor/messages')}
          >
            Ver mensagens
          </button>
        </div>

        {/* Card 2 - Posição no ranking */}
        <div className="card ranking-card">
          <div className="card-title">Posição no Ranking</div>
          <div className="ranking-content">
            <div className="ranking-number up">
              4º <FontAwesomeIcon icon={faChevronUp} className="ranking-arrow up" />
            </div>
            <div className="ranking-text">
              Subiu 3 posições comparado à última semana.
            </div>
          </div>
          {/* 🔹 Usando Link para navegar */}
          <Link to="/dashboard-mentor/reports" className="card-link">
            Ver progresso de relatórios
          </Link>
        </div>

        {/* Card 3 - Agenda moderna reduzida */}
        <div className="card agenda-card">
          <div className="card-title" style={{ color: '#0f1724', fontWeight: '700' }}>
            Agenda da Semana
          </div>

          <div className="agenda-item green">
            <div className="agenda-date">
              01<span>nov</span>
            </div>
            <div className="agenda-content">
              <div className="agenda-title">Sessão de mentoria com Ana</div>
              <div className="agenda-time">09:00 - 10:00</div>
            </div>
            <FontAwesomeIcon icon={faVideo} className="agenda-icon" />
          </div>

          <div className="agenda-item blue">
            <div className="agenda-date">
              02<span>nov</span>
            </div>
            <div className="agenda-content">
              <div className="agenda-title">Planejamento de grupo</div>
              <div className="agenda-time">13:00 - 14:30</div>
            </div>
            <FontAwesomeIcon icon={faUsers} className="agenda-icon" />
          </div>

          {/* 🔹 Usando Link para navegar até Mentoring */}
          <Link to="/dashboard-mentor/mentoring" className="card-link">
            Ver todas as atividades
          </Link> 
        </div>
      </div>
    </>
  );
}
