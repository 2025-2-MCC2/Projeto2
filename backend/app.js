import express from "express";
import noticiaRoutes from "./routes/noticiasRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import alunoRoutes from "./routes/alunoRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas
app.use("/api/noticias", noticiaRoutes);
app.use("/api/mentor", mentorRoutes);
app.use("/api/aluno", alunoRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const doacoesRoutes = require('./routes/DoacoesRoutes');
app.use('/api', doacoesRoutes);