import React from "react";
import Card from "./Card";

export default function EventsCard({ activities }) {
  return (
    <Card className="activities-card">
      <div className="activities-date">22 de Maio</div>
      {activities.map((activity) => (
        <div key={activity.id} className="activity">
          <div className="activity-line" style={{ background: activity.color }}></div>
          <div className="activity-info">
            <h4>{activity.title}</h4>
            <p>{activity.time}</p>
          </div>
        </div>
      ))}
      <div className="card-footer red">Ver todas atividades →</div>
    </Card>
  );
}
