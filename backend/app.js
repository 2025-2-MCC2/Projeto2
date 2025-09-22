import express from "express";
import noticiasRoutes from './noticiasRoutes.js';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", noticiasRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
