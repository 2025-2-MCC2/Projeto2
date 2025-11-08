import React from "react";
import "./MinhasDoacoes.css";
import NavbarDoacoes from "./NavbarDoacoes";

const MinhasDoacoes = () => {
  // Dados das doações
  const doacoes = [
    {
      id: 1,
      data: "09/04/2025",
      valor: "R$ 100",
      campanha: "Combate a Fome",
      status: "Confirmada"
    },
    {
      id: 2,
      data: "26/04/2025",
      valor: "R$ 80",
      campanha: "Combate a Fome",
      status: "Confirmada"
    },
    {
      id: 3,
      data: "11/06/2025",
      valor: "R$ 50",
      campanha: "Combate a Fome",
      status: "Pendente"
    }
  ];

  return (
    <>
      <NavbarDoacoes />
      <div className="doacoes-container">
        <h2>Olá, Nome do doador!</h2>
        <button className="nova-doacao">+ Nova Doação</button>

        <h3>Histórico de Doações</h3>
        <table className="tabela-doacoes">
          <thead>
            <tr>
              <th>Data</th>
              <th>Valor</th>
              <th>Campanha</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {doacoes.map((doacao) => (
              <tr key={doacao.id}>
                <td>{doacao.data}</td>
                <td>{doacao.valor}</td>
                <td>{doacao.campanha}</td>
                <td className={doacao.status === "Confirmada" ? "confirmada" : "pendente"}>
                  {doacao.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cards-doacoes">
          <div className="card card-vermelho">
            <h4>Combate a Fome</h4>
            <p>Sua doação ajudou a fornecer refeições para pessoas em necessidades</p>
          </div>

          <div className="card card-amarelo">
            <h4>Mensagens de Agradecimento</h4>
            <p>Obrigado pela sua ajuda! Sua contribuição faz a diferença!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinhasDoacoes;