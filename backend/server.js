// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./database/connection.js"; // seu arquivo de conexão MySQL
import noticiasRoutes from "./routes/noticiasRoutes.js";

dotenv.config();

const app = express();
const PORT = 3002; // Porta liberada, evita conflito com firewall

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas do projeto
app.use("/", noticiasRoutes);

// Rota de teste para garantir que o servidor responde
app.get("/teste", (req, res) => {
  res.json({ ok: true, message: "Servidor OK ✅" });
});

// Iniciar servidor escutando em todas as interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend rodando na porta ${PORT} (0.0.0.0)`);
  console.log("✅ Conectado ao MySQL com sucesso!");
});
