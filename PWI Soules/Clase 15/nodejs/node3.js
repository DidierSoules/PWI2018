const file = require('fs');

file.writeFile('./archivo1.txt','Este archivo fue creado por obra y gracia del espiritu node',function(error){
    if (error) {
        console.log("Error al crear archivo");
    } else {
        console.log("Archivo creado correctamente");
    }
});

console.log("Termino el programa");
    
    
