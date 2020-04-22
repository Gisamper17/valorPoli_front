import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { ContenidoAddComponent } from './components/contenido-add/contenido-add.component';
import { ContenidoListComponent } from './components/contenido-list/contenido-list.component';

import { ContenidoService} from './services/contenido.service';
import { HttpClientModule } from '@angular/common/http';

import { ContenidoBodyComponent } from './components/contenido-body/contenido-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    ContenidoAddComponent,
    ContenidoListComponent,
    ContenidoBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContenidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
