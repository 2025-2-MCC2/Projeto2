import { db } from "../database/connection.js"; // ADICIONAR IMPORT
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Função para cadastrar aluno
export async function cadastrarAluno(req, res) {
  const { email, nome_grupo, turma, periodo, senha } = req.body;

  if (!email || !nome_grupo || !turma || !periodo || !senha) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const [rows] = await db.query("SELECT * FROM alunos WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    await db.query(
      "INSERT INTO alunos (email, nome_grupo, turma, periodo, senha) VALUES (?, ?, ?, ?, ?)",
      [email, nome_grupo, turma, periodo, hashedPassword]
    );

    res.status(201).json({ message: "Aluno cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao cadastrar aluno" });
  }
}

// Função para login do aluno
export async function loginAluno(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  try {
    const [rows] = await db.query("SELECT * FROM alunos WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Aluno não encontrado" });
    }

    const aluno = rows[0];
    const senhaValida = await bcrypt.compare(senha, aluno.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
      { email: aluno.email, nome_grupo: aluno.nome_grupo },
      process.env.JWT_SECRET || "segredoSuperSeguro",
      { expiresIn: "1h" }
    );

    res.status(200).json({ 
      message: "Login realizado com sucesso", 
      token,
      aluno: { email: aluno.email, nome_grupo: aluno.nome_grupo }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao realizar login" });
  }
}