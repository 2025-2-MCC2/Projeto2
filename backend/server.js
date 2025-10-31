import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do MySQL
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '', // coloque sua senha
  database: 'liderancas_empaticas'
};

// Criando pool de conexões
const pool = mysql.createPool(dbConfig);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

// Rota: pegar usuário (mentor ou aluno)
app.get('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota: atividades de uma equipe
app.get('/atividades/:equipe_id', async (req, res) => {
  const { equipe_id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM atividades WHERE equipe_id = ?', [equipe_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota: arrecadações de uma equipe
app.get('/arrecadacoes/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM arrecadacoes WHERE usuario_id = ? ORDER BY data ASC',
      [usuario_id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota: relatórios de uma equipe
app.get('/relatorios/:equipe_id', async (req, res) => {
  const { equipe_id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM relatorios WHERE equipe_id = ?', [equipe_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota: ranking geral das equipes
app.get('/ranking', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT e.nome AS equipe, SUM(a.valor) AS total_arrecadado
      FROM equipes e
      LEFT JOIN equipe_membros em ON em.equipe_id = e.id
      LEFT JOIN arrecadacoes a ON a.usuario_id = em.usuario_id
      GROUP BY e.id
      ORDER BY total_arrecadado DESC
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Porta do servidor
const PORT = 3001;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
