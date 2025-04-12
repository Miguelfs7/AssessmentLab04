const express = require('express');
const router = express.Router();
const Nota = require('../models/notas'); // Importa o model

// GET - listar todas as notas
router.get('/', async (req, res) => {
  try {
    const notas = await Nota.find();
    res.status(200).json(notas);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar notas.' });
  }
});

// POST - criar nova nota
router.post('/', async (req, res) => {
  try {
    const novaNota = new Nota(req.body);
    await novaNota.save();
    res.status(201).json(novaNota);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ erro: 'Erro de validação', detalhes: err.errors });
    } else {
      res.status(500).json({ erro: 'Erro ao criar nota' });
    }
  }
});

// PATCH - atualizar nota por código
router.patch('/:codigoDisciplina', async (req, res) => {
  try {
    const notaAtualizada = await Nota.findOneAndUpdate(
      { codigoDisciplina: req.params.codigoDisciplina },
      req.body,
      { new: true, runValidators: true }
    );

    if (!notaAtualizada) {
      return res.status(404).json({ erro: 'Nota não encontrada' });
    }

    res.json(notaAtualizada);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao atualizar nota', detalhes: err });
  }
});

// DELETE - apagar nota por código
router.delete('/:codigoDisciplina', async (req, res) => {
  try {
    const removida = await Nota.findOneAndDelete({ codigoDisciplina: req.params.codigoDisciplina });

    if (!removida) {
      return res.status(404).json({ erro: 'Nota não encontrada' });
    }

    res.json(removida);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao apagar nota' });
  }
});

module.exports = router;
