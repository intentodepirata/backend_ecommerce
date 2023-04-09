const express = require('express')
const router = express.Router()
const tarjetaController =   require('../controllers/tarjeta.controller');

// Crear nueva tarjeta
router.post('/', tarjetaController.create);
// Buscar tarjetas por id de usuario
router.get('/:id', tarjetaController.findByUserId);

// Buscar tarjetas por id de usuario
router.get('/id/:id', tarjetaController.findById);

// Delete a producto with id
router.delete('/:id', tarjetaController.delete);
module.exports = router