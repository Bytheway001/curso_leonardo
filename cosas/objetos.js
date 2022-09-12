let pais = {
    nombre: "Venezuela",
    capital: "caracas",
    poblacion: 30,
    num_estados: 22,
    estados: [
        { nombre: "miranda", capital: "Los teques",municipios: [
                { nombre: "leoncio martinez", poblacion: 10 },
                { nombre: "petare", poblacion: 20 }
            ]
        },
        {
            nombre: "sucre", capital: "cumana", municipios: [

                { nombre: "sucre1", poblacion: 10 },
                { nombre: "sucre2", poblacion: 20 }
            ]
        }
    ]
}
// Imprimir los nombres de los municipios y su poblacion
pais.estados.forEach((estado)=>{
    estado.municipios.forEach((municipio)=>{
        console.log(municipio.nombre,municipio.poblacion)
    })
})