// let / var Definir una variable
console.clear()

let pene = [5,8,15,20,16,12,3,7,18,19,11,2,1,11,13,14,17,6,20,5,12] // ESTO ES UN ARRAY
//array.length (devuelve la longitud de mi array)




// Escribir una funcion que me diga el porcentaje de alumnos reprobados de un salon
// - Las notas de los alumnos vienen dadas en un array de 20 alumnos
// - Imprimir dicho porcentaje
// - Imprimir cantidades de aprobados y aplazados
// - Imprimir total de alumnos

/*
con for: 

function procesarNotas(notas){
    let total_alumnos = 0;
    let aprobados = 0;
    for(let i = 0;i<notas.length;i++){
        total_alumnos = total_alumnos + 1
        if(notas[i] >= 10){
            aprobados = aprobados + 1
        } 
    }

    // Respuesta
    console.log(`el total de alumnos es ${total_alumnos}`)
    console.log(`el total de aprobados es ${aprobados}`)
    console.log(`el total de reprobados ${total_alumnos - aprobados}`)
}
*/
/*
con while
function procesarNotas(notas){
    let indice = 0;
    let aprobados = 0;

    while(indice < notas.length){
        if(notas[indice]>=10){
            aprobados++;
        }

        indice++;
    }
    console.log(`el total de alumnos es ${notas.length}`)
    console.log(`el total de aprobados es ${aprobados}`)
    console.log(`el total de reprobados ${notas.length - aprobados}`)
}

function verificarSiAprobo(nota){
    return nota>=10

}

function procesarNotas(notas){
    let aprobados = 0;
    notas.forEach((nota)=>verificarSiAprobo(nota))
    console.log(`el total de alumnos es ${notas.length}`)
    console.log(`el total de aprobados es ${aprobados}`)
    console.log(`el total de reprobados ${notas.length - aprobados}`)
}
*/

// Crear una funcion que reciba un array de alumnos y retornar un array solo con los aprobados

function procesarNotasEnArray(notas){
    let resultado = []
    notas.forEach((nota)=>{
        if(nota>=10){

            resultado.push(nota)
        }
    })

    return resultado
}


let notasProcesadas = procesarNotasEnArray(pene)
console.log(notasProcesadas)

[
    [1,2,3,4,5,23]
    [2,3,4,123123]
    [123123]
]

//procesarNotas(pene)