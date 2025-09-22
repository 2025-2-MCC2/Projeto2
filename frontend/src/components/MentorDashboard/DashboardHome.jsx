import React from 'react';
import SidebarMenu from './SidebarMenu';
import MentorChart from './MentorChart';
import MentorTable from './MentorTable';
import TasksList from './TasksList';
import Card from './Card';
import { FaUsers, FaCalendarCheck, FaStar } from 'react-icons/fa';
import './styles/dashboard.css';

export default function DashboardHome() {
  return (
    <div className="dashboard-container">
      <SidebarMenu />
      <main className="dashboard-content">
        <h1>Lideranças Empáticas</h1>

        {/* Cards de métricas */}
        <div className="dashboard-cards">
          <Card title="Mentorados" value="12" icon={<FaUsers />} />
          <Card title="Sessões" value="34" icon={<FaCalendarCheck />} />
          <Card title="Avaliações" value="4.8" icon={<FaStar />} />
        </div>

        {/* Gráfico demonstrativo */}
        <MentorChart />

        {/* Lista de tarefas */}
        <TasksList />

        {/* Tabela de mentorados */}
        <MentorTable />
      </main>
    </div>
  );
}
