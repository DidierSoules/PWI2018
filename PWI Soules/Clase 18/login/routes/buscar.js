var express = require('express');
var router = express.Router();
var db = require('./db');

router.post('/',function(req,res,next) {
    var user = req.session.usuario;
    if(user){
    var busqueda = req.body.buscar;
    var consulta = "select * from publicaciones where publicaciones LIKE '%"+busqueda+"%'";
    db.query(consulta, function(error,resultado) {
        if(error) {
            console.log(error);
        } else {
            res.render('buscar', {consulta:resultado, usuario:user});
        }
    });
}
    else {
        res.redirect('/login');
    }
});

module.exports = router;