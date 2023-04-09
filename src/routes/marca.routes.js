const express = require('express')
const router = express.Router()
const marcaController =   require('../controllers/marca.controller');
// Retrieve all marcas
router.get('/', marcaController.findAll);
// Create a new marca
router.post('/', marcaController.create);
// Retrieve a single marca with id
router.get('/:id', marcaController.findById);

// Update a marca with id
router.put('/:id', marcaController.update);
// Delete a marca with id
router.delete('/:id', marcaController.delete);
module.exports = router