import { Component, OnInit } from '@angular/core';
import { GisfserviceService } from 'src/app/gifs/services/gisfservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor(private gifservice :GisfserviceService) {}
get historial(){  //por medio del get puedo obtener propiedades del servicio
  return [...this.gifservice.historial];
}




}
