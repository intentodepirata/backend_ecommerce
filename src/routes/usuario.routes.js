const express = require('express')
const router = express.Router()
const usuarioController =   require('../controllers/usuario.controller');

// Mostrar todos los  usuarios
router.get('/', usuarioController.findAll);
// Crear un nuevo usuario
router.post('/register', usuarioController.register);

//Hacer un login
router.post('/login', usuarioController.login);

// Actualizar un usuario por su id
router.put('/:id', usuarioController.update);
// Borrar un usuario por su id
router.delete('/:id', usuarioController.delete);
module.exports = router