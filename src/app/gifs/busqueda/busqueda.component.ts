import { Component,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {
@ViewChild('textbuscar') txtbuscar!: ElementRef<HTMLInputElement>; //para no tener que enviar un evento
buscar(){
const valor= this.txtbuscar.nativeElement.value;
console.log(valor);
this.txtbuscar.nativeElement.value = "";
}

}
