import React from "react";
import "./MinhasDoacoes.css";
import NavbarDoacoes from "./NavbarDoacoes";

const MinhasDoacoes = () => {
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
            <tr>
              <td>09/04/2025</td>
              <td>R$ 100,00</td>
              <td>Combate à Fome</td>
              <td className="confirmada">Confirmada</td>
            </tr>
            <tr>
              <td>26/04/2025</td>
              <td>R$ 80,00</td>
              <td>Educação</td>
              <td className="confirmada">Confirmada</td>
            </tr>
            <tr>
              <td>11/06/2025</td>
              <td>R$ 50,00</td>
              <td>Saúde</td>
              <td className="pendente">Pendente</td>
            </tr>
          </tbody>
        </table>

        <div className="cards-doacoes">
          <div className="card card-vermelho">
            <h4>Combate à Fome</h4>
            <p>Sua doação ajudou a fornecer refeições para pessoas em necessidade.</p>
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