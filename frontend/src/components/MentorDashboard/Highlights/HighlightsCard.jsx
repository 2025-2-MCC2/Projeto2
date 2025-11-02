import React from 'react';
import './HighlightsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function Highlights() {
  return (
    <div className="highlights-card">
      <h3 className="highlights-title">Destaques</h3>

      <div className="highlight-item collector">
        <div className="highlight-icon">
          <span>AB</span>
        </div>
        <div className="collector-info">
          <span className="highlight-label">Melhor Arrecadador</span>
          <span className="highlight-value">Ana Beatriz</span>
        </div>
      </div>

      <div className="highlight-item month">
        <div className="highlight-icon">
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div className="collector-info">
          <span className="highlight-label">Melhor Mês</span>
          <span className="highlight-value">Julho</span>
        </div>
      </div>

      <div className="highlight-item year">
        <div className="highlight-icon">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </div>
        <div className="collector-info">
          <span className="highlight-label">Melhor Ano</span>
          <span className="highlight-value">2024</span>
        </div>
      </div>
    </div>
  );
}
