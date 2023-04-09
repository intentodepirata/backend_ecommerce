"use strict";
const db = require("../../config/db.config");


//Usuario object create
const Tarjeta = function (tarjeta) {
  this.usuario_id = parseInt(tarjeta.usuario_id);
  this.numero = parseInt(tarjeta.numero);
  this.nombre_en_tarjeta = tarjeta.nombre_en_tarjeta;
  this.vencimiento_mes = parseInt(tarjeta.vencimiento_mes);
  this.vencimiento_anio = parseInt(tarjeta.vencimiento_anio);
  this.cvv = parseInt(tarjeta.cvv);
  this.tipo = tarjeta.tipo;

};

Tarjeta.create = function (newTarjeta, result) {
  db.query("INSERT INTO tarjetas set ?", newTarjeta, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Tarjeta.findByUserId = function (usuario_id, result) {
  db.query("Select * from tarjetas where usuario_id = ? ", usuario_id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Tarjeta.findById = function (id, result) {
  db.query("Select * from tarjetas where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};



// Tarjeta.update = function (id, pedido, result) {
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
Tarjeta.delete = function (id, result) {
  db.query("DELETE FROM tarjetas WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Tarjeta;
