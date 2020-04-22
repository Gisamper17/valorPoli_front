import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoListComponent } from './components/contenido-list/contenido-list.component';
import { ContenidoAddComponent } from './components/contenido-add/contenido-add.component';
import { ContenidoBodyComponent } from './components/contenido-body/contenido-body.component';
//import { NavegationComponent } from './components/navegation/navegation.component';
const routes: Routes = [
    {
      path: '',
      redirectTo: '/contenido',
      pathMatch: 'full'
    },
    {
      path: 'contenido/add',
      component: ContenidoAddComponent
    },
    {
      path: 'contenido/list',
      component: ContenidoListComponent
    },
    {
      path: 'contenido/edit/:id',
      component: ContenidoAddComponent
    },
    {
      path: 'contenido/body',
      component: ContenidoBodyComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
