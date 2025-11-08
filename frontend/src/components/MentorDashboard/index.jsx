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
      <Sidebar />
      <main className="dashboard-main">
        <Header />
        <Cards />
        <div className="widgets-row">
          <RevenueChart />
          <RankingCard />
        </div>
        <div className="activities-highlights-row">
          <Activities />
          <HighlightsCard />
        </div>
      </main>
    </div>
  );
}
