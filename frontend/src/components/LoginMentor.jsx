import React from "react";
import "../styles/CadastroMentor.css";

export default function LoginMentor() {
  function handleSubmit(event) {
    event.preventDefault();
    
    // Aqui você pegaria os valores dos campos
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    
    console.log("Email:", email);
    console.log("Senha:", senha);
    
    // Por enquanto só mostra um alerta
    alert("Login realizado com sucesso!");
    
    // Aqui você faria a validação com seu backend
  }

  return (
    <div className="mentor-page">
      <div className="form-container">
        <div className="header">
          <div className="header-left">
            <h3>Bem-Vindo de volta,</h3>
            <span className="mentor-highlight">Mentor!</span>
            <div className="cadastre-text">Faça seu Login</div>
          </div>
          <div className="header-right">
            <p>Não tem uma conta?</p>
            <a href="/cadastro-mentor">Cadastre-se</a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}