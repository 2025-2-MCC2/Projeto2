import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import RevenueChart from '../Charts/RevenueChart';
import RankingCard from '../Ranking/RankingCard';
import Activities from '../Activities/Activities';
import Highlights from '../Highlights/Highlights';

export default function Cards() {
  return (
    <>
      {/* Três cards iniciais */}
      <div className="cards-row">
        {/* Card 1 - Chat com equipe */}
        <div className="card">
          <div className="card-title">Chat com Equipe</div>
          <div className="card-content">
            <FontAwesomeIcon icon={faComments} className="card-icon" />
            <div className="card-text">
              <div>2 novas mensagens</div>
              <div className="label">All messages</div>
            </div>
          </div>
          <div className="avatars">
            <div className="avatar">C</div>
            <div className="avatar">N</div>
            <div className="avatar">J</div>
          </div>
        </div>

        {/* Card 2 - Posição no ranking */}
        <div className="card">
          <div className="card-title">Posição no Ranking</div>
          <div className="card-content">
            <div className="ranking-value">
              4º <FontAwesomeIcon icon={faChevronUp} className="ranking-arrow" />
            </div>
            <div className="ranking-text">Subiu 3 posições comparado à última semana.</div>
          </div>
          <a href="#" className="card-link">Ver progresso de relatórios</a>
        </div>

        {/* Card 3 - Agenda do dia */}
        <div className="card">
          <div className="card-title">Agenda do dia · 22 de Maio</div>
          <ul className="agenda-list">
            <li>Reunião com equipe — 01:00 PM - 02:00 PM</li>
            <li>Conferir progresso de Natalia — 02:00 PM - 03:00 PM</li>
          </ul>
          <a href="#" className="card-link">Ver todas atividades</a>
        </div>
      </div>

      {/* Gráfico de arrecadação e ranking */}
      <div className="widgets-row">
        <RevenueChart />
        <RankingCard />
      </div>

      {/* Últimas atividades */}
      <div className="activities-section">
        <Activities />
      </div>

      {/* Cards de destaque */}
      <Highlights />
    </>
  );
}
