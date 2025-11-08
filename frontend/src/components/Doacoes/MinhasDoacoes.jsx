import React, { useState, useEffect } from 'react';
import './MinhasDoacoes.css';
import ModalDoacao from './ModalDoacao';

function MinhasDoacoes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doacoes, setDoacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perfil, setPerfil] = useState(null);
  const [error, setError] = useState('');

  // ⚠️ IMPORTANTE: Substitua por um sistema de autenticação real
  // Por enquanto, vou usar um email fixo para demonstração
  const emailDoador = 'doador@exemplo.com'; // Troque pelo email do usuário logado

  useEffect(() => {
    carregarDoacoes();
    carregarPerfil();
  }, []);

  const carregarDoacoes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5173/api/doacoes/${emailDoador}`);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar doações');
      }

      const data = await response.json();
      
      // Formatar os dados para exibição
      const doacoesFormatadas = data.map(doacao => ({
        id: doacao.id,
        data: doacao.data,
        valor: `R$ ${parseFloat(doacao.valor).toFixed(2)}`,
        campanha: doacao.campanha,
        status: doacao.status,
        mensagem: doacao.mensagem_agradecimento
      }));

      setDoacoes(doacoesFormatadas);
    } catch (error) {
      console.error('Erro ao carregar doações:', error);
      setError('Erro ao carregar suas doações');
    } finally {
      setLoading(false);
    }
  };

  const carregarPerfil = async () => {
    try {
      const response = await fetch(`http://localhost:5173/api/perfil/${emailDoador}`);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar perfil');
      }

      const data = await response.json();
      setPerfil(data);
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
    }
  };

  const handleAddDoacao = (novaDoacao) => {
    // Recarregar as doações após adicionar uma nova
    carregarDoacoes();
    carregarPerfil();
  };

  if (loading) {
    return (
      <div className="minhas-doacoes-container">
        <div className="loading">Carregando suas doações...</div>
      </div>
    );
  }

  return (
    <div className="minhas-doacoes-container">
      <h1>Olá, {emailDoador}!</h1>
      
      {error && <div className="alert alert-error">{error}</div>}

      {/* Card de Resumo */}
      {perfil && (
        <div className="resumo-doacoes">
          <div className="resumo-card">
            <h3>Total Doado</h3>
            <p className="valor-destaque">
              R$ {parseFloat(perfil.resumo.valor_total || 0).toFixed(2)}
            </p>
          </div>
          <div className="resumo-card">
            <h3>Total de Doações</h3>
            <p className="valor-destaque">{perfil.resumo.total_doacoes}</p>
          </div>
          <div className="resumo-card">
            <h3>Valor Pendente</h3>
            <p className="valor-destaque">
              R$ {parseFloat(perfil.resumo.valor_pendente || 0).toFixed(2)}
            </p>
          </div>
        </div>
      )}

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
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="cards-info">
        <div className="card-info card-combate">
          <h3>Combate a Fome</h3>
          <p>Sua doação ajudou a fornecer refeições para pessoas em necessidades</p>
        </div>
        
        <div className="card-info card-agradecimento">
          <h3>Mensagens de Agradecimento</h3>
          {doacoes.filter(d => d.mensagem).length > 0 ? (
            <div className="mensagens-lista">
              {doacoes
                .filter(d => d.mensagem)
                .map(d => (
                  <p key={d.id}>{d.mensagem}</p>
                ))
              }
            </div>
          ) : (
            <p>Obrigado pela sua ajuda! Sua contribuição faz a diferença!</p>
          )}
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