import express from 'express';

const router = express.Router();

// Exemplo de endpoints básicos para campanhas
router.get('/', async (req, res) => {
  // retornar lista de campanhas (implementação real usará DB)
  res.json({ message: 'GET /api/campanhas — implemente consulta ao DB' });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({ message: `GET /api/campanhas/${id} — implemente consulta ao DB` });
});

router.post('/', async (req, res) => {
  // criar nova campanha
  res.status(201).json({ message: 'POST /api/campanhas — implemente criação' });
});

export default router;
