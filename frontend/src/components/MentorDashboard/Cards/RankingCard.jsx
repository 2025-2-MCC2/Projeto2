
import React from "react";
import Card from "./Card";

export default function RankingCard({ ranking }) {
  return (
    <Card className="ranking-card">
      <div className="card-header">
        <h3>Posição no Ranking</h3>
      </div>
      <div className="ranking">
        <div className="rank-number">{ranking.position}º</div>
        <div className="rank-info">Subiu {ranking.change} posições</div>
      </div>
      <div className="card-footer red">Ver progresso de relatórios →</div>
    </Card>
  );
}
