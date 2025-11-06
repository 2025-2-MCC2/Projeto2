import React from 'react';

export default function LoginAluno({ onLogin }) {
  // onLogin é opcional: se passado, será chamado com (email, password)
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

    // Exemplo: mostrar que entrou (substitua pela lógica real)
    alert('Tentativa de login enviada (ver console).');
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        fontFamily: 'Poppins, sans-serif',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '120px',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      {/* Fundo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/imagens/foto-fundo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.35)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Card */}
      <div
        style={{
          width: '420px',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '20px',
          padding: '35px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          backdropFilter: 'blur(5px)',
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontWeight: 600, color: '#2c2c2c', fontSize: '1.2rem' }}>
            Bem-vindo, Alvarista!
          </h3>
          <p style={{ fontSize: '0.9rem', margin: 0, color: '#666' }}>
            Ainda não tem conta?{' '}
            <a href="/cadastro-aluno" style={{ color: '#248862', textDecoration: 'none', fontWeight: 600 }}>
              Cadastre-se
            </a>
          </p>
        </div>

        <h1 style={{ color: '#248862', marginTop: '20px', fontSize: '2rem' }}>Entrar</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '18px' }}>
            <label style={labelStyle}>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Seu email"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginTop: '12px' }}>
            <label style={labelStyle}>Senha</label>
            <input
              name="password"
              type="password"
              placeholder="Senha"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <label style={{ fontSize: '0.9rem', color: '#666' }}>
              <input type="checkbox" name="remember" style={{ marginRight: '6px' }} />
              Lembrar-me
            </label>
            <a href="/recuperar-senha" style={{ fontSize: '0.9rem', color: '#248862', textDecoration: 'none' }}>
              Esqueci a senha
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '15px',
                backgroundColor: '#248862',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1f704f')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#248862')}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Reutiliza os mesmos estilos do CadastroAluno
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  marginTop: '6px',
  boxSizing: 'border-box',
  outline: 'none',
};

const labelStyle = {
  fontSize: '14px',
  color: '#333',
  fontWeight: '500',
};
