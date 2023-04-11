const express = require('express')
const router = express.Router()
const comentarioController =   require('../controllers/comentario.controller');

// Traer todos los comentario
router.get('/', comentarioController.findAll);
// Crear nueva comentario
router.post('/', comentarioController.create);
// Buscar comentario por id de usuario
router.get('user/:id', comentarioController.findByUserId);
// Buscar comentario por id de producto
router.get('/producto/:id', comentarioController.findByProductJoinId);

// Buscar comentario por id de comentario
router.get('/id/:id', comentarioController.findById);

// Delete a comentario with id
router.delete('/:id', comentarioController.delete);
module.exports = router