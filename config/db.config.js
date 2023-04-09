const mysql = require("mysql2");
// const cors = require('cors');
require('dotenv').config();


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect((error) => {
    if (error) throw error;
    console.log("Conexion establecida con DataBase");
  });
module.exports = db