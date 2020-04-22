import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenidoService } from 'src/app/services/contenido.service';
import { Categoria,Categoriaa} from 'src/app/Models/Contenido';


@Component({
  selector: 'app-contenido-body',
  templateUrl: './contenido-body.component.html',
  styleUrls: ['./contenido-body.component.css']
})
export class ContenidoBodyComponent implements OnInit {
  todos :Categoriaa=new Categoriaa();

  constructor(private router: Router,private contenidoService: ContenidoService) { }

  ngOnInit(): void {
    this.editar();
  }

    editar(){
      let id =localStorage.getItem("id");
      this.contenidoService.getCategoriaid(+id)
      .subscribe(data=>{
        this.todos=data;
        
      })
    }
    actualizar(categoriaa:Categoriaa){
      this.contenidoService.updateCategoria(categoriaa)
      .subscribe(data=>{
        this.todos=data;
        console.log(this.todos);
        alert("se actualizo");
        this.router.navigate(['contenido/list']);
      })
    }
}
