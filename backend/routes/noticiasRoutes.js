import express from "express";
import { criarNoticia, listarNoticias, atualizarNoticia, deletarNoticia } from "../controllers/noticiasController.js";

const router = express.Router();

// CREATE - Criar notícia
router.post("/noticias", criarNoticia);

// READ - Listar todas as notícias
router.get("/noticias", listarNoticias);

// UPDATE - Atualizar notícia
router.put("/noticias/:id", atualizarNoticia);

// DELETE - Deletar notícia
router.delete("/noticias/:id", deletarNoticia);

export default router;
