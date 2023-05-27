const jwt = require("jsonwebtoken");
require("dotenv").config();

// Función para generar un token JWT
function generateToken() {
  const secretKey = process.env.JWT_SECRET_KEY; // Cambia esto por tu propia clave secreta
  const payload = { recovery: true }; // Puedes personalizar el payload según tus necesidades

  return jwt.sign(payload, secretKey);
}
module.exports = generateToken;
