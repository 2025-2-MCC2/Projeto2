import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const mentoresMock = [
  {
    email: "mentor@email.com",
    nome: "Mentor Padrão",
    senha: bcrypt.hashSync("mentor123", 10)
  }
];

const JWT_SECRET = process.env.JWT_SECRET || "segredoSuperSeguro";

// Cadastro de Mentor
export async function cadastrarMentor(req, res) {
  const { email, senha, nome } = req.body;
  if (!email || !senha)
    return res.status(400).json({ message: "Email e senha são obrigatórios" });

  if (mentoresMock.find(m => m.email === email)) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  const hashed = await bcrypt.hash(senha, 10);
  mentoresMock.push({ email, nome: nome || "", senha: hashed });

  const token = jwt.sign({ email, nome: nome || "" }, JWT_SECRET, { expiresIn: "1h" });
  return res.status(201).json({ message: "Mentor cadastrado com sucesso", token });
}

// Login de Mentor
export async function loginMentor(req, res) {
  const { email, senha } = req.body;
  if (!email || !senha)
    return res.status(400).json({ message: "Email e senha são obrigatórios" });

  const mentor = mentoresMock.find(m => m.email === email);
  if (!mentor) return res.status(404).json({ message: "Mentor não encontrado" });

  const senhaValida = await bcrypt.compare(senha, mentor.senha);
  if (!senhaValida)
    return res.status(401).json({ message: "Senha incorreta" });

  const token = jwt.sign(
    { email: mentor.email, nome: mentor.nome },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    message: "Login realizado com sucesso",
    token,
    mentor: { email: mentor.email, nome: mentor.nome }
  });
}
