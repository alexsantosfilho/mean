var mongoose = require('mongoose');

var DinheiroSchema = new mongoose.Schema({
  valorimovel: String,
  Percentualentrada: String,
  taxafinanciamento: String,
  quantidadeparcelas: String,
  valorEntrada: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Dinheiro', DinheiroSchema);
