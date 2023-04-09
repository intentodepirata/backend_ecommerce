const express = require('express')
const router = express.Router()
const pedido_productoController =   require('../controllers/pedido_producto.controller');
// Retrieve all productos
// router.get('/', pedido_productoController.findAll);
// Create a new producto
router.post('/', pedido_productoController.create);
// // Retrieve a single producto with id
// router.get('/:id', pedido_productoController.findById);

// // Update a producto with id
// router.put('/:id', pedido_productoController.update);
// // Delete a producto with id
// router.delete('/:id', pedido_productoController.delete);
module.exports = router