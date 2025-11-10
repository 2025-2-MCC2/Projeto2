import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AlunoAuth.css';

export default function LoginAluno() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    const remember = form.remember.checked;

    if (!email || !password) {
      setError('Preencha email e senha.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Informe um e-mail válido.');
      return;
    }

    setLoading(true);

    try {
      // Simulando login - remova isso quando tiver backend real
      await new Promise(resolve => setTimeout(resolve, 500));
      
      console.log('Email:', email);
      console.log('Senha:', password);
      console.log('Lembrar:', remember);

      // Se quiser salvar o token localmente (simulação)
      if (remember) {
        localStorage.setItem('authToken', 'token-simulado');
      } else {
        sessionStorage.setItem('authToken', 'token-simulado');
      }

      alert('Login realizado com sucesso!');
      
      // Redireciona para o dashboard do aluno
      navigate('/dashboard-aluno');

      /* 
      // Quando tiver backend, use este código:
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.message || 'Erro ao fazer login.');
      }

      const data = await res.json();

      if (remember && data.token) {
        localStorage.setItem('authToken', data.token);
      } else if (data.token) {
        sessionStorage.setItem('authToken', data.token);
      }

      navigate('/dashboard-aluno');
      */

    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Erro ao realizar login.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-aluno-container">
      <div className="background-image" />
      <div className="background-overlay" />

      <div className="login-box" role="region" aria-label="Formulário de login">
        <div className="login-inner">
          <div className="login-header">
            <h3>Bem-vindo, Alvarista!</h3>
            <p>
              Ainda não tem uma equipe? <a href="/cadastro-aluno">Cadastre-se</a>
            </p>
          </div>

          <h1>Entrar</h1>

          <form onSubmit={handleSubmit} noValidate>
            {error && (
              <div className="form-error" role="alert" aria-live="assertive">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input id="login-email" name="email" type="email" placeholder="Seu email" required />
            </div>

            <div className="form-group password-row">
              <label htmlFor="login-password">Senha</label>
              <div className="password-wrapper">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-label">
                <input type="checkbox" name="remember" /> Lembrar-me
              </label>
              <a className="forgot-link" href="/recuperar-senha">Esqueci a senha</a>
            </div>

            <div className="form-button">
              <button type="submit" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}