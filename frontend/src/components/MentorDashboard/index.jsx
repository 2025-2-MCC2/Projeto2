import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Cards from './Cards/Cards';
import RevenueChart from './Charts/RevenueChart';
import RankingCard from './Ranking/Ranking';
import Activities from './Activities/Activities';
import HighlightsCard from './Highlights/HighlightsCard'; 
import './MentorDashboard.css';

export default function MentorDashboard() {
  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Área principal */}
      <main className="dashboard-main">
        {/* Header */}
        <Header />

        {/* Cards iniciais */}
        <Cards />

        {/* Gráfico e Ranking */}
        <div className="widgets-row">
          <RevenueChart />
          <RankingCard />
        </div>

        {/* Últimas atividades + Highlights lado a lado */}
        <div className="activities-highlights-row">
          <Activities />
          <HighlightsCard />
        </div>
      </main>
    </div>
  );
}
