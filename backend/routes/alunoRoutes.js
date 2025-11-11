import express from "express";
import { cadastrarAluno, loginAluno } from "../controllers/alunoController.js";

const router = express.Router();

router.post("/cadastro", cadastrarAluno);  // ✅ /api/aluno/cadastro
router.post("/login", loginAluno);          // ✅ /api/aluno/login

export default router;