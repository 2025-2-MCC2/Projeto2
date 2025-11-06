import express from "express";
import { cadastrarAluno, loginAluno } from "../controllers/alunoController.js";

const router = express.Router();

router.post("/cadastro-aluno", cadastrarAluno);
router.post("/login-aluno", loginAluno);

export default router;