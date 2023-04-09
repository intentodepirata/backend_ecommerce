"use stric";
const Modelo = require("../models/modelo.model");

exports.findAll = function (req, res) {
  Modelo.findAll(function (err, modelo) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", modelo);
    res.send(modelo);
  });
};

exports.create = function (req,res){
    const new_modelo = new Modelo(req.body)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res
        .status(400)
        .send({error:true, message: "Todos los campos son obligatorios"})
    } else if(new_modelo.marcas_id === "" || new_modelo.modelo ===""|| new_modelo.descripcion_modelo ==="" ){
      res
      .status(400)
      .send({error:true, message: "Todos los campos son obligatorios"})
    }
    else {
        Modelo.create(new_modelo,function(err, modelo){
            if(err) res.send(err)
            res.json({
                error:false,
                message: "Modelo creado Correctamente",
                data: modelo,
            })
        })
    }
}

exports.findById = function (req,res){
    Modelo.findById(req.params.id, function(err,modelo){
        if(err) res.send(err)
        res.json(modelo)
    })
}
exports.finByIdWhithModel = function (req,res){
    Modelo.finByIdWhithModel(req.params.id, function(err,modelo){
        if(err) res.send(err)
        res.json(modelo)
    })
}

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Todos los campos son obligatorios" });
  } else {
    Modelo.update(req.params.id, new Modelo(req.body), function (err, modelo) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Modelo Actualizado Correctamente!",
      });
    });
  }
};
exports.delete = function (req, res) {
  Modelo.delete(req.params.id, function (err, modelo) {
    if (err) res.send(err);
    res.json({ error: false, message: "Modelo Eliminado Correctamente" });
  });
};
