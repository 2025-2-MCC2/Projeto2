import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Cards from './Cards/Cards';
import './MentorDashboard.css'; // CSS geral do dashboard

export default function MentorDashboard() {
  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Área principal */}
      <main className="dashboard-main">
        {/* Header */}
        <Header />

        {/* Cards, Widgets, Últimas Atividades e Highlights */}
        <Cards />
      </main>
    </div>
  );
}
