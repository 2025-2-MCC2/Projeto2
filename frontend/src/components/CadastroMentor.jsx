import React from "react";
import "../styles/CadastroMentor.css";

export default function CadastroMentor() {
  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const grupo = event.target.grupo.value;
    const password = event.target.password.value;
    
    console.log("Email:", email);
    console.log("Grupo:", grupo);
    console.log("Senha:", password);
    
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div className="mentor-signup-page">
      <div className="mentor-signup-overlay" />

      <div className="mentor-signup-container">
        {/* Cabeçalho */}
        <div className="mentor-signup-header">
          <div className="header-left">
            <h3>Bem-vindo,</h3>
            <span className="mentor-highlight">Mentor!</span>
          </div>

          <div className="header-right">
            <p>Já possui uma conta?</p>
            <a href="/login-mentor" className="mentor-login-link">
              Entrar
            </a>
          </div>
        </div>

        <h1 className="signup-title">Cadastre-se</h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
            className="mentor-signup-input"
          />

          <label htmlFor="grupo">Grupo a Mentorar</label>
          <select
            id="grupo"
            name="grupo"
            required
            className="mentor-signup-select"
          >
            <option value="">Selecione um grupo</option>
            <option value="grupo1">Grupo 1</option>
            <option value="grupo2">Grupo 2</option>
            <option value="grupo3">Grupo 3</option>
            <option value="grupo4">Grupo 4</option>
            <option value="grupo5">Grupo 5</option>
          </select>

          <label htmlFor="password">Crie uma senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
            className="mentor-signup-input"
          />

          <button type="submit" className="mentor-signup-button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}