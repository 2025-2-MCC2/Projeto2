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
    <div className="rankingAluno-card">
      <div className="rankingAluno-header">
        <h3 className="rankingAluno-title">
          <FontAwesomeIcon icon={faCrown} className="rankingAluno-icon" />
          Ranking das Equipes
        </h3>
      </div>

      <div className="rankingAluno-podium">
        <div className="rankingAluno-spot rankingAluno-second">
          <div className="rankingAluno-place">2º</div>
          <div className="rankingAluno-team">{rankingData[1].team}</div>
          <div className="rankingAluno-score">{rankingData[1].score}kg</div>
        </div>

        <div className="rankingAluno-spot rankingAluno-first">
          <div className="rankingAluno-place">1º</div>
          <div className="rankingAluno-team">{rankingData[0].team}</div>
          <div className="rankingAluno-score">{rankingData[0].score}kg</div>
        </div>

        <div className="rankingAluno-spot rankingAluno-third">
          <div className="rankingAluno-place">3º</div>
          <div className="rankingAluno-team">{rankingData[2].team}</div>
          <div className="rankingAluno-score">{rankingData[2].score}kg</div>
        </div>
      </div>

      <ul className="rankingAluno-list">
        {rankingData.slice(3).map((item, index) => (
          <li key={index + 3} className="rankingAluno-item">
            <span className="rankingAluno-position">#{index + 4}</span>
            <span className="rankingAluno-teamName">{item.team}</span>
            <span className="rankingAluno-teamScore">{item.score}kg</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
