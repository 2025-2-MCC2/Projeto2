-- ============================================
-- SCHEMA COMPLETO - SISTEMA DE DOAÇÕES + NOTÍCIAS
-- ============================================

-- Tabela de Notícias
CREATE TABLE IF NOT EXISTS noticias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  conteudo TEXT NOT NULL
);

-- Tabela de Doadores
CREATE TABLE IF NOT EXISTS doadores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de Campanhas
CREATE TABLE IF NOT EXISTS campanhas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    meta_valor DECIMAL(10, 2) NOT NULL,
    valor_arrecadado DECIMAL(10, 2) DEFAULT 0,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    status ENUM('ativa', 'encerrada', 'pausada') DEFAULT 'ativa',
    imagem_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de Doações
CREATE TABLE IF NOT EXISTS doacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    doador_id INT NOT NULL,
    campanha_id INT NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    status ENUM('pendente', 'confirmada', 'cancelada') DEFAULT 'pendente',
    mensagem TEXT,
    forma_pagamento ENUM('pix', 'cartao', 'boleto') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (doador_id) REFERENCES doadores(id) ON DELETE CASCADE,
    FOREIGN KEY (campanha_id) REFERENCES campanhas(id) ON DELETE CASCADE
);

-- ============================================
-- DADOS DE EXEMPLO
-- ============================================
INSERT INTO campanhas (titulo, descricao, meta_valor, valor_arrecadado, data_inicio, data_fim, status) VALUES
('Combate à Fome', 'Ajude a fornecer refeições para famílias em situação de vulnerabilidade social', 50000.00, 12500.00, '2025-01-01', '2025-12-31', 'ativa'),
('Educação para Todos', 'Contribua para levar educação de qualidade para crianças carentes', 30000.00, 8000.00, '2025-02-01', '2025-11-30', 'ativa'),
('Saúde em Primeiro Lugar', 'Apoie o acesso à saúde para comunidades carentes', 40000.00, 15000.00, '2025-01-15', '2025-10-31', 'ativa'),
('Roupas para o Inverno', 'Ajude a distribuir roupas e cobertores para pessoas em situação de rua', 20000.00, 5000.00, '2025-03-01', '2025-08-31', 'ativa');


-- ATbela de Doacoes

CREATE TABLE IF NOT EXISTS doacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doador_nome VARCHAR(255) NOT NULL,
    doador_email VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    campanha VARCHAR(255) NOT NULL,
    status ENUM('Pendente', 'Confirmada', 'Cancelada') DEFAULT 'Pendente',
    data_doacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    mensagem_agradecimento TEXT
);

CREATE TABLE IF NOT EXISTS campanhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    meta_valor DECIMAL(10, 2),
    valor_arrecadado DECIMAL(10, 2) DEFAULT 0,
    ativa BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);