import React from "react";
import "./RankingCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faCrown } from "@fortawesome/free-solid-svg-icons";

export default function RankingCard() {
  const rankingData = [
    { team: "Equipe 1", score: 120, trend: "up" },
    { team: "Equipe 2", score: 80, trend: "down" },
    { team: "Equipe 3", score: 70, trend: "up" },
    { team: "Equipe 4", score: 50, trend: "down" },
  ];

  return (
    <div className="ranking-card">
      <div className="ranking-header">
        <h3 className="ranking-title">
          <FontAwesomeIcon icon={faCrown} className="ranking-icon" />
          Ranking das Equipes
        </h3>
      </div>

      <ul className="ranking-list">
        {rankingData.map((item, index) => (
          <li key={index} className={`ranking-item ${index === 0 ? "first" : ""}`}>
            <span className="position">#{index + 1}</span>
            <span className="team-name">{item.team}</span>
            <span className="team-score">
              {item.score}
              <FontAwesomeIcon
                icon={item.trend === "up" ? faChevronUp : faChevronDown}
                className={`trend-icon ${item.trend}`}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
