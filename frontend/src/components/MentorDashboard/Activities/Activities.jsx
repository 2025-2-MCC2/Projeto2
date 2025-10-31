import React, { useState } from 'react';
import './Activities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Activities() {
  const [filterDate, setFilterDate] = useState('');

  const activities = [
    { id: 1, title: 'Feedback para Natalia', time: '09:00 AM', color: '#22c55e' },
    { id: 2, title: 'Reunião com designer de produto', time: '11:00 AM', color: '#f59e0b' },
    { id: 3, title: 'Revisar relatórios semanais', time: '02:00 PM', color: '#3b82f6' },
  ];

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  return (
    <div className="activities-card">
      <div className="activities-header">
        <h3>Últimas Atividades</h3>
        <div className="activities-actions">
          <input
            type="date"
            value={filterDate}
            onChange={handleFilterChange}
            className="date-filter"
          />
          <button className="add-btn">
            <FontAwesomeIcon icon={faPlus} /> Nova Atividade
          </button>
        </div>
      </div>

      <ul className="activities-list">
        {activities
          .filter(act => !filterDate || true) // Aqui você pode filtrar por data
          .map(act => (
            <li key={act.id} style={{ borderLeft: `4px solid ${act.color}` }}>
              <span className="activity-title">{act.title}</span>
              <span className="activity-time">{act.time}</span>
              <FontAwesomeIcon icon={faBell} className="activity-icon" />
            </li>
          ))}
      </ul>
    </div>
  );
}
