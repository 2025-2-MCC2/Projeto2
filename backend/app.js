// app.js
import express from "express";
import cors from "cors";

// Rotas
import noticiaRoutes from "./routes/noticiasRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import alunoRoutes from "./routes/alunoRoutes.js";
import doacoesRoutes from "./routes/doacoesRoutes.js"; // <-- use nome em minúsculas
import campanhasRoutes from "./routes/campanhasRoutes.js";
import doadorRoutes from "./routes/doadorRoutes.js";  

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use(express.json());

// Rotas principais
app.use("/api/noticias", noticiaRoutes);
app.use("/api/mentor", mentorRoutes);
app.use("/api/aluno", alunoRoutes);

// Rotas de doações e campanhas
app.use("/api/doacoes", doacoesRoutes);
app.use("/api/campanhas", campanhasRoutes);

// Rotas de doador (login / cadastro) - separadas
app.use("/api/doador", doadorRoutes);

// Rota raiz para checar se o servidor está no ar
app.get("/", (req, res) => {
  res.send("🚀 Backend rodando — app.js OK");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

// Error handler genérico (catch-all)
app.use((err, req, res, next) => {
  console.error("Erro interno do servidor:", err);
  res.status(500).json({ error: "Erro interno do servidor" });
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});
