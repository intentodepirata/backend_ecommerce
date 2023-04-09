"use stric";

const db = require("../../config/db.config");

const Modelo = function (modelo) {
  this.modelo = modelo.modelo;
  this.marcas_id = modelo.marcas_id;
  this.descripcion_modelo = modelo.descripcion_modelo;
};



Modelo.create = function (newModelo, result) {
  db.query("INSERT INTO modelos set ?", newModelo, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Modelo.finById = function (id, result) {
  db.query("SELECT * FROM modelos WHERE id= ?", id, function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Modelo.finByIdWhithModel = function (id, result) {
  db.query("SELECT modelos.modelo, marcas.marca FROM modelos JOIN marcas ON modelos.marcas_id = marcas.id WHERE modelos.id = ?;", id, function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Modelo.findAll = function (result) {
  db.query("SELECT * FROM modelos", function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      console.log("marcas: ", res);
      result(null, res);
    }
  });
};
Modelo.update = function (id, modelo, result) {
  db.query(
    "UPDATE modelos SET ,modelo=?, marcas_id=?, descripcion_modelo=? WHERE id=?",
    [modelo.modelo,
modelo.marcas_id,
modelo.descripcion_modelo,
         id
        
        ],
    function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Modelo.delete = function(id,result){
    db.query("DELETE FROM modelos WHERE id=?",[id], function(err,res){
        if(err){
            console.log("Error : ", err)
            result(null,err)
        } else {
            result(null, res)
        }
    })
}
module.exports = Modelo