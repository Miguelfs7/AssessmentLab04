const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routerNotas = require('./server'); // importa o router

const PORT = 3001;

// Middleware global para logging
app.use((req, res, next) => {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
});

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Middleware para interpretar JSON
app.use(express.json());

// Servir ficheiros estáticos da pasta public
app.use(express.static('public'));

// Ligação ao MongoDB Atlas
mongoose.connect('mongodb+srv://admin:1234@cluster0.fehz1w6.mongodb.net/notasDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Ligado ao MongoDB!'))
.catch((err) => console.error('Erro na ligação ao MongoDB:', err));

// Usar o router nas rotas /notas
app.use('/notas', routerNotas);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
