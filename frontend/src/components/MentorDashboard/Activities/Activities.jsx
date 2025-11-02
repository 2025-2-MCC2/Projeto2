import React, { useState } from 'react';
import './Activities.css';
import { Bell } from 'lucide-react';

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [activities, setActivities] = useState([
    { id: 1, text: 'Feedback para cada integrante', time: '09:00 AM' },
    { id: 2, text: 'Reunião curta com designer de produto', time: '11:00 AM' },
    { id: 3, text: 'Revisar relatório semanal', time: '02:00 PM' },
  ]);
  const [newActivity, setNewActivity] = useState({ text: '', time: '' });

  const handleDateChange = (e) => setSelectedDate(e.target.value);

  const handleCreate = () => {
    if (newActivity.text && newActivity.time) {
      setActivities([...activities, { id: Date.now(), ...newActivity }]);
      setNewActivity({ text: '', time: '' });
    }
  };

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
        </div>
      </div>

      <div className="add-activity">
        <input
          type="text"
          placeholder="Nova atividade"
          value={newActivity.text}
          onChange={(e) => setNewActivity({ ...newActivity, text: e.target.value })}
        />
        <input
          type="time"
          value={newActivity.time}
          onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
        />
        <button className="create-btn" onClick={handleCreate}>
          Criar Atividade
        </button>
      </div>

      <ul className="activities-list">
        {activities.map((act) => (
          <li key={act.id}>
            <span className="activity-text">{act.text}</span>
            <div className="activity-right">
              <span className="hora">{act.time}</span>
              <Bell className="sino-icon" size={16} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
