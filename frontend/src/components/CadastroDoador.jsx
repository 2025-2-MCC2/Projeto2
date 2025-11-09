import React from "react";
import "../styles/CadastroDoador.css";

export default function CadastroDoador() {
  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    console.log("Email:", email);
    console.log("Senha:", password);
    
    alert("Cadastro realizado com sucesso!");
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
            className="doador-signup-input"
          />

          <label htmlFor="password">Crie uma senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
            className="doador-signup-input"
          />

          <button type="submit" className="doador-signup-button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}