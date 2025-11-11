import express from "express";
import { cadastrarDoador, loginDoador } from "../controllers/doadorController.js";

const router = express.Router();

router.post("/cadastro", cadastrarDoador);  // ✅ /api/doador/cadastro
router.post("/login", loginDoador);          // ✅ /api/doador/login

export default router;