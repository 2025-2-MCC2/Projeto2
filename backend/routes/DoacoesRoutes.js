import express from 'express';
import * as doacoesController from '../controllers/doacoesController.js';

const router = express.Router();

// Rotas de doações
router.get('/doacoes', doacoesController.listarDoacoes);
router.post('/doacoes', doacoesController.criarDoacao);
router.put('/doacoes/:id/status', doacoesController.atualizarStatus);
router.get('/doacoes/doador/:email', doacoesController.buscarPorDoador);

// Rotas de campanhas
router.get('/campanhas', doacoesController.listarCampanhas);

export default router;