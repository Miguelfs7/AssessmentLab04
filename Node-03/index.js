const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const notasRouter = require('./controllers/notas');

app.use(express.json());
app.use('/', notasRouter);

// Liga ao MongoDB Atlas
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Ligado ao MongoDB Atlas!');
    app.listen(3000, () => {
      console.log('App MinhasNotas - MongoDB em funcionamento');
    });
  })
  .catch(err => {
    console.error('Erro ao ligar ao MongoDB:', err);
  });
