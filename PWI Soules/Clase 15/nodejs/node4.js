const file = require('fs');

file.readFile('./archivo1.txt',function(error,datos) {
    if(error) {
        console.log("Ocurrio un error al abrir el archivo");
        console.log(error);
    } else {
        console.log(datos.toString());
    }
});