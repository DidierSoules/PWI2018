var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'clase17'
});

conexion.connect(function(error) {
    if(error){
        console.log(error);
    }
    console.log("Se inicio sesion en la db")
});
module.exports = conexion;