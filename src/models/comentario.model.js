"use strict";
const db = require("../../config/db.config");


//Usuario object create
const Comentario = function (comentario) {
  this.comentario = comentario.comentario;
  this.rating = parseInt(comentario.rating);
  this.producto_id = parseInt(comentario.producto_id);
  this.usuario_id = parseInt(comentario.usuario_id);



};

Comentario.create = function (newComentario, result) {
  db.query("INSERT INTO comentarios set ?", newComentario, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Comentario.findAll = function (result) {
    db.query("SELECT comentarios.id, comentarios.comentario, comentarios.rating, comentarios.producto_id, comentarios.usuario_id, usuarios.nombre, usuarios.apellidos FROM comentarios JOIN usuarios ON comentarios.usuario_id = usuarios.id ", function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
      } else {
        console.log("comentarios: ", res);
        result(null, res);
      }
    });
  };
Comentario.findByUserId = function (usuario_id, result) {
  db.query("Select * from comentarios where usuario_id = ? ", usuario_id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Comentario.findByProductJoinId = function (producto_id, result) {
  db.query("SELECT comentarios.id, comentarios.comentario, comentarios.rating, comentarios.producto_id, comentarios.usuario_id, usuarios.nombre, usuarios.apellidos FROM comentarios JOIN usuarios ON comentarios.usuario_id = usuarios.id WHERE comentarios.producto_id = ?; ", producto_id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Comentario.findById = function (id, result) {
  db.query("Select * from comentarios where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


Comentario.delete = function (id, result) {
  db.query("DELETE FROM comentarios WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Comentario;
