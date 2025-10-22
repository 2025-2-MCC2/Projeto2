import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Bell } from "lucide-react";
import "./MentorDashboard.css";

export default function MentorDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [period, setPeriod] = useState("semanal");

  // === Mock de chat ===
  const chatMessages = [
    { id: 1, name: "Ana", online: true },
    { id: 2, name: "Bruno", online: true },
    { id: 3, name: "Carlos", online: false },
    { id: 4, name: "Daniela", online: false },
  ];

  // === Ranking do mentor ===
  const ranking = { position: 4, change: 3 };

  // === Atividades do mentor ===
  const activities = [
    { id: 1, title: "Reunião com equipe", time: "01:00 PM - 02:00 PM", color: "#FF4400" },
    { id: 2, title: "Conferir progresso", time: "02:00 PM - 03:00 PM", color: "#FF5900" },
  ];

  // === Dados do gráfico de arrecadação ===
  const chartData = {
    semanal: [
      { dia: "Seg", valor: 3200 },
      { dia: "Ter", valor: 4500 },
      { dia: "Qua", valor: 2800 },
      { dia: "Qui", valor: 5000 },
      { dia: "Sex", valor: 4200 },
      { dia: "Sáb", valor: 3900 },
      { dia: "Dom", valor: 4100 },
    ],
    mensal: [
      { dia: "Semana 1", valor: 12000 },
      { dia: "Semana 2", valor: 15000 },
      { dia: "Semana 3", valor: 13000 },
      { dia: "Semana 4", valor: 17000 },
    ],
    anual: [
      { dia: "Jan", valor: 45000 },
      { dia: "Fev", valor: 52000 },
      { dia: "Mar", valor: 61000 },
      { dia: "Abr", valor: 58000 },
      { dia: "Mai", valor: 64000 },
    ],
  };

  // === Dados do ranking de equipes ===
  const teamRanking = [
    { equipe: "Equipe A", valor: 18000 },
    { equipe: "Equipe B", valor: 15000 },
    { equipe: "Equipe C", valor: 12000 },
    { equipe: "Equipe D", valor: 10000 },
  ];

  // === Últimas atividades do mentor ===
  const latestActivities = [
    { id: 1, title: "Enviar relatório semanal", tipo: "Prioridade", date: "22/05/2025" },
    { id: 2, title: "Reunião com equipe B", tipo: "Normal", date: "21/05/2025" },
  ];

  return (
    <div className={`dashboard-page ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="dashboard-main">
        {/* Topo direito */}
        <div className="dashboard-top-right">
          <input type="date" className="date-filter"/>
          <button className="notification-btn"><Bell size={18} /></button>
          <div className="mentor-avatar">RM</div>
        </div>

        {/* Fileira 1 */}
        <div className="cards-container">
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
            <div className="card-footer red">Ir para mensagens →</div>
          </div>

          <div className="card ranking-card">
            <div className="card-header">
              <h3>Posição no Ranking</h3>
            </div>
            <div className="ranking">
              <div className="rank-number">{ranking.position}º</div>
              <div className="rank-arrow"></div>
            </div>
            <div className="rank-info">Subiu {ranking.change} posições</div>
            <div className="card-footer red">Ver progresso de relatórios →</div>
          </div>

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

        {/* Fileira 2 */}
        <div className="cards-container">
          <div className="card arrecadacao-card">
            <div className="card-header">
              <h3>Arrecadação Total</h3>
            </div>
            <div className="period-filter">
              <button onClick={() => setPeriod("semanal")}>Semanal</button>
              <button onClick={() => setPeriod("mensal")}>Mensal</button>
              <button onClick={() => setPeriod("anual")}>Anual</button>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={chartData[period]}>
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="valor" stroke="#FF4400" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card team-ranking-card">
            <div className="card-header">
              <h3>Ranking de Equipes</h3>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={teamRanking}>
                <XAxis dataKey="equipe" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#1B2559" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fileira 3 */}
        <div className="cards-container">
          <div className="card latest-activities-card">
            <div className="card-header">
              <h3>Últimas Atividades</h3>
              <input type="date" className="date-filter"/>
            </div>
            {latestActivities.map(act => (
              <div key={act.id} className="activity">
                <div className={`activity-line ${act.tipo === "Prioridade" ? "red" : "orange"}`}></div>
                <div className="activity-info">
                  <h4>{act.title}</h4>
                  <p>{act.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card metas-card">
            <div className="card-header">
              <h3>Metas da Equipe</h3>
            </div>
            <p>Aqui você verá as metas que você definiu para sua equipe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
