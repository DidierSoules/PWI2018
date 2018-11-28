$(document).ready(function () {
    $("#boton1").click(function(){
        alert("Click");
    })
    $("#boton2").dblclick(segundoBoton);    
})

function segundoBoton() {
    alert("Click en el segundo boton");
}