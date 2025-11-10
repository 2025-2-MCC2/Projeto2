import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DoadorAuth.css";

export default function LoginDoador() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    // Validação básica
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Verificar se o usuário está cadastrado
    const emailSalvo = localStorage.getItem('emailDoador');
    const nomeSalvo = localStorage.getItem('nomeDoador');

    if (emailSalvo && emailSalvo === email) {
      // Login bem-sucedido
      localStorage.setItem('doadorLogado', 'true');
      
      console.log("Login realizado:", { email, nome: nomeSalvo });
      
      alert(`Bem-vindo de volta, ${nomeSalvo || 'Doador'}!`);
      
      // Redirecionar para a página de doações
      navigate('/doacoes');
    } else {
      // Usuário não encontrado
      alert("Email não encontrado! Por favor, cadastre-se primeiro.");
      
      // Opcional: redirecionar para cadastro após confirmação
      setTimeout(() => {
        if (window.confirm("Deseja se cadastrar agora?")) {
          navigate('/cadastro-doador');
        }
      }, 1000);
    }
  }

  return (
    <div className="doador-login-page">
      <div className="doador-login-overlay"></div>

      <div className="doador-login-container">
        {/* Cabeçalho */}
        <div className="doador-login-header">
          <div className="header-left">
            <h3>Bem-vindo de volta,</h3>
            <span className="doador-highlight">Doador!</span>
          </div>

          <div className="header-right">
            <p>Não possui uma conta?</p>
            <a href="/cadastro-doador" className="doador-signup-link">
              Cadastre-se
            </a>
          </div>
        </div>

        <h1 className="login-title">Entrar</h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="doador-login-input"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="doador-login-input"
          />

          <button type="submit" className="doador-login-button">
            Entrar
          </button>
        </form>

        <div style={{ marginTop: '15px', textAlign: 'center', color: '#666' }}>
          <small>Entre com o mesmo email usado no cadastro</small>
        </div>
      </div>
    </div>
  );
}