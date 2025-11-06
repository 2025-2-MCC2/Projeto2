import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Config.css";

export default function Configuracoes() {
  const [tema, setTema] = useState("claro");
  const [idioma, setIdioma] = useState("pt-br");

  // Aplicar classe do tema no body
  useEffect(() => {
    document.body.className = tema === "escuro" ? "dark-theme" : "";
  }, [tema]);

  return (
    <div className="config-page">
      <Sidebar />

      <main className="config-main">
        <h1>Configurações</h1>

        {/* Card Perfil */}
        <div className="config-card">
          <h2>Perfil</h2>
          <p>Nome: Rafael Morais</p>
          <p>Email: mentor@email.com</p>
          <button className="config-btn">Editar Perfil</button>
        </div>

        {/* Card Segurança */}
        <div className="config-card">
          <h2>Segurança</h2>
          <label>
            Alterar senha:
            <input type="password" placeholder="Nova senha" />
          </label>
          <button className="config-btn">Salvar</button>
        </div>

        {/* Card Notificações */}
        <div className="config-card">
          <h2>Notificações</h2>
          <label>
            <input type="checkbox" checked /> Receber notificações por email
          </label>
          <label>
            <input type="checkbox" checked /> Receber notificações no app
          </label>
        </div>

        {/* Card Preferências */}
        <div className="config-card">
          <h2>Preferências</h2>
          <label>
            Tema:
            <select value={tema} onChange={(e) => setTema(e.target.value)}>
              <option value="claro">Claro</option>
              <option value="escuro">Escuro</option>
            </select>
          </label>
          <label>
            Idioma:
            <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
              <option value="pt-br">Português (BR)</option>
              <option value="en">English</option>
            </select>
          </label>
        </div>

        {/* Card Excluir Conta */}
        <div className="config-card">
          <h2>Excluir Conta</h2>
          <button className="delete-btn">Excluir Minha Conta</button>
        </div>
      </main>
    </div>
  );
}
