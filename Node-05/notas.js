const express = require('express');
const router = express.Router();
const Nota = require('../models/notas');
const auth = require('../middleware/auth'); // importar middleware

router.get('/', auth, async (req, res) => {
  try {
    const notas = await Nota.find();
    res.status(200).json(notas);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar notas.' });
  }
});

module.exports = router;