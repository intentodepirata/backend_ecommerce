"use strict";
const Pedido = require("../models/pedido.model");
exports.findAll = function (req, res) {
  Pedido.findAll(function (err, pedido) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", pedido);
    res.send(pedido);
  });
};

exports.create = function (req, res) {
  const new_pedido = new Pedido(req.body);
  //Comprobar null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else if (new_pedido.total == '0.00' ||  !new_pedido.usuario_id || new_pedido.direccion_id === NaN || new_pedido.tarjeta_id === NaN){
    res
    .status(400)
    .send({ error: true, message: "Todos los campos son obligatorios" });
  }
  
  else {
    Pedido.create(new_pedido, function (err, pedido) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Pedido creado Correctamente!",
        data: pedido,
      });
    });

    
  }
};
exports.findById = function (req, res) {
  Pedido.findById(req.params.id, function (err, pedido) {
    if (err) res.send(err);
    res.json(pedido);
  });
};
exports.findByUserId = function (req, res) {
  Pedido.findByUserId(req.params.id, function (err, pedido) {
    if (err) res.send(err);
    res.json(pedido);
  });
};
exports.findByUserIdJoin = function (req, res) {
  Pedido.findByUserIdJoin(req.params.id, function (err, pedido) {
    if (err) res.send(err);
    res.json(pedido);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else {
    Pedido.update(req.params.id, new Pedido(req.body), function (err, pedido) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Pedido Actualizado Correctamente!",
      });
    });
  }
};
exports.delete = function (req, res) {
  Pedido.delete(req.params.id, function (err, pedido) {
    if (err) res.send(err);
    res.json({ error: false, message: "Pedido Eliminado Correctamente" });
  });
};
