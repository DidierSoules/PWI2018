//mostrarContador
//obetenerDatos
//colorearElementos

// esperar a que cargue la pagina
// poner a la escucha diferentes elementos
// ejecutar funciones

//con $ -> escuchar eventos, asociar metodos, verificar propiedades

$(document).ready(eventos)

var contador=0;

function eventos() {
    $("#mostrarContador").click(incrementarContador);
    $("#obtenerDatos").click(obtenerDatos);
    $("#colorearElementos").click(colorear);
    $("#desplegarFormulario").dblclick(formularioDesplegable);   
    $("#botonModal").click(mostrarModal);
    $("#passwordModal").keypress(check);
    $("#passwordModal").click(check);
    
}

function mostrarModal() {
    $("#exampleModal").modal("show");
    $("#usuario").trigger("focus");
}

function formularioDesplegable() {
    $("#formularioDesplegable").html("<form>Nombre de usuario: <input type='text'></form>");
}

function incrementarContador() {
    contador++;
    alert(contador);   
}
function obtenerDatos() {
    var nombre = $("#nombre").val();
    var password = $("#password").val();
    if (nombre.length > 0 && password.length > 0) {
        alert("Bienvenido "+nombre);
    } else {
        $("#nombre").val("");
        $("#password").val("");
        $("#mostrarError").html("<h1>Datos incorrectos</h1>")
    }
}
function colorear() {
    
}

function check() {
    var usuario = $("#usuario").val();
    var password = $("#passwordModal").val();
    if (usuario.length > 0) {
        $("#passwordModal").trigger("focus");
    } else {
        $("#usuario").trigger("focus");
        $("#passwordModal").val("");
    }
}