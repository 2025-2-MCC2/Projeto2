import React, { useState, useEffect } from 'react';
import "./Tarefas.css";

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState({
    descricao: '',
    data: '',
    cor: '#3b82f6'
  });
  const [loading, setLoading] = useState(true);

  // Carregar tarefas ao iniciar
  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      setLoading(true);
      const result = await window.storage.get('tarefas-lista');
      if (result && result.value) {
        setTarefas(JSON.parse(result.value));
      }
    } catch (_error) {
      const tarefasIniciais = [
        { id: 1, data: "24 Dec 2021", descricao: "web conference agenda", cor: "#ef4444" },
        { id: 2, data: "24 Nov 2022", descricao: "meeting with partners", cor: "#3b82f6" },
        { id: 3, data: "24 Nov 2022", descricao: "weekly meeting", cor: "#3b82f6" },
      ];
      setTarefas(tarefasIniciais);
      await salvarTarefas(tarefasIniciais);
    } finally {
      setLoading(false);
    }
  };

  const salvarTarefas = async (listaTarefas) => {
    try {
      await window.storage.set('tarefas-lista', JSON.stringify(listaTarefas));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  };

  const adicionarTarefa = async () => {
    if (!novaTarefa.descricao || !novaTarefa.data) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const tarefa = {
      id: Date.now(),
      data: novaTarefa.data,
      descricao: novaTarefa.descricao,
      cor: novaTarefa.cor
    };

    const novaLista = [...tarefas, tarefa];
    setTarefas(novaLista);
    await salvarTarefas(novaLista);

    // Limpar formulário
    setNovaTarefa({ descricao: '', data: '', cor: '#3b82f6' });
    setMostrarModal(false);
  };

  const excluirTarefa = async (id) => {
    const novaLista = tarefas.filter(t => t.id !== id);
    setTarefas(novaLista);
    await salvarTarefas(novaLista);
  };

  const tarefasExibidas = mostrarTodas ? tarefas : tarefas.slice(0, 3);

  if (loading) {
    return (
      <div className="tarefas-card">
        <p style={{ textAlign: 'center', color: '#7f1d1d' }}>Carregando tarefas...</p>
      </div>
    );
  }

  return (
    <>
      <div className="tarefas-card">
        <div className="tarefas-header">
          <h3>Tarefas</h3>
          <button 
            className="visualizar-btn"
            onClick={() => setMostrarTodas(!mostrarTodas)}
          >
            {mostrarTodas ? 'Mostrar menos' : 'Visualizar todas'}
          </button>
        </div>

        <div className="tarefas-lista">
          {tarefasExibidas.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#7f1d1d', fontSize: '0.9rem' }}>
              Nenhuma tarefa cadastrada
            </p>
          ) : (
            tarefasExibidas.map((tarefa) => (
              <div key={tarefa.id} className="tarefa-item">
                <div 
                  className="tarefa-indicador" 
                  style={{ backgroundColor: tarefa.cor }}
                />
                <div className="tarefa-conteudo">
                  <div className="tarefa-data">{tarefa.data}</div>
                  <div className="tarefa-descricao">{tarefa.descricao}</div>
                </div>
                <button 
                  className="excluir-tarefa-btn"
                  onClick={() => excluirTarefa(tarefa.id)}
                  title="Excluir tarefa"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        <button 
          className="adicionar-tarefa-btn"
          onClick={() => setMostrarModal(true)}
        >
          <span>Adicionar nova tarefa</span>
          <span>→</span>
        </button>
      </div>

      {/* Modal para adicionar tarefa */}
      {mostrarModal && (
        <div className="modal-overlay" onClick={() => setMostrarModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Nova Tarefa</h3>
              <button 
                className="modal-close-btn"
                onClick={() => setMostrarModal(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Descrição</label>
                <input
                  type="text"
                  placeholder="Ex: Reunião com equipe"
                  value={novaTarefa.descricao}
                  onChange={(e) => setNovaTarefa({...novaTarefa, descricao: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Data</label>
                <input
                  type="date"
                  value={novaTarefa.data}
                  onChange={(e) => setNovaTarefa({...novaTarefa, data: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Cor do indicador</label>
                <div className="cor-opcoes">
                  {['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'].map(cor => (
                    <button
                      key={cor}
                      className={`cor-btn ${novaTarefa.cor === cor ? 'ativa' : ''}`}
                      style={{ backgroundColor: cor }}
                      onClick={() => setNovaTarefa({...novaTarefa, cor})}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn-cancelar"
                onClick={() => setMostrarModal(false)}
              >
                Cancelar
              </button>
              <button 
                className="btn-salvar"
                onClick={adicionarTarefa}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tarefas;