import express from "express";
import noticiaRoutes from "./routes/noticiasRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import alunoRoutes from "./routes/alunoRoutes.js";
import doacoesRoutes from "./routes/doacoesRoutes.js"; // Corrige maiúscula/minúscula
import campanhasRoutes from "./routes/campanhasRoutes.js"; // Nova rota

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas existentes
app.use("/api/noticias", noticiaRoutes);
app.use("/api/mentor", mentorRoutes);
app.use("/api/aluno", alunoRoutes);

// Novas rotas
app.use("/api/doacoes", doacoesRoutes);
app.use("/api/campanhas", campanhasRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));