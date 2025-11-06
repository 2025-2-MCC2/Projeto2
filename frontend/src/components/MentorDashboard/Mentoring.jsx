import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FaTasks, FaBoxOpen, FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import "./Mentoring.css";

export default function Mentoring() {
  const [projetos, setProjetos] = useState([
    { nome: "Projeto Inverno", totalArrecadado: 1250, atividades: 12 },
  ]);

  const [novaAtividade, setNovaAtividade] = useState({ descricao: "", quantidade: "", regiao: "" });
  const [mostrarModal, setMostrarModal] = useState(false);

  const atividades = [
    { aluno: "Ana", descricao: "Arroz", quantidade: 20, regiao: "Norte" },
    { aluno: "João", descricao: "Feijão", quantidade: 15, regiao: "Sul" },
    { aluno: "Carla", descricao: "Leite", quantidade: 30, regiao: "Sudeste" },
    { aluno: "Lucas", descricao: "Arroz", quantidade: 25, regiao: "Centro-Oeste" },
  ];

  const regioes = [
    { nome: "Norte", valor: 20 },
    { nome: "Sul", valor: 15 },
    { nome: "Sudeste", valor: 30 },
    { nome: "Centro-Oeste", valor: 25 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const handleAddAtividade = (e) => {
    e.preventDefault();
    if (novaAtividade.descricao && novaAtividade.quantidade && novaAtividade.regiao) {
      atividades.push({
        aluno: "Novo",
        descricao: novaAtividade.descricao,
        quantidade: Number(novaAtividade.quantidade),
        regiao: novaAtividade.regiao,
      });
      setNovaAtividade({ descricao: "", quantidade: "", regiao: "" });
      setMostrarModal(false);
    }
  };

  return (
    <div className="mentoring-page">
      <Sidebar />

      <main className="mentoring-main">
        <div className="mentoring-header">
          <h1>Mentoria</h1>
          <button className="add-atividade-btn" onClick={() => setMostrarModal(true)}>
            <FaPlus /> Adicionar Arrecadação
          </button>
        </div>

        {/* Cards resumo */}
        <div className="mentoring-cards">
          <div className="card-resumo">
            <FaTasks className="cardresumo-icon" />
            <div>
              <h3>Total de Atividades</h3>
              <p>{atividades.length}</p>
            </div>
          </div>
          <div className="card-resumo">
            <FaBoxOpen className="cardresumo-icon" />
            <div>
              <h3>Total Arrecadado (kg)</h3>
              <p>{atividades.reduce((sum, a) => sum + a.quantidade, 0)}</p>
            </div>
          </div>
        </div>

        {/* Lista de atividades */}
        <div className="atividades-container">
          <h2>Atividades da Equipe</h2>
          <div className="atividades-lista">
            {atividades.map((a, idx) => (
              <div key={idx} className="atividade-card">
                <strong>{a.aluno}</strong>
                <span>{a.descricao}</span>
                <span>{a.quantidade} kg</span>
                <span>{a.regiao}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico de regiões */}
        <div className="graficos-container">
          <div className="grafico-card">
            <h2>Arrecadação por Região</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={regioes} dataKey="valor" nameKey="nome" outerRadius={80} label>
                  {regioes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Modal Adicionar Atividade */}
        {mostrarModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Adicionar Nova Atividade</h2>
              <form onSubmit={handleAddAtividade}>
                <label>
                  Descrição
                  <input
                    type="text"
                    value={novaAtividade.descricao}
                    onChange={(e) => setNovaAtividade({ ...novaAtividade, descricao: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Quantidade (kg)
                  <input
                    type="number"
                    value={novaAtividade.quantidade}
                    onChange={(e) => setNovaAtividade({ ...novaAtividade, quantidade: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Região
                  <input
                    type="text"
                    value={novaAtividade.regiao}
                    onChange={(e) => setNovaAtividade({ ...novaAtividade, regiao: e.target.value })}
                    required
                  />
                </label>
                <div className="modal-actions">
                  <button type="submit" className="save-btn">Salvar</button>
                  <button type="button" className="cancel-btn" onClick={() => setMostrarModal(false)}>Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
