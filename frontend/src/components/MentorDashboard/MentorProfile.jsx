import React from 'react';
import SidebarMenu from './SidebarMenu';
import ActivityStats from './ActivityStats';
import './styles/dashboard.css';

export default function MentorProfile() {
  return (
    <div className="dashboard-container">
      <SidebarMenu />
      <main className="dashboard-content">
        <h2>Mentor Exclusivo</h2>
        <ActivityStats />
        <div style={{ marginTop: '20px' }}>
          <button style={{ marginRight: '10px' }}>Ver Equipes</button>
          <button>Criar Nova Atividade</button>
        </div>
      </main>
    </div>
  );
}
