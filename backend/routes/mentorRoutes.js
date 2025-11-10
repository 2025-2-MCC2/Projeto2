import express from "express";
import { cadastrarMentor, loginMentor } from "../controllers/mentorController.js";

const router = express.Router();

router.post("/cadastro-mentor", cadastrarMentor);
router.post("/login-mentor", loginMentor);

export default router;
