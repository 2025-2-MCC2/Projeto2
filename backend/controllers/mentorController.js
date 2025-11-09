import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Dados mock
const mentoresMock = [
  {
    email: "mentor.exemplo@gmail.com",
    grupo: "GrupoMentoria",
    senha: await bcrypt.hash("SenhaMentor123", 10)
  }
];

// Cadastro do mentor (mock)
export async function cadastrarMentor(req, res) {
  const { email, grupo, senha } = req.body;

  if (!email || !grupo || !senha) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  const existe = mentoresMock.find(m => m.email === email);
  if (existe) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  const hashedPassword = await bcrypt.hash(senha, 10);
  mentoresMock.push({ email, grupo, senha: hashedPassword });

  res.status(201).json({ message: "Mentor cadastrado com sucesso" });
}

// Login do mentor (mock)
export async function loginMentor(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  const mentor = mentoresMock.find(m => m.email === email);
  if (!mentor) {
    return res.status(404).json({ message: "Mentor não encontrado" });
  }

  const senhaValida = await bcrypt.compare(senha, mentor.senha);
  if (!senhaValida) {
    return res.status(401).json({ message: "Senha incorreta" });
  }

  const token = jwt.sign(
    { email: mentor.email, grupo: mentor.grupo },
    process.env.JWT_SECRET || "segredoSuperSeguro",
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Login realizado com sucesso",
    token,
    mentor: { email: mentor.email, grupo: mentor.grupo }
  });
}