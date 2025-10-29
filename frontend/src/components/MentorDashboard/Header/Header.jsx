import React from 'react';
import './Header.css';
import { Bell } from 'lucide-react';

export default function Header() {
  const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

  return (
    <div className="dashboard-header">
      <div className="greeting">
         <span>Seja bem-vindo, Mentor! 👋</span>
      </div>

      <div className="header-actions">
        <input
          type="date"
          className="date-picker"
          defaultValue={today}
          aria-label="Selecionar data"
        />
        <button className="notification-btn" aria-label="Notificações">
          <Bell size={18} />
        </button>
        <div className="mentor-avatar" aria-label="Avatar do mentor">RM</div>
      </div>
    </div>
  );
}