$(document).ready(inicioPagina)

function inicioPagina() {
    $("#botonEnvio").hide();
    $("#botonBorrar").click(borrarDatos);
    $("#nombre").change(verificarElementos);
    $("#apellido").change(verificarElementos);
    $("#email").change(verificarElementos);
    $("#dni").keypress(verificarElementos);
    $("#botonEnvio").click(mostrarAlerta);
}

function verificarElementos() {
    console.log("Entro la funcion");
    var nombre = $("#nombre").val();
    console.log(nombre);
    var apellido = $("#apellido").val();
    console.log(apellido);
    var email = $("#email").val();
    console.log(email);
    var dni = $("#dni").val();
    console.log(dni);
    if(nombre != "" && apellido != "" && email != "" && dni != ""){
        $("#botonEnvio").show();
    } else {
        $("#botonEnvio").hide();
    }
}

function borrarDatos() {
    $("#nombre").val("");
    $("#apellido").val("");
    $("#email").val("");
    $("#dni").val("");
}

function mostrarAlerta() {
    swal({
        title: 'Estas seguro/a?',
        text: "No seras capaz de cambiarlos.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.value) {
          swal(
            $("#nombre").val()+ " " + $("#apellido").val()+ "<br>" + $("#email").val()+ "<br> DNI: " + $("#dni").val(),
            'Tus datos han sido enviados correctamente.',
            'success'
          )
        }
      })
}
