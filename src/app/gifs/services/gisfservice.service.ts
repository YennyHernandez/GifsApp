import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GisfserviceService {

  private _historial:string[] = []; // el _ es para indicar que cambia en tiempo real
  get historial(){
    return [...this._historial];
  }
  buscarGifs(query:string=''){
    query = query.toLocaleLowerCase();
    if(!this._historial.includes(query)){ //si no esta incluido, incluyalo
      this._historial.unshift(query);
      this._historial= this.historial.splice(0, 10); //siempre me guardara los 10 primeros
    }


    console.log(this._historial);
  }

}
