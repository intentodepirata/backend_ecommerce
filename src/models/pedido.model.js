"use strict";
const db = require("../../config/db.config");
const { formatearFecha, fechaHora, fechaHoraCortisima } = require('../utilidades/herramientas');

const fecha = formatearFecha(new Date(), fechaHoraCortisima);
// Usuario object create
const Pedido = function (pedido) {
  this.usuario_id = parseInt(pedido.usuario_id);
   this.fecha = fecha;
  this.total =parseFloat(pedido.total).toFixed(2);
  this.direccion_id = parseInt(pedido.direccion_id);
  this.tarjeta_id = parseInt(pedido.tarjeta_id);
   this.impuestos = 0.21;

};



Pedido.create = function (newPedido, result) {
  db.query("INSERT INTO pedidos set ?", newPedido, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Pedido.findById = function (id, result) {
  db.query("Select * from pedidos where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Pedido.findByUserId = function (id, result) {
  db.query("Select * from pedidos where usuario_id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Pedido.findByUserIdJoin = function (id, result) {
  db.query("SELECT pedidos.id, pedidos.usuario_id, pedidos.fecha, pedidos.total, pedidos.tarjeta_id, pedidos.impuestos, pedidos_productos.pedido_id, pedidos_productos.producto_id, productos.nombre AS nombre_producto,  productos.imagen, pedidos_productos.cantidad, pedidos_productos.precio_producto,  direcciones.telefono, direcciones.calle, direcciones.numero, direcciones.ciudad, direcciones.provincia, direcciones.codigo_postal, direcciones.pais, direcciones.nombre, direcciones.apellidos, direcciones.extra, direcciones.email FROM pedidos INNER JOIN pedidos_productos ON pedidos.id = pedidos_productos.pedido_id INNER JOIN direcciones ON pedidos.direccion_id = direcciones.id INNER JOIN productos ON pedidos_productos.producto_id = productos.id WHERE pedidos.id = ? ;", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Pedido.findAll = function (result) {
  db.query("Select * from pedidos", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("usuarios : ", res);
      result(null, res);
    }
  });
};


Pedido.update = function (id, pedido, result) {
  db.query(
    "UPDATE pedidos SET ,usuario_id=?,fecha=? ,total=?,direccion_id=?,tarjeta_id=?,impuestos=? WHERE id = ?",
    [
      pedido.usuario_id,
      pedido.fecha,
      pedido.total,
      pedido.direccion_id,
      pedido.tarjeta_id,
      pedido.impuestos,
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
Pedido.delete = function (id, result) {
  db.query("DELETE FROM pedidos WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Pedido;
