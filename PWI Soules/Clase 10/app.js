// variables, funciones, etc
sueldos = [10,20,30,40,50];

function sueldosAltos(sueldos){
    var contador = 0;
    for (var i=0; i<=sueldos.length;i++){
        if(sueldos[i]>= 20){
            contador++;
        }
    }

    document.write(contador);
    
}

sueldosAltos(sueldos);

