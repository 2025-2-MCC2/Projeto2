import express from "express";
import { cadastrarDoador, loginDoador } from "../controllers/doadorController.js";

const router = express.Router();

router.post("/cadastro-doador", cadastrarDoador);
router.post("/login-doador", loginDoador);

export default router;
