import React from 'react';
import '../styles/AlunoAuth.css';

export default function LoginAluno({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      alert('Preencha email e senha.');
      return;
    }

    console.log('Login:', { email, password });
    if (typeof onLogin === 'function') onLogin(email, password);

    alert('Tentativa de login enviada (ver console).');
  }

  return (
    <div className="login-aluno-container">
      {/* Fundo */}
      <div className="background-image" />
      <div className="background-overlay" />

      {/* Card */}
      <div className="login-box">
        <div className="login-header">
          <h3>Bem-vindo, Alvarista!</h3>
          <p>
            Ainda não tem conta?{' '}
            <a href="/cadastro-aluno">Cadastre-se</a>
          </p>
        </div>

        <h1>Entrar</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="Seu email" required />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input name="password" type="password" placeholder="Senha" required />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" name="remember" /> Lembrar-me
            </label>
            <a href="/recuperar-senha">Esqueci a senha</a>
          </div>

          <div className="form-button">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
