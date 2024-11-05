import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coche } from '../models/coche';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocheService {
  private apiUrl ='http://localhost:8080/api/coches';
  constructor(private http:HttpClient) { }

  getCoches():Observable<Coche[]>{
    return this.http.get<Coche[]>(this.apiUrl);
  }
  getCocheById(id:number):Observable<Coche>{
    return this.http.get<Coche>(`${this.apiUrl}/${id}`);
  }

  createCoche(categoria: Coche): Observable<Coche> {    
    return this.http.post<Coche>(this.apiUrl, categoria);
  }

  deleteCoche(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateCoche(categoria:Coche, id:number): Observable<Coche>{
    return this.http.put<Coche>(`${this.apiUrl}/${id}`, categoria);
  }
}
