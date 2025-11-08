import React, { useState } from 'react';
import './MinhasDoacoes.css';
import ModalDoacao from './ModalDoacao';

function MinhasDoacoes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doacoes, setDoacoes] = useState([
    { data: '09/04/2025', valor: 'R$ 100', campanha: 'Combate a Fome', status: 'Confirmada' },
    { data: '26/04/2025', valor: 'R$ 80', campanha: 'Combate a Fome', status: 'Confirmada' },
    { data: '11/06/2025', valor: 'R$ 50', campanha: 'Combate a Fome', status: 'Pendente' }
  ]);

  const formatarData = (dataISO) => {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const handleAddDoacao = (novaDoacao) => {
    const doacaoFormatada = {
      ...novaDoacao,
      data: formatarData(novaDoacao.data)
    };
    setDoacoes([doacaoFormatada, ...doacoes]);
  };

  return (
    <div className="minhas-doacoes-container">
      <h1>Olá, Nome do doador!</h1>
      
      <button 
        className="btn-nova-doacao"
        onClick={() => setIsModalOpen(true)}
      >
        + Nova Doação
      </button>

      <h2>Histórico de Doações</h2>

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
          {doacoes.map((doacao, index) => (
            <tr key={index}>
              <td>{doacao.data}</td>
              <td>{doacao.valor}</td>
              <td>{doacao.campanha}</td>
              <td className={doacao.status === 'Pendente' ? 'status-pendente' : 'status-confirmada'}>
                {doacao.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cards-info">
        <div className="card-info card-combate">
          <h3>Combate a Fome</h3>
          <p>Sua doação ajudou a fornecer refeições para pessoas em necessidades</p>
        </div>
        
        <div className="card-info card-agradecimento">
          <h3>Mensagens de Agradecimento</h3>
          <p>Obrigado pela sua ajuda! Sua contribuição faz a diferença!</p>
        </div>
      </div>

      <ModalDoacao 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddDoacao={handleAddDoacao}
      />
    </div>
  );
}

export default MinhasDoacoes;