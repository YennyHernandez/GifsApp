import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GisfserviceService {
  private apikey: string = "Bnjhh7LDzHJ248VlmXiXU90EKKz4WtYJ";
  private _historial:string[] = []; // el _ es para indicar que cambia en tiempo real
  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){}

  buscarGifs(query:string=''){
    query = query.toLocaleLowerCase();
    if(!this._historial.includes(query)){ //si no esta incluido, incluyalo
      this._historial.unshift(query);
      this._historial= this.historial.splice(0, 10); //siempre me guardara los 10 primeros
    }
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=Bnjhh7LDzHJ248VlmXiXU90EKKz4WtYJ&q=empanadas&limit=10')
    .subscribe((resp:any) =>{
      console.log(resp.data);
    });T
  }

}
