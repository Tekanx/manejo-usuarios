import { AbstractControl } from "@angular/forms";

export class Cliente {

    constructor(
        public nombre : AbstractControl,
        public apellido : AbstractControl,
        public genero : AbstractControl,
        public pais : AbstractControl,
        public ciudad : AbstractControl
    ) { }
}