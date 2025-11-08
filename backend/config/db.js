 import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('✅ Conectado ao MySQL com sucesso!');
});

// Rota para listar campanhas
app.get('/api/campanhas', (req, res) => {
  console.log('🔍 Tentando listar campanhas...');
  const sql = 'SELECT id, nome, descricao, meta_valor, valor_arrecadado, ativa, data_criacao FROM campanhas';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar campanhas:', err);
      return res.status(500).json({ error: 'Erro ao buscar campanhas' });
    }
    console.log(`✅ Campanhas encontradas: ${results.length} registros`);
    res.json(results); // ✅ Retorna array direto
  });
});

// Rota para adicionar doação
app.post('/api/doacoes', (req, res) => {
  const { doador_nome, doador_email, valor, campanha, forma_pagamento } = req.body;

  if (!doador_nome || !doador_email || !valor || !campanha) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  const sql = 'INSERT INTO doacoes (doador_nome, doador_email, valor, campanha, forma_pagamento, status, data_criacao) VALUES (?, ?, ?, ?, ?, ?, NOW())';
  const values = [doador_nome, doador_email, valor, campanha, forma_pagamento, 'Pendente'];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir doação:', err);
      return res.status(500).json({ error: 'Erro ao processar doação' });
    }
    console.log('✅ Doação registrada com sucesso!');
    res.json({ message: 'Doação registrada com sucesso', id: result.insertId });
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});