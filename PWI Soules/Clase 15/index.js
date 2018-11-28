var dato = {
    "nombre": "Pepe",
    "edad": 24,
    "apellido": "Popo",
    "dni": "38888888"
}

var alumno = {
    "nombre": "Bruno",
    "edad": 21,
    "lenguajes": ["HTML","CSS","JAVASCRIPT","MYSQL"]
}

var alunmos = {
    "curso":"PWI",
    "informacion": [
        {"nombre":"Nahuel","edad":20},
        {"nombre":"Muricio","edad":21,"estado":"soltero"}
    ]
}

document.write("Informacion: "+ dato.nombre+ ", "+dato.apellido+ ", "+dato.dni+"<br>");

document.write("Lenguajes que conoce: ");
document.write(alumno.lenguajes[1]);
document.write("<br>");
document.write(alunmos.informacion[0].nombre);