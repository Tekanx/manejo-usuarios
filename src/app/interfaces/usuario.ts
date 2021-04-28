export interface Usuario {
    nombre : string;
    apellido : string;
    genero : string;
    pais : string;
    ciudad : string;
}

export let ListaUsuario : Array<Usuario> = 
[
    {
        nombre: "Roberto",
        apellido: "Isla",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Viña del Mar"
    },
    {
        nombre: "Paula",
        apellido: "Vargas",
        genero: "Mujer",
        pais: "Chile",
        ciudad: "Villa Alemana"
    },
    {
        nombre: "Francisco",
        apellido: "Iriarte",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Concón"
    },
    {
        nombre: "Daniel",
        apellido: "Allende",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Viña del Mar"
    },
    {
        nombre: "Loreto",
        apellido: "Isla",
        genero: "Mujer",
        pais: "Chile",
        ciudad: "Santiago"
    },
    {
        nombre: "Pablo",
        apellido: "Torreblanca",
        genero: "Otro",
        pais: "Chile",
        ciudad: "Viña del Mar"
    }
]
