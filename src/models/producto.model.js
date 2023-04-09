"use strict";
const db = require("../../config/db.config");
//Usuario object create
const Producto = function (producto) {
  this.nombre = producto.nombre;
  this.descripcion = producto.descripcion;
  this.precio = parseInt(producto.precio);
  this.imagen = producto.imagen;
  this.categoria_id = producto.categoria_id;
  this.cantidad = parseInt(producto.cantidad);
  this.rating = parseInt(producto.rating);
  this.referencia = producto.referencia;
  this.modelos_id = producto.modelos_id;
};

Producto.create = function (newProducto, result) {
  db.query("INSERT INTO productos set ?", newProducto, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Producto.findById = function (id, result) {
  db.query("Select * from productos where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Producto.findByCategoria = function (id, result) {
  db.query("Select * from productos where categoria_id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Producto.findAll = function (result) {
  db.query("Select * from productos", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("usuarios : ", res);
      result(null, res);
    }
  });
};
Producto.update = function (id, producto, result) {
  db.query(
    "UPDATE productos SET ,nombre=?,descripcion=? ,precio=?,imagen=?,categoria_id=?,cantidad=?,rating=?,referencia=?,modelos_id=? WHERE id = ?",
    [
      producto.nombre,
      producto.descripcion,
      producto.precio,
      producto.imagen,
      producto.categoria_id,
      producto.cantidad,
      producto.rating,
      producto.referencia,
      producto.modelos_id,
      id,
    ],
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
Producto.delete = function (id, result) {
  db.query("DELETE FROM productos WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Producto;
