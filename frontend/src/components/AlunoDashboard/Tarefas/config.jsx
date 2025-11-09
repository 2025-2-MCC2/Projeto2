import React, { useState, useEffect } from "react";
import "./Config.css";
import Sidebar from "../SidebarAluno/SidebarAluno";

export default function Configuracoes() {
  const [tema, setTema] = useState("claro");
  const [idioma, setIdioma] = useState("pt-br");

  // Perfil
  const [editandoPerfil, setEditandoPerfil] = useState(false);
  const [nome, setNome] = useState("Rafael Morais");
  const [email, setEmail] = useState("mentor@email.com");

  // Senha
  const [senha, setSenha] = useState(
    localStorage.getItem("usuarioSenha") || ""
  );

  useEffect(() => {
    document.body.className = tema === "escuro" ? "dark-theme" : "";
  }, [tema]);

  // Alternar edição do perfil
  const toggleEditarPerfil = () => {
    if (editandoPerfil) {
      // Salva o perfil
      console.log("Perfil salvo:", { nome, email });
    }
    setEditandoPerfil(!editandoPerfil);
  };

  // Salvar nova senha
  const salvarSenha = () => {
    if (!senha.trim()) {
      alert("Digite uma senha antes de salvar.");
      return;
    }
    localStorage.setItem("usuarioSenha", senha);
    alert("Senha alterada com sucesso!");
  };

  // Excluir conta
  const excluirConta = () => {
    const confirma = window.confirm(
      "Tem certeza que deseja excluir sua conta?"
    );
    if (confirma) {
      alert("Conta excluída com sucesso!");
      // Aqui você pode limpar localStorage ou redirecionar
      localStorage.removeItem("usuarioSenha");
      setSenha("");
    }
  };

  return (
    <div className="config-page">
      <Sidebar />

      <main className="config-main">
        <h1>Configurações</h1>

        <div className="config-card">
          <h2>Perfil</h2>
          {editandoPerfil ? (
            <>
              <label>
                Nome:
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </>
          ) : (
            <>
              <p>Nome: {nome}</p>
              <p>Email: {email}</p>
            </>
          )}
          <button className="config-btn" onClick={toggleEditarPerfil}>
            {editandoPerfil ? "Salvar Perfil" : "Editar Perfil"}
          </button>
        </div>

        <div className="config-card">
          <h2>Segurança</h2>
          <label>
            Alterar senha:
            <input
              type="password"
              placeholder="Nova senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <button className="config-btn" onClick={salvarSenha}>
            Salvar
          </button>
        </div>

        <div className="config-card">
          <h2>Notificações</h2>
          <label>
            <input type="checkbox" defaultChecked /> Receber notificações por email
          </label>
          <label>
            <input type="checkbox" defaultChecked /> Receber notificações no app
          </label>
        </div>

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

        <div className="config-card">
          <h2>Excluir Conta</h2>
          <button className="delete-btn" onClick={excluirConta}>
            Excluir Minha Conta
          </button>
        </div>
      </main>
    </div>
  );
}
