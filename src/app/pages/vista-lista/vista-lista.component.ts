import { Component, OnInit } from '@angular/core';
import { Usuario, ListaUsuario } from '../../interfaces/usuario'

@Component({
  selector: 'app-vista-lista',
  templateUrl: './vista-lista.component.html',
  styleUrls: ['./vista-lista.component.scss']
})

export class VistaListaComponent implements OnInit {

Lista = ListaUsuario;
  
  constructor() { }

  ngOnInit(): void {
  }

}
