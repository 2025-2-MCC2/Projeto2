import React from "react";
import "./RankingCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

export default function RankingPodium() {
  const rankingData = [
    { team: "Equipe Alpha", score: 120 },
    { team: "Equipe Beta", score: 95 },
    { team: "Equipe Delta", score: 80 },
    { team: "Equipe Gama", score: 60 },
    { team: "Equipe Ômega", score: 50 },
  ];

  return (
    <div className="ranking-podium-card">
      <div className="ranking-header">
        <h3 className="ranking-title">
          <FontAwesomeIcon icon={faCrown} className="ranking-icon" />
          Ranking das Equipes
        </h3>
      </div>

      {/* === Pódio (Top 3) === */}
      <div className="podium">
        <div className="podium-spot second">
          <div className="place">2º</div>
          <div className="team">{rankingData[1].team}</div>
          <div className="score">{rankingData[1].score}kg</div>
        </div>

        <div className="podium-spot first">
          <div className="place">1º</div>
          <div className="team">{rankingData[0].team}</div>
          <div className="score">{rankingData[0].score}kg</div>
        </div>

        <div className="podium-spot third">
          <div className="place">3º</div>
          <div className="team">{rankingData[2].team}</div>
          <div className="score">{rankingData[2].score}kg</div>
        </div>
      </div>

      {/* === Restante das Equipes === */}
      <ul className="ranking-list">
        {rankingData.slice(3).map((item, index) => (
          <li key={index + 3} className="ranking-item">
            <span className="position">#{index + 4}</span>
            <span className="team-name">{item.team}</span>
            <span className="team-score">{item.score}kg</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
