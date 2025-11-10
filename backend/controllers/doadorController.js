import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const doadoresMock = [
  {
    email: "gugu.souza1205@gmail.com",
    nome: "Gustavo",
    senha: bcrypt.hashSync("banco123", 10)
  }
];

const JWT_SECRET = process.env.JWT_SECRET || "segredoSuperSeguro";

export async function cadastrarDoador(req, res) {
  const { email, senha, nome } = req.body;
  if (!email || !senha) return res.status(400).json({ message: "Email e senha são obrigatórios" });

  if (doadoresMock.find(d => d.email === email)) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  const hashed = await bcrypt.hash(senha, 10);
  doadoresMock.push({ email, nome: nome || "", senha: hashed });

  const token = jwt.sign({ email, nome: nome || "" }, JWT_SECRET, { expiresIn: "1h" });
  return res.status(201).json({ message: "Doador cadastrado com sucesso", token });
}

export async function loginDoador(req, res) {
  const { email, senha } = req.body;
  if (!email || !senha) return res.status(400).json({ message: "Email e senha são obrigatórios" });

  const doador = doadoresMock.find(d => d.email === email);
  if (!doador) return res.status(404).json({ message: "Doador não encontrado" });

  const senhaValida = await bcrypt.compare(senha, doador.senha);
  if (!senhaValida) return res.status(401).json({ message: "Senha incorreta" });

  const token = jwt.sign({ email: doador.email, nome: doador.nome }, JWT_SECRET, { expiresIn: "1h" });
  return res.status(200).json({ message: "Login realizado com sucesso", token, doador: { email: doador.email, nome: doador.nome } });
}
