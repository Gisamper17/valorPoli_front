import { Component, OnInit, HostBinding } from '@angular/core';
import { Todos,Categoria } from 'src/app/Models/Contenido';
import { ContenidoService} from '../../services/contenido.service';
import { ActivatedRoute,Router} from '@angular/router';
//ActivatedRoute = Recibir ek parametro en este caso el id para editar
@Component({
  selector: 'app-contenido-form',
  templateUrl: './contenido-add.component.html',
  styleUrls: ['./contenido-add.component.css']
})
export class ContenidoAddComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  peel : Todos[];

  categoria: Categoria = {
    id: 0,
    name: '',
    username: '',
    email: ''
  };
  edit: boolean = false;

  constructor(private contenidoService: ContenidoService, private router:Router, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.contenidoService.gettodos()
    .subscribe(data=>{
      this.peel=data;
    })

    this.contenidoService.GetCategoria()
    .subscribe(data=>{
      this.peel=data;
    })
   const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.contenidoService.getCategoriaid(params.id)
      .subscribe(
        resultado =>{
          console.log(resultado);
          this.categoria = resultado;
          this.edit = true;
        },
        error => console.error(error)
      )
    } 



  
  }
  
  SaveCategoria(){
    /*console.log(this.categoria);*/
    delete this.categoria.id;
    delete this.categoria.email;
    
    this.contenidoService.addCategoria(this.categoria)
    .subscribe(
      resultado => {
        console.log(resultado);
        alert("contenido guardado");
        this.router.navigate(['/contenido/list']);
        
        
        //this.router.navigate(['/contenido/list']);
      //this.todos = resultado.todos;

    }, 
    error => console.error(error)
    )
  }
  
  /*updateCategoria(){
    let id=localStorage.getItem("id");
    this.contenidoService.getCategoriaid(+id)
  }*/
  updateCategoria(){
    delete this.categoria.email;
    this.contenidoService.updateCategoria2(this.categoria.id, this.categoria)
    .subscribe(
      resultado =>{
        console.log(resultado);
        alert("actualizado");
      },
      error=> console.log(error)
    )
  }


}
