"use stric";
const Marca = require("../models/marca.model");

exports.findAll = function (req, res) {
  Marca.findAll(function (err, marca) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", marca);
    res.send(marca);
  });
};

exports.create = function (req,res){
    const new_marca = new Marca(req.body)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res
        .status(400)
        .send({error:true, message: "Todos los campos son obligatorios"})
    } else if (new_marca.marca === ""){
      res
      .status(400)
      .send({error:true, message: "Todos los campos son obligatorios"})
    } else {
        Marca.create(new_marca,function(err, marca){
            if(err) res.send(err)
            res.json({
                error:false,
                message: "Marca creada Correctamente",
                data: marca,
            })
        })
    }
}

exports.findById = function (req,res){
    Marca.findById(req.params.id, function(err,marca){
        if(err) res.send(err)
        res.json(marca)
    })
}

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else {
    Marca.update(req.params.id, new Marca(req.body), function (err, marca) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Marca Actualizada Correctamente!",
      });
    });
  }
};
exports.delete = function (req, res) {
  Marca.delete(req.params.id, function (err, marca) {
    if (err) res.send(err);
    res.json({ error: false, message: "Marca Eliminada Correctamente" });
  });
};
