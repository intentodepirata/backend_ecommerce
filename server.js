const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");

// Swagger

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce MYSQL API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./src/routes/*.js")}`],
};

// create express app
const app = express();
app.use(cors());

// Setup server port
const port = process.env.PORT || 8000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// Swagger route

app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

const authenticateToken = require("./middlewares/authenticateToken");

// Require usuario routes
const usuarioRoutes = require("./src/routes/usuario.routes");
// using as middleware
app.use("/api/v1/user", usuarioRoutes);

// Require producto routes
const productoRoutes = require("./src/routes/producto.routes");
// using as middleware
app.use("/api/v1/productos", productoRoutes);

const multerMiddleware = require("./src/controllers/multer.controller");

//Ruta para subida de imagenes
app.post(
  "/subir-imagen",
  multerMiddleware.upload.single("imagen"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).send("No se ha seleccionado ninguna imagen.");
    }

    res.send("Imagen subida exitosamente.");
  }
);

// Require pedido routes
const pedidoRoutes = require("./src/routes/pedido.routes");
// using as middleware with authentication
app.use("/api/v1/pedido", authenticateToken, pedidoRoutes);

// Require tarjeta routes
const tarjetaRoutes = require("./src/routes/tarjeta.routes");
// using as middleware with authentication
app.use("/api/v1/tarjeta", authenticateToken, tarjetaRoutes);

// Require marca routes
const marcaRoutes = require("./src/routes/marca.routes");
// using as middleware
app.use("/api/v1/marca", marcaRoutes);

// Require comentario routes
const comentarioRoutes = require("./src/routes/comentario.routes");
// using as middleware
app.use("/api/v1/comentario", comentarioRoutes);

// Require modelo routes
const modeloRoutes = require("./src/routes/modelo.routes");
// using as middleware s
app.use("/api/v1/modelo", modeloRoutes);

// Require modelo routes
const direccionRoutes = require("./src/routes/direccion.routes");
// using as middleware
app.use("/api/v1/direccion", authenticateToken, direccionRoutes);

// Require modelo routes
const pedido_productoRoutes = require("./src/routes/pedido_producto.routes");

// using as middleware
app.use("/api/v1/pedidoproducto", authenticateToken, pedido_productoRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
