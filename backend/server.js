import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// ✅ IMPORTANTE: Criar a instância do Express ANTES de usar
const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // porta do seu Vite
  credentials: true
}));

// ✅ Conexão com o banco
let connection;

async function conectarBanco() {
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "banco123",
      database: "dashboard_doacoes"
    });
    console.log('✅ Conectado ao MySQL com sucesso!');
  } catch (err) {
    console.log('Erro ao conectar ao MySQL:', err.message);
    process.exit(1);
  }
}

await conectarBanco();

// ✅ Teste da conexão
app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

// ==========================
// ✅ ROTAS PARA ALUNO
// ==========================

// Cadastro do aluno
app.post('/api/aluno/cadastro-aluno', async (req, res) => {
  const { email, nome_grupo, turma, periodo, senha } = req.body;

  if (!email || !nome_grupo || !turma || !periodo || !senha) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const [rows] = await connection.query("SELECT * FROM alunos WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    await connection.query(
      "INSERT INTO alunos (email, nome_grupo, turma, periodo, senha) VALUES (?, ?, ?, ?, ?)",
      [email, nome_grupo, turma, periodo, hashedPassword]
    );

    res.status(201).json({ message: "Aluno cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao cadastrar aluno" });
  }
});

// Login do aluno
app.post('/api/aluno/login-aluno', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  try {
    const [rows] = await connection.query("SELECT * FROM alunos WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Aluno não encontrado" });
    }

    const aluno = rows[0];
    const senhaValida = await bcrypt.compare(senha, aluno.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
      { email: aluno.email, nome_grupo: aluno.nome_grupo },
      "segredoSuperSeguro",
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login realizado com sucesso", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao realizar login" });
  }
});

// ==========================
// ✅ ROTAS DE EQUIPES/MENTORES
// ==========================

