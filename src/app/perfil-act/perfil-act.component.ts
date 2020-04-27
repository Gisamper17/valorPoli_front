import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';
import { Usuarios, Misesion, Persona, Todos, Misesionn } from 'src/app/Models/Perfil';

@Component({
  selector: 'app-perfil-act',
  templateUrl: './perfil-act.component.html',
  styleUrls: ['./perfil-act.component.css']
})
export class PerfilActComponent implements OnInit {
  todos: Persona[];
  todos2: Usuarios[];
  perfil: Misesion = new Misesion();
  perfil2: Misesionn[];
  peel: Todos[];

  constructor(private perfilService: PerfilService, private router: Router) {
    this.getMiperfil();
  }
  ngOnInit(): void {
  }

  getMiperfil() {
    this.perfilService.getMiSesion(5)
      .subscribe(
        data => {
          this.perfil = data;
          console.log(this.perfil);
        },
        error => console.error(error)
      );
  }

  actualizar(info:Misesion){
    this.perfilService.updateCategoria(info)
    .subscribe(data=>{
      this.perfil=data;
      console.log(this.perfil);
      alert("se actualizo");
      this.router.navigate(['perfil']);
    })
  }

}
