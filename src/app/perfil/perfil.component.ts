import { Component, OnInit } from '@angular/core';
import {PerfilListComponent} from '../perfil-list/perfil-list.component';
import {PerfilService} from '../services/perfil.service';
import { Usuarios, Misesion, Persona, Todos, Misesionn } from 'src/app/Models/Perfil';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfiles = [];
  show: boolean;
  opci: number;
  usuario:string;
  perfilPrinc: Misesion;

  constructor(private perfilService: PerfilService) {
    this.show = true;    
    
   }

  ngOnInit(): void {
  }
  muestra(cod){
    if (cod == 1) {
        this.show = true;
        this.opci = 1;
        document.getElementById("misD").classList.add("active");
        document.getElementById("actD").classList.remove("active");
        document.getElementById("home").hidden = false; 
      } else if (cod == 2){
      this.show = false;
      this.opci = 2;
      document.getElementById("actD").classList.add("active");
      document.getElementById("misD").classList.remove("active");
      document.getElementById("messages").hidden = false;
    }else if (cod == 3){
      this.opci = 3;
      document.getElementById("misD").classList.remove("active");
      document.getElementById("actD").classList.remove("active");
      document.getElementById("home").hidden =true;
      document.getElementById("messages").hidden = true;
    }
    
  }
}
