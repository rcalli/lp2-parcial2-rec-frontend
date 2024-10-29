import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Escuela } from '../models/escuela';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  private apiUrl ='http://localhost:8080/api/escuelas';
  constructor(private http:HttpClient) { }
  //listar las escuelas
  getEscuelas():Observable<Escuela[]>{
    return this.http.get<Escuela[]>(this.apiUrl);
  }
  
}
