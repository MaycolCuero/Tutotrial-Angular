import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAllUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:50933/Api/myapy/AllUser');
  }

  getOneUsuario(id: string): Observable<Usuario>{
    return this.http.get<Usuario>('http://localhost:50933/Api/myapy/GetOneUser?id=' + id);
  }
 
  createUsuario(usuario: Usuario): Observable<Usuario>{
    const htttpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<Usuario>('http://localhost:50933/Api/myapy/SaveUser', usuario, htttpOptions);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario>{
    const htttpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.put<Usuario>('http://localhost:50933/Api/myapy/UpdateUser', usuario, htttpOptions);
  }

  DelteUsuario(id: string): Observable<Usuario>{
    const htttpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.delete<Usuario>('http://localhost:50933/Api/myapy/DeleteUser?id=' +id);
  }
}
