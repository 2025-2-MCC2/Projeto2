const express = require('express');
const router = express.Router();
const doacoesController = require('../controllers/DoacoesController');

// Rotas de doações
router.get('/doacoes', doacoesController.listarDoacoes);
router.post('/doacoes', doacoesController.criarDoacao);
router.put('/doacoes/:id/status', doacoesController.atualizarStatus);
router.get('/doacoes/doador/:email', doacoesController.buscarPorDoador);

// Rotas de campanhas
router.get('/campanhas', doacoesController.listarCampanhas);

module.exports = router;