// teste.js
const express = require("express");
const app = express();
const PORT = 3002;

app.get("/teste", (req,res) => res.send("Servidor OK"));

app.listen(PORT, "0.0.0.0", () => console.log(`Rodando na porta ${PORT}`));
