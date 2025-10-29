import React from "react";
import "../styles/MentorAuth.css";

export default function LoginMentor() {
  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const grupo = event.target.grupo.value;
    const password = event.target.password.value;
    
    console.log("Email:", email);
    console.log("Grupo:", grupo);
    console.log("Senha:", password);
    
    alert("Login realizado com sucesso!");
  }

  return (
    <div className="mentor-login-page">
      <div className="mentor-login-overlay"></div>

      <div className="mentor-login-container">
        {/* Cabeçalho */}
        <div className="mentor-login-header">
          <div className="header-left">
            <h3>Bem-vindo de volta,</h3>
            <span className="mentor-highlight">Mentor!</span>
          </div>

          <div className="header-right">
            <p>Não possui uma conta?</p>
            <a href="/cadastro-mentor" className="mentor-signup-link">
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
            className="mentor-login-input"
          />

          <label htmlFor="grupo">Grupo</label>
          <select
            id="grupo"
            name="grupo"
            required
            className="mentor-login-select"
          >
            <option value="">Selecione seu grupo</option>
            <option value="grupo1">Grupo 1</option>
            <option value="grupo2">Grupo 2</option>
            <option value="grupo3">Grupo 3</option>
            <option value="grupo4">Grupo 4</option>
            <option value="grupo5">Grupo 5</option>
          </select>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            required
            className="mentor-login-input"
          />

          <button type="submit" className="mentor-login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}