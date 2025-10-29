import React from "react";
import Card from "./Card";

export default function GoalsCard() {
  return (
    <Card className="metas-card">
      <div className="card-header">
        <h3>Metas da Equipe</h3>
      </div>
      <p>Aqui você verá as metas que você definiu para sua equipe.</p>
    </Card>
  );
}
