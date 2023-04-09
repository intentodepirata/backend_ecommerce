"use strict";
const Pedido_producto = require("../models/pedido_producto.model");
// exports.findAll = function (req, res) {
//     Pedido_producto.findAll(function (err, pedido) {
//     console.log("controller");
//     if (err) res.send(err);
//     console.log("res", pedido);
//     res.send(pedido);
//   });
// };

exports.create = function (req, res) {
  const new_pedido_producto = new Pedido_producto(req.body);
  //Comprobar null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } 
  else {
    Pedido_producto.create(new_pedido_producto, function (err, pedido_producto) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Pedido creado Correctamente!",
        data: pedido_producto,
      });
    });

    
  }
};
// exports.findById = function (req, res) {
//   Pedido.findById(req.params.id, function (err, pedido) {
//     if (err) res.send(err);
//     res.json(pedido);
//   });
// };

// exports.update = function (req, res) {
//   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//     res
//       .status(400)
//       .send({ error: true, message: "Todos los campos son obligatorios" });
//   } else {
//     Pedido.update(req.params.id, new Pedido(req.body), function (err, pedido) {
//       if (err) res.send(err);
//       res.json({
//         error: false,
//         message: "Pedido Actualizado Correctamente!",
//       });
//     });
//   }
// };
// exports.delete = function (req, res) {
//   Pedido.delete(req.params.id, function (err, pedido) {
//     if (err) res.send(err);
//     res.json({ error: false, message: "Pedido Eliminado Correctamente" });
//   });
// };
