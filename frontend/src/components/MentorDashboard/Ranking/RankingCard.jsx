import React from 'react';
import './RankingCard.css';

const teams = [
  { name: 'Equipe 1', score: 120 },
  { name: 'Equipe 2', score: 80 },
  { name: 'Equipe 3', score: 70 },
  { name: 'Equipe 4', score: 50 },
];

export default function RankingCard() {
  return (
    <div className="ranking-card">
      <h3>Ranking de Equipes</h3>
      <div className="ranking-list">
        {teams.map((team, index) => (
          <div key={index} className="team-row">
            <span>{team.name}</span>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: `${team.score}%` }}></div>
            </div>
            <span className="score">{team.score}k</span>
          </div>
        ))}
      </div>
    </div>
  );
}
