import React from 'react';

export default function CadastroAluno() {
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
        backgroundColor: 'transparent', // garante transparência do pai
      }}
    >
      {/* Imagem de fundo (zIndex 0) */}
      <div
        style={{
          position: 'absolute',
          inset: 0, // top:0; right:0; bottom:0; left:0;
          backgroundImage: 'url("/imagens/foto-fundo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0, // <-- importante: não use -1
          transition: 'background-position 0.5s ease',
        }}
      />

      {/* Overlay escuro por cima da imagem (zIndex 1) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.35)', // ajuste a opacidade que quiser
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Caixa de cadastro (zIndex 2) */}
      <div
        style={{
          width: '420px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '35px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(5px)',
          zIndex: 2,
        }}
      >
        {/* Cabeçalho */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontWeight: 600, color: '#2c2c2c', fontSize: '1.2rem' }}>
            Bem-vindo, Alvarista!
          </h3>
          <p style={{ fontSize: '0.9rem', margin: 0, color: '#666' }}>
            Já tem uma conta?{' '}
            <a
              href="/login-aluno"
              style={{ color: '#248862', textDecoration: 'none', fontWeight: 600 }}
            >
              Entrar
            </a>
          </p>
        </div>

        <h1 style={{ color: '#248862', marginTop: '20px', fontSize: '2rem' }}>Cadastre-se</h1>

        {/* Email */}
        <div style={{ marginTop: '20px' }}>
          <label style={labelStyle}>Insira o email do representante do grupo</label>
          <input type="email" placeholder="Email do líder do grupo" style={inputStyle} />
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
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1f704f')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#248862')}
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
