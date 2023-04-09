const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// create express app
const app = express();
app.use(cors());

// Setup server port
const port = process.env.PORT || 8000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require usuario routes
const usuarioRoutes = require('./src/routes/usuario.routes')
// using as middleware
app.use('/api/v1/user', usuarioRoutes)

// Require producto routes
const productoRoutes = require('./src/routes/producto.routes')
// using as middleware
app.use('/api/v1/productos', productoRoutes)

const multerMiddleware = require('./src/controllers/multer.controller');

//Ruta para subida de imagenes
app.post('/subir-imagen', multerMiddleware.upload.single('imagen'), function(req, res) {
  // código para manejar la subida de la imagen
});

// Require pedido routes
const pedidoRoutes = require('./src/routes/pedido.routes')
// using as middleware with authentication
app.use('/api/v1/pedido', authenticateToken, pedidoRoutes);

// Require tarjeta routes
const tarjetaRoutes = require('./src/routes/tarjeta.routes')
// using as middleware with authentication
app.use('/api/v1/tarjeta', authenticateToken, tarjetaRoutes);

// Require marca routes
const marcaRoutes = require('./src/routes/marca.routes')
// using as middleware 
app.use('/api/v1/marca', marcaRoutes);

// Require modelo routes
const modeloRoutes = require('./src/routes/modelo.routes')
// using as middleware s
app.use('/api/v1/modelo', modeloRoutes);

// Require modelo routes
const direccionRoutes = require('./src/routes/direccion.routes')
// using as middleware 
app.use('/api/v1/direccion',authenticateToken, direccionRoutes);

// Require modelo routes
const pedido_productoRoutes = require('./src/routes/pedido_producto.routes')
// using as middleware 
app.use('/api/v1/pedidoproducto',authenticateToken, pedido_productoRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



// middleware para autenticar JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
