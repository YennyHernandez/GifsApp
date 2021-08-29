// realiza la obtencion del dato de busqueda por medio de viewChild y inyecta la dependencia
//del servicio usando un metodo para guardar en un arreglo el valor de busqueda que en este componente se le pasa
import { Component,ViewChild, ElementRef} from '@angular/core';
import { GisfserviceService } from '../services/gisfservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

@ViewChild('textbuscar') txtbuscar!: ElementRef<HTMLInputElement>; //para no tener que enviar un evento
constructor(private gifsService:GisfserviceService){} //se inyecto la dependencia del servicio.
buscar(){
const valor= this.txtbuscar.nativeElement.value;
if(valor.trim().length ==0){  //para no permitir ingresar vacio
  return;
}

this.gifsService.buscarGifs(valor);// puedo usar metodo del serivico y enviarle un valor
this.txtbuscar.nativeElement.value = "";
}

}
