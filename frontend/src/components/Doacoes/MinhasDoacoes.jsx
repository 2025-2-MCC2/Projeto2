import React, { useState } from 'react';
import './MinhasDoacoes.css';
import ModalDoacao from './ModalDoacao';

const nomeDoador = localStorage.getItem('nomeDoador') || 'doador@exemplo.com';


function MinhasDoacoes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [doacoes, setDoacoes] = useState([
  { id: 1, data: '10/04/2025', valor: 'R$ 100,00', campanha: 'Combate à Fome', status: 'Confirmada' },
  { id: 2, data: '27/04/2025', valor: 'R$ 80,00', campanha: 'Educação para Todos', status: 'Confirmada' }
]);
  const emailDoador = 'doador@exemplo.com'; // Simulação

  // Adicionar nova doação mock
  const handleAddDoacao = (novaDoacao) => {
    const doacaoFormatada = {
      ...novaDoacao,
      valor: `R$ ${parseFloat(novaDoacao.valor).toFixed(2)}`
    };
    setDoacoes(prev => [...prev, doacaoFormatada]); // Mantém as existentes
  };

  // Simular pagamento
  const confirmarPagamento = (id) => {
    setDoacoes(doacoes.map(d => d.id === id ? { ...d, status: 'Confirmada' } : d));
  };

  return (
    <div className="minhas-doacoes-container">
      <h1>Olá, {nomeDoador}!</h1>
      
      <button 
        className="btn-nova-doacao"
        onClick={() => setIsModalOpen(true)}
      >
        + Nova Doação
      </button>

      <h2>Histórico de Doações</h2>

      {doacoes.length === 0 ? (
        <div className="sem-doacoes">
          <p>Você ainda não fez nenhuma doação.</p>
          <p>Clique em "Nova Doação" para começar!</p>
        </div>
      ) : (
        <table className="tabela-doacoes">
          <thead>
            <tr>
              <th>Data</th>
              <th>Valor</th>
              <th>Campanha</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {doacoes.map((doacao) => (
              <tr key={doacao.id}>
                <td>{doacao.data}</td>
                <td>{doacao.valor}</td>
                <td>{doacao.campanha}</td>
                <td className={doacao.status === 'Pendente' ? 'status-pendente' : 'status-confirmada'}>
                  {doacao.status}
                </td>
                <td>
                  {doacao.status === 'Pendente' && (
                    <>
                      {doacao.chavePix && <span className="chave-pix">Chave Pix: {doacao.chavePix}</span>}
                      <button 
                        className="btn-simular-pagamento"
                        onClick={() => confirmarPagamento(doacao.id)}
                      >
                        Simular Pagamento
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="cards-info">
        <div className="card-info card-combate">
          <h3>Combate à Fome</h3>
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