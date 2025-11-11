-- =====================================================
-- DASHBOARD DE DOAÇÕES - SISTEMA MENTOR/ALUNO
-- =====================================================

USE dashboard_doacoes;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS mensagens;
DROP TABLE IF EXISTS atividades_mentoria;
DROP TABLE IF EXISTS doacoes;
DROP TABLE IF EXISTS noticias;
DROP TABLE IF EXISTS alunos;
DROP TABLE IF EXISTS equipes;
DROP TABLE IF EXISTS mentores;
DROP TABLE IF EXISTS campanhas;
SET FOREIGN_KEY_CHECKS = 1;

-- =====================================================
-- 1. TABELA: campanhas
-- =====================================================
CREATE TABLE campanhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT,
    meta_valor DECIMAL(10,2) NOT NULL,
    valor_arrecadado DECIMAL(10,2) DEFAULT 0.00,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    ativa BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- 2. TABELA: mentores
-- =====================================================
CREATE TABLE mentores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    foto_perfil VARCHAR(255),
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- 3. TABELA: equipes
-- =====================================================
CREATE TABLE equipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    mentor_id INT NOT NULL,
    total_arrecadado DECIMAL(10,2) DEFAULT 0.00,
    meta_equipe DECIMAL(10,2) DEFAULT 100.00,
    cor_identificacao VARCHAR(20),
    ativa BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (mentor_id) REFERENCES mentores(id)
);

-- =====================================================
-- 4. TABELA: alunos
-- =====================================================
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    equipe_id INT NOT NULL,
    total_arrecadado DECIMAL(10,2) DEFAULT 0.00,
    meta_individual DECIMAL(10,2) DEFAULT 30.00,
    ranking_posicao INT,
    foto_perfil VARCHAR(255),
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (equipe_id) REFERENCES equipes(id)
);

-- =====================================================
-- 5. TABELA: doacoes
-- =====================================================
CREATE TABLE doacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT NOT NULL,
    campanha_id INT NOT NULL,
    equipe_id INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    tipo_doacao ENUM('dinheiro', 'alimentos', 'roupas', 'outros') DEFAULT 'dinheiro',
    descricao TEXT,
    data_doacao DATE NOT NULL,
    status ENUM('confirmada', 'pendente', 'cancelada') DEFAULT 'pendente',
    comprovante VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (campanha_id) REFERENCES campanhas(id),
    FOREIGN KEY (equipe_id) REFERENCES equipes(id)
);

-- =====================================================
-- 6. TABELA: noticias
-- =====================================================
CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    conteudo TEXT NOT NULL,
    autor_mentor_id INT,
    campanha_id INT,
    imagem VARCHAR(255),
    publicada BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (autor_mentor_id) REFERENCES mentores(id),
    FOREIGN KEY (campanha_id) REFERENCES campanhas(id)
);

-- =====================================================
-- 7. TABELA: atividades_mentoria
-- =====================================================
CREATE TABLE atividades_mentoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mentor_id INT NOT NULL,
    aluno_id INT,
    equipe_id INT,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    tipo ENUM('sessao_individual', 'planejamento_grupo', 'reuniao_equipe', 'avaliacao') NOT NULL,
    data_atividade DATETIME NOT NULL,
    duracao_minutos INT DEFAULT 60,
    status ENUM('agendada', 'realizada', 'cancelada') DEFAULT 'agendada',
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (mentor_id) REFERENCES mentores(id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (equipe_id) REFERENCES equipes(id)
);

-- =====================================================
-- 8. TABELA: mensagens
-- =====================================================
CREATE TABLE mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    remetente_mentor_id INT,
    destinatario_aluno_id INT,
    equipe_id INT,
    mensagem TEXT NOT NULL,
    lida BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (remetente_mentor_id) REFERENCES mentores(id),
    FOREIGN KEY (destinatario_aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (equipe_id) REFERENCES equipes(id)
);

-- =====================================================
-- INSERÇÃO DE DADOS
-- =====================================================