// Arrecadação Total por equipe
app.get('/arrecadacao/:equipeId', async (req, res) => {
  const { equipeId } = req.params;
  try {
    const [rows] = await connection.query(
      'SELECT ano, total_arrecadado FROM arrecadacoes WHERE equipe_id = ? ORDER BY ano',
      [equipeId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ranking das equipes
app.get('/ranking', async (req, res) => {
  try {
    const [rows] = await connection.query(
      'SELECT equipe_nome, SUM(total_arrecadado) AS total FROM arrecadacoes GROUP BY equipe_nome ORDER BY total DESC'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Últimas atividades
app.get('/atividades/:equipeId', async (req, res) => {
  const { equipeId } = req.params;
  try {
    const [rows] = await connection.query(
      'SELECT descricao, hora, data FROM atividades WHERE equipe_id = ? ORDER BY data DESC, hora DESC',
      [equipeId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mensagens do chat
app.get('/mensagens/:equipeId', async (req, res) => {
  const { equipeId } = req.params;
  try {
    const [rows] = await connection.query(
      'SELECT remetente, conteudo, hora_envio FROM mensagens WHERE equipe_id = ? ORDER BY hora_envio DESC LIMIT 20',
      [equipeId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================
// 🎁 ROTAS DE DOAÇÕES (SITE PÚBLICO)
// ==========================

// 📌 Criar nova doação
app.post('/api/doacoes', async (req, res) => {
  try {
    const { doador_nome, doador_email, valor, campanha, forma_pagamento } = req.body;

    // Validações
    if (!doador_nome || !doador_email || !valor || !campanha) {
      return res.status(400).json({
        error: 'Todos os campos são obrigatórios'
      });
    }

    if (parseFloat(valor) <= 0) {
      return res.status(400).json({
        error: 'O valor deve ser maior que zero'
      });
    }

    // Inserir doação no banco
    const query = `
      INSERT INTO doacoes
      (doador_nome, doador_email, valor, campanha, status, data_doacao)
      VALUES (?, ?, ?, ?, 'Pendente', NOW())
    `;

    const [result] = await connection.execute(query, [
      doador_nome,
      doador_email,
      parseFloat(valor),
      campanha
    ]);

    // Buscar a doação recém-criada
    const [novaDoacao] = await connection.execute(
      'SELECT * FROM doacoes WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({
      message: 'Doação criada com sucesso!',
      doacao: novaDoacao[0]
    });

  } catch (error) {
    console.error('Erro ao criar doação:', error);
    res.status(500).json({ error: 'Erro ao processar doação' });
  }
});

// 📌 Listar todas as doações de um doador específico
app.get('/api/doacoes/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const [doacoes] = await connection.execute(
      `SELECT
        id,
        doador_nome,
        doador_email,
        valor,
        campanha,
        status,
        DATE_FORMAT(data_doacao, '%d/%m/%Y') as data,
        mensagem_agradecimento
      FROM doacoes
      WHERE doador_email = ?
      ORDER BY data_doacao DESC`,
      [email]
    );

    res.json(doacoes);

  } catch (error) {
    console.error('Erro ao buscar doações:', error);
    res.status(500).json({ error: 'Erro ao buscar doações' });
  }
});

// 📌 Listar TODAS as doações (para admin)
app.get('/api/doacoes', async (req, res) => {
  try {
    const [doacoes] = await connection.execute(
      `SELECT
        id,
        doador_nome,
        doador_email,
        valor,
        campanha,
        status,
        DATE_FORMAT(data_doacao, '%d/%m/%Y') as data,
        mensagem_agradecimento
      FROM doacoes
      ORDER BY data_doacao DESC`
    );

    res.json(doacoes);

  } catch (error) {
    console.error('Erro ao buscar doações:', error);
    res.status(500).json({ error: 'Erro ao buscar doações' });
  }
});

// 📌 Atualizar status da doação (Confirmar/Cancelar)
app.put('/api/doacoes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, mensagem_agradecimento } = req.body;

    // Validar status
    if (!['Pendente', 'Confirmada', 'Cancelada'].includes(status)) {
      return res.status(400).json({
        error: 'Status inválido. Use: Pendente, Confirmada ou Cancelada'
      });
    }

    // Buscar doação antes de atualizar
    const [doacaoAnterior] = await connection.execute(
      'SELECT * FROM doacoes WHERE id = ?',
      [id]
    );

    if (doacaoAnterior.length === 0) {
      return res.status(404).json({ error: 'Doação não encontrada' });
    }

    // Atualizar status
    await connection.execute(
      `UPDATE doacoes
       SET status = ?, mensagem_agradecimento = ?
       WHERE id = ?`,
      [status, mensagem_agradecimento || null, id]
    );

    // Se a doação foi confirmada, atualizar valor_arrecadado da campanha
    if (status === 'Confirmada' && doacaoAnterior[0].status !== 'Confirmada') {
      await connection.execute(
        `UPDATE campanhas
         SET valor_arrecadado = valor_arrecadado + ?
         WHERE nome = ?`,
        [doacaoAnterior[0].valor, doacaoAnterior[0].campanha]
      );
    }

    // Se a doação foi cancelada após estar confirmada, remover valor
    if (status === 'Cancelada' && doacaoAnterior[0].status === 'Confirmada') {
      await connection.execute(
        `UPDATE campanhas
         SET valor_arrecadado = valor_arrecadado - ?
         WHERE nome = ?`,
        [doacaoAnterior[0].valor, doacaoAnterior[0].campanha]
      );
    }

    res.json({ message: 'Doação atualizada com sucesso!' });

  } catch (error) {
    console.error('Erro ao atualizar doação:', error);
    res.status(500).json({ error: 'Erro ao atualizar doação' });
  }
});

// 📌 Deletar doação
app.delete('/api/doacoes/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar se existe
    const [doacao] = await connection.execute(
      'SELECT * FROM doacoes WHERE id = ?',
      [id]
    );

    if (doacao.length === 0) {
      return res.status(404).json({ error: 'Doação não encontrada' });
    }

    // Se estava confirmada, remover do valor_arrecadado
    if (doacao[0].status === 'Confirmada') {
      await connection.execute(
        `UPDATE campanhas 
         SET valor_arrecadado = valor_arrecadado - ?
         WHERE nome = ?`,
        [doacao[0].valor, doacao[0].campanha]
      );
    }

    // Deletar doação
    await connection.execute('DELETE FROM doacoes WHERE id = ?', [id]);

    res.json({ message: 'Doação excluída com sucesso!' });

  } catch (error) {
    console.error('Erro ao excluir doação:', error);
    res.status(500).json({ error: 'Erro ao excluir doação' });
  }
});

// ==========================
// 🎯 ROTAS DE CAMPANHAS
// ==========================

// 📌 Listar todas as campanhas ativas
app.get('/api/campanhas', async (req, res) => {
  try {
    const [campanhas] = await connection.execute(
      `SELECT
        id,
        nome,
        descricao,
        meta_valor,
        valor_arrecadado,
        ativa
      FROM campanhas
      WHERE ativa = TRUE
      ORDER BY data_criacao DESC`
    );

    console.log('📊 Campanhas encontradas:', campanhas.length);
    res.json(campanhas);

  } catch (error) {
    console.error('Erro ao buscar campanhas:', error);
    res.status(500).json({ error: 'Erro ao buscar campanhas' });
  }
});

// 📌 Buscar uma campanha específica
app.get('/api/campanhas/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [campanha] = await connection.execute(
      `SELECT
        id,
        nome,
        descricao,
        meta_valor,
        valor_arrecadado,
        ativa,
        ROUND((valor_arrecadado / meta_valor) * 100, 2) as percentual_arrecadado,
        data_criacao
      FROM campanhas
      WHERE id = ?`,
      [id]
    );

    if (campanha.length === 0) {
      return res.status(404).json({ error: 'Campanha não encontrada' });
    }

    res.json(campanha[0]);

  } catch (error) {
    console.error('Erro ao buscar campanha:', error);
    res.status(500).json({ error: 'Erro ao buscar campanha' });
  }
});

// ==========================
// 👤 ROTAS DE PERFIL DO DOADOR
// ==========================

// 📌 Buscar perfil/resumo do doador
app.get('/api/perfil/:email', async (req, res) => {
  try {
    const { email } = req.params;

    // Total doado
    const [totalDoado] = await connection.execute(
      `SELECT
        COUNT(*) as total_doacoes,
        COALESCE(SUM(CASE WHEN status = 'Confirmada' THEN valor ELSE 0 END), 0) as valor_total,
        COALESCE(SUM(CASE WHEN status = 'Pendente' THEN valor ELSE 0 END), 0) as valor_pendente
      FROM doacoes
      WHERE doador_email = ?`,
      [email]
    );

    // Doações por campanha
    const [doacoesPorCampanha] = await connection.execute(
      `SELECT
        campanha,
        COUNT(*) as quantidade,
        SUM(valor) as total
      FROM doacoes
      WHERE doador_email = ? AND status = 'Confirmada'
      GROUP BY campanha`,
      [email]
    );

    // Última doação
    const [ultimaDoacao] = await connection.execute(
      `SELECT
        campanha,
        valor,
        DATE_FORMAT(data_doacao, '%d/%m/%Y') as data,
        status
      FROM doacoes
      WHERE doador_email = ?
      ORDER BY data_doacao DESC
      LIMIT 1`,
      [email]
    );

    res.json({
      resumo: totalDoado[0],
      campanhas: doacoesPorCampanha,
      ultima_doacao: ultimaDoacao[0] || null
    });

  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    res.status(500).json({ error: 'Erro ao buscar perfil' });
  }
});

// ==========================
// 📰 ROTAS DE NOTÍCIAS
// ==========================

// 📌 Listar notícias
app.get('/api/noticias', async (req, res) => {
  try {
    const [noticias] = await connection.execute(
      `SELECT
        id,
        titulo,
        conteudo,
        DATE_FORMAT(created_at, '%d/%m/%Y %H:%i') as data
      FROM noticias
      ORDER BY created_at DESC`
    );

    res.json(noticias);

  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
});

// ✅ Iniciar servidor na porta 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log('✅ Rotas de Doações disponíveis!');
});