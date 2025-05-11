const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const consumoRouter = require('./routes/consumo');
const notasRouter = require('./routes/notas');
const authRouter = require('./routes/auth');

const app = express();
const PORT = 3001;

// Logger simples
app.use((req, res, next) => {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
});

// Middleware para ler JSON
app.use(express.json());

// Routers da app
app.use('/api/consumo', consumoRouter);
app.use('/api/notas', notasRouter); // protegido com JWT no próprio router
app.use('/api/auth', authRouter);

// Conectar à base de dados MongoDB Atlas
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Ligado ao MongoDB!'))
  .catch(err => console.error('Erro na ligação ao MongoDB:', err));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
