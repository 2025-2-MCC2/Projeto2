import React from 'react';
import '../styles/CadastroAluno.css';

export default function CadastroAluno() {
  return (
    <div className="cadastro-aluno-container">
      {/* Imagem de fundo */}
      <div className="background-image" />

      {/* Overlay escuro */}
      <div className="background-overlay" />

      {/* Caixa de cadastro centralizada */}
      <div className="cadastro-box">
        {/* Cabeçalho */}
        <div className="cadastro-header">
          <h3>Bem-vindo, Alvarista!</h3>
          <p>
            Já tem uma conta?{' '}
            <a href="/login-aluno">Entrar</a>
          </p>
        </div>

        <h1>Cadastre-se</h1>

        {/* Email */}
        <div className="form-group">
          <label>Insira o email do representante do grupo</label>
          <input type="email" placeholder="Email do líder do grupo" />
        </div>

        {/* Nome do grupo e Turma */}
        <div className="form-row">
          <div className="form-group">
            <label>Nome do grupo</label>
            <input type="text" placeholder="Nome do grupo aqui" />
          </div>
          <div className="form-group">
            <label>Turma</label>
            <input type="text" placeholder="Turma aqui" />
          </div>
        </div>

        {/* Período e Senha */}
        <div className="form-row">
          <div className="form-group">
            <label>Período</label>
            <input type="text" placeholder="Período aqui" />
          </div>
          <div className="form-group">
            <label>Crie uma senha</label>
            <input type="password" placeholder="Senha" />
          </div>
        </div>

        {/* Botão */}
        <div className="form-button">
          <button>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}
