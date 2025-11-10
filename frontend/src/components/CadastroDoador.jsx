import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CadastroDoador.css";

export default function CadastroDoador() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    // Validação básica
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Salvar dados do doador no localStorage
    const dadosDoador = {
      nome: nome,
      email: email,
      avatar: '👤', // Avatar padrão
      dataCadastro: new Date().toISOString()
    };

    localStorage.setItem('nomeDoador', nome);
    localStorage.setItem('emailDoador', email);
    localStorage.setItem('avatarDoador', '👤');
    localStorage.setItem('doadorLogado', 'true');
    localStorage.setItem('dadosDoador', JSON.stringify(dadosDoador));
    
    console.log("Doador cadastrado:", dadosDoador);
    
    alert(`Bem-vindo, ${nome}! Cadastro realizado com sucesso!`);
    
    // Redirecionar para a página de doações
    navigate('/doacoes');
  }

  return (
    <div className="doador-signup-page">
      <div className="doador-signup-overlay" />

      <div className="doador-signup-container">
        <div className="doador-signup-header">
          <div className="header-left">
            <h3>Bem-vindo,</h3>
            <span className="doador-highlight">Doador!</span>
          </div>

          <div className="header-right">
            <p>Já possui uma conta?</p>
            <a href="/login-doador" className="doador-login-link">
              Entrar
            </a>
          </div>
        </div>

        <h1 className="signup-title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="doador-signup-input"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="doador-signup-input"
          />

          <label htmlFor="password">Crie uma senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha (mínimo 6 caracteres)"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            minLength="6"
            className="doador-signup-input"
          />

          <button type="submit" className="doador-signup-button">
            Cadastrar e Começar a Doar
          </button>
        </form>
      </div>
    </div>
  );
}