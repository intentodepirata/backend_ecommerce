const express = require('express')
const router = express.Router()
const pedidoController =   require('../controllers/pedido.controller');
// Retrieve all productos
router.get('/', pedidoController.findAll);
// Create a new producto
router.post('/', pedidoController.create);
// Retrieve a single producto with id
router.get('/:id', pedidoController.findById);
// Retrieve a single producto with id
router.get('/user/:id', pedidoController.findByUserId);
// Retrieve a single producto with id
router.get('/userjoin/:id', pedidoController.findByUserIdJoin);

// Update a producto with id
router.put('/:id', pedidoController.update);
// Delete a producto with id
router.delete('/:id', pedidoController.delete);
module.exports = router