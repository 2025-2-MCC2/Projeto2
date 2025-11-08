import React, { useState } from "react";
import Sidebar from "./SidebarAluno/SidebarAluno";
import "./ProgressoAluno.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import {
  FaBullseye,
  FaWeightHanging,
  FaChartLine,
  FaClock,
  FaTrophy,
} from "react-icons/fa";
import "./ProgressoAluno.css";

export default function ProgressoAluno() {
  const [minhasContribuicoes] = useState([
    { data: "01/10", peso: 5 },
    { data: "08/10", peso: 8 },
    { data: "15/10", peso: 12 },
    { data: "22/10", peso: 15 },
    { data: "29/10", peso: 20 },
  ]);

  const metaGrupo = {
    nome: "Campanha de Inverno",
    meta: 200,
    arrecadado: 125,
    prazo: "30/11/2025",
  };

  const meuProgresso = {
    totalArrecadado: 20,
    metaPessoal: 30,
    posicaoRanking: 2,
    totalIntegrantes: 4,
  };

  const rankingGrupo = [
    { nome: "João", arrecadado: 45 },
    { nome: "Você", arrecadado: 20 },
    { nome: "Ana", arrecadado: 30 },
    { nome: "Carla", arrecadado: 15 },
  ].sort((a, b) => b.arrecadado - a.arrecadado);

  const progressoGrupo = (
    (metaGrupo.arrecadado / metaGrupo.meta) *
    100
  ).toFixed(1);
  const meuProgressoPessoal = (
    (meuProgresso.totalArrecadado / meuProgresso.metaPessoal) *
    100
  ).toFixed(1);

  return (
    <div className="aluno-progress-page">
      <Sidebar />

      <main className="aluno-progress-main">
        <div className="aluno-progress-header">
          <h1>Meu Progresso</h1>
          <div className="aluno-trophy-badge">
            <FaTrophy /> {meuProgresso.posicaoRanking}º lugar
          </div>
        </div>

        {/* Cards resumo pessoal */}
        <div className="aluno-progress-cards">
          <div className="aluno-progress-card">
            <FaWeightHanging className="aluno-card-icon" />
            <div>
              <h3>Minha Contribuição</h3>
              <p>{meuProgresso.totalArrecadado} kg</p>
            </div>
          </div>
          <div className="aluno-progress-card">
            <FaBullseye className="aluno-card-icon" />
            <div>
              <h3>Minha Meta</h3>
              <p>{meuProgresso.metaPessoal} kg</p>
            </div>
          </div>
          <div className="aluno-progress-card">
            <FaChartLine className="aluno-card-icon" />
            <div>
              <h3>Meu Progresso</h3>
              <p>{meuProgressoPessoal}%</p>
            </div>
          </div>
          <div className="aluno-progress-card">
            <FaClock className="aluno-card-icon" />
            <div>
              <h3>Prazo</h3>
              <p>{metaGrupo.prazo}</p>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="aluno-graficos-container">
          <div className="aluno-grafico-card">
            <h2>Minhas Contribuições ao Longo do Tempo</h2>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={minhasContribuicoes}>
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} kg`} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="peso"
                  stroke="#83122fff"
                  fill="#f0331bff"
                  fillOpacity={0.6}
                  name="Peso arrecadado (kg)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="aluno-grafico-card">
            <h2>Meta do Grupo</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={[metaGrupo]}>
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="meta" fill="#fa007dff" name="Meta (kg)" />
                <Bar dataKey="arrecadado" fill="#8300feff" name="Arrecadado (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Ranking do Grupo */}
        <div className="aluno-ranking-card">
          <h2>Ranking do Grupo</h2>
          <div className="aluno-ranking-list">
            {rankingGrupo.map((integrante, index) => (
              <div
                key={index}
                className={`aluno-ranking-item ${
                  integrante.nome === "Você" ? "aluno-ranking-destaque" : ""
                }`}
              >
                <div className="aluno-ranking-posicao">
                  <span className="aluno-posicao-numero">{index + 1}º</span>
                  <span className="aluno-ranking-nome">{integrante.nome}</span>
                </div>
                <div className="aluno-ranking-valor">
                  {integrante.arrecadado} kg
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progresso do Grupo */}
        <div className="aluno-grupo-card">
          <h2>Progresso do Grupo: {metaGrupo.nome}</h2>
          <div className="aluno-progress-bar-container">
            <div className="aluno-progress-bar">
              <div
                className="aluno-progress-fill"
                style={{ width: `${progressoGrupo}%` }}
              >
                <span>{progressoGrupo}%</span>
              </div>
            </div>
            <p className="aluno-progress-info">
              {metaGrupo.arrecadado} kg de {metaGrupo.meta} kg arrecadados
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}