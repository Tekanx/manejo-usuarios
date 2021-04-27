import { Component, OnInit } from '@angular/core';
import { Usuario, ListaUsuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.scss']
})
export class VistaPrincipalComponent implements OnInit {

  Lista = ListaUsuario;

  constructor() { }

  ngOnInit(): void {
  }

}
