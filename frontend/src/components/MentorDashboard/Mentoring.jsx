import React, { useState, useMemo } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaTasks, FaBoxOpen, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./Mentoring.css";

export default function Mentoring() {
  const metaGlobal = Number(localStorage.getItem("metaGlobal")) || 100;

  const alunosMock = [
    { id: "a1", nome: "Ana Oliveira", email: "ana@uni.edu" },
    { id: "a2", nome: "João Lima", email: "joao@uni.edu" },
    { id: "a3", nome: "Carla Mendes", email: "carla@uni.edu" },
    { id: "a4", nome: "Lucas Pereira", email: "lucas@uni.edu" },
    { id: "a5", nome: "Rafa Morais", email: "rafa@uni.edu" },
  ];

  const atividadesMock = [
    { alunoId: "a1", alimento: "Arroz", quantidade: 20, endereco: "Rua das Flores, Centro", data: "2025-11-05T10:15:00" },
    { alunoId: "a2", alimento: "Feijão", quantidade: 15, endereco: "Av. Brasil, Sul", data: "2025-11-06T11:30:00" },
    { alunoId: "a3", alimento: "Leite", quantidade: 30, endereco: "Rua A, Bairro Novo", data: "2025-11-06T09:05:00" },
    { alunoId: "a4", alimento: "Arroz", quantidade: 25, endereco: "Praça Central, Centro", data: "2025-11-07T14:40:00" },
    { alunoId: "a1", alimento: "Açúcar", quantidade: 5, endereco: "Rua das Flores, Centro", data: "2025-11-07T16:00:00" },
    { alunoId: "a5", alimento: "Macarrão", quantidade: 12, endereco: "Av. Liberdade, Oeste", data: "2025-11-08T08:20:00" },
    { alunoId: "a2", alimento: "Óleo", quantidade: 6, endereco: "Av. Brasil, Sul", data: "2025-11-08T09:45:00" },
    { alunoId: "a3", alimento: "Arroz", quantidade: 10, endereco: "Rua A, Bairro Novo", data: "2025-11-08T10:10:00" },
    { alunoId: "a4", alimento: "Feijão", quantidade: 8, endereco: "Praça Central, Centro", data: "2025-11-09T12:05:00" },
    { alunoId: "a5", alimento: "Leite", quantidade: 18, endereco: "Av. Liberdade, Oeste", data: "2025-11-09T13:40:00" },
    { alunoId: "a1", alimento: "Macarrão", quantidade: 7, endereco: "Rua das Flores, Centro", data: "2025-11-10T10:00:00" },
    { alunoId: "a2", alimento: "Arroz", quantidade: 9, endereco: "Av. Brasil, Sul", data: "2025-11-10T11:30:00" },
  ];

  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalAluno, setModalAluno] = useState(null);
  const [verTodas, setVerTodas] = useState(false);

  const [filtroInicio, setFiltroInicio] = useState("");
  const [filtroFim, setFiltroFim] = useState("");

  const atividadesFiltradas = useMemo(() => {
    if (!filtroInicio && !filtroFim) return atividadesMock;
    const start = filtroInicio ? new Date(filtroInicio) : null;
    const end = filtroFim ? new Date(filtroFim + "T23:59:59") : null;
    return atividadesMock.filter((a) => {
      const d = new Date(a.data);
      if (start && d < start) return false;
      if (end && d > end) return false;
      return true;
    }).sort((a, b) => new Date(b.data) - new Date(a.data));
  }, [filtroInicio, filtroFim]);

  const ultimas5 = atividadesFiltradas.slice(0, 5);

  const totalPorAluno = useMemo(() => {
    const map = {};
    alunosMock.forEach(a => (map[a.id] = 0));
    atividadesFiltradas.forEach((act) => {
      map[act.alunoId] = (map[act.alunoId] || 0) + Number(act.quantidade);
    });
    return alunosMock.map(a => ({ alunoId: a.id, nome: a.nome, total: map[a.id] || 0 }));
  }, [atividadesFiltradas]);

  const graficoDados = totalPorAluno.map((t) => ({ nome: t.nome, kg: t.total }));

  function abrirModalAluno(alunoId) {
    const aluno = alunosMock.find(a => a.id === alunoId);
    setModalAluno(aluno);
    setMostrarModal(true);
  }

  function fecharModal() {
    setMostrarModal(false);
    setModalAluno(null);
  }

  function fmtData(iso) {
    const d = new Date(iso);
    return d.toLocaleString();
  }

  const totalGeral = atividadesFiltradas.reduce((s, a) => s + Number(a.quantidade), 0);
  const mediaPorAluno = (totalGeral / alunosMock.length).toFixed(1);

  return (
    <div className="mentoring-page">
      <Sidebar />

      <main className="mentoring-main">
        <div className="mentoring-header">
          <h1>Mentoria</h1>
          <div className="mentoring-actions">
            <div className="date-filter">
              <label>De</label>
              <div className="date-wrapper">
                <FaCalendarAlt className="calendar-icon" />
                <input
                  type="date"
                  value={filtroInicio}
                  onChange={(e) => setFiltroInicio(e.target.value)}
                  className="date-input"
                />
              </div>
              <label>Até</label>
              <div className="date-wrapper">
                <FaCalendarAlt className="calendar-icon" />
                <input
                  type="date"
                  value={filtroFim}
                  onChange={(e) => setFiltroFim(e.target.value)}
                  className="date-input"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mentoring-cards">
          <div className="card-resumo">
            <FaTasks className="cardresumo-icon" />
            <div>
              <h3>Total de Atividades</h3>
              <p>{atividadesFiltradas.length}</p>
            </div>
          </div>
          <div className="card-resumo">
            <FaBoxOpen className="cardresumo-icon" />
            <div>
              <h3>Total Arrecadado (kg)</h3>
              <p>{totalGeral} kg</p>
            </div>
          </div>
          <div className="card-resumo">
            <FaMapMarkerAlt className="cardresumo-icon" />
            <div>
              <h3>Média por Aluno</h3>
              <p>{mediaPorAluno} kg</p>
            </div>
          </div>
        </div>
        <div className="atividades-container">
          <h2>Progresso dos Integrantes (meta: {metaGlobal} kg)</h2>
          <div className="alunos-grid">
            {totalPorAluno.map((p) => {
              const pct = Math.min(100, Math.round((p.total / metaGlobal) * 100));
              return (
                <div className="aluno-card" key={p.alunoId}>
                  <div className="aluno-top">
                    <strong>{p.nome}</strong>
                    <span className="aluno-kg">{p.total} kg</span>
                  </div>
                  <div className="barra-progresso">
                    <div className="barra-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="aluno-actions">
                    <button className="ver-detalhes-btn" onClick={() => abrirModalAluno(p.alunoId)}>Ver detalhes</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="atividades-container">
          <h2>Últimas Atividades</h2>
          <div className="atividades-lista">
            {ultimas5.map((a, idx) => {
              const aluno = alunosMock.find(x => x.id === a.alunoId);
              return (
                <div className="atividade-card" key={idx}>
                  <div className="atividade-left">
                    <strong>{aluno?.nome}</strong>
                    <span className="atividade-info">{a.alimento} — {a.quantidade} kg</span>
                    <span className="atividade-end">{a.endereco}</span>
                  </div>
                  <div className="atividade-right">
                    <span className="atividade-data">{fmtData(a.data)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ver-tudo-row">
            <button className="ver-tudo-btn" onClick={() => setVerTodas(!verTodas)}>
              {verTodas ? "Mostrar apenas últimas 5" : "Ver todas atividades"}
            </button>
          </div>

          {verTodas && (
            <div className="atividades-lista todas">
              {atividadesFiltradas.map((a, idx) => {
                const aluno = alunosMock.find(x => x.id === a.alunoId);
                return (
                  <div className="atividade-card" key={`all-${idx}`}>
                    <div className="atividade-left">
                      <strong>{aluno?.nome}</strong>
                      <span className="atividade-info">{a.alimento} — {a.quantidade} kg</span>
                      <span className="atividade-end">{a.endereco}</span>
                    </div>
                    <div className="atividade-right">
                      <span className="atividade-data">{fmtData(a.data)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="graficos-container">
          <div className="grafico-card">
            <h2>Atividades por Aluno (kg)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={graficoDados}>
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="kg" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {mostrarModal && modalAluno && (
          <div className="modal-overlay" onClick={fecharModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>Atividades de {modalAluno.nome}</h2>
              <div className="atividades-lista">
                {atividadesFiltradas.filter(a => a.alunoId === modalAluno.id).map((a, i) => (
                  <div className="atividade-card" key={`modal-${i}`}>
                    <div>
                      <strong>{a.alimento}</strong>
                      <div className="atividade-info">{a.quantidade} kg — {a.endereco}</div>
                    </div>
                    <div>
                      <span className="atividade-data">{fmtData(a.data)}</span>
                    </div>
                  </div>
                ))}
                {atividadesFiltradas.filter(a => a.alunoId === modalAluno.id).length === 0 && (
                  <p>Nenhuma atividade no período selecionado.</p>
                )}
              </div>
              <div className="modal-actions">
                <button className="save-btn" onClick={fecharModal}>Fechar</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
