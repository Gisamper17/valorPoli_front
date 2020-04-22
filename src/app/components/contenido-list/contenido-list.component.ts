import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenidoService } from '../../services/contenido.service';
import { Categoria, Todos, Categoriaa } from 'src/app/Models/Contenido';

@Component({
  selector: 'app-contenido-list',
  templateUrl: './contenido-list.component.html',
  styleUrls: ['./contenido-list.component.css']
})
export class ContenidoListComponent implements OnInit {
  //addcategoriaRegistro: any = { title: ''}
  todos:Categoria[];
  todos2: Categoriaa[];
  peel:Todos[];
  //todos: any;

  constructor(private contenidoService: ContenidoService, private router:Router) { 
    this.getContenido();
  }

 
  ngOnInit()  {
    this.getcategoria();

  }
  getcategoria(){
    this.contenidoService.GetCategoria()
    .subscribe(
      data => {
      this.todos=data;
    },
    error => console.error(error)
    );
  }

  /*deleteCategoria(categoria:Categoria){
    
    this.contenidoService.deletecategoria(categoria)
    .subscribe(data=>{
      this.todos=this.todos.filter(p=>p!==categoria);
      alert("eliminado....D CATEGORIA");
    })
    
  }
*/
  
  getContenido(){
    this.contenidoService.GetCategoria().subscribe(resultado =>{
      this.todos = resultado.todos;

    }, 
    error => {
      console.log(JSON.stringify(error));
    });
  }


  delete(categoria:Categoria){
    this.contenidoService.deletecategoria(categoria)
    .subscribe(data=>{
      this.todos=this.todos.filter(p=>p!==categoria);
      //this.getcategoria();  REFRESCAR PAGINA,  
       alert("eliminado.... DELETE");
    })
  }
  
 
  
  /*addContenido(){
    console.log('evento agregar')
    this.contenidoService.addCategoria(this.addcategoriaRegistro).subscribe(resultado => {
      this.getContenido();
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }*/


  actualizar(categoria:Categoria):void{
    localStorage.setItem("id",categoria.id.toString());
    this.router.navigate(['/contenido/body']);
    
  }
  editar(categoriaa:Categoriaa){
    localStorage.setItem("id",categoriaa.id.toString());
    this.router.navigate(['/contenido/body']);
  }
}
