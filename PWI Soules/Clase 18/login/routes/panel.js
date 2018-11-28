var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/', function(req, res, next) {
    var user = req.session.usuario;
    if(user){
        res.render('panel', {usuario:user});
    } else {
        res.redirect('/login');
    }
    
});

router.get('/logout',function(req,res,next) {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;
