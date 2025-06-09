const Producto = require('../models/Producto');

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ msg: 'Error al obtener productos' });
  }
};

// Crear un producto nuevo
exports.createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen } = req.body;
    const nuevoProducto = new Producto({ nombre, descripcion, precio, imagen });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ msg: 'Error al crear producto' });
  }
};