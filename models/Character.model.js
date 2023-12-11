const mongoose = require('mongoose');

const nombreSchema = new mongoose.Schema({
  nombre: String,
  
});

const Nombre = mongoose.model('Nombre', nombreSchema);

module.exports = Nombre;