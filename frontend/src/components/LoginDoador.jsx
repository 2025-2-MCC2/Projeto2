import React from "react";
import "../styles/DoadorAuth.css";

export default function LoginDoador() {
  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    console.log("Email:", email);
    console.log("Senha:", password);
    
    alert("Login realizado com sucesso!");
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
            required
            className="doador-login-input"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            required
            className="doador-login-input"
          />

          <button type="submit" className="doador-login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}