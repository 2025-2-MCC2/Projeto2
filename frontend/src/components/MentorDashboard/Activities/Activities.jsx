import React, { useState } from 'react';
import './Activities.css';
import { Bell } from 'lucide-react';

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const activities = [
    { id: 1, text: 'Feedback para cada integrante', time: '09:00 AM' },
    { id: 2, text: 'Reunião curta com designer de produto', time: '11:00 AM' },
    { id: 3, text: 'Revisar relatório semanal', time: '02:00 PM' },
  ];

  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleCreate = () => alert('Abrir modal de nova atividade!');

  return (
    <div className="activities-card">
      <div className="activities-header">
        <span>Últimas Atividades</span>
        <div className="activities-actions">
          <input
            type="date"
            className="date-filter"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <button className="create-btn" onClick={handleCreate}>
            Criar nova atividade
          </button>
        </div>
      </div>

      <ul className="activities-list">
        {activities.map((act) => (
          <li key={act.id}>
            <span>{act.text}</span>
            <div>
              <span className="hora">{act.time}</span>
              <Bell className="sino-icon" size={16} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
