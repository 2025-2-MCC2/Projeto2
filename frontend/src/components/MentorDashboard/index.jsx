import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import ChatCard from "./Cards/ChatCard";
import RankingCard from "./Cards/RankingCard";
import ActivitiesList from "./Cards/ActivitiesList";
import RevenueChart from "./Cards/RevenueChart";
import TeamRanking from "./Cards/TeamRanking";
import EventsCard from "./Cards/EventsCard";
import GoalsCard from "./Cards/GoalsCard";
import "./MentorDashboard.css";
import "./Cards/Cards.css";

export default function MentorDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [period, setPeriod] = useState("semanal");

  const chatMessages = [
    { id: 1, name: "Ana", online: true },
    { id: 2, name: "Bruno", online: true },
    { id: 3, name: "Carlos", online: false },
    { id: 4, name: "Daniela", online: false },
  ];

  const ranking = { position: 4, change: 3 };

  const activities = [
    {
      id: 1,
      title: "Reunião com equipe",
      time: "01:00 PM - 02:00 PM",
      color: "#FF4400",
    },
    {
      id: 2,
      title: "Conferir progresso",
      time: "02:00 PM - 03:00 PM",
      color: "#FF5900",
    },
  ];

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

  const teamRanking = [
    { equipe: "Equipe A", valor: 18000 },
    { equipe: "Equipe B", valor: 15000 },
    { equipe: "Equipe C", valor: 12000 },
    { equipe: "Equipe D", valor: 10000 },
  ];

  const latestActivities = [
    {
      id: 1,
      title: "Enviar relatório semanal",
      tipo: "Prioridade",
      date: "22/05/2025",
    },
    {
      id: 2,
      title: "Reunião com equipe B",
      tipo: "Normal",
      date: "21/05/2025",
    },
  ];

  return (
    <div className={`dashboard-page ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="dashboard-main">
        <Header />

        {/* Fileira 1 */}
        <div className="cards-container">
          <ChatCard messages={chatMessages} />
          <RankingCard ranking={ranking} />
          <EventsCard activities={activities} />
        </div>

        {/* Fileira 2 */}
        <div className="cards-container">
          <RevenueChart data={chartData} period={period} setPeriod={setPeriod} />
          <TeamRanking data={teamRanking} />
        </div>

        {/* Fileira 3 */}
        <div className="cards-container">
          <ActivitiesList activities={latestActivities} />
          <GoalsCard />
        </div>
      </div>
    </div>
  );
}
