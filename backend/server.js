import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Conexão com o banco dentro de função async
let connection;

async function conectarBanco() {
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "banco123",
      database: "projeto2"
    });
    console.log('✅ Conectado ao MySQL com sucesso!');
  } catch (err) {
    console.log('Erro ao conectar ao MySQL:', err.message);
    process.exit(1); // encerra o servidor se não conseguir conectar
  }
}

await conectarBanco(); // executa a conexão antes de iniciar o servidor

// ✅ Teste da conexão
app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

// Suas rotas aqui (arrecadacao, ranking, atividades, mensagens)

// ✅ Iniciar servidor
app.listen(3001, () => console.log('Backend rodando na porta 3001'));









// ✅ Rota: Arrecadação Total por equipe
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

// ✅ Rota: Ranking das equipes
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

// ✅ Rota: Últimas atividades (Agenda)
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

// ✅ Rota: Mensagens do chat
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