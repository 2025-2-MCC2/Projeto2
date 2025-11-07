import { db } from '../database/connection.js';

// Listar todas as doações
export const listarDoacoes = async (req, res) => {
    console.log('🔍 Tentando listar doações...');
    try {
        const [doacoes] = await db.query(
            'SELECT * FROM doacoes ORDER BY data_doacao DESC'
        );
        console.log('✅ Doações encontradas:', doacoes.length, 'registros');
        res.json(doacoes);
    } catch (error) {
        console.error('❌ Erro ao listar doações:', error);
        res.status(500).json({ error: 'Erro ao listar doações' });
    }
};

// Criar nova doação
export const criarDoacao = async (req, res) => {
    console.log('🔍 Tentando criar doação...');
    try {
        const { doador_nome, doador_email, valor, campanha } = req.body;
        
        const [result] = await db.query(
            'INSERT INTO doacoes (doador_nome, doador_email, valor, campanha) VALUES (?, ?, ?, ?)',
            [doador_nome, doador_email, valor, campanha]
        );
        
        console.log('✅ Doação criada com ID:', result.insertId);
        res.status(201).json({ 
            message: 'Doação criada com sucesso!',
            id: result.insertId 
        });
    } catch (error) {
        console.error('❌ Erro ao criar doação:', error);
        res.status(500).json({ error: 'Erro ao criar doação' });
    }
};

// Atualizar status da doação
export const atualizarStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, mensagem_agradecimento } = req.body;
        
        await db.query(
            'UPDATE doacoes SET status = ?, mensagem_agradecimento = ? WHERE id = ?',
            [status, mensagem_agradecimento, id]
        );
        
        res.json({ message: 'Status atualizado com sucesso!' });
    } catch (error) {
        console.error('❌ Erro ao atualizar status:', error);
        res.status(500).json({ error: 'Erro ao atualizar status' });
    }
};

// Buscar doações por doador (email)
export const buscarPorDoador = async (req, res) => {
    try {
        const { email } = req.params;
        const [doacoes] = await db.query(
            'SELECT * FROM doacoes WHERE doador_email = ? ORDER BY data_doacao DESC',
            [email]
        );
        res.json(doacoes);
    } catch (error) {
        console.error('❌ Erro ao buscar doações:', error);
        res.status(500).json({ error: 'Erro ao buscar doações' });
    }
};

// Listar campanhas
export const listarCampanhas = async (req, res) => {
    console.log('🔍 Tentando listar campanhas...');
    try {
        const [campanhas] = await db.query(
            'SELECT * FROM campanhas WHERE ativa = TRUE'
        );
        console.log('✅ Campanhas encontradas:', campanhas.length, 'registros');
        res.json(campanhas);
    } catch (error) {
        console.error('❌ ERRO ao listar campanhas:', error);
        res.status(500).json({ error: 'Erro ao listar campanhas' });
    }
};