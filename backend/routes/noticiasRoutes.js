import express from "express";
import { criarNoticia, listarNoticias, atualizarNoticia, deletarNoticia } from "../controllers/noticiasController.js";

const router = express.Router();

router.post("/", criarNoticia);
router.get("/noticias", listarNoticias);
router.put("/:id", atualizarNoticia);
router.delete("/:id", deletarNoticia);

export default router;
