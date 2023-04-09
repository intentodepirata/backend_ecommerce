"use strict";
const Tarjeta = require("../models/tarjeta.model");


exports.create = function (req, res) {
  const new_tarjeta = new Tarjeta(req.body);
  //Comprobar null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else if(new_tarjeta.usuario_id == NaN || new_tarjeta.numero == NaN || new_tarjeta.nombre_en_tarjeta == "" || new_tarjeta.vencimiento_mes == NaN || new_tarjeta.vencimiento_anio == NaN || new_tarjeta.cvv == NaN || new_tarjeta.tipo ==""){
    res
    .status(400)
    .send({ error: true, message: "Todos los campos son obligatorios" });

  }
  
  else {
    Tarjeta.create(new_tarjeta, function (err, tarjeta) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Tarjeta Agregada Correctamente!",
        data: tarjeta,
      });
    });
  }
};
exports.findByUserId = function (req, res) {
  Tarjeta.findByUserId(req.params.id, function (err, tarjeta) {
    if (err) res.send(err);
    res.json(tarjeta);
  });
};
exports.findById = function (req, res) {
  Tarjeta.findById(req.params.id, function (err, tarjeta) {
    if (err) res.send(err);
    res.json(tarjeta);
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
  Tarjeta.delete(req.params.id, function (err, pedido) {
    if (err) res.send(err);
    res.json({ error: false, message: "Tarjeta Eliminada Correctamente" });
  });
};
