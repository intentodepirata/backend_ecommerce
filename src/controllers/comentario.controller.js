"use strict";
const Comentario = require("../models/comentario.model");


exports.create = function (req, res) {
  const new_comentario = new Comentario(req.body);
  //Comprobar null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else if(new_comentario.comentario == '' || new_comentario.rating == NaN || new_comentario.producto_id == NaN || new_comentario.usuario_id == NaN ){
    res
    .status(400)
    .send({ error: true, message: "Todos los campos son obligatorios" });

  }
  
  else {
    Comentario.create(new_comentario, function (err, comentario) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Comentario Agregada Correctamente!",
        data: comentario,
      });
    });
  }
};
exports.findAll = function (req, res) {
  Comentario.findAll(function (err, comentario) {
    if (err) res.send(err);
    res.json(comentario);
  });
};
exports.findByUserId = function (req, res) {
  Comentario.findByUserId(req.params.id, function (err, comentario) {
    if (err) res.send(err);
    res.json(comentario);
  });
};
exports.findByProductJoinId = function (req, res) {
  Comentario.findByProductJoinId(req.params.id, function (err, comentario) {
    if (err) res.send(err);
    res.json(comentario);
  });
};
exports.findById = function (req, res) {
    Comentario.findById(req.params.id, function (err, comentario) {
    if (err) res.send(err);
    res.json(comentario);
  });
};

exports.delete = function (req, res) {
  Comentario.delete(req.params.id, function (err, comentario) {
    if (err) res.send(err);
    res.json({ error: false, message: "Comentario Eliminada Correctamente" });
  });
};
