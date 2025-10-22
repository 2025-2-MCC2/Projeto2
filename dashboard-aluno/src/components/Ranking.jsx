import React from "react";
import "../styles/Ranking.css";

const Ranking = () => {
  const grupos = [
    { pos: 1, nome: "Grupo Alpha", valor: 82450 },
    { pos: 2, nome: "Grupo Beta", valor: 0 },
    { pos: 3, nome: "Grupo Gamma", valor: 0 },
    { pos: 4, nome: "Grupo Delta", valor: 45670 },
    { pos: 5, nome: "Grupo Epsilon", valor: 38290 },
    { pos: 6, nome: "Grupo Zeta", valor: 29850 },
    { pos: 7, nome: "Grupo Theta", valor: 25430 },
  ];

  const top3 = grupos.slice(0, 3);
  const demais = grupos.slice(3);

  const formatar = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="ranking-card">
      <h3>Ranking dos grupos que mais arrecadaram dinheiro na última semana</h3>

      <div className="top3-container">
        <div className="posicao segundo">
          <span className="pos-num">2º</span>
          <p className="grupo-nome">{top3[1].nome}</p>
        </div>
        <div className="posicao primeiro">
          <span className="pos-num">1º 🏆</span>
          <p className="grupo-nome">{top3[0].nome}</p>
          <p className="valor">{formatar(top3[0].valor)}</p>
        </div>
        <div className="posicao terceiro">
          <span className="pos-num">3º</span>
          <p className="grupo-nome">{top3[2].nome}</p>
        </div>
      </div>

      <div className="demais-grupos">
        <ul>
          {demais.map((g) => (
            <li key={g.pos}>
              <span className="rank-num">{g.pos}</span>
              <span className="rank-nome">{g.nome}</span>
              <span className="rank-valor">{formatar(g.valor)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ranking;