import React from 'react';
import './RankingCard.css';

export default function RankingCard() {
  const ranking = [
    { name: 'Equipe 1', score: 120000 },
    { name: 'Equipe 2', score: 80000 },
    { name: 'Equipe 3', score: 70000 },
    { name: 'Equipe 4', score: 50000 },
  ];

  const maxScore = Math.max(...ranking.map(r => r.score));

  return (
    <div className="ranking-card">
      <h3 className="ranking-title">Ranking das Equipes</h3>
      <ul>
        {ranking.map((team, idx) => (
          <li key={idx}>
            <span className="team-name">{team.name}</span>
            <div className="bar-container">
              <div
                className="bar"
                style={{ width: `${(team.score / maxScore) * 100}%` }}
              ></div>
            </div>
            <span className="score">{team.score.toLocaleString('pt-BR')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
