import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco
const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'SUA_SENHA',
  database: 'liderancas_empaticas',
  waitForConnections: true,
  connectionLimit: 10,
});

// Rota para arrecadação total
app.get('/arrecadacao/:equipeId', async (req, res) => {
  const { equipeId } = req.params;
  try {
    const [rows] = await db.query(
      'SELECT ano, total_arrecadado FROM arrecadacoes WHERE equipe_id = ? ORDER BY ano',
      [equipeId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para ranking
app.get('/ranking', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT equipe_nome, SUM(total_arrecadado) as total FROM arrecadacoes GROUP BY equipe_nome ORDER BY total DESC'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para últimas atividades
app.get('/atividades/:equipeId', async (req, res) => {
  const { equipeId } = req.params;
  try {
    const [rows] = await db.query(
      'SELECT descricao, hora, data FROM atividades WHERE equipe_id = ? ORDER BY data DESC, hora DESC',
      [equipeId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar servidor
app.listen(3001, () => console.log('Backend rodando na porta 3001'));
