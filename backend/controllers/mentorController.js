import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../database/connection.js";

const JWT_SECRET = process.env.JWT_SECRET || "seu_secret_super_seguro_aqui_12345";

// Cadastro de Mentor
export async function cadastrarMentor(req, res) {
  const { email, senha, grupo } = req.body;
  
  if (!email || !senha || !grupo) {
    return res.status(400).json({ message: "Email, senha e grupo são obrigatórios" });
  }

  try {
    const [mentores] = await db.query("SELECT * FROM mentores WHERE email = ?", [email]);
    
    if (mentores.length > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);
    
    await db.query(
      "INSERT INTO mentores (email, grupo, senha) VALUES (?, ?, ?)",
      [email, grupo, hashedPassword]
    );

    const token = jwt.sign({ email, grupo }, JWT_SECRET, { expiresIn: "1h" });
    
    return res.status(201).json({ 
      message: "Mentor cadastrado com sucesso", 
      token 
    });
  } catch (error) {
    console.error('Erro ao cadastrar mentor:', error);
    return res.status(500).json({ message: "Erro ao cadastrar mentor" });
  }
}

// Login de Mentor
export async function loginMentor(req, res) {
  const { email, senha } = req.body;
  
  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  try {
    const [mentores] = await db.query("SELECT * FROM mentores WHERE email = ?", [email]);
    
    if (mentores.length === 0) {
      return res.status(404).json({ message: "Mentor não encontrado" });
    }

    const mentor = mentores[0];
    const senhaValida = await bcrypt.compare(senha, mentor.senha);
    
    if (!senhaValida) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
      { id: mentor.id, email: mentor.email, grupo: mentor.grupo },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      mentor: { 
        id: mentor.id,
        email: mentor.email, 
        grupo: mentor.grupo 
      }
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ message: "Erro ao realizar login" });
  }
}