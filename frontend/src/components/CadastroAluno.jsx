import React, { useState } from 'react';
import '../styles/CadastroAluno.css';

export default function CadastroAluno() {
  const [formData, setFormData] = useState({
    nomeGrupo: '',
    sala: '',
    nomeResponsavel: '',
    emailResponsavel: '',
    telefoneResponsavel: '',
    raAluno1: '',
    emailAluno1: '',
    senha: '',
    confirmarSenha: '',
    aluno2Nome: '',
    raAluno2: '',
    emailAluno2: '',
    aluno3Nome: '',
    raAluno3: '',
    emailAluno3: '',
    aluno4Nome: '',
    raAluno4: '',
    emailAluno4: '',
    aluno5Nome: '',
    raAluno5: '',
    emailAluno5: '',
    aluno6Nome: '',
    raAluno6: '',
    emailAluno6: '',
    aluno7Nome: '',
    raAluno7: '',
    emailAluno7: '',
    aluno8Nome: '',
    raAluno8: '',
    emailAluno8: '',
    aluno9Nome: '',
    raAluno9: '',
    emailAluno9: '',
    aluno10Nome: '',
    raAluno10: '',
    emailAluno10: ''
  });

  const salas = [
    '1MA (Manhã)',
    '1MB (Manhã)',
    '1MC (Manhã)',
    '1NA (Noite)',
    '1NB (Noite)',
    '1NC (Noite)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Exigir campos mínimos (ajuste conforme sua regra)
    if (!formData.nomeGrupo || !formData.sala || !formData.nomeResponsavel ||
        !formData.emailResponsavel || !formData.telefoneResponsavel ||
        !formData.raAluno1 || !formData.emailAluno1 || !formData.senha) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Aqui vai a lógica real de envio (fetch/axios)...
    console.log('Dados do formulário:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro-aluno-container">
      <div className="background-image" />
      <div className="background-overlay" />

      <div className="scroll-wrapper">
        <div className="cadastro-box">
          <div className="cadastro-inner">
            <div className="cadastro-header">
              <h3>Bem-vindo, Alvarista!</h3>
              <p>
                Já tem uma equipe?{' '}
                <a href="/login-aluno">Entrar</a>
              </p>
            </div>

            <h1>8ª Edição Lideranças Empáticas</h1>

            <form onSubmit={handleSubmit}>
              {/* Nome Fantasia do Grupo */}
              <div className="form-group">
                <label>
                  Nome Fantasia do Grupo <span className="required">*</span>
                </label>
                <p className="helper-text">
                  Escolham um nome fantasia para o grupo de vocês. Se lembrem dele, pois utilizarão até o final do projeto!
                </p>
                <input
                  type="text"
                  name="nomeGrupo"
                  value={formData.nomeGrupo}
                  onChange={handleChange}
                  placeholder="Digite o nome do grupo"
                  maxLength={255}
                />
                <span className="char-count">{formData.nomeGrupo.length}/255</span>
              </div>

              {/* Sala */}
              <div className="form-group">
                <label>
                  Qual a sala do seu grupo? <span className="required">*</span>
                </label>
                <select
                  name="sala"
                  value={formData.sala}
                  onChange={handleChange}
                >
                  <option value="">Selecione a sala</option>
                  {salas.map((sala, index) => (
                    <option key={index} value={sala}>
                      {sala}
                    </option>
                  ))}
                </select>
              </div>

              <div className="section-divider"></div>

              {/* Aluno Responsável - 1º Aluno */}
              <h2 className="section-title">Aluno Responsável - 1º Aluno</h2>
              <p className="section-description">
                Escolham um aluno para ser responsável pela comunicação. Recebimento e envio de informações do seu grupo.
              </p>

              <div className="form-group">
                <label>
                  Nome do Aluno Responsável - 1º Aluno <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="nomeResponsavel"
                  value={formData.nomeResponsavel}
                  onChange={handleChange}
                  placeholder="Nome completo"
                />
              </div>

              <div className="form-group">
                <label>
                  E-mail do aluno responsável <span className="required">*</span>
                </label>
                <p className="helper-text">
                  Vamos enviar notificações e avisos utilizando o e-mail disponibilizado.
                </p>
                <input
                  type="email"
                  name="emailAluno1"
                  value={formData.emailAluno1}
                  onChange={handleChange}
                  placeholder="email@exemplo.com"
                />
              </div>

              {/* contato/responsável do grupo */}
              <div className="form-group">
                <label>
                  E-mail para contato/aviso do grupo <span className="required">*</span>
                </label>
                <p className="helper-text">
                  E-mail oficial para avisos do projeto (ex.: responsável, professor, etc).
                </p>
                <input
                  type="email"
                  name="emailResponsavel"
                  value={formData.emailResponsavel}
                  onChange={handleChange}
                  placeholder="email@contato.com"
                />
              </div>

              <div className="form-group">
                <label>
                  Telefone do aluno responsável <span className="required">*</span>
                </label>
                <p className="helper-text">
                  Vamos adicionar o número disponibilizado em um grupo de comunicação entre o monitor e os representantes dos demais grupos.
                </p>
                <div className="phone-input">
                  <span className="phone-prefix">Brasil = +55</span>
                  <input
                    type="tel"
                    name="telefoneResponsavel"
                    value={formData.telefoneResponsavel}
                    onChange={handleChange}
                    placeholder="(11) 98765-4321"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  RA - 1º Aluno <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="raAluno1"
                  value={formData.raAluno1}
                  onChange={handleChange}
                  placeholder="RA do 1º aluno"
                />
              </div>

              {/* Senha */}
              <div className="form-group">
                <label>
                  Crie uma senha <span className="required">*</span>
                </label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Senha"
                />
              </div>

              <div className="form-group">
                <label>
                  Confirme a senha <span className="required">*</span>
                </label>
                <input
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  placeholder="Confirme a senha"
                />
              </div>

              <div className="section-divider"></div>

              {/* 2º ao 10º Aluno */}
              {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num}>
                  <h2 className="section-title">{num}º Aluno</h2>
                  <p className="optional-text">
                    Apenas se tiver - caso contrário deixe em branco
                  </p>

                  <div className="form-group">
                    <label>Nome Completo {num}º Aluno</label>
                    <input
                      type="text"
                      name={`aluno${num}Nome`}
                      value={formData[`aluno${num}Nome`]}
                      onChange={handleChange}
                      placeholder={`Nome do ${num}º aluno`}
                    />
                  </div>

                  <div className="form-group">
                    <label>RA - {num}º Aluno</label>
                    <input
                      type="text"
                      name={`raAluno${num}`}
                      value={formData[`raAluno${num}`]}
                      onChange={handleChange}
                      placeholder={`RA do ${num}º aluno`}
                    />
                  </div>

                  <div className="form-group">
                    <label>E-mail - {num}º Aluno</label>
                    <input
                      type="email"
                      name={`emailAluno${num}`}
                      value={formData[`emailAluno${num}`]}
                      onChange={handleChange}
                      placeholder={`email${num}@exemplo.com`}
                    />
                  </div>

                  <div className="section-divider"></div>
                </div>
              ))}

              {/* Botão de Cadastro */}
              <div className="form-button">
                <button type="submit">
                  Cadastrar meu time
                </button>
              </div>
            </form>
          </div>{/* fim cadastro-inner */}
        </div>{/* fim cadastro-box */}
      </div>{/* fim scroll-wrapper */}
    </div>
  );
}
