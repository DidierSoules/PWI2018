var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/alta',function (req,res,next) {
   res.render('altaProducto',{titulo:"Cargar producto"}); 
});

router.get('/mostrar',function(req,res,next) {
    var query = "select * from productos";
    db.query(query,function(error,result) {
        if(error){
            console.log(error);
        }
        res.render('mostrarProductos',{info:result});
    });
});

router.post('/altaProducto',function (req,res,next) {
    var data = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    }
    var query = "Insert into productos (nombre, precio, descripcion) values ('"+data.nombre+"',"+data.precio+",'"+data.descripcion+"')";
    console.log(query);
    db.query(query,function(error,result) {
        if(error){
            console.log(error);
        }
        res.render('altaExitosa',{info:"El producto se dio de alta correctamente"});
    });
});
module.exports = router;