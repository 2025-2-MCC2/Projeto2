import React, { useState } from "react";
import "./ModalDoacao.css";

const API_URL = "http://localhost:3000/api";

export default function ModalDoacao({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    doador_nome: "",
    doador_email: "",
    valor: "",
    campanha: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const criarDoacao = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/doacoes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Doação realizada com sucesso!");
        onSuccess(formData);
        onClose();
      } else {
        alert("Erro ao realizar doação. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao criar doação:", error);
      alert("Erro ao realizar doação. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <h2 className="modal-header">Nova Doação</h2>
        <form onSubmit={criarDoacao}>
          <div className="form-group">
            <label htmlFor="doador_nome">Nome Completo</label>
            <input
              type="text"
              id="doador_nome"
              value={formData.doador_nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="doador_email">Email</label>
            <input
              type="email"
              id="doador_email"
              value={formData.doador_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="valor">Valor (R$)</label>
            <input
              type="number"
              id="valor"
              step="0.01"
              min="1"
              value={formData.valor}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="campanha">Campanha</label>
            <select
              id="campanha"
              value={formData.campanha}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma campanha</option>
              <option value="Combate à Fome">Combate à Fome</option>
              <option value="Educação">Educação</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>

          <div className="modal-buttons">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Enviando..." : "Confirmar Doação"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
