import { db } from "../database/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Cadastro de mentor
export const cadastrarMentor = async (req, res) => {
  const { email, grupo, senha } = req.body;

  if (!email || !grupo || !senha) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    // Verifica se já existe mentor com esse email
    const [rows] = await db.promise().query("SELECT * FROM mentores WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Insere no banco
    await db.promise().query(
      "INSERT INTO mentores (email, grupo, senha) VALUES (?, ?, ?)",
      [email, grupo, hashedPassword]
    );

    res.status(201).json({ message: "Mentor cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao cadastrar mentor" });
  }
};

// Login de mentor com JWT
export const loginMentor = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  try {
    // Busca mentor pelo email
    const [rows] = await db.promise().query("SELECT * FROM mentores WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Mentor não encontrado" });
    }

    const mentor = rows[0];

    // Compara senha
    const senhaValida = await bcrypt.compare(senha, mentor.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    // Gera token JWT
    const token = jwt.sign(
      { email: mentor.email, grupo: mentor.grupo }, // payload
      process.env.JWT_SECRET || "segredoSuperSeguro", // chave secreta
      { expiresIn: "1h" } // expira em 1 hora
    );

    res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      mentor: { email: mentor.email, grupo: mentor.grupo }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao realizar login" });
  }
};