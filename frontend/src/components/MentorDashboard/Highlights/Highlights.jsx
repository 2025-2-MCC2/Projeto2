import React from 'react';
import './Highlights.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendar, faChartLine } from '@fortawesome/free-solid-svg-icons';

const highlights = [
  { icon: faTrophy, title: 'Melhor Arrecadador', value: 'Equipe 1', color: '#22c55e' },
  { icon: faCalendar, title: 'Melhor Mês', value: 'Março', color: '#f59e0b' },
  { icon: faChartLine, title: 'Melhor Ano', value: '2023', color: '#3b82f6' },
];

export default function Highlights() {
  return (
    <div className="highlights-row">
      {highlights.map((item, index) => (
        <div key={index} className="highlight-card">
          <div className="highlight-icon" style={{ backgroundColor: item.color }}>
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <div className="highlight-info">
            <div className="highlight-title">{item.title}</div>
            <div className="highlight-value">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
