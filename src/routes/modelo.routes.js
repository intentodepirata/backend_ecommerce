const express = require('express')
const router = express.Router()
const modeloController =   require('../controllers/modelo.controller');
// Retrieve all marcas
router.get('/', modeloController.findAll);
// Create a new marca
router.post('/', modeloController.create);
// Retrieve a single marca with id
router.get('/:id', modeloController.findById);
// Retrieve a single marca with id
router.get('/marca/:id', modeloController.finByIdWhithModel);

// Update a marca with id
router.put('/:id', modeloController.update);
// Delete a marca with id
router.delete('/:id', modeloController.delete);
module.exports = router