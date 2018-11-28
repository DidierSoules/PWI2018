var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'clase18'
});

conexion.connect(function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Conectado a la db.");
    }
});

module.exports = conexion;