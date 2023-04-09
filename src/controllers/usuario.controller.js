// "use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const Usuario = require("../models/usuario.model");

exports.findAll = function (req, res) {
  Usuario.findAll(function (err, usuario) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", usuario);
    res.send(usuario);
  });
};

exports.register = function (req, res) {
  const new_usuario = new Usuario(req.body);

  //Comprobamos que no venga vacio
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else {
    // Comprobamos que el email no exista
    Usuario.findByEmail(new_usuario.email, function (err, result) {
      if (err) {
        console.log("error: ", err);
        res
          .status(500)
          .send({ error: true, message: "Error interno del servidor" });
      } else if (result) {
        res
          .status(409)
          .send({
            error: true,
            message: "El correo electrónico ya está en uso",
          });
      } else {
        // Hasheamos el password antes de guardarlo en la base de datos
        bcrypt.hash(new_usuario.password, saltRounds, function (err, hash) {
          if (err) {
            res
              .status(500)
              .send({ error: true, message: "Error interno del servidor" });
          } else {
            // seteamos el hash al password
            new_usuario.password = hash;

            //Usamos el metodo register del modelo Usuario y devolvemos el usuario al front
            Usuario.register(new_usuario, function (err, usuario) {
              if (err) {
                res
                  .status(500)
                  .send({ error: true, message: "Error interno del servidor" });
              } else {
                res.json({
                  error: false,
                  message: "Usuario creado Correctamente!",
                  data: usuario,
                });
              }
            });
          }
        });
      }
    });
  }
};

exports.login = function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({
        error: true,
        message: "Por favor ingrese su correo electrónico y contraseña",
      });
  }

  Usuario.findByEmail(email, function (err, usuario) {
    if (err) {
      return res
        .status(500)
        .send({
          error: true,
          message: "Ocurrió un error al buscar el usuario en la base de datos",
        });
    }

    if (!usuario) {
      return res
        .status(404)
        .send({
          error: true,
          message:
            "No se encontró el usuario con el correo electrónico proporcionado",
        });
    }

    bcrypt.compare(password, usuario.password, function (err, result) {
      if (err) {
        return res
          .status(500)
          .send({
            error: true,
            message: "Ocurrió un error al comparar las contraseñas",
          });
      }

      if (!result) {
        return res
          .status(401)
          .send({
            error: true,
            message: "La contraseña ingresada es incorrecta",
          });
      }

      const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "4h",
      });

      res.json({
        error: false,
        message: "Inicio de sesión exitoso",
        token,
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
          email: usuario.email,
          admin: usuario.admin,
        },
      });
    });
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else {
    Usuario.update(
      req.params.id,
      new usuario(req.body),
      function (err, usuario) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Usuario Actualizado Correctamente!",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  Usuario.delete(req.params.id, function (err, usuario) {
    if (err) res.send(err);
    res.json({ error: false, message: "Usuario Eliminado Correctamente" });
  });
};
