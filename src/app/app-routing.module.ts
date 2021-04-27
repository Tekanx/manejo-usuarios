import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincipalComponent } from '../app/pages/vista-principal/vista-principal.component'
import { VistaListaComponent } from '../app/pages/vista-lista/vista-lista.component'
import { VistaCrearComponent } from '../app/pages/vista-crear/vista-crear.component'

const routes: Routes = [
  {path:'', component:VistaPrincipalComponent},
  {path:'vista-lista', component:VistaListaComponent},
  {path:'vista-crear', component:VistaCrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
