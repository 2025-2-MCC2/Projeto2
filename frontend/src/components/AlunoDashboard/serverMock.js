const mockUsers = [
  // Usuário 1
  {
    email: "maria.silva@gmail.com",
    password: "123456", 
    token: "TOKEN_MOCKADO_MARIA",
    nome: "Maria Silva",
    turma: "3A",
    grupo: "Equipe Alpha"
  },
  // Usuário 2
  {
    email: "gugu.souza1205@gmail.com",
    password: "SenhaFORTE123", 
    token: "TOKEN_MOCKADO_GUGU",
    nome: "Gustavo Souza",
    turma: "A",
    periodo: "Noturno",
    grupo: "Gustavo" 
  }
];

export async function loginAluno(email, password) {

  // Busca do usuário pelo email
  const user = mockUsers.find(u => u.email === email);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Usuário não encontrado
      if (!user) {
        reject({ erro: "Email não encontrado." });
        return;
      }

      //Senha errada
      if (password !== user.password) {
        reject({ erro: "Senha incorreta." });
        return;
      }
      // Login OK
      localStorage.setItem("token", user.token);
      localStorage.setItem("email", user.email);

      resolve({
        sucesso: true,
        token: user.token,
        usuario: {
          nome: user.nome,
          turma: user.turma,
          periodo: user.periodo, // Adicionado
          grupo: user.grupo,
          email: user.email
        }
      });
    }, 800); // Delay só para simular
  });
}

//  Para checagem de sessão (opcional)
export const isAuthenticated = () => !!localStorage.getItem("token");

// Logout mock
export const logoutAluno = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
};