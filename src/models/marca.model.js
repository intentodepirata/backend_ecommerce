"use stric";

const db = require("../../config/db.config");

const Marca = function (marca) {
  this.marca = marca.marca;
};

Marca.create = function (newMarca, result) {
  db.query("INSERT INTO marcas set ?", newMarca, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Marca.finById = function (id, result) {
  db.query("SELECT * FROM marcas WHERE id= ?", id, function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Marca.findAll = function (result) {
  db.query("SELECT * FROM marcas", function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      console.log("marcas: ", res);
      result(null, res);
    }
  });
};
Marca.update = function (id, marca, result) {
  db.query(
    "UPDATE marcas SET ,nombre=? WHERE id=?",
    [marca.nombre, id],
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

Marca.delete = function(id,result){
    db.query("DELETE FROM marcas WHERE id=?",[id], function(err,res){
        if(err){
            console.log("Error : ", err)
            result(null,err)
        } else {
            result(null, res)
        }
    })
}
module.exports = Marca