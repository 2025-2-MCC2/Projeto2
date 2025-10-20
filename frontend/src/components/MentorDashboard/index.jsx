import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./MentorDashboard.css";

export default function MentorDashboard() {
  // Dados simulados
  const [chatMessages, setChatMessages] = useState([
    { id: 1, name: "Ana", online: true },
    { id: 2, name: "Bruno", online: true },
    { id: 3, name: "Carlos", online: false },
    { id: 4, name: "Daniela", online: false },
  ]);

  const [ranking, setRanking] = useState({
    position: 4,
    change: 3, // subiu 3 posições
  });

  const [activities, setActivities] = useState([
    { id: 1, title: "Reunião com equipe", time: "01:00 PM - 02:00 PM", color: "#FF4400" },

  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`dashboard-page ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="dashboard-main">
        <div className="cards-container">

          {/* Card 1: Chat com equipe */}
          <div className="card chat-card">
            <div className="card-header">
              <h3>Chat com Equipe</h3>
              <p>{chatMessages.filter(u => u.online).length} novas mensagens</p>
            </div>
            <div className="avatars">
              {chatMessages.map(user => (
                <div key={user.id} className={`avatar ${user.online ? "green" : "gray"}`}></div>
              ))}
            </div>
            <div className="card-footer red">All messages →</div>
          </div>

          {/* Card 2: Posição no Ranking */}
          <div className="card ranking-card">
            <div className="card-header">
              <h3>Posição no Ranking</h3>
            </div>
            <div className="ranking">
              <div className="rank-number">{ranking.position}º</div>
              <div className="rank-arrow"></div>
            </div>
            <div className="rank-info">Subiu {ranking.change} posições comparado à última semana</div>
            <div className="card-footer red">Ver progresso de relatórios →</div>
          </div>

          {/* Card 3: Atividades */}
          <div className="card activities-card">
            <div className="activities-date">22 de Maio</div>
            {activities.map(activity => (
              <div key={activity.id} className="activity">
                <div className="activity-line" style={{ background: activity.color }}></div>
                <div className="activity-info">
                  <h4>{activity.title}</h4>
                  <p>{activity.time}</p>
                </div>
              </div>
            ))}
            <div className="activities-footer red">Ver todas atividades →</div>
          </div>

        </div>
      </div>
    </div>
  );
}
