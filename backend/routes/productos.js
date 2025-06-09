const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.getProductos);
router.post('/', productosController.createProducto);
// Puedes agregar PUT, DELETE, etc.

module.exports = router;