import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularClase1';
  nombre = "Jose";
  edad = 22;
  lenguajes = ['nodejs','angular2'];
  numeritos = [100,200,300];
  edadBruno = 15;
  usuario = "";
  password = "";
  sueldos = [0,0,0];

    validarDatos(){
      if(this.usuario == "Jose" && this.password == "123456"){
        return "Bienvenido";
      } else {
        return "Datos incorrectos";
      }
    }

    sumarSueldos(){
      var sueldosTotal = parseInt(this.sueldos[0])+ parseInt(this.sueldos[1])+ parseInt(this.sueldos[2]);
      return sueldosTotal;
    }

    mayorEdad(edad){
      if(edad >=18){
        return "Es mayor de edad";
      } else {
        return "Es menor de edad";
      }
    }

    modificacionesNombre(){
      if(this.nombre == "Jose"){
        return "Bienvenido";
      } else {
        return "Usuario incorrecto";
      }
    }


}
