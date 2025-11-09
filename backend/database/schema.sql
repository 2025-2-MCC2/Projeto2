-- ===================================================
-- BANCO DE DADOS: DASHBOARD DE DOAÇÕES
-- ===================================================
-- Reinicia o banco antes de criar as tabelas
DROP DATABASE IF EXISTS dashboard_doacoes;
CREATE DATABASE dashboard_doacoes;
USE dashboard_doacoes;

CREATE DATABASE IF NOT EXISTS dashboard_doacoes;
USE dashboard_doacoes;

-- ===================================================
-- SEÇÃO 1: GRUPOS E ALUNOS
-- ===================================================

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

CREATE TABLE IF NOT EXISTS alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grupo_id INT,
    nome VARCHAR(255) NOT NULL,
    ra VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    turma VARCHAR(50),
    periodo VARCHAR(50),
    senha VARCHAR(255),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (grupo_id) REFERENCES grupos(id) ON DELETE SET NULL
);

-- ===================================================
-- SEÇÃO 2: MENTORES E EQUIPES
-- ===================================================

CREATE TABLE IF NOT EXISTS mentores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    grupo VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS equipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    mentor_id INT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (mentor_id) REFERENCES mentores(id) ON DELETE CASCADE
);

-- ===================================================
-- SEÇÃO 3: ARRECADAÇÕES E ATIVIDADES
-- ===================================================

CREATE TABLE IF NOT EXISTS arrecadacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipe_id INT NOT NULL,
    equipe_nome VARCHAR(100),
    total_arrecadado DECIMAL(10,2) NOT NULL DEFAULT 0,
    ano YEAR NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (equipe_id) REFERENCES equipes(id) ON DELETE CASCADE,
    INDEX idx_equipe (equipe_id),
    INDEX idx_ano (ano)
);

CREATE TABLE IF NOT EXISTS atividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipe_id INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (equipe_id) REFERENCES equipes(id) ON DELETE CASCADE,
    INDEX idx_equipe (equipe_id),
    INDEX idx_data (data)
);

-- ===================================================
-- SEÇÃO 4: MENSAGENS
-- ===================================================

CREATE TABLE IF NOT EXISTS mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipe_id INT NOT NULL,
    remetente VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    hora_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (equipe_id) REFERENCES equipes(id) ON DELETE CASCADE,
    INDEX idx_equipe (equipe_id),
    INDEX idx_hora (hora_envio)
);

-- ===================================================
-- SEÇÃO 5: CAMPANHAS E DOAÇÕES
-- ===================================================

CREATE TABLE IF NOT EXISTS campanhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    descricao TEXT,
    meta_valor DECIMAL(10,2) NOT NULL DEFAULT 0,
    valor_arrecadado DECIMAL(10,2) DEFAULT 0,
    ativa BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_nome (nome),
    INDEX idx_ativa (ativa)
);

CREATE TABLE IF NOT EXISTS doacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doador_nome VARCHAR(255) NOT NULL,
    doador_email VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    campanha VARCHAR(255) NOT NULL,
    status ENUM('Pendente','Confirmada','Cancelada') DEFAULT 'Pendente',
    forma_pagamento VARCHAR(50),
    data_doacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    mensagem_agradecimento TEXT,
    FOREIGN KEY (campanha) REFERENCES campanhas(nome) ON DELETE CASCADE,
    INDEX idx_campanha (campanha),
    INDEX idx_status (status),
    INDEX idx_data (data_doacao)
);

-- ===================================================
-- SEÇÃO 6: NOTÍCIAS
-- ===================================================

CREATE TABLE IF NOT EXISTS noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    autor VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_created (created_at)
);

-- ===================================================
-- DADOS INICIAIS
-- ===================================================

INSERT INTO campanhas (nome, descricao, meta_valor, valor_arrecadado, ativa)
VALUES
('Combate à Fome', 'Ajude a fornecer refeições para famílias em situação de vulnerabilidade social', 50000.00, 0, TRUE),
('Educação para Todos', 'Contribua para levar educação de qualidade para crianças carentes', 30000.00, 0, TRUE),
('Saúde em Primeiro Lugar', 'Apoie o acesso à saúde para comunidades carentes', 40000.00, 0, TRUE)
ON DUPLICATE KEY UPDATE
    descricao = VALUES(descricao),
    meta_valor = VALUES(meta_valor),
    ativa = VALUES(ativa);

INSERT INTO doacoes (doador_nome, doador_email, valor, campanha, status, forma_pagamento, data_doacao)
VALUES
('João Silva', 'joao@exemplo.com', 100.00, 'Combate à Fome', 'Confirmada', 'PIX', '2025-04-09 10:30:00'),
('Maria Santos', 'maria@exemplo.com', 80.00, 'Combate à Fome', 'Confirmada', 'Cartão de Crédito', '2025-04-26 14:15:00'),
('Pedro Costa', 'pedro@exemplo.com', 50.00, 'Combate à Fome', 'Pendente', 'PIX', '2025-06-11 09:45:00'),
('Ana Paula', 'ana@exemplo.com', 200.00, 'Educação para Todos', 'Confirmada', 'Boleto', '2025-05-15 16:20:00'),
('Carlos Souza', 'carlos@exemplo.com', 150.00, 'Saúde em Primeiro Lugar', 'Confirmada', 'PIX', '2025-05-20 11:00:00');

INSERT INTO noticias (titulo, conteudo, autor)
VALUES
('Primeira campanha de doações', 'Estamos iniciando nossa primeira campanha para ajudar 100 alunos. Sua contribuição faz a diferença!', 'Equipe Projeto2'),
('Novo mentor cadastrado', 'Bem-vindo ao nosso programa de mentoria! Juntos vamos transformar vidas através da educação.', 'Administração'),
('Meta alcançada!', 'Conseguimos arrecadar R$ 10.000 para bolsas de estudo. Obrigado a todos os doadores!', 'Equipe Projeto2')
ON DUPLICATE KEY UPDATE
    conteudo = VALUES(conteudo);

-- ===================================================
-- ATUALIZAÇÃO AUTOMÁTICA DE VALORES
-- ===================================================

UPDATE campanhas c
SET valor_arrecadado = (
    SELECT COALESCE(SUM(d.valor), 0)
    FROM doacoes d
    WHERE d.campanha = c.nome
    AND d.status = 'Confirmada'
);

-- ===================================================
-- VERIFICAÇÕES FINAIS
-- ===================================================

SHOW TABLES;
DESCRIBE campanhas;
DESCRIBE doacoes;

SELECT 'CAMPANHAS' AS tabela;
SELECT id, nome, meta_valor, valor_arrecadado, ativa FROM campanhas;

SELECT 'DOAÇÕES' AS tabela;
SELECT id, doador_nome, valor, campanha, status, DATE_FORMAT(data_doacao, '%d/%m/%Y') AS data FROM doacoes;

SELECT 'NOTÍCIAS' AS tabela;
SELECT id, titulo, DATE_FORMAT(created_at, '%d/%m/%Y') AS data FROM noticias;

SELECT '✅ SCHEMA COMPLETO CRIADO COM SUCESSO!' AS status;
