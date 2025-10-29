import React from "react";
import Card from "./Card";

export default function ActivitiesList({ activities }) {
  return (
    <Card className="latest-activities-card">
      <div className="card-header">
        <h3>Últimas Atividades</h3>
        <input type="date" className="date-filter" />
      </div>
      {activities.map((act) => (
        <div key={act.id} className="activity">
          <div className={`activity-line ${act.tipo === "Prioridade" ? "red" : "orange"}`}></div>
          <div className="activity-info">
            <h4>{act.title}</h4>
            <p>{act.date}</p>
          </div>
        </div>
      ))}
    </Card>
  );
}