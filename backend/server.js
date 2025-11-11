// server.js
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Carrega variáveis do .env
dotenv.config();

// Criar instância do Express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173', // porta do Vite
  credentials: true
}));

// Tratar JSON inválido
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'JSON inválido no body da requisição' });
  }
  next();
});

// ✅ Conexão com o banco
let connection;

async function conectarBanco() {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "dashboard_doacoes",
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
    });
    console.log('✅ Conectado ao MySQL com sucesso!');
  } catch (err) {
    console.log('❌ Erro ao conectar ao MySQL:', err.message);
    process.exit(1);
  }
}

await conectarBanco();

// -----------------------------
// IMPORT ROTAS (ex: doador, mentor)
// -----------------------------
import doadorRoutes from "./routes/doadorRoutes.js";
app.use("/api/doador", doadorRoutes);

// DEBUG depois de registrar doadorRoutes
console.log('DEBUG: doadorRoutes tipo ->', typeof doadorRoutes);
console.log('DEBUG: app._router existe (após doadorRoutes)? ->', !!app._router);

import mentorRoutes from "./routes/mentorRoutes.js";
app.use("/api/mentor", mentorRoutes);

// DEBUG depois de registrar mentorRoutes
console.log('DEBUG: mentorRoutes tipo ->', typeof mentorRoutes);
console.log('DEBUG: app._router existe (após mentorRoutes)? ->', !!app._router);

// ✅ Teste da conexão
app.get('/', (req, res) => {
  res.send('🚀 Backend funcionando!');
});

// ==========================
// ✅ ROTAS PARA ALUNO
// ==========================

// Cadastro do aluno
app.post('/api/aluno/cadastro', async (req, res) => {
  const { email, nome, turma, periodo, senha } = req.body;

  if (!email || !nome || !turma || !periodo || !senha) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const [rows] = await connection.query("SELECT * FROM alunos WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    await connection.query(
      "INSERT INTO alunos (email, nome, turma, periodo, senha) VALUES (?, ?, ?, ?, ?)",
      [email, nome, turma, periodo, hashedPassword]
    );

    res.status(201).json({ message: "Aluno cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao cadastrar aluno" });
  }
});

// Login do aluno
app.post('/api/aluno/login', async (req, res) => {
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
      { id: aluno.id, email: aluno.email, nome: aluno.nome },
      process.env.JWT_SECRET || "seu_secret_super_seguro_aqui_12345",
      { expiresIn: "1h" }
    );

    res.status(200).json({ 
      message: "Login realizado com sucesso", 
      token,
      aluno: {
        id: aluno.id,
        email: aluno.email,
        nome: aluno.nome,
        turma: aluno.turma,
        periodo: aluno.periodo
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao realizar login" });
  }
});

// ==========================
// ✅ ROTAS DE EQUIPES / MENTORES
// ==========================

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

app.post('/api/doacoes', async (req, res) => {
  try {
    const { doador_nome, doador_email, valor, campanha, forma_pagamento } = req.body;

    if (!doador_nome || !doador_email || !valor || !campanha) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    if (parseFloat(valor) <= 0) {
      return res.status(400).json({ error: 'O valor deve ser maior que zero' });
    }

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

// ==========================
// Debug: listar rotas registradas (mais completo)
// =========================
console.log("\n=== ROTAS REGISTRADAS (DEBUG) ===");
console.log('app._router =>', !!app._router);
if (app._router && Array.isArray(app._router.stack)) {
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      console.log("ROUTE:", middleware.route.path, Object.keys(middleware.route.methods));
    } else if (middleware.name === "router" && middleware.handle && Array.isArray(middleware.handle.stack)) {
      middleware.handle.stack.forEach((handler) => {
        const route = handler.route;
        if (route) console.log("ROUTE (mounted):", route.path, Object.keys(route.methods));
      });
    } else {
      if (middleware.name) console.log("MIDDLEWARE:", middleware.name);
    }
  });
} else {
  console.log("Nenhuma rota encontrada (app._router undefined ou stack inválida).");
}
console.log("=================================\n");

// ==========================
// ✅ Iniciar servidor
// =========================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});