import React, { useState } from "react";
import Sidebar from "./SidebarAluno/SidebarAluno";
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
  CartesianGrid,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell,
} from "recharts";
import {
  FaWeightHanging,
  FaTrophy,
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa";
import "./RelatoriosAluno.css";

export default function RelatoriosAluno() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState("Último Mês");

  const minhasContribuicoes = [
    { mes: "Jan", kg: 5 },
    { mes: "Fev", kg: 8 },
    { mes: "Mar", kg: 12 },
    { mes: "Abr", kg: 15 },
    { mes: "Mai", kg: 20 },
  ];

  const contribuicoesPorTipo = [
    { tipo: "Arroz", quantidade: 8 },
    { tipo: "Feijão", quantidade: 6 },
    { tipo: "Macarrão", quantidade: 4 },
    { tipo: "Óleo", quantidade: 2 },
    { tipo: "Açúcar", quantidade: 3 },
  ];

  const comparativoGrupo = [
    { nome: "João", total: 45 },
    { nome: "Você", total: 23 },
    { nome: "Ana", total: 30 },
    { nome: "Carla", total: 15 },
  ].sort((a, b) => b.total - a.total);

  const habilidades = [
    { habilidade: "Comunicação", valor: 85 },
    { habilidade: "Trabalho em Equipe", valor: 90 },
    { habilidade: "Liderança", valor: 70 },
    { habilidade: "Organização", valor: 80 },
    { habilidade: "Criatividade", valor: 75 },
  ];

  const totalArrecadado = minhasContribuicoes.reduce(
    (acc, curr) => acc + curr.kg,
    0
  );
  const mediaContribuicao = (totalArrecadado / minhasContribuicoes.length).toFixed(1);
  const minhaPosicao = comparativoGrupo.findIndex((p) => p.nome === "Você") + 1;

  return (
    <div className="aluno-reports-page">
      <Sidebar />

      <main className="aluno-reports-main">
        <div className="aluno-reports-header">
          <h1>Meus Relatórios</h1>

          <div className="aluno-reports-filtro">
            <label htmlFor="periodoSelect">Período:</label>
            <select
              id="periodoSelect"
              value={periodoSelecionado}
              onChange={(e) => setPeriodoSelecionado(e.target.value)}
            >
              <option value="Última Semana">Última Semana</option>
              <option value="Último Mês">Último Mês</option>
              <option value="Últimos 3 Meses">Últimos 3 Meses</option>
              <option value="Este Ano">Este Ano</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="aluno-reports-cards">
          <div className="aluno-reports-card">
            <FaWeightHanging className="aluno-reports-card-icon" />
            <div>
              <h3>Total Arrecadado</h3>
              <p>{totalArrecadado} kg</p>
            </div>
          </div>
          <div className="aluno-reports-card">
            <FaChartLine className="aluno-reports-card-icon" />
            <div>
              <h3>Média Mensal</h3>
              <p>{mediaContribuicao} kg</p>
            </div>
          </div>
          <div className="aluno-reports-card">
            <FaTrophy className="aluno-reports-card-icon gold" />
            <div>
              <h3>Posição no Grupo</h3>
              <p>{minhaPosicao}º lugar</p>
            </div>
          </div>
          <div className="aluno-reports-card">
            <FaCalendarAlt className="aluno-reports-card-icon" />
            <div>
              <h3>Contribuições</h3>
              <p>{minhasContribuicoes.length} vezes</p>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="aluno-reports-graficos-container">
          {/* Evolução temporal */}
          <div className="aluno-reports-grafico-card">
            <h2>Evolução das Minhas Contribuições</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={minhasContribuicoes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} kg`} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="kg"
                  stroke="#0088FE"
                  strokeWidth={3}
                  name="Arrecadado (kg)"
                  dot={{ fill: "#0088FE", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Tipos de alimentos */}
          <div className="aluno-reports-grafico-card">
            <h2>Tipos de Alimentos Doados</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={contribuicoesPorTipo}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tipo" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} kg`} />
                <Legend />
                <Bar dataKey="quantidade" fill="#00C49F" name="Quantidade (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Comparativo com o grupo */}
        <div className="aluno-reports-grafico-card aluno-full">
          <h2>Comparativo com o Grupo</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparativoGrupo}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} kg`} />
              <Legend />
              <Bar dataKey="total" name="Total Arrecadado (kg)">
                {comparativoGrupo.map((entry, index) => {
                  const cores = ["#FF6B6B", "#0088FE", "#4ECDC4", "#FFD93D"];
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.nome === "Você" ? "#0088FE" : cores[index % cores.length]}
                    />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Radar de Habilidades */}
        <div className="aluno-reports-grafico-card aluno-full">
          <h2>Minhas Habilidades Desenvolvidas</h2>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={habilidades}>
              <PolarGrid stroke="#e0e0e0" strokeWidth={1.5} />
              <PolarAngleAxis 
                dataKey="habilidade" 
                tick={{ fill: "#333", fontSize: 13, fontWeight: 500 }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fill: "#666", fontSize: 11 }}
                axisLine={false}
              />
              <Radar
                name="Nível"
                dataKey="valor"
                stroke="#0088FE"
                strokeWidth={3}
                fill="url(#colorGradient)"
                fillOpacity={0.7}
                dot={{ fill: "#0088FE", r: 5 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '2px solid #0088FE',
                  borderRadius: '8px',
                  padding: '10px'
                }}
                formatter={(value) => [`${value}%`, 'Nível']}
              />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '20px',
                  fontSize: '14px',
                  fontWeight: 600
                }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0088FE" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#00C49F" stopOpacity={0.5}/>
                </linearGradient>
              </defs>
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}