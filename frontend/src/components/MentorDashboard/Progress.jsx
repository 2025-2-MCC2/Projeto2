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
} from "recharts";
import {
  FaBullseye,
  FaWeightHanging,
  FaChartLine,
  FaClock,
  FaPlus,
} from "react-icons/fa";
import "./Progress.css";

export default function ProgressoMentor() {
  const [metas, setMetas] = useState([
    { nome: "Campanha de Inverno", meta: 200, arrecadado: 125, prazo: "30/11/2025" },
  ]);

  const [novaMeta, setNovaMeta] = useState({ nome: "", meta: "", prazo: "" });
  const [mostrarModal, setMostrarModal] = useState(false);

  const integrantes = [
    { nome: "Ana", progresso: 30, arrecadado: 60 },
    { nome: "João", progresso: 45, arrecadado: 90 },
    { nome: "Carla", progresso: 15, arrecadado: 30 },
    { nome: "Lucas", progresso: 10, arrecadado: 20 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const metaAtual = metas[0];
  const progresso = ((metaAtual.arrecadado / metaAtual.meta) * 100).toFixed(1);

  const handleAddMeta = (e) => {
    e.preventDefault();
    if (novaMeta.nome && novaMeta.meta) {
      setMetas([
        {
          nome: novaMeta.nome,
          meta: Number(novaMeta.meta),
          arrecadado: 0,
          prazo: novaMeta.prazo,
        },
        ...metas,
      ]);
      setNovaMeta({ nome: "", meta: "", prazo: "" });
      setMostrarModal(false);
    }
  };

  return (
    <div className="mentor-progress-page">
      <Sidebar />

      <main className="mentor-progress-main">
        <div className="mentor-progress-header">
          <h1>Progresso da Arrecadação</h1>
          <button
            className="mentor-add-meta-btn"
            onClick={() => setMostrarModal(true)}
          >
            <FaPlus /> Adicionar Meta
          </button>
        </div>
        <div className="mentor-progress-cards">
          <div className="mentor-progress-card">
            <FaBullseye className="mentor-card-icon" />
            <div>
              <h3>Meta Atual</h3>
              <p>{metaAtual.meta} kg</p>
            </div>
          </div>
          <div className="mentor-progress-card">
            <FaWeightHanging className="mentor-card-icon" />
            <div>
              <h3>Arrecadado</h3>
              <p>{metaAtual.arrecadado} kg</p>
            </div>
          </div>
          <div className="mentor-progress-card">
            <FaChartLine className="mentor-card-icon" />
            <div>
              <h3>Progresso</h3>
              <p>{progresso}%</p>
            </div>
          </div>
          <div className="mentor-progress-card">
            <FaClock className="mentor-card-icon" />
            <div>
              <h3>Prazo</h3>
              <p>{metaAtual.prazo}</p>
            </div>
          </div>
        </div>

        <div className="mentor-graficos-container">
          <div className="mentor-grafico-card">
            <h2>Meta Total (kg)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={[metaAtual]}>
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="meta" fill="#00C49F" name="Meta (kg)" />
                <Bar dataKey="arrecadado" fill="#0088FE" name="Arrecadado (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mentor-grafico-card">
            <h2>Progresso Individual (%)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={integrantes}
                  dataKey="progresso"
                  nameKey="nome"
                  outerRadius={90}
                  label={({ nome, progresso }) => `${nome}: ${progresso}%`}
                >
                  {integrantes.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mentor-ranking-card">
          <h2>Ranking de Arrecadação (kg)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={integrantes} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} kg`} />
              <Legend />
              <Bar dataKey="arrecadado" name="Arrecadado (kg)">
                {integrantes.map((entry, index) => (
                  <Cell key={`cell-rank-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Modal Adicionar Meta */}
        {mostrarModal && (
          <div className="mentor-modal-overlay">
            <div className="mentor-modal">
              <h2>Adicionar Nova Meta</h2>
              <form onSubmit={handleAddMeta}>
                <label>
                  Nome da Meta
                  <input
                    type="text"
                    value={novaMeta.nome}
                    onChange={(e) =>
                      setNovaMeta({ ...novaMeta, nome: e.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  Meta (em kg)
                  <input
                    type="number"
                    value={novaMeta.meta}
                    onChange={(e) =>
                      setNovaMeta({ ...novaMeta, meta: e.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  Prazo
                  <input
                    type="text"
                    placeholder="Ex: 30/11/2025"
                    value={novaMeta.prazo}
                    onChange={(e) =>
                      setNovaMeta({ ...novaMeta, prazo: e.target.value })
                    }
                  />
                </label>
                <div className="mentor-modal-actions">
                  <button type="submit" className="mentor-save-btn">
                    Salvar
                  </button>
                  <button
                    type="button"
                    className="mentor-cancel-btn"
                    onClick={() => setMostrarModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
