
-- ============================================
-- SEÇÃO 1: GRUPOS E ALUNOS
-- ============================================

-- Tabela de grupos (responsável pelo cadastro de alunos)
CREATE TABLE IF NOT EXISTS grupos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_grupo VARCHAR(255) NOT NULL,
    sala VARCHAR(50) NOT NULL,
    nome_responsavel VARCHAR(255) NOT NULL,
    email_responsavel VARCHAR(255) UNIQUE NOT NULL,
    telefone_responsavel VARCHAR(20),
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de alunos (vinculados a grupos)
CREATE TABLE IF NOT EXISTS alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grupo_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    ra VARCHAR(50),
    email VARCHAR(255),
    FOREIGN KEY (grupo_id) REFERENCES grupos(id) ON DELETE CASCADE
);

-- ============================================
-- SEÇÃO 2: MENTORES E EQUIPES
-- ============================================

-- Tabela de mentores
CREATE TABLE IF NOT EXISTS mentores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    grupo VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de equipes (lideradas por mentores)
CREATE TABLE IF NOT EXISTS equipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    mentor_id INT NOT NULL,
    FOREIGN KEY (mentor_id) REFERENCES mentores(id) ON DELETE CASCADE
);

-- ============================================
-- SEÇÃO 3: ARRECADAÇÕES E ATIVIDADES
-- ============================================

-- Tabela de arrecadações por equipe
CREATE TABLE IF NOT EXISTS arrecadacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipe_id INT NOT NULL,
    total_arrecadado DECIMAL(10,2) NOT NULL,
    ano YEAR NOT NULL,
    FOREIGN KEY (equipe_id) REFERENCES equipes(id) ON DELETE CASCADE
);

-- Tabela de atividades das equipes
CREATE TABLE IF NOT EXISTS atividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipe_id INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    FOREIGN KEY (equipe_id) REFERENCES equipes(id) ON DELETE CASCADE
);

-- ============================================
-- SEÇÃO 4: MENSAGENS
-- ============================================

-- Tabela de mensagens entre equipes
CREATE TABLE IF NOT EXISTS mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipe_id INT NOT NULL,
    remetente VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    hora_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (equipe_id) REFERENCES equipes(id) ON DELETE CASCADE
);

-- ============================================
-- SEÇÃO 5: CAMPANHAS E DOAÇÕES (SITE PÚBLICO)
-- ============================================

-- Tabela de campanhas de doação
CREATE TABLE IF NOT EXISTS campanhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    meta_valor DECIMAL(10, 2),
    valor_arrecadado DECIMAL(10, 2) DEFAULT 0,
    ativa BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de doações do site
CREATE TABLE IF NOT EXISTS doacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doador_nome VARCHAR(255) NOT NULL,
    doador_email VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    campanha VARCHAR(255) NOT NULL,
    status ENUM('Pendente','Confirmada','Cancelada') DEFAULT 'Pendente',
    data_doacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    mensagem_agradecimento TEXT
);

-- ============================================
-- SEÇÃO 6: NOTÍCIAS
-- ============================================

-- Tabela de notícias
CREATE TABLE IF NOT EXISTS noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- DADOS INICIAIS (EXEMPLOS)
-- ============================================

-- Campanhas de exemplo
INSERT INTO campanhas (nome, descricao, meta_valor, valor_arrecadado) VALUES
('Combate à Fome', 'Ajude a fornecer refeições para famílias em situação de vulnerabilidade social', 50000.00, 0),
('Educação para Todos', 'Contribua para levar educação de qualidade para crianças carentes', 30000.00, 0),
('Saúde em Primeiro Lugar', 'Apoie o acesso à saúde para comunidades carentes', 40000.00, 0);

-- Notícias de exemplo
INSERT INTO noticias (titulo, conteudo) VALUES
('Primeira campanha de doações', 'Estamos iniciando nossa primeira campanha para ajudar 100 alunos.'),
('Novo mentor cadastrado', 'Bem-vindo ao nosso programa de mentoria!'),
('Meta alcançada!', 'Conseguimos arrecadar R$ 10.000 para bolsas de estudo.');