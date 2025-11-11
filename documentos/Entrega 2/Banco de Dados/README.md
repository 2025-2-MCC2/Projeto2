<div align="center">

Fundação Escola de Comércio Álvares Penteado
---

### **Dashboard de Doações - Sistema Mentor/Aluno**


---

</div>
#  Dashboard de Doações - Sistema Mentor/Aluno

## Integrantes:


Ana Clara Keiko Ribeiro - RA: 25027421

Felipe Lazaro Mathey - RA: 25027786

Gustavo Miranda - RA: 25027968

Katie Prado de Godoy - RA: 25027230

Polianny Santos - RA: 25027877

Rafaela Florêncio Morais - RA: 25027460

---


## Informações do Projeto

**Instituição:** Centro Universitário Álvares Penteado  
**Disciplina:** Banco de Dados  


## 📋 Descrição do Projeto

Sistema desenvolvido para gerenciar e supervisionar doações realizadas por alunos da faculdade, com acompanhamento de mentores, ranking de equipes e controle completo de campanhas de arrecadação.

**Contexto:** Plataforma web para coordenar ações solidárias onde alunos organizam doações em equipes, supervisionados por mentores que acompanham o progresso e oferecem orientação.

---

## 🗂️ Estrutura do Banco de Dados

### **Diagrama de Relacionamentos**

```
mentores (1) ────< (N) equipes (1) ────< (N) alunos (1) ────< (N) doacoes
    │                                        │                      │
    │                                        │                      │
    └──< atividades_mentoria               └──< mensagens         └──> campanhas
    └──< noticias
```

---

## 📊 Tabelas do Sistema

### 1. **campanhas**
Gerencia as campanhas de arrecadação (ex: Campanha de Inverno, Natal Solidário)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, AUTO_INCREMENT) | Identificador único |
| `nome` | VARCHAR(100) UNIQUE | Nome da campanha |
| `descricao` | TEXT | Descrição detalhada |
| `meta_valor` | DECIMAL(10,2) | Valor objetivo |
| `valor_arrecadado` | DECIMAL(10,2) | Total arrecadado |
| `data_inicio` | DATE | Data de início |
| `data_fim` | DATE | Data de término |
| `ativa` | BOOLEAN | Status da campanha |
| `created_at` | TIMESTAMP | Data de criação |

**Chave Primária:** `id`

---

### 2. **mentores**
Cadastro dos mentores responsáveis por supervisionar as equipes

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, AUTO_INCREMENT) | Identificador único |
| `nome` | VARCHAR(100) | Nome completo |
| `email` | VARCHAR(150) UNIQUE | E-mail institucional |
| `senha` | VARCHAR(255) | Hash da senha |
| `telefone` | VARCHAR(20) | Telefone de contato |
| `foto_perfil` | VARCHAR(255) | Caminho da foto |
| `ativo` | BOOLEAN | Status ativo/inativo |
| `created_at` | TIMESTAMP | Data de cadastro |

**Chave Primária:** `id`

---

### 3. **equipes**
Equipes de arrecadação (Alpha, Beta, Delta, Gama, Omega)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, AUTO_INCREMENT) | Identificador único |
| `nome` | VARCHAR(100) UNIQUE | Nome da equipe |
| `mentor_id` | INT (FK) | Mentor responsável |
| `total_arrecadado` | DECIMAL(10,2) | Total arrecadado pela equipe |
| `meta_equipe` | DECIMAL(10,2) | Meta da equipe (padrão: 100kg) |
| `cor_identificacao` | VARCHAR(20) | Cor para UI (#FFD700, etc) |
| `ativa` | BOOLEAN | Status da equipe |
| `created_at` | TIMESTAMP | Data de criação |

**Chave Primária:** `id`  
**Chave Estrangeira:** `mentor_id` → `mentores(id)`

---

### 4. **alunos**
Cadastro dos alunos doadores

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, AUTO_INCREMENT) | Identificador único |
| `nome` | VARCHAR(100) | Nome completo |
| `email` | VARCHAR(150) UNIQUE | E-mail institucional |
| `senha` | VARCHAR(255) | Hash da senha |
| `equipe_id` | INT (FK) | Equipe do aluno |
| `total_arrecadado` | DECIMAL(10,2) | Total arrecadado individualmente |
| `meta_individual` | DECIMAL(10,2) | Meta pessoal (padrão: 30kg) |
| `ranking_posicao` | INT | Posição no ranking geral |
| `foto_perfil` | VARCHAR(255) | Caminho da foto |
| `ativo` | BOOLEAN | Status ativo/inativo |
| `created_at` | TIMESTAMP | Data de cadastro |

**Chave Primária:** `id`  
**Chave Estrangeira:** `equipe_id` → `equipes(id)`

---

### 5. **doacoes**
Registro de todas as doações realizadas

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, AUTO_INCREMENT) | Identificador único |
| `aluno_id` | INT (FK) | Aluno que fez a doação |
| `campanha_id` | INT (FK) | Campanha relacionada |
| `equipe_id` | INT (FK) | Equipe do aluno |
| `valor` | DECIMAL(10,2) | Valor ou peso da doação |
| `tipo_doacao` | ENUM | 'dinheiro', 'alimentos', 'roupas', 'outros' |
| `descricao` | TEXT | Descrição da doação |
| `data_doacao` | DATE | Data da doação |
| `status` | ENUM | 'confirmada', 'pendente', 'cancelada' |
| `comprovante` | VARCHAR(255) | Caminho do comprovante |
| `created_at` | TIMESTAMP | Data de registro |

