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
  Lista = ListaUsuario;
  modelo : any;
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

  usuarioForm = new FormGroup({
    nombre : new FormControl('', [Validators.required, Validators.maxLength(30)]),
    apellido : new FormControl('', [Validators.required, Validators.maxLength(30)]),
    generos : new FormControl(''),
    paises : new FormControl(''),
    ciudad : new FormControl('', [Validators.required, Validators.maxLength(50)])
  });

  constructor() {
    this.modelo = new Cliente(
      this.usuarioForm.controls['nombre'], 
      this.usuarioForm.controls['apellido'],
      this.usuarioForm.controls['generos'],
      this.usuarioForm.controls['paises'],
      this.usuarioForm.controls['ciudad']
      );
   }

  

  ngOnInit(): void {
  }

  onSubmit(){
    let cliente : Usuario = 
    {
      nombre : this.modelo.nombre.value,
      apellido : this.modelo.apellido.value,
      genero : this.modelo.genero.value,
      pais : this.modelo.pais.value,
      ciudad : this.modelo.ciudad.value
    }
    if (this.isValid(cliente)) {
      this.Lista.push(cliente)
      console.log(cliente.nombre)
      console.log(cliente.apellido)
      console.log(cliente.genero)
      console.log(cliente.pais)
      console.log(cliente.ciudad)
    }
    else console.error("¡FALTAN RELLENAR CAMPOS!")
  }

  isValid(cliente : Usuario){
    if ((cliente.nombre.length == 0 )
    || (cliente.apellido.length == 0)
    || (cliente.genero.length == 0) 
    || (cliente.pais.length == 0) 
    || (cliente.ciudad.length == 0)){  
      return false
    }
    return true
  }

  onReset(){
    this.usuarioForm.reset()
  }


}
