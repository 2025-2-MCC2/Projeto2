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
      const res = await fetch('http://localhost:3000/api/aluno/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha: password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Erro ao fazer login.');
      }

      // Salva os dados do aluno
      if (remember) {
        localStorage.setItem('authToken', data.token);
      } else {
        sessionStorage.setItem('authToken', data.token);
      }
      
      localStorage.setItem('userType', 'aluno');
      localStorage.setItem('alunoId', data.aluno.id);
      localStorage.setItem('alunoEmail', data.aluno.email);
      localStorage.setItem('alunoNome', data.aluno.nome);

      alert('Login realizado com sucesso!');
      navigate('/dashboard-aluno');

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