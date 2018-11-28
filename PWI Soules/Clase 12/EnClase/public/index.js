$(document).ready(inicioPrograma);

function inicioPrograma() {
    $("#boton1").click(ReducirOpacidad);
    $("#boton2").dblclick(AumentarOpacidad);
    $("#boton3").click(mostrarOcultarElemento);
    $("#sweetalert").dblclick(guardarCambios);
}

function ReducirOpacidad() {
    $("#descripcionEvento").fadeTo("slow","0.3");
}

function AumentarOpacidad() {
    $("#descripcionEvento").fadeTo("slow","1");
}

function mostrarOcultarElemento() {
    $("#eventoDos").toggle("slow");
}

function guardarCambios() {
    swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}