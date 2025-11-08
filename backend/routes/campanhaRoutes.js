import express from "express";
import db from "../config/db.js"; // Conexão MySQL

const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT id, nome, descricao, meta_valor, valor_arrecadado, ativa, data_criacao FROM campanhas";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao buscar campanhas:", err);
      return res.status(500).json({ error: "Erro ao buscar campanhas" });
    }
    res.json(results); // Retorna array direto
  });
});

export default router;