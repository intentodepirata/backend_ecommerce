"use strict";
const Direccion = require("../models/direccion.model");


exports.create = function (req, res) {
  const new_direccion = new Direccion(req.body);
  //Comprobar null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else if(new_direccion.usuario_id == ""|| new_direccion.telefono == "" || new_direccion.calle =="" || new_direccion.numero == "" || new_direccion.ciudad == "" || new_direccion.provincia == "" || new_direccion.codigo_postal == "" || new_direccion.pais == "" || new_direccion.nombre == "" || new_direccion.apellidos == "" || new_direccion.extra == "" || new_direccion.email == ""){
    res
    .status(400)
    .send({ error: true, message: "Todos los campos son obligatorios" });
  }
  
  else {
    Direccion.create(new_direccion, function (err, direccion) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Direccion Agregada Correctamente!",
        data: direccion,
      });
    });
  }
};
exports.findByUserId = function (req, res) {
  Direccion.findByUserId(req.params.id, function (err, direccion) {
    if (err) res.send(err);
    res.json(direccion);
  });
};

// exports.update = function (req, res) {
//   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//     res
//       .status(400)
//       .send({ error: true, message: "Todos los campos son obligatorios" });
//   } else {
//     Pedido.update(req.params.id, new pedido(req.body), function (err, pedido) {
//       if (err) res.send(err);
//       res.json({
//         error: false,
//         message: "Pedido Actualizado Correctamente!",
//       });
//     });
//   }
// };
exports.delete = function (req, res) {
  Direccion.delete(req.params.id, function (err, direccion) {
    if (err) res.send(err);
    res.json({ error: false, message: "Direccion Eliminada Correctamente" });
  });
};
