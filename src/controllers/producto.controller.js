"use strict";
const Producto = require("../models/producto.model");
exports.findAll = function (req, res) {
  Producto.findAll(function (err, producto) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", producto);
    res.send(producto);
  });
};
exports.create = function (req, res) {
 
  const new_producto = new Producto(req.body);
  //Comprobar null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else if
     (new_producto.nombre === "" || new_producto.descripcion ==="" || new_producto.precio === NaN || new_producto.imagen === "" || new_producto.categoria_id === "" || new_producto.cantidad === NaN || new_producto.rating === NaN|| new_producto.referencia === "" || new_producto.modelos_id === "" ) {
      res.status(400).send({ error: true, message: "Todos los campos son obligatorios" });
    } else {
    Producto.create(new_producto, function (err, producto) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Producto creado Correctamente!",
        data: producto,
      });
    });
  }
};
exports.findById = function (req, res) {
  Producto.findById(req.params.id, function (err, producto) {
    if (err) res.send(err);
    res.json(producto);
  });
};
exports.findByCategoria = function (req, res) {
  Producto.findByCategoria(req.params.id, function (err, producto) {
    if (err) res.send(err);
    res.json(producto);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else {
    Producto.update(
      req.params.id,
      new producto(req.body),
      function (err, producto) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Producto Actualizado Correctamente!",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  Producto.delete(req.params.id, function (err, producto) {
    if (err) res.send(err);
    res.json({ error: false, message: "Producto Eliminado Correctamente" });
  });
};
