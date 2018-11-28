import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoAngular';
  valor1 = null;
  valor2 = null;
  resultado = null;
  opcion1 = false;
  opcion2 = false;
  objeto = null;

  constructor(private http : HttpClient) {}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('url').subscribe(function(resultado){
      this.objeto = resultado;
      },
      function(error){
        console.log(error);
      });
  }

  operacion() {
    if(this.opcion1) {
      let operar = this.valor1 + this.valor2;
      this.resultado = "El resultado de la suma es: "+operar;
    }
    if(this.opcion2) {
      let operar = this.valor1 - this.valor2;
      this.resultado = "El resultado de la resta es: "+operar; 
    }
  }
}
