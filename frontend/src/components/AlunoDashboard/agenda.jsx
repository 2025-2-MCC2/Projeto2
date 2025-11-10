import React, { useState, useEffect } from "react";
import Sidebar from "./SidebarAluno/SidebarAluno";
import "./agenda.css";

export default function AgendaAluno() {
  const [eventos, setEventos] = useState(() => {
    const saved = localStorage.getItem("agendaEventos");
    return saved ? JSON.parse(saved) : [];
  });

  const [titulo, setTitulo] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [corEvento, setCorEvento] = useState("#6C63FF");

  const coresDisponiveis = ["#6C63FF", "#FF6B6B", "#FFD93D", "#6BCB77", "#FF9F1C"];

  useEffect(() => {
    localStorage.setItem("agendaEventos", JSON.stringify(eventos));
  }, [eventos]);

  const adicionarEvento = (e) => {
    e.preventDefault();
    if (!titulo || !dataHora) return;

    const novoEvento = {
      id: Date.now(),
      titulo: titulo.trim(),
      dataHora,
      cor: corEvento
    };

    setEventos([...eventos, novoEvento]);
    setTitulo("");
    setDataHora("");
    setCorEvento("#6C63FF");
  };

  const removerEvento = (id) => {
    setEventos(eventos.filter(evt => evt.id !== id));
  };

  return (
    <div className="agenda-dashboard">
      <Sidebar />

      <main className="agenda-main">
        <div className="agenda-form-container">
          <h2 className="agenda-form-title">Adicionar Evento</h2>
          <form className="agenda-form" onSubmit={adicionarEvento}>
            <input
              type="text"
              placeholder="Título do evento"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <input
              type="datetime-local"
              value={dataHora}
              onChange={(e) => setDataHora(e.target.value)}
            />

            <div className="color-palette">
              {coresDisponiveis.map(cor => (
                <div
                  key={cor}
                  className={`color-swatch ${corEvento === cor ? "selected" : ""}`}
                  style={{ backgroundColor: cor }}
                  onClick={() => setCorEvento(cor)}
                />
              ))}
            </div>

            <button type="submit">Adicionar Evento</button>
          </form>
        </div>

        <div className="agenda-events-container">
          {eventos.length === 0 ? (
            <p className="no-events">Nenhum evento adicionado</p>
          ) : (
            eventos
              .sort((a, b) => new Date(a.dataHora) - new Date(b.dataHora))
              .map(evento => {
                const dataFormatada = new Date(evento.dataHora).toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "short" });
                return (
                  <div key={evento.id} className="agenda-event" style={{ borderLeft: `5px solid ${evento.cor}` }}>
                    <div className="event-header">
                      <div>
                        <div className="event-title">{evento.titulo}</div>
                        <div className="event-datetime">{dataFormatada}</div>
                      </div>
                      <button className="remove-btn" onClick={() => removerEvento(evento.id)}>✖</button>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </main>
    </div>
  );
}
