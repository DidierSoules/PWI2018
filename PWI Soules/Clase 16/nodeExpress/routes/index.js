var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var informacion = {
    curso:"PWI",
    alumnos:20,
    infoAlumnos:[
      {nombre:"Juan", edad:21},
      {nombre:"Pedro", edad:23}
    ],
    title: 'Express',subtitulo: "subtitulo"
  }
  res.render('index', informacion);
});

module.exports = router;

