import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Conexão com o banco
let connection;

async function conectarBanco() {
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "banco123", // ✅ senha correta
      database: "projeto2"
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
// ✅ SUAS ROTAS EXISTENTES
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

// ✅ Iniciar servidor
app.listen(3001, () => console.log('Backend rodando na porta 3001'));