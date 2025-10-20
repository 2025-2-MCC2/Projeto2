import React from 'react';

export default function LoginAluno() {
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
      }}
    >
      {/* Imagem de fundo com overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/imagens/foto-fundo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6)',
          zIndex: -1,
          transition: 'background-position 0.5s ease',
        }}
      />

      {/* Caixa de cadastro */}
      <div
        style={{
          width: '420px',
          background: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '20px',
          padding: '35px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(5px)',
          zIndex: 1,
        }}
      >
        {/* Cabeçalho */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontWeight: 600, color: '#2c2c2c', fontSize: '1.2rem' }}>
            Bem-vindo, Alvarista!
          </h3>
         
        </div>

        <h1 style={{ color: '#248862', marginTop: '20px', fontSize: '2rem' }}>Login</h1>

        {/* Campo ID */}
        <div style={{ marginTop: '20px' }}>
          <label style={labelStyle}>ID</label>
          <input type="text" placeholder="Seu ID" style={inputStyle} />
        </div>

        {/* Campo Email */}
        <div style={{ marginTop: '15px' }}>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="email" style={inputStyle} />
        </div>

        {/* Campo Senha */}
        <div style={{ marginTop: '15px' }}>
          <label style={labelStyle}>Senha</label>
          <input type="password" placeholder="Crie uma senha" style={inputStyle} />
        </div>

        {/* Botão */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
              marginTop: '30px',
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
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1f704f')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#248862')}
          >
            Cadastrar
          </button>
        </div>
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
  outline: 'none',
};

const labelStyle = {
  fontSize: '14px',
  color: '#333',
  fontWeight: '500',
};
