import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Categoria, Categoriaa} from '../Models/Contenido';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(private http: HttpClient) { }

    
  GetCategoria(): Observable<any>  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  gettodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

  

  addCategoria(id: any) {
    let json = JSON.stringify(id);
    let headers = new HttpHeaders().set('content-Type', 'application/json');
    return this.http.post("https://jsonplaceholder.typicode.com/users", json ,{ headers : headers});
  }

  /*unaCategoria(id: String){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }*/

  /*deleteCategoria(id: string) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users'+ id);
  }*/

  createCategoria(categoria:Categoria){
    return this.http.post<Categoria>('https://jsonplaceholder.typicode.com/users/', categoria);
  }


  /*uptadeCategoria(id: String, uptadeCategoria: Categoria, completed: String ): Observable<any> {
    return this.http.put('${this.API_URI}/posts/${id}',uptadeCategoria);

  } */
  
  deletecategoria(categoria:Categoria){
    return this.http.delete<Categoria>('https://jsonplaceholder.typicode.com/users/'+ categoria.id);
  }

  /*getCategoriaid(id:number){//obtener campos a mostrar ebn la vista pero no la hay
    return this.http.get<Categoria>('https://jsonplaceholder.typicode.com/users/'+ id);
  }*/
  getCategoriaid(id:number){//obtener campos a mostrar ebn la vista pero no la hay
    return this.http.get<Categoriaa>('https://jsonplaceholder.typicode.com/users/'+ id);
  }
  /*updateCategoria(categoria:Categoria){
    return this.http.put<Categoria>('https://jsonplaceholder.typicode.com/users/'+ categoria.id,categoria);
  }*/
  updateCategoria2(id: String|number, categoria:Categoria){
    return this.http.put<Categoria>('https://jsonplaceholder.typicode.com/users/'+ categoria.id,categoria);
  }

  updateCategoria(categoriaa:Categoriaa){
    return this.http.put<Categoriaa>('https://jsonplaceholder.typicode.com/users/'+ categoriaa.id,categoriaa);
  }
}
