import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Comida} from '../models/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  URL_API = 'http://localhost:3000/api/comidas';
  selectedComida: Comida = {
    nombre: '',
    descripcion: '',
    precio: 0,
  };
  comidas : Comida[];
  constructor(private http: HttpClient){}

  getComidas() {

    return this.http.get<Comida[]>(this.URL_API);

  }

  createComida(comida: Comida){
    return this.http.post(this.URL_API, comida);
  }
  deleteComida(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
