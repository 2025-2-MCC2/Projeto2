import express from "express";
import noticiasRoutes from "./routes/noticiasRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas de notícias
app.use("/api/noticias", noticiasRoutes);


app.use("/api/mentor", mentorRoutes);


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));