**Chave Primária:** `id`  
**Chaves Estrangeiras:** 
- `aluno_id` → `alunos(id)`
- `campanha_id` → `campanhas(id)`
- `equipe_id` → `equipes(id)`

---

### 6. **noticias**
Notícias e atualizações sobre as campanhas

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, AUTO_INCREMENT) | Identificador único |
| `titulo` | VARCHAR(150) | Título da notícia |
| `conteudo` | TEXT | Conteúdo completo |
| `autor_mentor_id` | INT (FK) | Mentor autor |
| `campanha_id` | INT (FK) | Campanha relacionada |
| `imagem` | VARCHAR(255) | Caminho da imagem |
| `publicada` | BOOLEAN | Status de publicação |
| `created_at` | TIMESTAMP | Data de publicação |

**Chave Primária:** `id`  
**Chaves Estrangeiras:** 
- `autor_mentor_id` → `mentores(id)`
- `campanha_id` → `campanhas(id)`

---

### 7. **atividades_mentoria**
Registro de sessões e atividades de mentoria

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, AUTO_INCREMENT) | Identificador único |
| `mentor_id` | INT (FK) | Mentor responsável |
| `aluno_id` | INT (FK) | Aluno (se individual) |
| `equipe_id` | INT (FK) | Equipe (se em grupo) |
| `titulo` | VARCHAR(150) | Título da atividade |
| `descricao` | TEXT | Descrição detalhada |
| `tipo` | ENUM | 'sessao_individual', 'planejamento_grupo', 'reuniao_equipe', 'avaliacao' |
| `data_atividade` | DATETIME | Data e hora |
| `duracao_minutos` | INT | Duração (padrão: 60min) |
| `status` | ENUM | 'agendada', 'realizada', 'cancelada' |
| `observacoes` | TEXT | Observações do mentor |
| `created_at` | TIMESTAMP | Data de registro |

**Chave Primária:** `id`  
**Chaves Estrangeiras:** 
- `mentor_id` → `mentores(id)`
- `aluno_id` → `alunos(id)` (opcional)
- `equipe_id` → `equipes(id)` (opcional)

---

### 8. **mensagens**
Sistema de chat entre mentores e alunos/equipes

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, AUTO_INCREMENT) | Identificador único |
| `remetente_mentor_id` | INT (FK) | Mentor que enviou |
| `destinatario_aluno_id` | INT (FK) | Aluno destinatário (se individual) |
| `equipe_id` | INT (FK) | Equipe destinatária (se grupo) |
| `mensagem` | TEXT | Conteúdo da mensagem |
| `lida` | BOOLEAN | Status de leitura |
| `created_at` | TIMESTAMP | Data/hora do envio |

**Chave Primária:** `id`  
**Chaves Estrangeiras:** 
- `remetente_mentor_id` → `mentores(id)`
- `destinatario_aluno_id` → `alunos(id)` (opcional)
- `equipe_id` → `equipes(id)` (opcional)

---

## 🔗 Relacionamentos entre Tabelas

### **Hierarquia Principal:**
```
mentores
    └── equipes (1:N)
            └── alunos (1:N)
                    └── doacoes (1:N)
                            └── campanhas (N:1)
```

### **Relacionamentos Adicionais:**
- **mentores → atividades_mentoria** (1:N) - Um mentor pode ter várias atividades
- **mentores → mensagens** (1:N) - Um mentor pode enviar várias mensagens
- **mentores → noticias** (1:N) - Um mentor pode publicar várias notícias
- **alunos → mensagens** (1:N) - Um aluno pode receber várias mensagens
- **equipes → mensagens** (1:N) - Uma equipe pode receber mensagens coletivas

---

## 📊 Dados de Exemplo Inseridos

### **Campanhas:**
1. Campanha de Inverno (Meta: R$ 200,00 | Arrecadado: R$ 125,00)
2. Natal Solidário (Meta: R$ 300,00 | Arrecadado: R$ 80,00)



### **Equipes:**
1. Equipe Alpha - 120kg (Líder)
2. Equipe Beta - 95kg
3. Equipe Delta - 80kg
4. Equipe Gama - 60kg
5. Equipe Omega - 50kg

### **Alunos:**
1. Ana Oliveira - 32kg (1º lugar individual)
2. João Lima - 30kg (2º lugar)
3. Carla Mendes - 40kg (3º lugar)
4. Lucas Pereira - 33kg (4º lugar)
5. Rafa Morais - 30kg (5º lugar)

### **Doações:**
- 6 doações registradas (5 confirmadas, 1 pendente)
- Tipos: dinheiro, alimentos, roupas

---



---

## 🚀 Como Usar Este Banco de Dados

### **1. Executar o Script no MySQL Workbench**

```bash
1. Abra o MySQL Workbench
2. Conecte-se ao servidor MySQL
3. Abra o arquivo criar_tabelas.sql
4. Execute todo o script  do Schema.sql (Ctrl + Shift + Enter)

```


---


### **Stored Procedures:**
1. Procedimento para confirmar múltiplas doações em lote
2. Função para gerar relatório mensal de arrecadação
3. Procedimento para calcular ranking dinâmico



---


