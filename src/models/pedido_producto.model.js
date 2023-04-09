"use strict";
const db = require("../../config/db.config");



// Usuario object create
const Pedido_producto = function (pedido_producto) {
  this.pedido_id = parseInt(pedido_producto.pedido_id);
  this.producto_id =parseFloat(pedido_producto.producto_id);
  this.cantidad = parseInt(pedido_producto.cantidad);
   this.precio_producto = pedido_producto.precio_producto;

};



Pedido_producto.create = function (newPedido_producto, result) {
  db.query("INSERT INTO pedidos_productos set ?", newPedido_producto, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
// Pedido.findById = function (id, result) {
//   db.query("Select * from pedidos where id = ? ", id, function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     } else {
//       result(null, res);
//     }
//   });
// };

// Pedido.findAll = function (result) {
//   db.query("Select * from pedidos", function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//     } else {
//       console.log("usuarios : ", res);
//       result(null, res);
//     }
//   });
// };


// Pedido.update = function (id, pedido, result) {
//   db.query(
//     "UPDATE pedidos SET ,usuario_id=?,fecha=? ,total=?,direccion_id=?,tarjeta_id=?,impuestos=? WHERE id = ?",
//     [
//       pedido.usuario_id,
//       pedido.fecha,
//       pedido.total,
//       pedido.direccion_id,
//       pedido.tarjeta_id,
//       pedido.impuestos,
//       id,
//     ],
//     function (err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//       } else {
//         result(null, res);
//       }
//     }
//   );
// };
// Pedido.delete = function (id, result) {
//   db.query("DELETE FROM pedidos WHERE id = ?", [id], function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//     } else {
//       result(null, res);
//     }
//   });
// };
module.exports = Pedido_producto;
