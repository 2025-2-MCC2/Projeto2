// teste-server.js
import express from "express";

const app = express();
const PORT = 3002;

// Rota de teste
app.get("/teste", (req, res) => {
  res.send("Servidor OK ✅");
});

// Escutar todas as interfaces
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Servidor rodando na porta ${PORT} (0.0.0.0)`)
);
