const express = require('express');
const router = express.Router();
const Nota = require('./models/notas'); // Importar o modelo Nota

// Middleware para logar tipo de pedido e data/hora no router também
router.use((req, res, next) => {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
});

// Criar Nota
router.post('/', async (req, res) => {
  const { codigoDisciplina, nomeProfessor, nomeDisciplina, nota } = req.body;

  // Validação simples dos dados recebidos
  if (typeof codigoDisciplina !== 'number' || typeof nomeProfessor !== 'string' || 
      typeof nomeDisciplina !== 'string' || typeof nota !== 'number' || nota < 0 || nota > 20) {
    return res.status(400).json({ mensagem: 'Dados inválidos: verifique os campos obrigatórios.' });
  }

  try {
    const novaNota = new Nota(req.body);
    await novaNota.save();
    res.status(201).json(novaNota);
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
});

// Listar todas as Notas
router.get('/', async (req, res) => {
  try {
    const notas = await Nota.find();
    res.status(200).json(notas);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro interno ao listar notas.' });
  }
});

// Obter Nota por ID
router.get('/:id', async (req, res) => {
  try {
    const nota = await Nota.findById(req.params.id);
    if (!nota) return res.status(404).json({ mensagem: 'Nota não encontrada' });
    res.status(200).json(nota);
  } catch (err) {
    res.status(400).json({ mensagem: 'ID inválido' });
  }
});

// Atualizar Nota
router.patch('/:id', async (req, res) => {
  try {
    const notaAtualizada = await Nota.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!notaAtualizada) return res.status(404).json({ mensagem: 'Nota não encontrada' });
    res.status(200).json(notaAtualizada);
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
});

// Apagar Nota
router.delete('/:id', async (req, res) => {
  try {
    const notaApagada = await Nota.findByIdAndDelete(req.params.id);
    if (!notaApagada) return res.status(404).json({ mensagem: 'Nota não encontrada' });
    res.status(200).json({ mensagem: 'Nota apagada com sucesso' });
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
});

module.exports = router;
