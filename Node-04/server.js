const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // <= Usa o ficheiro .env

const consumoRouter = require('./routes/consumo');
const notasRouter = require('./routes/notas');

const app = express();
const PORT = 3001;

// Middleware para logging
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use('/api/consumo', consumoRouter);
app.use('/api/notas', notasRouter);

// Ligação à base de dados MongoDB Atlas
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Ligado ao MongoDB Atlas!'))
  .catch(err => console.error('Erro ao ligar ao MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
