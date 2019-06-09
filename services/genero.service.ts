import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from './genero'

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient) { }

  getAllGenero(): Observable<Genero[]>{
    return this.http.get<Genero[]>('http://localhost:50933/Api/myapy/AllGenero');
  }

  getOneGenero(id: string): Observable<Genero>{
    return this.http.get<Genero>('http://localhost:50933/Api/myapy/GetOneGenero?id=' + id);
  }

  createGenero(genero: Genero): Observable<Genero>{
    const htttpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<Genero>('http://localhost:50933/Api/myapy/SaveGenero',genero, htttpOptions);
  }

  updateGenero(genero: Genero): Observable<Genero>{
    const htttpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.put<Genero>('http://localhost:50933/Api/myapy/UpdateGenero', genero, htttpOptions);
  }

  DelteGenero(id: string): Observable<Genero>{
    const htttpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<Genero>('http://localhost:50933/Api/myapy/DelteGenero',id, htttpOptions);
  }

}
