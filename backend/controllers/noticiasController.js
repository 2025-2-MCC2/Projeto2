import { db } from "../database/connection.js";


// CREATE
export const criarNoticia = (req, res) => {
  const { titulo, conteudo } = req.body;
  db.query("INSERT INTO noticias (titulo, conteudo) VALUES (?, ?)", [titulo, conteudo],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, titulo, conteudo });
    });
};

// READ
export const listarNoticias = (req, res) => {
  db.query("SELECT * FROM noticias", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// UPDATE
export const atualizarNoticia = (req, res) => {
  const { id } = req.params;
  const { titulo, conteudo } = req.body;
  db.query("UPDATE noticias SET titulo=?, conteudo=? WHERE id=?", [titulo, conteudo, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Notícia atualizada com sucesso" });
    });
};

// DELETE
export const deletarNoticia = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM noticias WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Notícia deletada com sucesso" });
  });
};
