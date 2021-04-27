import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './listadoUsuarios/lista-usuarios/lista-usuarios.component';
import { HeaderComponent } from './default/header/header.component';
import { FooterComponent } from './default/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VistaPrincipalComponent } from './pages/vista-principal/vista-principal.component';
import { VistaListaComponent } from './pages/vista-lista/vista-lista.component';
import { VistaCrearComponent } from './pages/vista-crear/vista-crear.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    HeaderComponent,
    FooterComponent,
    VistaPrincipalComponent,
    VistaListaComponent,
    VistaCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule, 
    MatToolbarModule, 
    NgbModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
