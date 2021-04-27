export interface Usuario {
    nombre : string;
    apellido : string;
    genero : string;
    pais : string;
    ciudad : string;
}

export const ListaUsuario : Array<Usuario> = 
[
    {
        nombre: "Roberto",
        apellido: "Isla",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Viña del Mar"
    },
    {
        nombre: "Paual",
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
        ciudad: "Con con"
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
    }
]
