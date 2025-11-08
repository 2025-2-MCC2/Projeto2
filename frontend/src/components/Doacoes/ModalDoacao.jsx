import React, { useState, useEffect } from 'react';
import './ModalDoacao.css';

function ModalDoacao({ isOpen, onClose, onAddDoacao }) {
  const [campanhas, setCampanhas] = useState([]);
  const [loading, setLoading] = useState(false);
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
    try {
      const response = await fetch('http://localhost:3000/api/campanhas'); // ✅ URL correta
      if (!response.ok) {
        throw new Error('Erro ao buscar campanhas');
      }
      const data = await response.json();
      console.log('Campanhas recebidas:', data); // ✅ Debug
      setCampanhas(data); // ✅ API retorna array direto
    } catch (error) {
      console.error('Erro ao buscar campanhas:', error);
      setError('Erro ao carregar campanhas');
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
      const response = await fetch('http://localhost:3000/api/doacoes', {
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
        throw new Error('Erro ao processar doação');
      }

      const data = await response.json();
      setSuccess('✅ Doação realizada com sucesso!');

      if (onAddDoacao) {
        onAddDoacao({
          data: new Date().toISOString().split('T')[0],
          valor: `R$ ${parseFloat(formData.valor).toFixed(2)}`,
          campanha: formData.campanha,
          status: 'Pendente'
        });
      }

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
      console.error('Erro ao enviar doação:', error);
      setError('❌ Erro ao processar doação. Tente novamente.');
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
            >
              <option value="">Selecione uma campanha</option>
              {campanhas.map((campanha) => (
                <option key={campanha.id} value={campanha.nome}>
                  {campanha.nome}
                </option>
              ))}
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
              disabled={loading}
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