const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notaSchema = new Schema({
  codigoDisciplina: {
    type: Number,
    required: true,
    unique: true
  },
  nomeProfessor: {
    type: String,
    required: true
  },
  nomeDisciplina: {
    type: String,
    required: true
  },
  nota: {
    type: Number,
    required: true,
    min: [0, 'Nota não pode ser inferior a 0'],
    max: [20, 'Nota não pode ser superior a 20']
  }
}, { timestamps: true });

module.exports = mongoose.model('Nota', notaSchema);
