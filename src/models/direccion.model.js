"use strict";
const db = require("../../config/db.config");


//Usuario object create
const Direccion = function (direccion) {
  this.usuario_id = parseInt(direccion.usuario_id);
  this.telefono = direccion.telefono;
  this.calle = direccion.calle;
  this.numero = direccion.numero;
  this.ciudad = direccion.ciudad;
  this.provincia = direccion.provincia;
  this.codigo_postal = direccion.codigo_postal;
  this.pais = direccion.pais;
  this.nombre = direccion.nombre;
  this.apellidos = direccion.apellidos;
  this.extra = direccion.extra;
  this.email = direccion.email;

};

Direccion.create = function (newDireccion, result) {
  db.query("INSERT INTO direcciones set ?", newDireccion, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Direccion.findByUserId = function (usuario_id, result) {
  db.query("Select * from direcciones where usuario_id = ? ", usuario_id, function (err, res) {
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
Direccion.delete = function (id, result) {
  db.query("DELETE FROM direcciones WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Direccion;
