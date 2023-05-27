"use strict";

const db = require("../../config/db.config");
const generateToken = require("../utilidades/generateToken");
const moment = require("moment");

//Usuario object create
const Usuario = function (usuario) {
  this.nombre = usuario.nombre;
  this.apellidos = usuario.apellidos;
  this.email = usuario.email ? usuario.email.toLowerCase() : usuario.email;
  this.password = usuario.password;
  this.token = usuario.token ? usuario.token : generateToken();
  this.reg_date = usuario.reg_date
    ? usuario.reg_date
    : moment().format("YYYY-MM-DD HH:mm:ss");
};

Usuario.register = function (newUser, result) {
  db.query("INSERT INTO usuarios set ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
// Usuario.findById = function (id, result) {
//   db.query("Select * from usuarios where id = ? ", id, function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     } else {
//       result(null, res);
//     }
//   });
// };
Usuario.findByEmail = function (email, result) {
  db.query(
    "Select * FROM usuarios WHERE email = ?",
    email,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res[0]);
      }
    }
  );
};
Usuario.findAll = function (result) {
  db.query("Select * from usuarios", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("usuarios : ", res);
      result(null, res);
    }
  });
};
Usuario.update = function (id, usuario, result) {
  db.query(
    "UPDATE usuarios SET nombre=?,apellidos=? WHERE id = ?",
    [usuario.nombre, usuario.apellidos, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Usuario.delete = function (id, result) {
  db.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Usuario;
