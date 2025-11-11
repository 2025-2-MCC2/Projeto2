import express from "express";
import { cadastrarMentor, loginMentor } from "../controllers/mentorController.js";

const router = express.Router();

// Remova o "-mentor" das rotas
router.post("/cadastro", cadastrarMentor);  // ✅ /api/mentor/cadastro
router.post("/login", loginMentor);          // ✅ /api/mentor/login

export default router;