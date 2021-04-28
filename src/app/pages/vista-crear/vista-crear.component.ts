import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Usuario, ListaUsuario } from '../../interfaces/usuario'
import { Cliente } from '../vista-crear/cliente'
@Component({
  selector: 'app-vista-crear',
  templateUrl: './vista-crear.component.html',
  styleUrls: ['./vista-crear.component.scss']
})
export class VistaCrearComponent implements OnInit {
  modelo = new Cliente('','','','','');
  
  genero : string | undefined;

  generos : string[] =
  [
    'Hombre',
    'Mujer',
    'Otro'
  ]

  paises = 
  [
    'Argentina',
    'Bolivia',
    'Brazil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Ecuador',
    'El Salvador',
    'Guatemala',
    'Haití',
    'Honduras',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'República Dominicana',
    'Uruguay',
    'Venezuela'
  ]

  Lista = ListaUsuario;
  usuarioForm = new FormGroup({
    nombre : new FormControl('', [Validators.required, Validators.maxLength(30)]),
    apellido : new FormControl('', [Validators.required, Validators.maxLength(30)]),
    generos : new FormControl(''),
    paises : new FormControl(''),
    ciudad : new FormControl('', [Validators.required, Validators.maxLength(50)])
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formCliente : FormGroupDirective){
    console.log("Hola!")

  }

}
