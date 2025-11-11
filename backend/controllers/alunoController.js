import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../database/connection.js";

// Cadastro do aluno
export async function cadastrarAluno(req, res) {
  const { email, nome_grupo, turma, periodo, senha } = req.body;

  if (!email || !nome_grupo || !turma || !periodo || !senha) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const [alunos] = await db.query("SELECT * FROM alunos WHERE email = ?", [email]);
    if (alunos.length > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    await db.query(
      "INSERT INTO alunos (nome, email, turma, periodo, senha) VALUES (?, ?, ?, ?, ?)",
      [nome_grupo, email, turma, periodo, hashedPassword]
    );

    res.status(201).json({ message: "Aluno cadastrado com sucesso" });
  } catch (error) {
    console.error('Erro ao cadastrar aluno:', error);
    res.status(500).json({ message: "Erro ao cadastrar aluno" });
  }
}

// Login do aluno
export async function loginAluno(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  try {
    const [alunos] = await db.query("SELECT * FROM alunos WHERE email = ?", [email]);
    
    if (alunos.length === 0) {
      return res.status(404).json({ message: "Aluno não encontrado" });
    }

    const aluno = alunos[0];
    const senhaValida = await bcrypt.compare(senha, aluno.senha);
    
    if (!senhaValida) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
      { id: aluno.id, email: aluno.email, nome: aluno.nome },
      process.env.JWT_SECRET || "seu_secret_super_seguro_aqui_12345",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      aluno: { 
        id: aluno.id,
        email: aluno.email, 
        nome: aluno.nome,
        turma: aluno.turma,
        periodo: aluno.periodo
      }
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: "Erro ao realizar login" });
  }
}