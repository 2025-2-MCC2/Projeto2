import React from "react";
import "../styles/CadastroMentor.css";

export default function CadastroMentor() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div className="mentor-page">
      <div className="form-container">
        <div className="header">
          <div className="header-left">
            <h3>Bem-vindo</h3>
            <span>MENTOR!</span>
            <div className="cadastre-text">Cadastre-se</div>
          </div>
          <div className="header-right">
            <p>Já tem uma conta?</p>
            <a href="/login">Login</a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="mentorId">ID</label>
          <input
            type="text"
            id="mentorId"
            name="mentorId"
            placeholder="Digite seu ID"
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Crie a senha"
            required
          />

          <button type="submit">Cadastre-se</button>
        </form>
      </div>
    </div>
  );
}
