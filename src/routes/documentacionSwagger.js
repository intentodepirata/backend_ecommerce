/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Retorna una lista de todos los usuarios.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error interno del servidor
 *
 */

/**
 * @swagger
 * api/v1/user/register:
 *  post:
 *     summary: Crear un nuevo usuario
 *     description: Crea un nuevo usuario y lo guarda en la base de datos.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsuarioResponse'
 *       400:
 *         description: Campos obligatorios faltantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 *       409:
 *         description: El correo electrónico ya está en uso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           example: John
 *         apellidos:
 *           type: string
 *           example: Doe
 *         email:
 *           type: string
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           example: password123
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9t...
 *         reg_date:
 *           type: string
 *           format: date-time
 *           example: 2023-05-19T12:34:56Z
 *     UsuarioResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: boolean
 *           default: false
 *         message:
 *           type: string
 *         data:
 *           $ref: '#/components/schemas/Usuario'
 */
/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Inicia sesión de un usuario con su correo electrónico y contraseña.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: correo@correo.com
 *               password:
 *                 type: string
 *                 example: 123456789
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Campos obligatorios faltantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 *       401:
 *         description: La contraseña ingresada es incorrecta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 *       404:
 *         description: No se encontró el usuario con el correo electrónico proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 */
/**
 * @swagger
 * /api/v1/user/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     description: Actualiza un usuario existente en la base de datos.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del usuario a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Campos obligatorios faltantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: boolean
 *           default: false
 *         message:
 *           type: string
 *     Usuario:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         apellidos:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     description: Elimina un usuario existente de la base de datos.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del usuario a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   default: true
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DeleteResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: boolean
 *           default: false
 *         message:
 *           type: string
 */
