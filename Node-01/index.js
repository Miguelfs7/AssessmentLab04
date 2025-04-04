// Importa o Express
const express = require('express');
const app = express();

// Permite receber JSON no body dos pedidos
app.use(express.json());

// Declaração do array de notas
let minhas_notas = [20, 10, 15, 17];

// GET - Raiz: devolve todas as notas
app.get('/', (req, res) => {
    res.status(200).json(minhas_notas);
});

// GET - Com índice: devolve nota específica
app.get('/:index', (req, res) => {
    const idx = parseInt(req.params.index);
    if (idx >= 0 && idx < minhas_notas.length) {
        res.status(200).json(minhas_notas[idx]);
    } else {
        res.status(400).send('Índice inválido.');
    }
});

// POST - Adiciona nota a partir do corpo (body)
app.post('/', (req, res) => {
    const nota = parseInt(req.body.valor);
    if (!isNaN(nota)) {
        minhas_notas.push(nota);
        res.status(200).send('Nota adicionada.');
    } else {
        res.status(400).send('Valor inválido.');
    }
});

// POST - Adiciona nota a partir do parâmetro
app.post('/:valor', (req, res) => {
    const nota = parseInt(req.params.valor);
    if (!isNaN(nota)) {
        minhas_notas.push(nota);
        res.status(200).send('Nota adicionada.');
    } else {
        res.status(400).send('Valor inválido.');
    }
});

// PATCH - Atualiza nota na posição indicada
app.patch('/:index', (req, res) => {
    const idx = parseInt(req.params.index);
    const novo_valor = parseInt(req.body.valor);
    if (idx >= 0 && idx < minhas_notas.length && !isNaN(novo_valor)) {
        minhas_notas[idx] = novo_valor;
        res.status(200).send('Nota atualizada.');
    } else {
        res.status(400).send('Erro ao atualizar.');
    }
});

// DELETE - Apaga uma nota por índice
app.delete('/:index', (req, res) => {
    const idx = parseInt(req.params.index);
    if (idx >= 0 && idx < minhas_notas.length) {
        minhas_notas.splice(idx, 1);
        res.status(200).send('Nota removida.');
    } else {
        res.status(400).send('Índice inválido.');
    }
});

// DELETE - Remove todas as notas
app.delete('/', (req, res) => {
    minhas_notas = [];
    res.status(200).send('Todas as notas foram removidas.');
});

// Inicializa o servidor
app.listen(3000, () => {
    console.log('App MinhasNotas - Feito por Miguel');
});