-- Campanhas
INSERT INTO campanhas (nome, descricao, meta_valor, valor_arrecadado, data_inicio, data_fim, ativa) VALUES 
('Campanha de Inverno', 'Arrecadação de alimentos e agasalhos', 200.00, 125.00, '2025-06-01', '2025-08-31', TRUE),
('Natal Solidário', 'Doações para crianças carentes', 300.00, 80.00, '2025-11-01', '2025-12-25', TRUE);

-- Mentores
INSERT INTO mentores (nome, email, senha, telefone, ativo) VALUES 
('Ricardo Mendes', 'ricardo@faculdade.edu', 'hash123', '(11) 98765-4321', TRUE),
('Juliana Costa', 'juliana@faculdade.edu', 'hash456', '(11) 91234-5678', TRUE);

-- Equipes
INSERT INTO equipes (nome, mentor_id, total_arrecadado, meta_equipe, cor_identificacao, ativa) VALUES 
('Equipe Alpha', 1, 120.00, 100.00, '#FFD700', TRUE),
('Equipe Beta', 1, 95.00, 100.00, '#C0C0C0', TRUE),
('Equipe Delta', 2, 80.00, 100.00, '#CD7F32', TRUE),
('Equipe Gama', 2, 60.00, 100.00, '#4169E1', TRUE),
('Equipe Omega', 2, 50.00, 100.00, '#32CD32', TRUE);

-- Alunos
INSERT INTO alunos (nome, email, senha, equipe_id, total_arrecadado, meta_individual, ranking_posicao, ativo) VALUES 
('Ana Oliveira', 'ana@faculdade.edu', 'hash789', 1, 32.00, 30.00, 1, TRUE),
('João Lima', 'joao@faculdade.edu', 'hash012', 1, 30.00, 30.00, 2, TRUE),
('Carla Mendes', 'carla@faculdade.edu', 'hash345', 2, 40.00, 30.00, 3, TRUE),
('Lucas Pereira', 'lucas@faculdade.edu', 'hash678', 3, 33.00, 30.00, 4, TRUE),
('Rafa Morais', 'rafa@faculdade.edu', 'hash901', 4, 30.00, 30.00, 5, TRUE);

-- Doações
INSERT INTO doacoes (aluno_id, campanha_id, equipe_id, valor, tipo_doacao, data_doacao, status) VALUES 
(1, 1, 1, 15.00, 'dinheiro', '2025-11-01', 'confirmada'),
(1, 1, 1, 17.00, 'alimentos', '2025-11-05', 'confirmada'),
(2, 1, 1, 30.00, 'dinheiro', '2025-11-02', 'confirmada'),
(3, 1, 2, 40.00, 'dinheiro', '2025-11-03', 'confirmada'),
(4, 1, 3, 33.00, 'roupas', '2025-11-04', 'confirmada'),
(5, 1, 4, 30.00, 'dinheiro', '2025-11-06', 'pendente');

-- Notícias
INSERT INTO noticias (titulo, conteudo, autor_mentor_id, campanha_id, publicada) VALUES 
('Nova campanha lançada!', 'Estamos iniciando a Campanha de Inverno. Participe!', 1, 1, TRUE),
('Resultados parciais', 'A Campanha de Inverno já arrecadou R$ 125,00. Parabéns!', 1, 1, TRUE),
('Equipe Alpha lidera!', 'A Equipe Alpha está em primeiro lugar com 120kg.', 2, 1, TRUE);

-- Atividades de Mentoria
INSERT INTO atividades_mentoria (mentor_id, aluno_id, titulo, tipo, data_atividade, status) VALUES 
(1, 1, 'Sessão de mentoria com Ana', 'sessao_individual', '2025-11-01 09:00:00', 'realizada'),
(1, NULL, 'Planejamento de grupo', 'planejamento_grupo', '2025-11-02 13:00:00', 'realizada');

-- Mensagens
INSERT INTO mensagens (remetente_mentor_id, destinatario_aluno_id, equipe_id, mensagem, lida) VALUES 
(1, NULL, 1, 'Olá equipe! Vamos nos esforçar para bater a meta!', TRUE),
(1, 1, NULL, 'Ana, parabéns pelo progresso!', FALSE);


