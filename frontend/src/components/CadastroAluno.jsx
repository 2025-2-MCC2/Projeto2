import React from 'react';

export default function CadastroAluno() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #1e4c39ff, #062617ff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div
        style={{
          width: '420px',
          background: 'rgba(255, 255, 255, 0.75)',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 4px 10px rgba(84, 64, 64, 0.1)',
        }}
      >
        {/* Cabeçalho */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontWeight: 500, color: 'black' }}>Bem vindo, Alvarista!</h3>
          <p style={{ fontSize: '0.9rem', margin: 0, color: '#8D8D8D' }}>
            Já tem uma conta?{' '}
            <a href="#" style={{ color: 'green', textDecoration: 'none' }}>
              Entrar
            </a>
          </p>
        </div>

        <h1 style={{ color: 'green', marginTop: '10px', fontSize: '2rem' }}>Cadastro Aluno</h1>

        {/* Email */}
        <div style={{ marginTop: '20px' }}>
          <label style={labelStyle}>Insira o email do representante do grupo</label>
          <input
            type="email"
            placeholder="Email do líder do grupo"
            style={inputStyle}
          />
        </div>

        {/* Nome do grupo e Turma */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nome do grupo</label>
            <input type="text" placeholder="Nome do grupo aqui" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Turma</label>
            <input type="text" placeholder="Turma aqui" style={inputStyle} />
          </div>
        </div>

        {/* Período e Senha */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Período</label>
            <input type="text" placeholder="Período aqui" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Crie uma senha</label>
            <input type="password" placeholder="Senha" style={inputStyle} />
          </div>
        </div>

        {/* Botão */}
        <button
          style={{
            marginTop: '25px',
            width: '80%',
            marginRight: '20px',
            padding: '15px',
            marginLeft: '35px',
            backgroundColor: '#248862',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

// Estilos compartilhados
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  marginTop: '5px',
  boxSizing: 'border-box',
};

const labelStyle = {
  fontSize: '14px',
  color: '#000',
  fontWeight: '400',
};
