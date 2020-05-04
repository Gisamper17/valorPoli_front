import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import {Persona, Usuarios, Misesion} from '../Models/Perfil';
import { Observable } from 'rxjs';
import {} from 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
//import { Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  constructor(private http: HttpClient) { }

  GetCategoria(): Observable<any>  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  gettodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  

  addCategoria(id: any) {
    let json = JSON.stringify(id);
    let headers = new HttpHeaders().set('content-Type', 'application/json');
    return this.http.post("https://jsonplaceholder.typicode.com/users", json ,{ headers : headers});
  }
/*
  createCategoria(categoria:Categoria){
    return this.http.post<Categoria>('https://jsonplaceholder.typicode.com/users/', categoria);
  }

  deletecategoria(categoria:Categoria){
    return this.http.delete<Categoria>('https://jsonplaceholder.typicode.com/users/'+ categoria.id);
  }
*/
  getMiSesion(id:number){//obtener campos a mostrar ebn la vista pero no la hay
    // return this.http.get('https://jsonplaceholder.typicode.com/users/'+ id);
    //return this.http.get('https://jsonplaceholder.typicode.com/users/'+ id).pipe(map((res: Response) => res.json().response.map((Misesion: any) => new Misesion().deserialize(Misesion))));
    
      return this.http.get<Misesion>('https://jsonplaceholder.typicode.com/users/'+ id);
    
  }


  getPerfilid(id:number){//obtener campos a mostrar ebn la vista pero no la hay
    return this.http.get<Usuarios>('https://jsonplaceholder.typicode.com/users/'+ id);
  }

  updateCategoria2(id: String|number, persona:Persona){
    return this.http.put<Persona>('https://jsonplaceholder.typicode.com/users/'+ persona.id,persona);
  }

  updateCategoria(misesion:Misesion){
    return this.http.put<Misesion>('https://jsonplaceholder.typicode.com/users/'+ misesion.id,misesion);
  }
}
