import React, { useState } from 'react';
import './ModalDoacao.css';

function ModalDoacao({ isOpen, onClose, onAddDoacao }) {
  const [formData, setFormData] = useState({
    valor: '',
    campanha: '',
    data: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.valor || !formData.campanha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const novaDoacao = {
      data: formData.data,
      valor: `R$ ${formData.valor}`,
      campanha: formData.campanha,
      status: 'Pendente'
    };

    onAddDoacao(novaDoacao);
    
    // Limpa o formulário
    setFormData({
      valor: '',
      campanha: '',
      data: new Date().toISOString().split('T')[0]
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Nova Doação</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="valor">Valor (R$)</label>
            <input
              type="number"
              id="valor"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              placeholder="100"
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="campanha">Campanha</label>
            <select
              id="campanha"
              name="campanha"
              value={formData.campanha}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma campanha</option>
              <option value="Combate a Fome">Combate a Fome</option>
              <option value="Educação para Todos">Educação para Todos</option>
              <option value="Saúde e Bem-Estar">Saúde e Bem-Estar</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="data">Data</label>
            <input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-confirmar">
              Confirmar Doação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalDoacao;