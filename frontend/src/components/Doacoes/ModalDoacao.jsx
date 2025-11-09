import React, { useState, useEffect } from 'react';
import './ModalDoacao.css';

function ModalDoacao({ isOpen, onClose, onAddDoacao }) {
  const [campanhas, setCampanhas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCampanhas, setLoadingCampanhas] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    doador_nome: '',
    doador_email: '',
    valor: '',
    campanha: '',
    forma_pagamento: 'PIX'
  });

  // Buscar campanhas ao abrir o modal
  useEffect(() => {
    if (isOpen) {
      buscarCampanhas();
    }
  }, [isOpen]);

  const buscarCampanhas = async () => {
    setLoadingCampanhas(true);
    setError('');
    
    try {
      console.log('🔍 Buscando campanhas em: http://localhost:3001/api/campanhas');
      const response = await fetch('http://localhost:3001/api/campanhas');
      
      console.log('📡 Status da resposta:', response.status);
      console.log('📡 Response OK?:', response.ok);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Erro na resposta:', errorText);
        throw new Error(`Erro HTTP: ${response.status} - ${errorText}`);
      }
      
      const text = await response.text();
      console.log('📄 Resposta bruta:', text);
      
      const data = JSON.parse(text);
      console.log('📦 Dados parseados:', data);
      console.log('📦 Tipo de dados:', typeof data);
      console.log('📦 É array?:', Array.isArray(data));
      
      // Verifica se é um array
      if (Array.isArray(data)) {
        setCampanhas(data);
        console.log('✅ Campanhas carregadas:', data.length);
        console.log('✅ Primeira campanha:', data[0]);
      } else if (data.campanhas && Array.isArray(data.campanhas)) {
        // Caso a API retorne {campanhas: [...]}
        setCampanhas(data.campanhas);
        console.log('✅ Campanhas carregadas:', data.campanhas.length);
      } else {
        console.error('❌ Formato de dados inesperado:', data);
        console.error('❌ Chaves disponíveis:', Object.keys(data));
        setCampanhas([]);
      }
      
    } catch (error) {
      console.error('❌ Erro completo:', error);
      console.error('❌ Stack:', error.stack);
      setError(`Erro ao carregar campanhas: ${error.message}`);
      setCampanhas([]);
    } finally {
      setLoadingCampanhas(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validações
    if (!formData.doador_nome || !formData.doador_email || !formData.valor || !formData.campanha) {
      setError('Por favor, preencha todos os campos obrigatórios');
      setLoading(false);
      return;
    }

    if (parseFloat(formData.valor) <= 0) {
      setError('O valor da doação deve ser maior que zero');
      setLoading(false);
      return;
    }

    try {
      console.log('Enviando doação...', formData); // Debug
      
      const response = await fetch('http://localhost:3001/api/doacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doador_nome: formData.doador_nome,
          doador_email: formData.doador_email,
          valor: parseFloat(formData.valor),
          campanha: formData.campanha,
          forma_pagamento: formData.forma_pagamento
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Erro ao processar doação');
      }

      const data = await response.json();
      console.log('✅ Doação criada:', data); // Debug
      
      setSuccess('✅ Doação realizada com sucesso!');

      // Atualiza a lista na página principal
      if (onAddDoacao) {
        onAddDoacao({
          id: data.id || Date.now(),
          data: new Date().toISOString().split('T')[0],
          valor: parseFloat(formData.valor),
          campanha: formData.campanha,
          status: 'Pendente',
          doador_nome: formData.doador_nome,
          doador_email: formData.doador_email,
          forma_pagamento: formData.forma_pagamento
        });
      }

      // Aguarda 2 segundos antes de fechar
      setTimeout(() => {
        setFormData({
          doador_nome: '',
          doador_email: '',
          valor: '',
          campanha: '',
          forma_pagamento: 'PIX'
        });
        setSuccess('');
        onClose();
      }, 2000);

    } catch (error) {
      console.error('❌ Erro ao enviar doação:', error);
      setError(`❌ ${error.message || 'Erro ao processar doação. Tente novamente.'}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2>Nova Doação</h2>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="doador_nome">Nome Completo *</label>
            <input
              type="text"
              id="doador_nome"
              name="doador_nome"
              value={formData.doador_nome}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="doador_email">E-mail *</label>
            <input
              type="email"
              id="doador_email"
              name="doador_email"
              value={formData.doador_email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="valor">Valor da Doação (R$) *</label>
            <input
              type="number"
              id="valor"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="campanha">Campanha *</label>
            <select
              id="campanha"
              name="campanha"
              value={formData.campanha}
              onChange={handleChange}
              required
              disabled={loadingCampanhas}
            >
              <option value="">
                {loadingCampanhas ? 'Carregando campanhas...' : 'Selecione uma campanha'}
              </option>
              {campanhas.length > 0 ? (
                campanhas.map((campanha) => (
                  <option key={campanha.id} value={campanha.nome}>
                    {campanha.nome}
                  </option>
                ))
              ) : (
                !loadingCampanhas && <option value="" disabled>Nenhuma campanha disponível</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="forma_pagamento">Forma de Pagamento *</label>
            <select
              id="forma_pagamento"
              name="forma_pagamento"
              value={formData.forma_pagamento}
              onChange={handleChange}
              required
            >
              <option value="PIX">PIX</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="Boleto">Boleto</option>
              <option value="Transferência">Transferência Bancária</option>
            </select>
          </div>

          <div className="modal-actions">
            <button 
              type="button" 
              className="btn-cancelar" 
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="btn-confirmar"
              disabled={loading || loadingCampanhas || campanhas.length === 0}
            >
              {loading ? 'Processando...' : 'Confirmar Doação'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalDoacao;