const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Modelo da nota com mongoose
const NotaSchema = new mongoose.Schema({
  cod: String,
  disciplina: String,
  professor: String,
  nota: Number
});

const Nota = mongoose.model('Nota', NotaSchema);

// GET: todas as notas
router.get('/notas', async (req, res) => {
  const notas = await Nota.find();
  res.json(notas);
});

// POST: adicionar nova nota
router.post('/notas', async (req, res) => {
  const { cod, disciplina, professor, nota } = req.body;

  if (!cod || !disciplina || !professor || nota == null) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  const existente = await Nota.findOne({ cod });
  if (existente) {
    return res.status(400).json({ erro: 'Já existe uma nota com esse código.' });
  }

  const novaNota = new Nota({ cod, disciplina, professor, nota });
  await novaNota.save();
  res.status(201).json(novaNota);
});

// PATCH: atualizar nota por código
router.patch('/notas/:cod', async (req, res) => {
  const cod = req.params.cod;
  const notaAtualizada = await Nota.findOneAndUpdate({ cod }, req.body, { new: true });

  if (!notaAtualizada) {
    return res.status(404).json({ erro: 'Nota não encontrada.' });
  }

  res.json(notaAtualizada);
});

// DELETE: remover nota por código
router.delete('/notas/:cod', async (req, res) => {
  const cod = req.params.cod;
  const removida = await Nota.findOneAndDelete({ cod });

  if (!removida) {
    return res.status(404).json({ erro: 'Nota não encontrada.' });
  }

  res.json(removida);
});

module.exports = router;
