import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';
import { Usuarios, Misesion, Persona, Todos, Misesionn} from 'src/app/Models/Perfil';


@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {

  todos:Persona[];
  todos2: Usuarios[];
  perfil: Misesion = new Misesion();
  perfil2: Misesionn[];
  peel:Todos[];

  constructor(private perfilService: PerfilService, private router:Router) { 
    this.getMiperfil();
  }

  ngOnInit(): void {
  }

  getMiperfil(){
      this.perfilService.getMiSesion(5)
      .subscribe(
        data => {
        this.perfil=data;
       console.log(this.perfil);       
       
      // console.log(names1); 
      // var me = this;
      // me.perfil = Object.keys(me.perfil ).map(function(key) {return me.perfil [key];});
      // console.log(me.perfil[2]);
  
    },
      error => console.error(error)
      );
  }

  
}
