import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Cria a lista e insere depois o hash
const alunosMock = [];

(async () => {
  const senhaHash = await bcrypt.hash("SenhaFORTE123", 10);
  alunosMock.push({
    email: "gugu.souza1205@gmail.com",
    nome_grupo: "Gustavo",
    turma: "A",
    periodo: "Noturno",
    senha: senhaHash
  });
})();


// Cadastro do aluno (mock)
export async function cadastrarAluno(req, res) {
  const { email, nome_grupo, turma, periodo, senha } = req.body;

  if (!email || !nome_grupo || !turma || !periodo || !senha) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  const existe = alunosMock.find(a => a.email === email);
  if (existe) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  const hashedPassword = await bcrypt.hash(senha, 10);
  alunosMock.push({ email, nome_grupo, turma, periodo, senha: hashedPassword });

  res.status(201).json({ message: "Aluno cadastrado com sucesso" });
}

// Login do aluno (mock)
export async function loginAluno(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  const aluno = alunosMock.find(a => a.email === email);
  if (!aluno) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

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
}