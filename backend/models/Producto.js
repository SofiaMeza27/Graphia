const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  imagen: String, // URL o path de la imagen
  tipo: { type: String, required: true },    // Nuevo campo
  rating: { type: Number, default: 5 }       // Nuevo campo
});

module.exports = mongoose.model('Producto', ProductoSchema);