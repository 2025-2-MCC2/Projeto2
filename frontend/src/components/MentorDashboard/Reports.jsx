import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";
import {
  FaWeightHanging,
  FaBalanceScale,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";
import "./Reports.css";

export default function Reports() {
  const [campanhaSelecionada, setCampanhaSelecionada] = useState("Campanha 4");

  const campanhas = [
    { nome: "Campanha 1", kg: 300 },
    { nome: "Campanha 2", kg: 450 },
    { nome: "Campanha 3", kg: 600 },
    { nome: "Campanha 4", kg: 520 },
  ];

  const alimentosPorCampanha = {
    "Campanha 1": [
      { tipo: "Arroz", quantidade: 30 },
      { tipo: "Feijão", quantidade: 20 },
      { tipo: "Macarrão", quantidade: 10 },
      { tipo: "Óleo", quantidade: 5 },
      { tipo: "Açúcar", quantidade: 8 },
    ],
    "Campanha 2": [
      { tipo: "Arroz", quantidade: 35 },
      { tipo: "Feijão", quantidade: 25 },
      { tipo: "Macarrão", quantidade: 12 },
      { tipo: "Óleo", quantidade: 6 },
      { tipo: "Açúcar", quantidade: 10 },
    ],
    "Campanha 3": [
      { tipo: "Arroz", quantidade: 40 },
      { tipo: "Feijão", quantidade: 30 },
      { tipo: "Macarrão", quantidade: 15 },
      { tipo: "Óleo", quantidade: 8 },
      { tipo: "Açúcar", quantidade: 12 },
    ],
    "Campanha 4": [
      { tipo: "Arroz", quantidade: 45 },
      { tipo: "Feijão", quantidade: 35 },
      { tipo: "Macarrão", quantidade: 20 },
      { tipo: "Óleo", quantidade: 10 },
      { tipo: "Açúcar", quantidade: 15 },
    ],
  };

  const evolucao = [
    { tipo: "Arroz", c1: 10, c2: 15, c3: 8, c4: 7 },
    { tipo: "Feijão", c1: 8, c2: 10, c3: 12, c4: 9 },
    { tipo: "Macarrão", c1: 6, c2: 8, c3: 9, c4: 7 },
    { tipo: "Óleo", c1: 3, c2: 5, c3: 4, c4: 6 },
    { tipo: "Açúcar", c1: 4, c2: 7, c3: 6, c4: 5 },
  ];

  const COLORS = ["#00B49F", "#0088FE", "#FFBB28", "#FF8042", "#C13C37"];
  const alimentosAtuais = alimentosPorCampanha[campanhaSelecionada];

  return (
    <div className="reports-page">
      <Sidebar />

      <main className="reports-main">
        <div className="reports-header">
          <h1>Relatórios de Arrecadação</h1>

          <div className="reports-filtro">
            <label htmlFor="campanhaSelect">Campanha:</label>
            <select
              id="campanhaSelect"
              value={campanhaSelecionada}
              onChange={(e) => setCampanhaSelecionada(e.target.value)}
            >
              {Object.keys(alimentosPorCampanha).map((camp) => (
                <option key={camp} value={camp}>
                  {camp}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="reports-cards">
          <div className="reports-card">
            <FaWeightHanging className="reports-card-icon" />
            <div>
              <h3>Arrecadação Total</h3>
              <p>2.340 kg</p>
            </div>
          </div>
          <div className="reports-card">
            <FaBalanceScale className="reports-card-icon" />
            <div>
              <h3>Média por Campanha</h3>
              <p>585 kg</p>
            </div>
          </div>
          <div className="reports-card">
            <FaUsers className="reports-card-icon" />
            <div>
              <h3>Famílias Ajudadas</h3>
              <p>1.200</p>
            </div>
          </div>
          <div className="reports-card">
            <FaHandsHelping className="reports-card-icon" />
            <div>
              <h3>Campanhas Realizadas</h3>
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="reports-graficos-container">
          <div className="reports-grafico-card">
            <h2>Arrecadação Total por Campanha</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={campanhas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kg" fill="#00B49F" name="Total (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="reports-grafico-card">
            <h2>{`Distribuição de Alimentos (${campanhaSelecionada})`}</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={alimentosAtuais}
                  dataKey="quantidade"
                  nameKey="tipo"
                  outerRadius={80}
                  label
                >
                  {alimentosAtuais.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="reports-grafico-card full">
          <h2>Evolução de Arrecadação por Tipo de Alimento</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={evolucao} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="tipo" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="c1" fill="#00B49F" name="Campanha 1" />
              <Bar dataKey="c2" fill="#0088FE" name="Campanha 2" />
              <Bar dataKey="c3" fill="#FFBB28" name="Campanha 3" />
              <Bar dataKey="c4" fill="#FF8042" name="Campanha 4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
