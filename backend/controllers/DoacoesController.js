const db = require('../database/connection');

// Listar todas as doações
exports.listarDoacoes = async (req, res) => {
    try {
        const [doacoes] = await db.query(
            'SELECT * FROM doacoes ORDER BY data_doacao DESC'
        );
        res.json(doacoes);
    } catch (error) {
        console.error('Erro ao listar doações:', error);
        res.status(500).json({ error: 'Erro ao listar doações' });
    }
};

// Criar nova doação
exports.criarDoacao = async (req, res) => {
    try {
        const { doador_nome, doador_email, valor, campanha } = req.body;
        
        const [result] = await db.query(
            'INSERT INTO doacoes (doador_nome, doador_email, valor, campanha) VALUES (?, ?, ?, ?)',
            [doador_nome, doador_email, valor, campanha]
        );
        
        res.status(201).json({ 
            message: 'Doação criada com sucesso!',
            id: result.insertId 
        });
    } catch (error) {
        console.error('Erro ao criar doação:', error);
        res.status(500).json({ error: 'Erro ao criar doação' });
    }
};

// Atualizar status da doação
exports.atualizarStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, mensagem_agradecimento } = req.body;
        
        await db.query(
            'UPDATE doacoes SET status = ?, mensagem_agradecimento = ? WHERE id = ?',
            [status, mensagem_agradecimento, id]
        );
        
        res.json({ message: 'Status atualizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar status:', error);
        res.status(500).json({ error: 'Erro ao atualizar status' });
    }
};

// Buscar doações por doador (email)
exports.buscarPorDoador = async (req, res) => {
    try {
        const { email } = req.params;
        const [doacoes] = await db.query(
            'SELECT * FROM doacoes WHERE doador_email = ? ORDER BY data_doacao DESC',
            [email]
        );
        res.json(doacoes);
    } catch (error) {
        console.error('Erro ao buscar doações:', error);
        res.status(500).json({ error: 'Erro ao buscar doações' });
    }
};

// Listar campanhas
exports.listarCampanhas = async (req, res) => {
    try {
        const [campanhas] = await db.query(
            'SELECT * FROM campanhas WHERE ativa = TRUE'
        );
        res.json(campanhas);
    } catch (error) {
        console.error('Erro ao listar campanhas:', error);
        res.status(500).json({ error: 'Erro ao listar campanhas' });
    }
};