import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import "./Config.css";

export default function Configuracoes() {
  const navigate = useNavigate();
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="config-page">
      <Sidebar />

      <main className="config-main">
        <h1>Configurações</h1>

        <div className="config-card">
          <h2>Perfil</h2>
          <p>Nome: Rafael Morais</p>
          <p>Email: mentor@email.com</p>
          <button
            className="config-btn"
            onClick={() => navigate("/dashboard-mentor/perfil")}
          >
            Editar Perfil
          </button>
        </div>

        <div className="config-card">
          <h2>Segurança</h2>
          <label>
            Alterar senha:
            <div className="senha-wrapper">
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="toggle-senha"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? "🙈" : "👁️"}
              </button>
            </div>
          </label>
          <button className="config-btn">Salvar</button>
        </div>

        <div className="config-card">
          <button className="delete-btn"  onClick={() => navigate('/login-mentor')}>
            Sair
          </button>
        </div>
      </main>
    </div>
  );
}
