const express = require('express')
const router = express.Router()
const direccionController =   require('../controllers/direccion.controller');

// Crear nueva direccion
router.post('/', direccionController.create);
// Buscar tarjetas por id de usuario
router.get('/:id', direccionController.findByUserId);

// Delete a producto with id
router.delete('/:id', direccionController.delete);
module.exports = router